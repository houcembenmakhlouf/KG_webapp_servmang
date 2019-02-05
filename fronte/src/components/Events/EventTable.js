import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteEvent from "./DeleteEvent";
import FormEvent from "./FormEvent";
import { getEvents } from "../../actions/event";
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
const styles =theme => ( {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  progress: {
    margin: theme.spacing.unit *2 ,
  },
});
class EventTable extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      event:[],
        page: 0,
        rowsPerPage: 5,
        isLoading:true,
    }
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  componentDidMount() {
    this.props.getEvents();
    this.setState({ isLoading:false });
    
  };
    

  
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.isLoading ?
           
          <div style={{display: "flex",justifyContent: "center",overflow:"hidden"}} >
          <CircularProgress  size={40} className={classes.progress} /></div>  :
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell  align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Date</TableCell>
             
            </TableRow>
          </TableHead>
         
        
          <TableBody>
          {this.props.event &&
            this.props.event.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(el => (
            
              <TableRow key={el._id}>
                <TableCell align="right">{el.Title}</TableCell>
                <TableCell align="right">{el.Description}</TableCell>
                <TableCell align="right">{el.Date}</TableCell>
                <TableCell align="right">
                  <FormEvent
                    title="Formulaire"
                    dataValue={el}
                    type="edit"
                    text="Modification d'une Event"
                  />
                  <DeleteEvent
                    title="Confirmer la suppression"
                    dataValue={el._id}
                    text="êtes vous certain de vouloir supprimer Event ?"
                  />
                </TableCell>
              </TableRow>
            ))
          }
          </TableBody>
          <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={this.state.event.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
        </Table>
        }
      </Paper>
    );
  }
}

EventTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  event: state.event.event_tab
 });
 
export default  connect(
  mapStateToProps,
  { getEvents }
)(withStyles(styles)(EventTable));
