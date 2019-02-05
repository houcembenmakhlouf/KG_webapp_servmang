import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { connect } from "react-redux";
import { getNotif } from "../../actions/notif";
import { getUsers } from "../../actions/user";
import warning from "@material-ui/icons/Warning";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
const moment = require("moment");
const styles = theme => ({
  snackbar1: {
    margin: theme.spacing.unit,
    backgroundColor: red[700],
    minWidth: 700
  },
  snackbar: {
    margin: theme.spacing.unit,
    backgroundColor: blue[700],
    minWidth: 700
  }
});

class NotifTable extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNotif();
    this.props.getUsers();
  }
  render() {
    const { classes } = this.props;
    return (
      <div align="center">
        {this.props.paiment && this.props.paiment ? (
          <div>
            {this.props.Date && moment(this.props.Date).format("YYYY-MM-DD")}
            <SnackbarContent
              className={classes.snackbar1}
              variantIcon={classes.variantIcon}
              message={"you should pay motherf***"}
            />
          </div>
        ) : (
          ""
        )}

        {this.props.notif &&
          this.props.notif.map(el => (
            <div>
              <span>{moment(el.Date).format("YYYY-MM-DD   hh:mm")}</span>
              <SnackbarContent className={classes.snackbar} message={el.Msg} />
            </div>
          ))}
      </div>
    );
  }
}

NotifTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  notif: state.notif.notif_tab,
  paiment: state.user.user_connected.Paiment,
  Date: state.user.user_connected.Date
});
export default connect(
  mapStateToProps,
  { getNotif, getUsers }
)(withStyles(styles)(NotifTable));
