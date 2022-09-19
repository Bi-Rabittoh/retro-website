const loadAudio = [
    new Audio(url = window.location.origin + "/res/sfx/os/loadelement1.ogg"),
    new Audio(url = window.location.origin + "/res/sfx/os/loadelement2.ogg"),
    new Audio(url = window.location.origin + "/res/sfx/os/loadelement3.ogg"),
    new Audio(url = window.location.origin + "/res/sfx/os/loadelement4.ogg")
]
const not_allowed = ["AUDIO", "META", "TITLE", "LINK", "SOURCE", "SCRIPT", "BR"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}

function playAudio(audio){
    audio.volume = 0.1;
    audio.currentTime = 0;
    audio.play();
}

const all = document.getElementsByTagName("*");
let total = 0;

function hide_all() {

    for (i in all) {
        const node = all[i];
        if((node.childElementCount == 0) && (not_allowed.indexOf(node.tagName) === -1) && node.style){
            total++;
            node.setAttribute("data-display", node.style.display);
            node.style.display = "none";
        }
    }
}

function start_loading(speed, not_allowed=[], callback) {

    function onNodeLoaded(node){
        node.style.display = node.getAttribute("data-display");
        counter++;
        ratio = counter / total * 100;
        
        playAudio(loadAudio[getRandomInt(0, loadAudio.length - 1)]);
    
        if (ratio >= 100 && callback)
            callback()
    }
    
    let counter = 0;
    let i = 0;
    for (element in all) {
        const node = all[element];
        if((node.childElementCount == 0) && (not_allowed.indexOf(node.tagName) === -1) && node.style){

            i += getRandomInt(250 / speed, 500 / speed);
            setTimeout(() => { onNodeLoaded(node);}, i);
        }
    }
}
