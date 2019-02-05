import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { mainListItems, secondaryListItems } from "./listItems";
import SimpleTable from "./SimpleTable";
import EventTable from "../Events/EventTable";
import FormDialog from "./FormDialog";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotifTable from "../Notif/NotifTable";
import FormNotif from "../Notif/FormNotif";
import FormEvent from "../Events/FormEvent";
import RepasTable from "../Repas/RepasTable";
import FormRepas from "../Repas/FormRepas";
import grey from "@material-ui/core/colors/grey";
import "./dash.css";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  },
  overflowButton: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  link: {
    textDecoration: "none",
    color: grey[10]
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  onLogoutClick() {
    this.props.logoutUser();
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const routes = [
      {
        path: "/notif",
        main: () => (
          <span>
            <Typography variant="h4" gutterBottom component="h2">
              List des Message
              <FormNotif
                title="Formulaire"
                type="add"
                text="Ajout d'un Message"
              />
            </Typography>
            <div className={classes.tableContainer}>
              <NotifTable />
            </div>
          </span>
        )
      },
      {
        path: "/dashboard",
        main: () => (
          <span>
            <Typography variant="h4" gutterBottom component="h2">
              welcom
              {/* <FormNotif title="Formulaire" type="add" text="Ajout d'un Message"/> */}
            </Typography>
            <div className={classes.tableContainer}>{/* <NotifTable /> */}</div>
          </span>
        )
      },
      {
        path: "/repas",
        main: () => (
          <span>
            <Typography variant="h4" gutterBottom component="h2">
              List des Message
              <FormRepas
                title="Formulaire"
                type="add"
                text="Ajout d'un Message"
              />
            </Typography>
            <div className={classes.tableContainer}>
              <RepasTable />
            </div>
          </span>
        )
      },
      {
        path: "/user",
        main: () => (
          <span>
            <Typography variant="h4" gutterBottom component="h2">
              List des clients
              <FormDialog
                title="Formulaire"
                type="add"
                text="Ajout d'un client"
              />
            </Typography>
            <div className={classes.tableContainer}>
              <SimpleTable />
            </div>
          </span>
        )
      },
      {
        path: "/Event",
        main: () => (
          <span>
            <Typography variant="h4" gutterBottom component="h2">
              Event Page
              <FormEvent title="Formulaire" type="add" text="Ajout Event" />
            </Typography>
            <div className={classes.tableContainer}>
              <EventTable />
            </div>
          </span>
        )
      }
    ];
    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          >
            <Toolbar
              disableGutters={!this.state.open}
              className={classes.toolbar}
            >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Dashboard
              </Typography>
              <Button size="small" color="inherit" onClick={this.logout}>
                <ExitToApp />
                <span className={classes.overflowButton}>
                  <a
                    className="link"
                    href="http://localhost:3000/login"
                    onClick={this.onLogoutClick.bind(this)}
                  >
                    Déconnexion
                  </a>
                </span>
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <div>
              <Divider />
              <List>{mainListItems}</List>
              <Divider />
              <List>{secondaryListItems}</List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </main>
        </div>
      </Router>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
