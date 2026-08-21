let popped = 0;
let reasonIndex = 0;

let music = null;


/* =========================
   PAGE CHANGE
========================= */

function showPage(number) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById("page" + number);

    if (page) {
        page.classList.add("active");
    }

    createHearts();
}


/* =========================
   START BUTTON
========================= */

function startProject() {

    music = document.getElementById("music");

    if (music) {
        music.currentTime = 0;

        music.play().catch(error => {
            console.log("Music needs user interaction:", error);
        });
    }

    showPage(2);
}


/* =========================
   BALLOONS
========================= */

function popBalloon(balloon) {

    if (!balloon) return;

    if (balloon.classList.contains("popped")) {
        return;
    }

    balloon.classList.add("popped");

    popped++;

    const count = document.getElementById("count");

    if (count) {
        count.innerText = popped;
    }

    createPopEffect(balloon);

    if (popped >= 6) {

        setTimeout(() => {

            const nextButton =
                document.getElementById("balloonNext");

            if (nextButton) {
                nextButton.classList.remove("hidden");
            }

        }, 600);
    }
}


/* =========================
   BALLOON POP EFFECT
========================= */

function createPopEffect(balloon) {

    const rect = balloon.getBoundingClientRect();

    for (let i = 0; i < 12; i++) {

        const particle = document.createElement("span");

        particle.innerText = "✨";

        particle.style.position = "fixed";
        particle.style.left =
            rect.left + rect.width / 2 + "px";
        particle.style.top =
            rect.top + rect.height / 2 + "px";
        particle.style.fontSize = "18px";
        particle.style.zIndex = "1000";
        particle.style.pointerEvents = "none";

        document.body.appendChild(particle);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            40 + Math.random() * 80;

        particle.animate(
            [
                {
                    transform: "translate(0,0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(
                            ${Math.cos(angle) * distance}px,
                            ${Math.sin(angle) * distance}px
                        )`,
                    opacity: 0
                }
            ],
            {
                duration: 700,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            particle.remove();
        }, 700);
    }
}


/* =========================
   REASONS
========================= */

const reasons = [

    "Because your smile makes my whole day better. ❤️",

    "Because you are my favourite person in this whole world. 🫂",

    "Because talking to you is my favourite part of every day. 🥺❤️",

    "Because your presence makes everything feel better. 🦋",

    "Because you are my favourite notification. 📱💕",

    "Because I can never stay angry with you for too long. 🫠",

    "Because you make ordinary moments feel special. ✨",

    "Because I simply cannot imagine my favourite memories without you. ❤️",

    "Because you are my person. My favourite person. Forever. 🫀",

    "Because... you're YOU. And that's enough for me. 🥺🫂"

];


function newReason() {

    const box = document.getElementById("reason");

    if (!box) return;

    reasonIndex++;

    if (reasonIndex >= reasons.length) {
        reasonIndex = 0;
    }

    box.style.opacity = "0";
    box.style.transform = "scale(.8)";

    setTimeout(() => {

        box.innerText = reasons[reasonIndex];

        box.style.opacity = "1";
        box.style.transform = "scale(1)";

    }, 250);
}


/* =========================
   BLOW CANDLES
========================= */

function blowCandles() {

    document
        .querySelectorAll(".candle")
        .forEach(candle => {
            candle.classList.add("off");
        });

    const wishText =
        document.getElementById("wishText");

    if (wishText) {

        wishText.innerText =
            "Wish made! May every wish in your heart come true. ✨❤️";
    }

    createConfetti();

    const finalButton =
        document.getElementById("finalButton");

    if (finalButton) {
        finalButton.classList.remove("hidden");
    }
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "✨",
        "💖",
        "💕",
        "🎉",
        "🌸",
        "⭐",
        "❤️"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position = "fixed";
        confetti.style.left =
            Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize =
            15 + Math.random() * 20 + "px";
        confetti.style.zIndex = "999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh)
                         rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    2500 + Math.random() * 2000,

                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}


/* =========================
   HEARTS
========================= */

function createHearts() {

    const container =
        document.querySelector(".hearts");

    if (!container) return;

    for (let i = 0; i < 8; i++) {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.innerText =
            Math.random() > 0.5
                ? "❤️"
                : "💕";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            5 + Math.random() * 5 + "s";

        heart.style.fontSize =
            15 + Math.random() * 20 + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
}


/* =========================
   RESTART
========================= */

function restart() {

    popped = 0;
    reasonIndex = 0;

    const count =
        document.getElementById("count");

    if (count) {
        count.innerText = "0";
    }

    const balloonNext =
        document.getElementById("balloonNext");

    if (balloonNext) {
        balloonNext.classList.add("hidden");
    }

    const finalButton =
        document.getElementById("finalButton");

    if (finalButton) {
        finalButton.classList.add("hidden");
    }

    const wishText =
        document.getElementById("wishText");

    if (wishText) {

        wishText.innerText =
            "Make your wish... then blow the candles! 🕯️";
    }

    document
        .querySelectorAll(".balloon")
        .forEach(balloon => {
            balloon.classList.remove("popped");
        });

    document
        .querySelectorAll(".candle")
        .forEach(candle => {
            candle.classList.remove("off");
        });

    showPage(1);

    music = document.getElementById("music");

    if (music) {
        music.currentTime = 0;
    }
}


/* =========================
   INITIALIZE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    music = document.getElementById("music");

    createHearts();

    setInterval(createHearts, 3000);

});