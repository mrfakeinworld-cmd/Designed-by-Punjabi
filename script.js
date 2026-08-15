/* =========================================
   HUDA ZAHRA ❤️
   COMPLETE INTERACTION SCRIPT
========================================= */

const correctPassword = "Huda";

/* ---------- SCREENS ---------- */

const passwordScreen = document.getElementById("passwordScreen");
const surpriseScreen = document.getElementById("surpriseScreen");
const cakeQuestionScreen = document.getElementById("cakeQuestionScreen");
const cakeScreen = document.getElementById("cakeScreen");
const wishScreen = document.getElementById("wishScreen");
const cutScreen = document.getElementById("cutScreen");
const messageScreen = document.getElementById("messageScreen");

/* ---------- PASSWORD ---------- */

const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const passwordError = document.getElementById("passwordError");

/* ---------- OBJECTS ---------- */

const mysteryBox = document.getElementById("mysteryBox");
const cakeContainer = document.getElementById("cakeContainer");
const wishButton = document.getElementById("wishButton");
const blowButton = document.getElementById("blowButton");

const cutCake = document.getElementById("cutCake");
const knife = document.getElementById("knife");
const cutMessage = document.getElementById("cutMessage");

/* =========================================
   SCREEN CHANGER
========================================= */

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}


/* =========================================
   ANIMATION STYLES
   These are added automatically so you
   don't need to change CSS for animations.
========================================= */

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `

/* SCREEN FADE */

.screen.active {
    animation: screenAppear 0.7s ease;
}

@keyframes screenAppear {
    from {
        opacity: 0;
        transform: scale(0.96);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}


/* MYSTERY BOX */

#mysteryBox {
    font-size: 100px;
    display: inline-block;
    cursor: pointer;
    transition: transform 0.4s ease;
}

.mystery-open {
    animation: mysteryOpen 1.2s ease forwards;
}

@keyframes mysteryOpen {

    0% {
        transform: scale(1) rotate(0deg);
    }

    25% {
        transform: scale(1.15) rotate(-8deg);
    }

    50% {
        transform: scale(1.2) rotate(8deg);
    }

    75% {
        transform: scale(1.15) rotate(-5deg);
    }

    100% {
        transform: scale(0) rotate(20deg);
        opacity: 0;
    }
}


/* CAKE COMING OUT */

#cakeContainer {
    display: inline-block;
    font-size: 150px;
    transform: scale(0);
    opacity: 0;
}

.cakeAppear {
    animation: cakeAppear 1.5s cubic-bezier(.17,.67,.35,1.3) forwards;
}

@keyframes cakeAppear {

    0% {
        transform: scale(0) translateY(100px);
        opacity: 0;
    }

    60% {
        transform: scale(1.25) translateY(-20px);
        opacity: 1;
    }

    80% {
        transform: scale(0.92) translateY(5px);
    }

    100% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}


/* CAKE BREATHING / ENLARGE */

.cakePulse {
    animation: cakePulse 2s ease-in-out infinite;
}

@keyframes cakePulse {

    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.12);
    }

    100% {
        transform: scale(1);
    }
}


/* KNIFE */

#knife {
    font-size: 90px;
    display: inline-block;
    opacity: 0;
    transform: translateX(180px) rotate(-45deg);
}

.knifeAppear {
    animation: knifeAppear 1.2s ease forwards;
}

@keyframes knifeAppear {

    0% {
        opacity: 0;
        transform: translateX(180px) rotate(-45deg);
    }

    60% {
        opacity: 1;
        transform: translateX(-20px) rotate(-15deg);
    }

    100% {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
    }
}


/* CUTTING MOTION */

.knifeCut {
    animation: knifeCut 1s ease-in-out forwards;
}

@keyframes knifeCut {

    0% {
        transform: translateX(0) rotate(0deg);
    }

    40% {
        transform: translateX(-25px) rotate(-25deg);
    }

    70% {
        transform: translateX(20px) rotate(20deg);
    }

    100% {
        transform: translateX(0) rotate(0deg);
    }
}


/* CAKE CUT */

.cakeCut {
    animation: cakeCut 1.2s ease forwards;
}

@keyframes cakeCut {

    0% {
        transform: scale(1);
    }

    30% {
        transform: scale(1.08);
    }

    60% {
        transform: scale(0.96);
    }

    100% {
        transform: scale(0.9);
    }
}


/* MESSAGE */

#cutMessage {
    transition: all 0.5s ease;
}

.cutDone {
    font-size: 24px;
    transform: scale(1.1);
}


/* HEARTS */

.floatingHeart {
    position: fixed;
    pointer-events: none;
    font-size: 30px;
    animation: heartFloat 2.5s ease-out forwards;
    z-index: 9999;
}

@keyframes heartFloat {

    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    100% {
        opacity: 0;
        transform: translateY(-250px) scale(1.8);
    }
}

`;

