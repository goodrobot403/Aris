import { Component } from "react";
import "../App.css";
import validURL from "../validUrl";

class DisplayContainer extends Component {
  state = {
    content: "https://www.youtube.com/embed/E7wJTI-1dvQ",
  };

  render() {
    if (validURL(this.state.content)) {
      return (
        <div>
          <iframe
            className="iframe-window"
            src={this.state.content}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.state.content}</p>
        </div>
      );
    }
  }
}

export default DisplayContainer;
