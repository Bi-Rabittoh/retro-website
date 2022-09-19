const iframe = document.getElementById("mainframe");

const loadSpeed = 2;

let first = false;
let play = false;
let controlsEnabled = false;
let currentPage = "about";

function firstPlay(){
    if(first) return;
    document.getElementById("music-player").style.bottom = "0";
    music.volume = 0.1;
    controlsEnabled = true;
    playPause(false, page_tracks[currentPage]);
    first = true;
}

function loadIFrame(callback){
    iframe.contentWindow.start_loading(speed=loadSpeed, not_allowed, callback);
}

function firstClickPlay(element) {
    const overlay = document.getElementById("overlay");
    if(overlay) {
        overlay.remove();
        hide_all();
        start_loading(speed=loadSpeed, not_allowed, () => { loadIFrame(firstPlay) });
        //slow_load(speed=loadSpeed, not_allowed, () => { loadIFrame(firstPlay) });
    }

    click1 = clickAudio1 || parent.clickAudio1;
    click2 = clickAudio2 || parent.clickAudio2;

    playAudio(click1)
    element.onmousedown = () => playAudio(click1);
    element.onmouseup = () => playAudio(click2);
}

function frameLoadedCallback() {
    controlsEnabled = true;
    playPause(!play, page_tracks[currentPage]);
}

function goToPage(page) {
    if (!controlsEnabled || currentPage == page) return

    music.pause()
    controlsEnabled = false;
    iframe.src = "pages/" + page + ".html";
    currentPage = page;

}
