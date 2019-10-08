import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MorevertIcon from "@material-ui/icons/MoreVert";
import "../video-gallery/video-gallery.css";
import { Link } from "react-router-dom";
import Recomended from "../recomended/Recomended";
import PopupWelcome from "../popup-welcome/PopupWelcome";
import AboutUs from "../about-us/AboutUs";

export default class VideoGallery extends React.Component {
  state = {
    isCloseAbout : false
  }

  closeAboutUs = () => {
    this.setState({ isCloseAbout : true })
  }

  render() {
    return (
      <Container maxWidth="lg" className="wrapper">
      <PopupWelcome />
        <Grid container alignItems="flex-start" justify="center">
          <Grid item lg={8}>
            {this.state.isCloseAbout ? "" : <AboutUs onClose={this.closeAboutUs}/> }
            <Grid container spacing={3}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value, idx) => (
                <Grid
                  key={idx}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Grid container direction="column" className="video-gallery">
                    <Grid item xs className="video-gallery-thumbnail">
                      <img src="/assets/recomended-thumbnail.jpg"  alt="recomended-thumbnail.jpg"  />
                      <span className="video-gallery-duration">05:30</span>
                    </Grid>
                    <Grid item xs>
                    <Grid container alignItems="flex-start" justify="flex-start">
                    <IconButton>
                      <img src="/assets/icon-user.png" className="video-gallery-user" alt="icon-user.png" />
                      </IconButton>
                      <Grid item xs>
                        <Grid container direction="column" className="video-gallery-title">
                          <Typography variant="subtitle2" >
                              <Link to="/video-playlist">
                                Learn Node.js in nuthsell
                              </Link>
                          </Typography>
                          <Typography variant="caption" >Pojokan</Typography>
                        </Grid>
                      </Grid>
                      <IconButton>
                        <MorevertIcon />
                       </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Recomended />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
