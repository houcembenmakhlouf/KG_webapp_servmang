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
import { addUser } from "../../actions/user";
import { updateUser } from "../../actions/user";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
class FormDialog extends React.Component {
  state = {
    open: false,
    Role: "",
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

  onChangeCheck = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  onSubmit = e => {
    this.props.addUser(this.state);
  };

  onSubmit2 = e => {
    this.props.updateUser(this.state, this.props.dataValue._id);
  };

  render() {
    const { classes } = this.props;
    return (
      <span>
        {this.props.type == "edit" ? (
          <IconButton
            onClick={e => <FormDialog />}
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
              id="FirstName"
              label="First Name"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="FirstName"
              value={this.state.FirstName}
            />
            <TextField
              margin="dense"
              id="LastName"
              label="Last Name"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="LastName"
              value={this.state.LastName}
            />
            <TextField
              margin="dense"
              id="Adress"
              label="Adress"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Adress"
              value={this.state.Adress}
            />
            <TextField
              margin="dense"
              id="PhoneNumber"
              label="Phone Number"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="PhoneNumber"
              value={this.state.PhoneNumber}
            />
            <TextField
              margin="dense"
              id="Mail"
              label="Mail"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Mail"
              value={this.state.Mail}
            />
            {this.props.type == "add" ? (
              <TextField
                margin="dense"
                id="Password"
                label="Password"
                type="TextField"
                fullWidth
                onChange={this.onChange}
                name="Password"
                value={this.state.Password}
              />
            ) : (
              ""
            )}

            <FormControlLabel
              control={<Checkbox value="Paiment" color="primary" />}
              label="Paiment"
              name="Paiment"
              onChange={this.onChangeCheck}
            />

            {this.props.type == "add" ? (
              <select name="Role" onChange={this.onChange}>
                <option value="A">Admin</option>
                <option value="C">Client</option>
              </select>
            ) : (
              ""
            )}
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
  user: state.user.user_tab
});

export default connect(
  mapStateToProps,
  { addUser, updateUser }
)(withStyles(styles)(FormDialog));
