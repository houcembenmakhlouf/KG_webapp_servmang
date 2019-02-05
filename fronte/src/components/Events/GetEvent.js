import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../../actions/event";
 
class GetEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getEvents();
  }
  

  render() {
    return (
      <div>
        <table border="1px">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Date</th>
            
            <th>
              <button>Add event</button>
            </th>
          </tr>
          {this.props.event &&
            this.props.event.map(el => (
              <tr key={el.Title}>
                <td>
                  <label>{el.Title}</label>
                </td>
                <td>
                  <label>{el.Description}</label>
                </td>

                <td>
                  <label>{el.Image}</label>
                </td>
                <td>
                  <label>{el.Date}</label>
                </td>
                
                <td>
                Update 
                </td>
              </tr>
            ))}
        </table>

         
      </div>
    );
  }
}
const mapStateToProps = state => ({
 event: state.event.event_tab
});

export default connect(
  mapStateToProps,
  { getEvents }
)(GetEvents);
