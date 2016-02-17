import React, {Component, PropTypes} from "react";

export default class Video extends Component {
  render() {
    return (
      <video controls style={{
        "max-width": "100%"
      }}>
        <source src={this.props.videoSrc} />
      </video>
    );
  }
}

Video.displayName = "Video";

Video.propTypes = {
  videoSrc: PropTypes.string
};
