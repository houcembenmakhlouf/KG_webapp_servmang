import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { getUsers, logoutUser } from "../../actions/user";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    padding: 0
  },
  grow: {
    flexGrow: 1
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  link: {
    textDecoration: "none"
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };
  onLogoutClick() {
    this.props.logoutUser();
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.im}>
          <Toolbar>
            <Grid container justify="left" alignItems="center">
              <Avatar
                alt="Remy Sharp"
                src="http://blogue-ton-ecole.ac-dijon.fr/wp-content/uploads/2016/07/Avatar_girl_face.png"
                className={classes.bigAvatar}
              />
              <div>
                <div>{this.props.user && this.props.user.FirstName}</div>

                <div>{this.props.user && this.props.user.LastName}</div>
              </div>
            </Grid>

            <div>
              <FormGroup>
                <a
                  className="link"
                  href="http://localhost:3000/a"
                  onClick={this.onLogoutClick.bind(this)}
                >
                  logout
                </a>
              </FormGroup>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.user.user_connected
});

export default connect(
  mapStateToProps,
  { getUsers, logoutUser }
)(withStyles(styles)(MenuAppBar));
