const music = document.getElementById("music");
const source = document.getElementById("music-source");
const music_base = document.getElementById("music-player-base");
const music_song = document.getElementById("music-player-song");
const music_song_text = document.getElementById("song-text");
const clickAudio1 = new Audio(url="res/sfx/os/click2.ogg");
const clickAudio2 = new Audio(url="res/sfx/os/click1.ogg");

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

let currentTrack = "";
let showTimeout, hideTimeout;

function formatTrack(track) {
    return `${track.track_author} - ${track.track_name} (${track.track_from})`;
}

function showTitle(){
    if (!currentTrack) return;
    hideTitle();
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    
    showTimeout = setTimeout(() => { 
        music_song_text.textContent = formatTrack(tracks[currentTrack]);
        music_song.style.top = "0";
    }, 400);

    hideTimeout = setTimeout(() => hideTitle(), 3_400);
}

function hideTitle(){
    music_song.style.top = "100%";
}

function playPause(toggle=play, track=currentTrack) {
    let changed = false;
    if (track != currentTrack) {
        changed = true;
        currentTrack = track;
        source.src = "res/mus/" + tracks[currentTrack].file_name;
        music.load();
    }

    if (!controlsEnabled)
        return;
    if (toggle){
        music_base.classList.remove("player-play");
        music.pause();
        play = false
        hideTitle();
    }
    else {
        music_base.classList.add("player-play");
        music.play().catch(() => {});
        if(changed)
            showTitle();
        play = true
    }
}