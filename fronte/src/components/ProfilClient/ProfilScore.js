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
import { getScore } from "../../actions/score";

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

class ScoreTable extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getScore();
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        {this.props.score && console.log(this.props.score)}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "20px" }}>Table de note</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell style={{ fontSize: "16px" }}>sport</TableCell>
              <TableCell style={{ fontSize: "16px" }}>mathématique</TableCell>
              <TableCell style={{ fontSize: "16px" }}>Arabe</TableCell>
              <TableCell style={{ fontSize: "16px" }}>français</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                {this.props.score && this.props.score.mat1}
              </TableCell>
              <TableCell align="left">
                {this.props.score && this.props.score.mat2}
              </TableCell>
              <TableCell align="left">
                {this.props.score && this.props.score.mat3}
              </TableCell>
              <TableCell align="left">
                {this.props.score && this.props.score.mat4}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left" style={{ fontSize: "18px" }}>
                Description
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                {this.props.score && this.props.score.Description}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left" style={{ fontSize: "18px" }}>
                Moyenne
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                {this.props.score &&
                  (this.props.score.mat1 +
                    this.props.score.mat2 +
                    this.props.score.mat3 +
                    this.props.score.mat4) /
                    4}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
ScoreTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  score: state.score.score_tab[0]
});
export default connect(
  mapStateToProps,
  { getScore }
)(withStyles(styles)(ScoreTable));
