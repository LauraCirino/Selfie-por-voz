let SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    let content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if(content == "selfie"){
        speak();
    }
}

function speak() {
    let synth = window.speechSynthesis;
    let speakData = "tirando sua Selfie em 5 segundos"
    let utterThis = new SpeechSynthesisuUtterance(speakData);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        takeSnapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src-"'+data_uri+'">';
    });
}