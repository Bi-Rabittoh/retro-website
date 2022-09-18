
const this_page = document.body.getAttribute("data-page");

hide_all();
parent.loadIFrame(() => parent.frameLoadedCallback(this_page));