
if (!parent.location.href.includes("plain")) {
    hide_all();
}
const page_height = {
    "about": 300,
    "anime": 300,
    "dragonquest": 300,
    "earthbound": 300,
    "gf": 1600,
    "indies": 700,
    "zelda": 300
}

const page = document.body.getAttribute("data-page");
const iframe = parent.document.getElementById("mainframe");

iframe.height = page_height[page];
iframe.scrolling = "no";
