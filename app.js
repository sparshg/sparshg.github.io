let termText = "> echo Hello, World!"
let cursorChar = "▉";
let sdelay = 50;
let ldelay = 150;
let animTimeout;
let i = 0;

function Write() {
    if (i < termText.length) {
        let t = document.getElementById("terminal").innerText;
        document.getElementById("terminal").innerText = t.slice(0, t.length - 1) + termText.charAt(i) + cursorChar;
        let delay = (i == termText.match(/> \w*/)[0].length) ? ldelay : sdelay;
        i++;
        animTimeout = setTimeout(Write, delay);
    }
}

function ChangeText(text) {

    clearTimeout(animTimeout);
    // When reloading, 
    if (document.getElementById("terminal").innerText.length <= 3) {
        termText = text;
        i = document.getElementById("terminal").innerText.length - 1;
        Write();
        return
    }

    let initial = termText.split(" ");
    let final = text.split(" ");
    let common;
    for (let j = 0; j < final.length; j++) {
        if (final[j] !== initial[j]) {
            final = final.slice(0, j);
            common = final.join(" ");
            common += " ";
            break;
        }
    }
    // console.log(termText, text, common, i)

    function deleteUncommon() {
        let t = document.getElementById("terminal").innerText;
        // console.log(t)
        // If common and current text not equal && initial and final text not equal
        if (t.slice(0, t.length - 1) !== common && termText !== text) {
            document.getElementById("terminal").innerText = t.slice(0, t.length - 2) + cursorChar;
            delay = sdelay;
            i--;
            animTimeout = setTimeout(deleteUncommon, delay);
        } else {
            if (termText !== text) {
                termText = text;
                i = common.length;
            }
            setTimeout(Write, ldelay);
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
    .to("#terminal", { fontSize: "28px", top: "2vh", marginLeft: "3vw" })

ScrollTrigger.create({
    trigger: ".sec2",
    start: "top center",
    end: "top center",
    onEnter: () => { ChangeText("> cd projects") },
    onEnterBack: () => { ChangeText("> echo Hello, World!") }
})

ScrollTrigger.create({
    trigger: ".sec3",
    start: "top center",
    end: "top center",
    onEnter: () => { ChangeText("> cd contact") },
    onEnterBack: () => { ChangeText("> cd projects") }
})