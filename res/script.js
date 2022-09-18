const iframe = document.getElementById("content-iframe");
const music = document.getElementById("music");
const source = document.getElementById("music-source");
const music_base = document.getElementById("music-player-base");
const music_song = document.getElementById("music-player-song");
const music_song_text = document.getElementById("song-text");

const tracks = {
    "awesome": {
        file_name: "AwesomeRapBeat.opus",
        track_name: "Awesome Rap Beat",
        track_author: "Jay Tholen",
        track_from: "Hypnospace Outlaw Original Soundtrack, Vol. 2"
    },
    "dream": {
        file_name: "WeFellIntoaDream.opus",
        track_name: "We Fell Into a Dream",
        track_author: "Jay Tholen",
        track_from: "Hypnospace Outlaw Original Soundtrack, Vol. 2"
    },
    "earmint": {
        file_name: "Earmint.opus",
        track_name: "Earmint",
        track_author: "Jay Tholen",
        track_from: "Hypnospace Outlaw Original Soundtrack, Vol. 2"
    },
    "forest": {
        file_name: "ForestFeast.opus",
        track_name: "Forest Feast",
        track_author: "Jay Tholen",
        track_from: "Hypnospace Outlaw Original Soundtrack, Vol. 2"
    },
    "gtrock": {
        file_name: "GoodtimeRock.opus",
        track_name: "Goodtime Rock",
        track_author: "Jay Tholen",
        track_from: "Hypnospace Outlaw Original Soundtrack, Vol. 2"
    },
    "katie": {
        file_name: "KatiesKuddlyKatKorner.opus",
        track_name: "Katie's Kuddly Kat Korner",
        track_author: "Jay Tholen",
        track_from: "Hypnospace Outlaw Original Soundtrack, Vol. 2"
    },
}

const page_tracks = {
    "about": "awesome",
    "anime": "dream",
    "dragonquest": "forest",
    "earthbound": "gtrock",
    "gf": "katie",
    "indies": "earmint",
    "zelda": "forest",
}

let play = false;
let currentPage = "about";
let currentTrack = "";
let timeout;

function firstClickPlay(element) {
    playPause(false, page_tracks[currentPage]);
    element.onclick = null;
}

function goToPage(page) {
    if(currentPage == page)
        return
    iframe.src = "pages/" + page + ".html";
    playPause(!play, page_tracks[page])
    currentPage = page;
}

function formatTrack(track) {
    return `${track.track_author} - ${track.track_name} (${track.track_from})`;
}

function showTitle(){
    if (!currentTrack) return;
    clearTimeout(timeout);
    music_song_text.textContent = formatTrack(tracks[currentTrack]);
    music_song.style.top = "0";
    timeout = setTimeout(() => { music_song.style.top = "100%"; }, 3_000);
}

function playPause(toggle=play, track=currentTrack) {
    if (toggle){
        music_base.classList.remove("player-play");
        music.pause();
        play = false
    }
    else {
        music_base.classList.add("player-play");
        music.volume = 0.1;
        if (track != currentTrack) {
            currentTrack = track;
            source.src = "res/mus/" + tracks[currentTrack].file_name;
            music.load();
        }
        showTitle();
        music.play().catch(() => {});
        play = true
    }
}
