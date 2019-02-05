import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteDialog from "./DeleteDialog";
import FormDialog from "./FormDialog";
import { getUsers } from "../../actions/user";
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import FormScore from "./FormScore";
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
class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    console.log("hi");
    this.state={
       user:0,
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
    this.props.getUsers();
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
              <TableCell  align="center">First name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Adress</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Mail</TableCell>
              <TableCell align="center">Paiment</TableCell>
            </TableRow>
          </TableHead>
         
        
          <TableBody>
          {this.props.user &&
            this.props.user.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(el => (
            
              <TableRow key={el.id}>
           
                <TableCell align="right">{el.FirstName}</TableCell>
                <TableCell align="right">{el.LastName}</TableCell>
                <TableCell align="right">{el.Adress}</TableCell>
                <TableCell align="right">{el.PhoneNumber}</TableCell>
                <TableCell align="right">{el.Mail}</TableCell>
                <TableCell align="right">{el.Paiment ? "payé" : "non payé"}</TableCell>

                <TableCell align="right">
                <FormScore
                    title="Formulaire"
                    dataValue={el}
                    type="edit"
                    text=" Score"
                  />
                  <FormDialog
                    title="Formulaire"
                    dataValue={el}
                    type="edit"
                    text="Modification d'une client"
                  />
                  <DeleteDialog
                    title="Confirmer la suppression"
                    dataValue={el._id}
                    text="êtes vous certain de vouloir supprimer cette client ?"
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
                  count={this.state.user.length}
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

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.user.user_tab
});
export default  connect(
  mapStateToProps,
  { getUsers }
)(withStyles(styles)(SimpleTable));
