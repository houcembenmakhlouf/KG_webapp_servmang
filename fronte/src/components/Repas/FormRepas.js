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

import { addRepas ,updateRepas} from "../../actions/repas";

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
class FormRepas extends React.Component {
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
    this.props.addRepas(this.state);
  };

    onSubmit2 = e => {
       this.props.updateRepas(this.state, this.props.dataValue._id);
    };

  render() {
    const { classes } = this.props;
    return (
      <span>
        {this.props.type == "edit" ? (
          <IconButton
            onClick={e => <FormRepas />}
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
              id="Lundi"
              label="Lundi"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Lundi"
              value={this.state.Lundi}
            />
             
            <TextField
              margin="dense"
              id="Mardi"
              label="Mardi"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Mardi"
              value={this.state.Mardi}
            />
            <TextField
              margin="dense"
              id="Mercredi"
              label="Mercredi"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Mercredi"
              value={this.state.Mercredi}            />
            <TextField
              margin="dense"
              id="Jeudi"
              label="Jeudi"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Jeudi"
              value={this.state.Jeudi}            />
            <TextField
              margin="dense"
              id="Vendredi"
              label="Vendredi"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Vendredi"
              value={this.state.Vendredi}            />
            <TextField
              margin="dense"
              id="Samedi"
              label="Samedi"
              type="TextField"
              fullWidth
              onChange={this.onChange}
              name="Samedi"
              value={this.state.Samedi}            />
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
  repas: state.repas
});


export default connect(
  mapStateToProps,
  { addRepas,updateRepas }
)(withStyles(styles)(FormRepas));
