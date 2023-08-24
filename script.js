const textarea =  document.querySelector("textarea");
const button =  document.querySelector("button");

const textToSpeech = () =>{
    const synth = window.speechSynthesis;
    const text = textarea.value;

    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace)
};

button.addEventListener("click",textToSpeech);
