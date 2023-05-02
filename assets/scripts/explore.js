// explore.js
const synth = window.speechSynthesis;

const voiceSelect = document.querySelector("select");
const inputTxt = document.querySelector("textarea");
const button=document.querySelector("button");

window.addEventListener('DOMContentLoaded', init);

let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
            option.textContent += " — DEFAULT";
        }

        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
    }
}

function init() {
  // TODO

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }


    button.onclick = () => {

        const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
        utterThis.onstart=()=>{document.querySelector("img").src="assets/images/smiling-open.png"};
        utterThis.onend=()=>{document.querySelector("img").src="assets/images/smiling.png"};
        const selectedOption =
            voiceSelect.selectedOptions[0].getAttribute("data-name");
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
            }
        }

        synth.speak(utterThis);

    };
}