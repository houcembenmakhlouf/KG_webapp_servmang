import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import grey from "@material-ui/core/colors/grey";
import back from "../Image/back.png";
import ProfilEvent from "./ProfilEvent";
import ProfilScore from "./ProfilScore";
import ProfilRepas from "./ProfilRepas";
import ProfilNotif from "./ProfilNotif";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: grey[300],
    marginLeft: 40,
    marginRight: 40,
    flexGrow: 1
  },
  margin: {
    margin: 11
  }
}));

function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={null}
        >
          <Tab label="Event" />
          <Tab label="Score" />
          <Tab label="Repas" />
          <Tab label="Notification" />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabContainer>
          <ProfilEvent />
        </TabContainer>
        <TabContainer>
          <ProfilScore />
        </TabContainer>
        <TabContainer>
          <ProfilRepas />
        </TabContainer>
        <TabContainer>
          <ProfilNotif />
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}

export default FullWidthTabs;
