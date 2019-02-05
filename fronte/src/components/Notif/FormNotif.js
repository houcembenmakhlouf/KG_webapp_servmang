import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import amber from "@material-ui/core/colors/amber";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { addNotif ,updateNotif,getNotif} from "../../actions/notif";

const styles = {
  editIcon: {
    color: amber[500]
  },
  editButton: {
    "&:hover": {
      backgroundColor: amber[100]
    },
    overflowButton: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }
};
class FormNotif extends React.Component {
  state = {
    open: false,
    type: this.props.type,
    ...this.props.dataValue
  };
  constructor(props) {
    super(props);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  onSubmit = e => {
    this.props.addNotif(this.state);
  };

  onSubmit2 = e => {
    this.props.updateNotif(this.state, this.props.dataValue._id);
  };

  render() {
    const { classes } = this.props;
    return (
      <span>
        {this.props.type == "edit" ? (
          <IconButton
            onClick={e => <FormNotif />}
            aria-label="Edit"
            className={classes.editButton}
            onClick={this.handleClickOpen}
          >
            <EditIcon className={classes.editIcon} />
          </IconButton>
        ) : (
          <Button
            style={{
              float: "right",
              marginBottom: 10,
              backgroundColor: "white"
            }}
            variant="outlined"
            color="default"
            onClick={this.handleClickOpen}
          >
            <AddIcon />
            <span className={classes.overflowButton}>Ajouter</span>
          </Button>
        )}
        <Dialog
          maxWidth="sm"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.title} </DialogTitle>
          <DialogContent>
            <DialogContentText>{this.props.text}</DialogContentText>

            <TextField
              margin="dense"
              id="notification"
              label="notification"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Msg"
              value={this.state.Msg}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Annuler
            </Button>
            {this.props.type == "add" ? (
              <Button
                onClick={() => {
                  this.onSubmit();
                  this.handleClose();
                }}
                color="primary"
              >
                Confirmer
              </Button>
            ) : (
              <Button
                onClick={() => {
                  this.onSubmit2();
                  this.handleClose();
                }}
                color="primary"
              >
                update
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}
const mapStateToProps = state => ({
  notif: state.notif
});

// const mapDispatchToProps = dispatch  => (
//         //  {updateEvent}   ,{addEvent}
// );

export default connect(
  mapStateToProps,
  { addNotif ,updateNotif,getNotif}
)(withStyles(styles)(FormNotif));
