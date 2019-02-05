import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/user";

class GetUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUsers();
  }
  //   onSubmit = e => {
  //     e.preventDefault();

  //     alert("done");
  //     this.props.addRepas(this.state);
  //   };

  render() {
    return (
      <div>
        <table border="1px">
          <tr>
            <th>First name</th>
            <th>Last Name</th>
            <th>Adress</th>
            <th>PhoneNumber</th>
            <th>Mail</th>
            <th>Paiment</th>
            <th>
              <button>Add User</button>
            </th>
          </tr>
          {this.props.user &&
            this.props.user.map(el => (
              <tr key={el.FirstName}>
                <td>
                  <label>{el.FirstName}</label>
                </td>
                <td>
                  <label>{el.LastName}</label>
                </td>

                <td>
                  <label>{el.Adress}</label>
                </td>

                <td>
                  <label>{el.PhoneNumber}</label>
                </td>
                <td>
                  <label>{el.Mail}</label>
                </td>
                <td>
                  <label>{el.Paiment ? "5aless" : "mouch5ales"}</label>
                </td>
                <td>
                  <button>Send Score</button>
                </td>
              </tr>
            ))}
        </table>

        <button>Send Notification</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user_tab
});

export default connect(
  mapStateToProps,
  { getUsers }
)(GetUsers);
