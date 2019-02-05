import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { getEvents } from "../../actions/event";
const moment = require("moment");
const styles = {
  card: {
    flexGrow: 1,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20
  },
  media: {
    height: 140
  },
  minCard: {}
};

class MediaCard extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getEvents();
    this.setState({ isLoading: false });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.event &&
          this.props.event.map(el => (
            <Card className={classes.card}>
              <CardActionArea key={el._id} className={classes.minCard}>
                <CardMedia
                  className={classes.media}
                  image={el.Image}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {el.Title}
                  </Typography>
                  <Typography component="p">{el.Description}</Typography>
                  <Typography component="p">
                    {moment(el.Date).format("YYYY-DD-MM")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event.event_tab
});

export default connect(
  mapStateToProps,
  { getEvents }
)(withStyles(styles)(MediaCard));
