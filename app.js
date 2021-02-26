let hellow = "> echo Hello, World!";
let cursorchar = "▉";
let sdelay = 50;
let ldelay = 200;
let i = 0;

function typeWriterEffect() {
    if (i < hellow.length) {
        text = document.getElementById("hellow").innerHTML;
        document.getElementById("hellow").innerHTML = text.slice(0, text.length - 1) + hellow.charAt(i) + cursorchar;
        delay = (i == 6) ? ldelay : sdelay;
        i++;
        setTimeout(typeWriterEffect, delay);
    }
}

typeWriterEffect();