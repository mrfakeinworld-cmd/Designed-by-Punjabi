const correctPassword = "Huda";

const passwordScreen = document.getElementById("passwordScreen");
const surpriseScreen = document.getElementById("surpriseScreen");
const cakeQuestionScreen = document.getElementById("cakeQuestionScreen");
const cakeScreen = document.getElementById("cakeScreen");
const wishScreen = document.getElementById("wishScreen");
const cutScreen = document.getElementById("cutScreen");
const messageScreen = document.getElementById("messageScreen");

const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const passwordError = document.getElementById("passwordError");

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach((item) => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}

passwordButton.addEventListener("click", () => {
    if (passwordInput.value === correctPassword) {
        showScreen(surpriseScreen);
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Wrong password ❤️";
        passwordInput.value = "";
    }
});

passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        passwordButton.click();
    }
});

document.getElementById("surpriseYes").addEventListener("click", () => {
    showScreen(cakeQuestionScreen);
});

document.getElementById("surpriseNo").addEventListener("click", () => {
    showScreen(cakeQuestionScreen);
});

document.getElementById("cakeYes").addEventListener("click", () => {
    showScreen(cakeScreen);
});

document.getElementById("cakeNo").addEventListener("click", () => {
    showScreen(cakeQuestionScreen);
});

document.getElementById("wishButton").addEventListener("click", () => {
    showScreen(wishScreen);
});

document.getElementById("blowButton").addEventListener("click", () => {
    showScreen(cutScreen);
});

document.getElementById("cutScreen").addEventListener("click", () => {
    showScreen(messageScreen);
});

document.getElementById("doneButton").addEventListener("click", () => {
    showScreen(passwordScreen);
    passwordInput.value = "";
});
