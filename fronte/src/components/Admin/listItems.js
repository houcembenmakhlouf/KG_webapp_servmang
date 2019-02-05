import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import DaterangeIcon from '@material-ui/icons/Book';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MessageIcon from '@material-ui/icons/Message';


import { Route,Link } from 'react-router-dom'
export const mainListItems = (
  <div>
    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Paramétrage</ListSubheader>
    <Link to="/user" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="client" />
    </ListItem>
    </Link>
    <Link to="/Event" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
      <DaterangeIcon />
        
      </ListItemIcon>
      <ListItemText primary="Events " />
    </ListItem>
    </Link>

    <Link to="/repas" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
      <RestaurantIcon />
      </ListItemIcon>
      <ListItemText primary="repas " />
    </ListItem>
    </Link>
    <Link to="/notif" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
      <MessageIcon />
      </ListItemIcon>
      <ListItemText primary="notification " />
    </ListItem>
    </Link>

  </div>
);
