

function slow_load(speed=0.5, not_allowed=[], callback) {

    function onFinish(node, initial_display){
        node.style.display = initial_display;
        counter++;
        ratio = counter / total * 100;
    
        if (ratio >= 100 && callback)
            callback()
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
    }
    
    const all = document.getElementsByTagName("*");
    let counter = 0;
    let total = 0;
    let i = 0;
    for (i in all) {
        const node = all[i];
        if((node.childElementCount == 0) && (not_allowed.indexOf(node.tagName) === -1) && node.style){
            i += getRandomInt(5 / speed, 20 / speed);
            total++;
            const initial_display = node.style.display;
            node.style.display = "none";
            setTimeout(() => { onFinish(node, initial_display);}, i);
        }
    }
}

const not_allowed = ["META", "TITLE", "LINK", "SOURCE", "SCRIPT"];

function finishedCallback() {
    console.log("FINISHED!");
}

// page logic
slow_load(speed=1.25, not_allowed, finishedCallback);
