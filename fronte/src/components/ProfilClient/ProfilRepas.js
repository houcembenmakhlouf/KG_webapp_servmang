import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { getRepas } from "../../actions/repas";
const moment = require("moment");

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class RepasTable extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getRepas();
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "20px" }}>Table de repas</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell style={{ fontSize: "16px" }}>Lundi</TableCell>
              <TableCell style={{ fontSize: "16px" }}>Mardi</TableCell>
              <TableCell style={{ fontSize: "16px" }}>Mercredi</TableCell>
              <TableCell style={{ fontSize: "16px" }}>Jeudi</TableCell>
              <TableCell style={{ fontSize: "16px" }}>Vendredi</TableCell>
              <TableCell style={{ fontSize: "16px" }}>Samedi</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                {this.props.repas && this.props.repas.Lundi}
              </TableCell>
              <TableCell align="left">
                {this.props.repas && this.props.repas.Mardi}
              </TableCell>
              <TableCell align="left">
                {this.props.repas && this.props.repas.Mercredi}
              </TableCell>
              <TableCell align="left">
                {this.props.repas && this.props.repas.Jeudi}
              </TableCell>
              <TableCell align="left">
                {this.props.repas && this.props.repas.Vendredi}
              </TableCell>
              <TableCell align="left">
                {this.props.repas && this.props.repas.Samedi}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                {this.props.repas &&
                  moment(this.props.repas.Date).format("YYYY-DD-MM")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                *Merci de nous contacter en cas de réclamtion
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
RepasTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  repas: state.repas.repas_tab[0]
});
export default connect(
  mapStateToProps,
  { getRepas }
)(withStyles(styles)(RepasTable));
