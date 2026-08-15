/* =========================
   HUDA ZAHRA ❤️
   COMPLETE INTERACTION
========================== */


/* =========================
   PASSWORD
========================== */

const correctPassword = "Huda";


/* =========================
   SHORTCUT
========================== */

const $ = id => document.getElementById(id);


/* =========================
   SCREENS
========================== */

const screens = {

    password: $("passwordScreen"),

    surprise: $("surpriseScreen"),

    box: $("boxScreen"),

    cake: $("cakeScreen"),

    wish: $("wishScreen"),

    cut: $("cutScreen"),

    message: $("messageScreen")

};


/* =========================
   SCREEN FUNCTION
========================== */

function showScreen(screen) {

    Object.values(screens).forEach(screenItem => {

        screenItem.classList.remove("active");

    });


    screen.classList.add("active");


    window.scrollTo(0, 0);

}


/* =========================
   FLOATING HEARTS
========================== */

function hearts(count = 14) {

    const holder = $("hearts");


    for (let i = 0; i < count; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("span");


            heart.className =
                "floatingHeart";


            heart.textContent =
                "❤️";


            heart.style.left =
                (5 + Math.random() * 90) + "vw";


            heart.style.top =
                (65 + Math.random() * 25) + "vh";


            holder.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 2600);


        }, i * 90);

    }

}


/* =========================
   PASSWORD BUTTON
========================== */

$("passwordButton").addEventListener(
    "click",
    () => {

        const value =
            $("passwordInput").value.trim();


        if (value === correctPassword) {

            $("passwordError").textContent = "";


            showScreen(
                screens.surprise
            );


            hearts(8);


        } else {

            $("passwordError").textContent =
                "Wrong password ❤️";


            $("passwordInput").value = "";

        }

    }
);


/* =========================
   PASSWORD ENTER KEY
========================== */

$("passwordInput").addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            $("passwordButton").click();

        }

    }
);


/* =========================
   SURPRISE SCREEN
========================== */

$("surpriseYes").addEventListener(
    "click",
    () => {

        showScreen(
            screens.box
        );

    }
);


$("surpriseNo").addEventListener(
    "click",
    () => {

        showScreen(
            screens.box
        );

    }
);


/* =========================
   MYSTERY BOX
========================== */

let boxOpened = false;


function openBox() {

    if (boxOpened) {
        return;
    }


    boxOpened = true;


    const box =
        $("giftBox");


    box.classList.add("open");


    $("boxHint").textContent =
        "Wait... something is coming ❤️";


    $("openBoxButton").disabled =
        true;


    hearts(18);


    setTimeout(() => {

        showScreen(
            screens.cake
        );


        const cake =
            $("cake");


        cake.classList.add(
            "revealed"
        );


        setTimeout(() => {

            cake.classList.add(
                "breathe"
            );

        }, 1500);


    }, 1000);

}


/* =========================
   CLICK BOX
========================== */

$("giftBox").addEventListener(
    "click",
    openBox
);


/* =========================
   KEYBOARD BOX
========================== */

$("giftBox").addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openBox();

        }

    }
);


/* =========================
   OPEN BUTTON
========================== */

$("openBoxButton").addEventListener(
    "click",
    openBox
);


/* =========================
   CAKE → WISH
========================== */

$("wishButton").addEventListener(
    "click",
    () => {

        $("cake").classList.remove(
            "breathe"
        );


        showScreen(
            screens.wish
        );

    }
);


/* =========================
   BLOW CANDLES
========================== */

$("blowButton").addEventListener(
    "click",
    () => {

        document
            .querySelectorAll(".flame")
            .forEach(flame => {

                flame.classList.add("off");

            });


        hearts(22);


        setTimeout(() => {

            showScreen(
                screens.cut
            );


            $("cutMessage").textContent =
                "Your wish has been made... ❤️";


            setTimeout(() => {

                $("knife").classList.add(
                    "visible"
                );

            }, 500);


        }, 800);

    }
);


/* =========================
   CUT CAKE
========================== */

let cutDone = false;


/* 
   IMPORTANT:
   Only ONE click listener
   is used for the cut button.
*/

$("cutButton").addEventListener(
    "click",
    () => {

        /* First click = cut */

        if (!cutDone) {

            cutDone = true;


            $("knife").classList.add(
                "slash"
            );


            setTimeout(() => {

                $("cutCake").classList.add(
                    "cut"
                );


                $("cutMessage").textContent =
                    "A piece of happiness, just for you... 🍰❤️";


                hearts(16);


            }, 700);


            setTimeout(() => {

                $("cutButton").textContent =
                    "Continue to your message 💌";


            }, 1800);


            return;

        }


        /* Second click = message */

        if (
            cutDone &&
            $("cutCake").classList.contains("cut")
        ) {

            showScreen(
                screens.message
            );

        }

    }
);


/* =========================
   DONE BUTTON
========================== */

$("doneButton").addEventListener(
    "click",
    () => {

        showScreen(
            screens.password
        );


        $("passwordInput").value =
            "";


        $("passwordError").textContent =
            "";


        /* Reset gift box */

        $("giftBox").classList.remove(
            "open"
        );


        $("openBoxButton").disabled =
            false;


        boxOpened = false;


        /* Reset cake */

        $("cake").classList.remove(
            "revealed",
            "breathe"
        );


        /* Reset candles */

        document
            .querySelectorAll(".flame")
            .forEach(flame => {

                flame.classList.remove(
                    "off"
                );

            });


        /* Reset knife */

        $("knife").classList.remove(
            "visible",
            "slash"
        );


        /* Reset cake cut */

        $("cutCake").classList.remove(
            "cut"
        );


        /* Reset button */

        $("cutButton").textContent =
            "🔪 Cut the Cake";


        cutDone = false;

    }
);


/* =========================
   START WEBSITE
========================== */

showScreen(
    screens.password
);
