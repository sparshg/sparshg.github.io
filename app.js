let termtext = "> echo Hello, World!"
let cursorchar = "▉";
let sdelay = 50;
let ldelay = 200;
let i = 0;

function Write() {
    if (i < termtext.length) {
        let t = document.getElementById("terminal").innerHTML;
        document.getElementById("terminal").innerHTML = t.slice(0, t.length - 1) + termtext.charAt(i) + cursorchar;
        let delay = (i == 6) ? ldelay : sdelay;
        i++;
        setTimeout(Write, delay);
    }
}

function ChangeText(text) {

    let initial = termtext.split(" ");
    let final = text.split(" ");
    let common;
    for (let j = 0; j < final.length; j++) {
        if (final[j] !== initial[j]) {
            final = final.slice(0, j);
            common = final.join(" ");
            break;
        }
    }

    function deleteUncommon() {
        let t = document.getElementById("terminal").innerHTML;
        if (termtext !== common) {
            termtext = termtext.slice(0, termtext.length - 1);
            document.getElementById("terminal").innerHTML = termtext + cursorchar;
            delay = sdelay;
            setTimeout(deleteUncommon, delay);
        } else {
            termtext = text;
            i = common.length;
            Write();
        }

    }
    deleteUncommon();
}
Write();

gsap.timeline({
    scrollTrigger: {
        trigger: ".sec2",
        start: "top bottom",
        end: "top center",
        scrub: true,
        // markers: true
    }
})
    .to("#terminal", { scale: 0.7, top: "4vh" })

ScrollTrigger.create({
    trigger: ".sec2",
    onEnter: () => { ChangeText("> echo Hello, Earth!") }
})