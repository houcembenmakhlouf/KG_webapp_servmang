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
import AssignmentIcon from '@material-ui/icons/Assignment';
import { withStyles } from "@material-ui/core/styles";
import { addScore } from "../../actions/score";
import { connect } from "react-redux";
import { green } from '@material-ui/core/colors';
const styles = {
  editIcon:{
    color:green[500],
},
editButton:{
  '&:hover': {
      backgroundColor: green[100],
  },
  overflowButton:{
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden" 
  }
},

  }
class FormScore extends React.Component {
  state = {
    open: false, 
    UserRef:this.props.dataValue._id,
  
  };
  constructor(props){
    super(props);
    console.log(props);
    
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
    

     console.log(this.state)
    this.props.addScore(this.state);
  };

  
  
  render() {
    const { classes } = this.props;
    return (
      <span>
        {this.props.type=="edit"?(
 <IconButton onClick={(e) => <FormScore/>}
 aria-label="Edit"
 className={classes.editButton}
 onClick={this.handleClickOpen}
>
 <AssignmentIcon className={classes.editIcon} />
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
              id="Mat1"
              label="sport"
              type="TextField"
              fullWidth
              onChange={this.onChange} 
              name="mat1"
              // value={this.props.dataValue?this.props.dataValue.FirstName:''}
            />
            <TextField
              margin="dense"
              id="Mat2"
              label="mathematique"
              type="TextField"
              fullWidth
              onChange={this.onChange} 
              name="mat2"
              // value={this.props.dataValue?this.props.dataValue.LastName:''}
            />
            <TextField
              margin="dense"
              id="Mat3"
              label="Arabe"
              type="TextField"
              fullWidth
              onChange={this.onChange} 
              name="mat3"
              // value={this.props.dataValue?this.props.dataValue.Adress:''}
            />
            <TextField
              margin="dense"
              id="Mat4"
              label="française"
              type="TextField"
              fullWidth
              onChange={this.onChange} 
              name="mat4" 
              // value={this.props.dataValue?this.props.dataValue.PhoneNumber:''}
            />
             <TextField
              margin="dense"
              id="Description"
              label="Description"
              type="TextField"
              fullWidth
              onChange={this.onChange} 
              name="description" 
              // value={this.props.dataValue?this.props.dataValue.PhoneNumber:''}
            />
             
             

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Annuler
            </Button>
            <Button   onClick={
    ()=>{this.onSubmit()
    this.handleClose() }}  color="primary">
              Confirmer
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
 
}
const mapStateToProps = state => ({
  score: state.score
});

export default  connect(
  mapStateToProps,
  { addScore }
)(withStyles(styles)(FormScore) ) ;