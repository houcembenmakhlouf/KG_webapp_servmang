import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEvent } from "../../actions/event";
import { Link } from "react-router-dom";

class UpdateEvent extends Component {
  state = {};

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    alert("done");
    this.props.updateEvent(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input type="text"   onChange={this.onChange} />
          <input type="text" name="Description" onChange={this.onChange} />
          <input type="text" name="Image" onChange={this.onChange} />
          <input type="date" name="Date" onChange={this.onChange} />
          <button color="dark" style={{ marginTop: "2rem" }}>
            Add Item
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { updateEvent }
)(UpdateEvent);
