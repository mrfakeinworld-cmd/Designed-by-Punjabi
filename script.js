// Variables for tracking button taps
let no1Taps = 0;
let no2Taps = 0;

// Screen 1: Password Check
function checkPassword() {
    const input = document.getElementById('pass-input').value.trim();
    if(input.toLowerCase() === 'huda') {
        nextScreen(2);
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// Screen Transitions
function nextScreen(num) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${num}`).classList.add('active');
    
    // Trigger confetti only when arriving at the final screen
    if(num === 5) throwConfetti();
}

// Dynamic 'No' Button Shrink & 'Yes' Button Grow Logic
function shrinkNo(stage) {
    if(stage === 1) {
        no1Taps++;
        const yesBtn = document.getElementById('yes-1');
        const noBtn = document.getElementById('no-1');
        
        yesBtn.style.transform = `scale(${1 + (no1Taps * 0.3)})`;
        noBtn.style.transform = `scale(${1 - (no1Taps * 0.12)})`;
        
        if(no1Taps >= 7) {
            noBtn.style.display = 'none';
            yesBtn.style.position = 'absolute';
            yesBtn.style.width = '100%';
            yesBtn.style.height = '100%';
            yesBtn.style.borderRadius = '0';
            yesBtn.style.transform = 'scale(1)';
            yesBtn.innerHTML = "YES! 🎉";
        }
    } 
    else if (stage === 2) {
        no2Taps++;
        const yesBtn = document.getElementById('yes-2');
        const noBtn = document.getElementById('no-2');
        
        yesBtn.style.transform = `scale(${1 + (no2Taps * 0.2)})`;
        noBtn.style.transform = `scale(${1 - (no2Taps * 0.25)})`;
        
        if(no2Taps >= 3) {
            noBtn.style.display = 'none';
        }
    }
}

// 3D Box Opening Animation
function openBox() {
    document.getElementById('the-box').classList.add('open');
    document.getElementById('cake-q').style.display = 'none';
    document.getElementById('choices-3').style.display = 'none';
    
    setTimeout(() => {
        document.getElementById('make-wish-btn').style.display = 'block';
    }, 1500);
}

// Move Cake from Box to Interaction Area
function startCakeInteraction() {
    nextScreen(4);
    const cakeDisplay = document.getElementById('cake-display-area');
    const theCake = document.getElementById('cake-body');
    
    // Transfer the HTML node cleanly to preserve the 3D state
    cakeDisplay.appendChild(theCake);
    document.getElementById('screen-4-content').style.display = 'flex';

    // Add tap event listener to blow candles
    theCake.addEventListener('click', blowCandles, {once: true});
}

// Wind, Extinguish, and Knife Cut Animation Sequence
function blowCandles() {
    // 1. Trigger Wind Animation
    document.getElementById('wind1').style.animation = 'blowWind 1s forwards';
    document.getElementById('wind2').style.animation = 'blowWind 1s forwards 0.2s';
    
    // 2. Extinguish Candle
    setTimeout(() => {
        document.getElementById('flame').style.display = 'none';
    }, 600);

    // 3. Trigger Knife Cut
    setTimeout(() => {
        const knife = document.getElementById('knife');
        knife.style.animation = 'cutCake 1.5s forwards';
        
        // 4. Split cake into two pieces
        setTimeout(() => {
            const theCake = document.getElementById('cake-body');
            theCake.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
            
            let rightHalf = theCake.cloneNode(true);
            rightHalf.style.clipPath = 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)';
            rightHalf.style.position = 'absolute';
            rightHalf.style.top = '0'; rightHalf.style.left = '0';
            document.getElementById('cake-display-area').appendChild(rightHalf);

            theCake.style.animation = 'separateLeft 1s forwards';
            rightHalf.style.animation = 'separateRight 1s forwards';
            
            // 5. Show final button to proceed
            setTimeout(() => {
                document.getElementById('my-wish-is-btn').style.display = 'block';
            }, 1000);

        }, 750); // Mid-cut timing
        
    }, 1500);
}

// Final Blackout Screen
function closeSite() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 50);
}

// Confetti Engine
function throwConfetti() {
    const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#ff6b81'];
    for(let i=0; i<50; i++) {
        let conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.background = colors[Math.floor(Math.random() * colors.length)];
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.top = '-10px';
        conf.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(conf);

        let fallSpeed = Math.random() * 3 + 2;
        conf.animate([
            { transform: `translate3d(0,0,0) rotate(0deg)` },
            { transform: `translate3d(${Math.random()*100 - 50}px, 100vh, 0) rotate(${Math.random()*720}deg)` }
        ], {
            duration: fallSpeed * 1000,
            easing: 'linear',
            iterations: 1,
            fill: 'forwards'
        });
    }
}
