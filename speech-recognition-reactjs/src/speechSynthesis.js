const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SPEECH_ATTRIBUTES = {
  recognition: new SpeechRecognition(),
  speech: new SpeechSynthesisUtterance(),
};

Object.freeze(SPEECH_ATTRIBUTES)
export default SPEECH_ATTRIBUTES
