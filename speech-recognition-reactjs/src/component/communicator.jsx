import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import SPEECH_ATTRIBUTES from "../speechSynthesis";

class Communicator extends Component {
  state = {
    options: [],
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="btn">
          Speak
        </button>
        <select name="combobox" className="combobox">
          {this.state.options}
        </select>
      </div>
    );
  }

  handleClick = () => {
    const me = this;
    SPEECH_ATTRIBUTES.recognition.onresult = function (event) {
      const currentIdx = event.resultIndex;
      const transcript = event.results[currentIdx][0].transcript;
      me.state.options.push(
        <option key={uuidv4()} value={transcript} selected>
          {transcript}
        </option>
      );
      me.setState({ options: me.state.options });
      me.readOutLoud(transcript);
    };

    SPEECH_ATTRIBUTES.recognition.start();
  };

  readOutLoud = (message) => {
    SPEECH_ATTRIBUTES.speech.text = message;
    SPEECH_ATTRIBUTES.speech.volume = 1;
    SPEECH_ATTRIBUTES.speech.rate = 1;
    SPEECH_ATTRIBUTES.speech.pitch = 1;
    SPEECH_ATTRIBUTES.speech.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(SPEECH_ATTRIBUTES.speech);
  };
}

export default Communicator;
