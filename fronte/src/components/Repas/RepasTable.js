import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import DeleteRepas from "./DeleteRepas";
import FormRepas from "./FormRepas";
import { getRepas } from "../../actions/repas";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});
class RepasTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repas: [],
      page: 0,
      rowsPerPage: 5,
      isLoading: true
    };
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  componentDidMount() {
    this.props.getRepas();
    this.setState({ isLoading: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden"
            }}
          >
            <CircularProgress size={40} className={classes.progress} />
          </div>
        ) : (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Lundi</TableCell>
                <TableCell align="center">Mardi</TableCell>
                <TableCell align="center">Mercredi</TableCell>
                <TableCell align="center">Jeudi</TableCell>
                <TableCell align="center">Vendredi</TableCell>
                <TableCell align="center">Samedi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.repas &&
                this.props.repas
                  .slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                  .map(el => (
                    <TableRow key={el._id}>
                      <TableCell align="center">{el.Lundi}</TableCell>
                      <TableCell align="center">{el.Mardi}</TableCell>
                      <TableCell align="center">{el.Mercredi}</TableCell>
                      <TableCell align="center">{el.Jeudi}</TableCell>
                      <TableCell align="center">{el.Vendredi}</TableCell>
                      <TableCell align="center">{el.Samedi}</TableCell>
                      <TableCell align="right">
                        <FormRepas
                          title="Formulaire"
                          dataValue={el}
                          type="edit"
                          text="Modification d'une Repas"
                        />
                        <DeleteRepas
                          title="Confirmer la suppression"
                          dataValue={el._id}
                          text="êtes vous certain de vouloir supprimer Repas ?"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={this.state.repas.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </Paper>
    );
  }
}

RepasTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  repas: state.repas.repas_tab
});

export default connect(
  mapStateToProps,
  { getRepas }
)(withStyles(styles)(RepasTable));
