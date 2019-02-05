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

import FormNotif from "./FormNotif";
import { getNotif } from "../../actions/notif";
import DeleteNotif from "./DeleteNotif";

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
class NotifTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notif: [],
      page: 0,
      rowsPerPage: 5,
      isLoading: true
    };
  }
  handleChangePage = (notif, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = notif => {
    this.setState({ rowsPerPage: notif.target.value });
  };
  componentDidMount() {
    this.props.getNotif();
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
                <TableCell align="center">Notification</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.props.notif &&
                this.props.notif
                  .slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                  .map(el => (
                    <TableRow key={el._id}>
                      <TableCell align="center">{el.Msg}</TableCell>

                      <TableCell align="right">
                        <FormNotif
                          title="Formulaire"
                          dataValue={el}
                          type="edit"
                          text="Modification d'une Event"
                        />
                        <DeleteNotif
                          title="Confirmer la suppression"
                          dataValue={el._id}
                          text="êtes vous certain de vouloir supprimer Event ?"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={this.state.notif.length}
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

NotifTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  notif: state.notif.notif_tab
});

export default connect(
  mapStateToProps,
  { getNotif }
)(withStyles(styles)(NotifTable));
