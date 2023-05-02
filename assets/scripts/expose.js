// expose.js
window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function updatePicVolume(){
    let selection=document.getElementById("horn-select").selectedIndex;
    let pic=document.querySelector("img");
    let audio=document.querySelector("audio");
    if(selection==1)
    {
        pic.src="assets/images/air-horn.svg";
        audio.src="assets/audio/air-horn.mp3";
    }
    else if (selection==2)
    {
        pic.src="assets/images/car-horn.svg";
        audio.src="assets/audio/car-horn.mp3";
    }
    else
    {
        pic.src="assets/images/party-horn.svg";
        audio.src="assets/audio/party-horn.mp3";
    }
}

function updateVolumeIcon()
{
    let value=document.getElementById("volume").value;
    let pic=document.querySelector("img[alt=\"Volume level 2\"]");
    document.querySelector("audio").volume=value/100;

    if(value==0)
    {
        pic.src="assets/icons/volume-level-0.svg";
    }
    else if(value>=1 && value<33)
    {
        pic.src="assets/icons/volume-level-1.svg";
    }
    else if(value>=33 && value<67)
    {
        pic.src="assets/icons/volume-level-2.svg";
    }
    else
    {
        pic.src="assets/icons/volume-level-3.svg";
    }

}

function playSound()
{
    document.querySelector("audio").play();
    let selection=document.getElementById("horn-select").selectedIndex;
    if(selection==3)
    {
        jsConfetti.addConfetti();
    }
}

function init() {
    // TODO

    let hornSelector = document.getElementById("horn-select");
    let soundSelector=document.getElementById("volume");
    let playButton=document.querySelector("button");

    hornSelector.addEventListener("input",updatePicVolume);
    soundSelector.addEventListener("input",updateVolumeIcon);
    playButton.addEventListener("click",playSound);
}