import React, { Component } from "react";
import "./Profil.css";
import { connect } from "react-redux";
import { getUsers } from "../../actions/user";
import ProfilNav from "./ProfilNav";
import ProfilHead from "./ProfilHead";
import MenuNav from "./MenuNav";
class Profil extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <div className="profil">
        {this.props.user ? (
          <div>
            <ProfilHead />
            <ProfilNav />
            <MenuNav />
          </div>
        ) : (
          this.props.history.push("/a")
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.isAuthenticated
});
export default connect(
  mapStateToProps,
  { getUsers }
)(Profil);
