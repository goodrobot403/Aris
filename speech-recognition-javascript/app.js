
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('Voice Is Activated, You Can Speak to the microphone now !!!');
};

recognition.onresult = function (event) {
    const currentIdx = event.resultIndex;
    const transcript = event.results[currentIdx][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

readOutLoud = function(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = window.speechSynthesis.getVoices()[0];
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}