let SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = fuction(event) {
    let content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
}