document.head.appendChild(animationStyle);


/* =========================================
   PASSWORD
========================================= */

passwordButton.addEventListener("click", () => {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        passwordError.textContent = "";

        showScreen(surpriseScreen);

        passwordInput.value = "";

    } else {

        passwordError.textContent = "Wrong password ❤️";

        passwordInput.value = "";

    }

});


passwordInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        passwordButton.click();
    }

});


/* =========================================
   SURPRISE
========================================= */

document.getElementById("surpriseYes").addEventListener("click", () => {

    showScreen(cakeQuestionScreen);

});


document.getElementById("surpriseNo").addEventListener("click", () => {

    showScreen(cakeQuestionScreen);

});


/* =========================================
   CAKE QUESTION
========================================= */

document.getElementById("cakeYes").addEventListener("click", () => {

    /* Open mystery box first */

    mysteryBox.classList.add("mystery-open");

    createHearts();

    /* Then show cake */

    setTimeout(() => {

        showScreen(cakeScreen);

        cakeContainer.classList.add("cakeAppear");

        /* Start gentle enlargement */

        setTimeout(() => {
            cakeContainer.classList.add("cakePulse");
        }, 1600);

    }, 1000);

});


document.getElementById("cakeNo").addEventListener("click", () => {

    /* Make NO slightly playful */

    const noButton = document.getElementById("cakeNo");

    noButton.style.transform = "scale(0.85)";

    setTimeout(() => {

        noButton.style.transform = "";

        showScreen(cakeQuestionScreen);

    }, 400);

});


/* =========================================
   CAKE SCREEN
========================================= */

wishButton.addEventListener("click", () => {

    /* Stop cake animation */

    cakeContainer.classList.remove("cakePulse");

    showScreen(wishScreen);

});


/* =========================================
   WISH / BLOW CANDLES
========================================= */

blowButton.addEventListener("click", () => {

    createHearts();

    showScreen(cutScreen);

    /* Reset knife and cake */

    knife.classList.remove("knifeAppear");
    cutCake.classList.remove("cakeCut");

    /* Make knife appear */

    setTimeout(() => {

        knife.classList.add("knifeAppear");

    }, 500);

    /* Automatically perform cutting */

    setTimeout(() => {

        knife.classList.add("knifeCut");

    }, 1700);

    setTimeout(() => {

        cutCake.classList.add("cakeCut");

    }, 2100);

    setTimeout(() => {

        cutMessage.textContent = "Your wish is coming true... ❤️";

        cutMessage.classList.add("cutDone");

    }, 3000);

});


/* =========================================
   CUT SCREEN
   Click after animation → message
========================================= */

cutScreen.addEventListener("click", () => {

    showScreen(messageScreen);

});


/* =========================================
   DONE
========================================= */

document.getElementById("doneButton").addEventListener("click", () => {

    showScreen(passwordScreen);

    passwordInput.value = "";

    passwordError.textContent = "";

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "floatingHeart";

            heart.textContent = "❤️";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.top =
                (60 + Math.random() * 30) + "vh";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2500);

        }, i * 120);

    }

}


/* =========================================
   INITIAL STATE
========================================= */

showScreen(passwordScreen);
