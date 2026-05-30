// ----------- SIDE MENU TOGGLE (Para sa ibang pages) -----------
let menuitems = document.getElementsByClassName("menu-items")[0];

function menuToggle(){
    if (menuitems) {
        if (menuitems.style.maxHeight === "200px") {
            menuitems.style.maxHeight = "0px";
            menuitems.style.padding = "0 30px";
        } else {
            menuitems.style.maxHeight = "200px";
            menuitems.style.padding = "10px 30px 20px";
        }
    }
}

// --------------------- PRODUCT GALLERY (Para sa ibang pages) ---------------------
let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small-img");

if (productImg && smallImg.length >= 4) {
    smallImg[0].onclick = function(){ productImg.src = smallImg[0].src; }
    smallImg[1].onclick = function(){ productImg.src = smallImg[1].src; }
    smallImg[2].onclick = function(){ productImg.src = smallImg[2].src; }
    smallImg[3].onclick = function(){ productImg.src = smallImg[3].src; }
}

//----------- TAB SWITCHING FOR ACCOUNT.HTML (NovaCart) ----------------//
// Gumagamit ng DOMContentLoaded para masigurong load muna ang HTML bago tumakbo ang JS
document.addEventListener("DOMContentLoaded", () => {
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    const panelSignin = document.getElementById('signin');
    const panelSignup = document.getElementById('signup');
    const welcomeSignin = document.getElementById('welcome-signin');
    const welcomeSignup = document.getElementById('welcome-signup');

    if (tabSignin && tabSignup) {
        function switchTab(tab) {
            if (tab === 'signin') {
                // I-activate ang Sign In
                tabSignin.classList.add('active');
                panelSignin.classList.add('active');
                welcomeSignin.classList.add('active');
                
                // I-deactivate ang Sign Up
                tabSignup.classList.remove('active');
                panelSignup.classList.remove('active');
                welcomeSignup.classList.remove('active');
            } else {
                // I-activate ang Sign Up
                tabSignup.classList.add('active');
                panelSignup.classList.add('active');
                welcomeSignup.classList.add('active');
                
                // I-deactivate ang Sign In
                tabSignin.classList.remove('active');
                panelSignin.classList.remove('active');
                welcomeSignin.classList.remove('active');
            }
        }

        tabSignin.addEventListener('click', () => switchTab('signin'));
        tabSignup.addEventListener('click', () => switchTab('signup'));
    }
});


//---------------FOR ANIMATION BACKGROUND for Account.html-------------------------//

const canvas = document.getElementById('bgCanvas');

if(!canvas) return;

const ctx = canvas.getContext('2d');


function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener('resize',resize);

const W = () => canvas.width;
const H = () => canvas.height;

 function rand(a, b) { 
    
    return a + Math.random() * (b - a);

}

const shapes = [];

//For Circles

    [
        { x: 0.08, y: 0.85, r: 90,  col: '#2a7de1', op: 1    },
        { x: 0.95, y: 0.92, r: 70,  col: '#1a6fd4', op: 1    },
        { x: 0.02, y: 0.15, r: 50,  col: '#4da6ff', op: 0.85 },
    ].forEach(c => shapes.push({
        type: 'circle', xr: c.x, yr: c.y, r: c.r, col: c.col, op: c.op,
        t: rand(0, Math.PI * 2), speed: rand(0.004, 0.009)
    }));


   // White gloss balls
    [
        { x: 0.22, y: 0.55, r: 18, ax: 30, ay: 30 },
        { x: 0.88, y: 0.38, r: 13, ax: 25, ay: 20 },
        { x: 0.60, y: 0.82, r: 10, ax: 20, ay: 20 },
    ].forEach(c => shapes.push({
        type: 'ball', xr: c.x, yr: c.y, r: c.r, ax: c.ax, ay: c.ay,
        t: rand(0, Math.PI * 2), speed: rand(0.006, 0.013)
    }));
 
    // Waves
    shapes.push({ type: 'wave',  t: 0,       speed: 0.007 });
    shapes.push({ type: 'wave2', t: Math.PI, speed: 0.005 });
 
    // For dot grids
    [
        { x: 0.08, y: 0.42, cols: 4, rows: 4 },
        { x: 0.72, y: 0.08, cols: 5, rows: 3 },
    ].forEach(g => shapes.push({
        type: 'dots', xr: g.x, yr: g.y, cols: g.cols, rows: g.rows,
        t: rand(0, Math.PI * 2), speed: rand(0.004, 0.008)
    }));

      // Chevrons >>>
    [
        { x: 0.28, y: 0.12 },
        { x: 0.68, y: 0.72 },
    ].forEach(c => shapes.push({
        type: 'chevron', xr: c.x, yr: c.y,
        t: rand(0, Math.PI * 2), speed: rand(0.003, 0.007)
    }));

     // Triangle clusters

    [
        { x: 0.18, y: 0.22 },
        { x: 0.82, y: 0.18 },
    ].forEach(c => shapes.push({
        type: 'triangles', xr: c.x, yr: c.y,
        t: rand(0, Math.PI * 2), speed: rand(0.005, 0.009)
    }));


    //-----for DRAW HELPERS-----

    function drawWave(t, phase, alpha, yBase) {
             ctx.save();
             ctx.globalAlpha = alpha;
             ctx.beginPath();
             const w = W(), h =H();
             ctx.moveTo(0, h);
             for (let x = 0; x <= W; x += 4) {
                  const y = yBase * h
                    + Math.sin((x / w) * Math.PI * 2.5 + t + phase) * 50
                    + Math.sin((x / w) * Math.PI * 1.2 + t * 0.7) * 30;
                ctx.lineTo(x, y);
             }
        ctx.lineTo(w, h);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, yBase * h, 0, h);
        grad.addColorStop(0, 'rgba(70,150,230,0.55)');
        grad.addColorStop(1, 'rgba(30,100,200,0.70)');
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
    }

    function drawChevron(x, y, col, alpha) {
       ctx.save();
       ctx.globalAlpha = alpha;
       ctx.strokeStyle = col;
       ctx.lineWidth = 1.5;
       ctx.lineCap = 'round';
       ctx.lineJoin = 'round';

       for ( let i = 0; i < 3; i++) {
         const ox = 1 * 10;
         ctx.beginPath();
         ctx.moveTo(x + ox, y - 8);
         ctx.lineTo(x + ox + 8, y);
         ctx.lineTo(x + ox, y + 8);
         ctx.stroke();
       }

       ctx.restore();


    }


    
    function drawPlus(x, y, col, alpha, size = 9) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = col;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x - size, y); ctx.lineTo(x + size, y);
        ctx.moveTo(x, y - size); ctx.lineTo(x, y + size);
        ctx.stroke();
        ctx.restore();
    }
 
    function drawLine1(t) {
        const w = W(), h = H();
        const ox = Math.sin(t) * 15;
        const oy = Math.cos(t * 0.7) * 10;
        ctx.save();
        ctx.globalAlpha = 0.18;
        ctx.strokeStyle = '#1a4a8a';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(w * 0.25 + ox, h * 0.05 + oy);
        ctx.lineTo(w * 0.55 + ox, h * 0.05 + oy);
        ctx.lineTo(w * 0.65 + ox, h * 0.15 + oy);
        ctx.lineTo(w * 0.82 + ox, h * 0.15 + oy);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(w * 0.04 + ox, h * 0.40 + oy);
        ctx.lineTo(w * 0.18 + ox, h * 0.30 + oy);
        ctx.lineTo(w * 0.30 + ox, h * 0.30 + oy);
        ctx.stroke();
        ctx.restore();
    }

