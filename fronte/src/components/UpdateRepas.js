import React, { Component } from "react";
import { connect } from "react-redux";
import { addRepas } from "../actions/repas";
 
class repas extends Component {
  state = {};

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    alert("done");
    this.props.addRepas(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <table>
            <tr>
              <th>Lundi</th>
              <th>Mardi</th>
              <th>Mercredi</th>
              <th>Jeudi</th>
              <th>Vendredi</th>
              <th>Samedi</th>
            </tr>

            <tr>
              <td>
                {" "}
                <input type="text" name="Lundi" onChange={this.onChange} />{" "}
              </td>

              <td>
                {" "}
                <input type="text" name="Mardi" onChange={this.onChange} />{" "}
              </td>

              <td>
                {" "}
                <input
                  type="text"
                  name="Mercredi"
                  onChange={this.onChange}
                />{" "}
              </td>

              <td>
                {" "}
                <input type="text" name="Jeudi" onChange={this.onChange} />{" "}
              </td>

              <td>
                {" "}
                <input
                  type="text"
                  name="Vendredi"
                  onChange={this.onChange}
                />{" "}
              </td>

              <td>
                {" "}
                <input
                  type="text"
                  name="Samedi"
                  onChange={this.onChange}
                />{" "}
              </td>
              <td>
                <button color="dark" style={{ marginTop: "2rem" }}>
                  Add repas
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  repas: state.repas
});

export default connect(
  mapStateToProps,
  { addRepas }
)(repas);
