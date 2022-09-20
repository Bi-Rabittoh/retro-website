
if (!parent.location.href.includes("plain")) {
    hide_all();
}
const page_height = {
    "about": 1500,
    "anime": 1000,
    "dragonquest": 1000,
    "earthbound": 1000,
    "gf": 1600,
    "indies": 1000,
    "zelda": 1000
}

const page = document.body.getAttribute("data-page");
const iframe = parent.document.getElementById("mainframe");

iframe.height = page_height[page];
iframe.scrolling = "no";
