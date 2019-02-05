import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon  from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import amber from '@material-ui/core/colors/amber';
import { withStyles } from "@material-ui/core/styles";
import { addEvent } from "../../actions/event";
import { updateEvent } from "../../actions/event";
import { connect } from "react-redux";
 
const styles = {
  editIcon:{
    color:amber[500],
},
editButton:{
  '&:hover': {
      backgroundColor: amber[100],
  },
  overflowButton:{
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden" 
  }
},

  }
class FormEvent extends React.Component {
  state = {
    open: false, 
    type: this.props.type,
    ...this.props.dataValue
    
  
  };
  constructor(props){
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
    this.props.addEvent(this.state) 
       };

  onSubmit2 = e => {
    console.log(this.props.dataValue._id)
    this.props.updateEvent(this.state,this.props.dataValue._id)
   };
  
  render() {
    const { classes } = this.props;
    return (
      <span>
        {this.props.type=="edit"?(
 <IconButton onClick={(e) => <FormEvent />}
 aria-label="Edit"
 className={classes.editButton}
 onClick={this.handleClickOpen}
>
 <EditIcon className={classes.editIcon} />
</IconButton>):(
  <Button style={{float:"right",marginBottom:10, backgroundColor:"white"}} variant="outlined" color="default" onClick={this.handleClickOpen}>
  <AddIcon   />
  <span className={classes.overflowButton}>
    Ajouter
    </span>
  </Button>
  )
        }
        <Dialog
          maxWidth="sm"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.title} </DialogTitle>
          <DialogContent >
            <DialogContentText>
            {this.props.text} 
            </DialogContentText>
             
            <TextField
              margin="dense"
              id="Title"
              label="Title"
              type="TextField"
              fullWidth
              onChange={this.onChange} 
              name="Title"
               value={ this.state.Title }
            />
            <TextField
              margin="dense"
              id="Description"
              label="Description"
              type="TextField"
              fullWidth
              onChange={this.onChange} 
              name="Description"
              value={this.state.Description }
            />
             <TextField
              margin="dense"
              id="Image"
              label="Image"
              type="TextField"
              fullWidth
              onChange={this.onChange} 
              name="Image"
              value={this.state.Image}
            />
            <TextField
              margin="dense"
              id="Date"
              
              type="Date"
              fullWidth
              onChange={this.onChange} 
              name="Date"
              value={this.state.Date}
            />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Annuler
            </Button>
            {this.props.type=="add"?(
            <Button   onClick={
    ()=>{this.onSubmit()
    this.handleClose() }}  color="primary">
              Confirmer
            </Button>
            ):(     <Button   onClick={
              ()=>{this.onSubmit2()
              this.handleClose() }}  color="primary">
                        update
                      </Button>)
            }


          </DialogActions>
        </Dialog>
      </span>
    );
  }
 
}
const mapStateToProps = state => ({
  event: state.event
});
 
export default  connect(
  mapStateToProps,
  {addEvent , updateEvent}
)(withStyles(styles)(FormEvent) ) ;