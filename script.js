// ----------- SIDE MENU TOGGLE -----------
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

// ----------- PRODUCT GALLERY -----------
let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small-img");

if (productImg && smallImg.length >= 4) {
    smallImg[0].onclick = function(){ productImg.src = smallImg[0].src; }
    smallImg[1].onclick = function(){ productImg.src = smallImg[1].src; }
    smallImg[2].onclick = function(){ productImg.src = smallImg[2].src; }
    smallImg[3].onclick = function(){ productImg.src = smallImg[3].src; }
}

// ----------- TAB SWITCHING (account.html) -----------
document.addEventListener("DOMContentLoaded", () => {

    // --- Tab logic ---
    const tabSignin   = document.getElementById('tab-signin');
    const tabSignup   = document.getElementById('tab-signup');
    const panelSignin = document.getElementById('signin');
    const panelSignup = document.getElementById('signup');
    const welcomeSignin = document.getElementById('welcome-signin');
    const welcomeSignup = document.getElementById('welcome-signup');

    if (tabSignin && tabSignup) {
        function switchTab(tab) {
            if (tab === 'signin') {
                tabSignin.classList.add('active');
                panelSignin.classList.add('active');
                welcomeSignin.classList.add('active');
                tabSignup.classList.remove('active');
                panelSignup.classList.remove('active');
                welcomeSignup.classList.remove('active');
            } else {
                tabSignup.classList.add('active');
                panelSignup.classList.add('active');
                welcomeSignup.classList.add('active');
                tabSignin.classList.remove('active');
                panelSignin.classList.remove('active');
                welcomeSignin.classList.remove('active');
            }
        }
        tabSignin.addEventListener('click', () => switchTab('signin'));
        tabSignup.addEventListener('click', () => switchTab('signup'));
    }

    // ----------- ANIMATED CANVAS BACKGROUND (account.html) -----------
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    function rand(a, b) { return a + Math.random() * (b - a); }

    const shapes = [];

    // Big filled circles
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

    // Dot grids
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

    // Hexagon outline
    shapes.push({ type: 'hex', xr: 0.55, yr: 0.35, size: 120, t: rand(0, Math.PI * 2), speed: 0.004 });

    // Circle outline
    shapes.push({ type: 'circleOutline', xr: 0.88, yr: 0.55, r: 55, t: rand(0, Math.PI * 2), speed: 0.005 });

    // Plus signs
    [
        { x: 0.38, y: 0.68 },
        { x: 0.78, y: 0.48 },
        { x: 0.12, y: 0.64 },
    ].forEach(c => shapes.push({
        type: 'plus', xr: c.x, yr: c.y,
        t: rand(0, Math.PI * 2), speed: rand(0.004, 0.009)
    }));

    // Circuit lines
    shapes.push({ type: 'line1', t: 0, speed: 0.004 });

    // --- Draw helpers ---
    function drawWave(t, phase, alpha, yBase) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        const w = W(), h = H();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 4) {
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
        for (let i = 0; i < 3; i++) {
            const ox = i * 10;
            ctx.beginPath();
            ctx.moveTo(x + ox, y - 8);
            ctx.lineTo(x + ox + 8, y);
            ctx.lineTo(x + ox, y + 8);
            ctx.stroke();
        }
        ctx.restore();
    }

    function drawTriangles(x, y, col, alpha) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = col;
        [[0,0],[14,0],[28,0],[7,-14],[21,-14]].forEach(([tx, ty]) => {
            ctx.beginPath();
            ctx.moveTo(x + tx,     y + ty - 6);
            ctx.lineTo(x + tx + 6, y + ty + 5);
            ctx.lineTo(x + tx - 6, y + ty + 5);
            ctx.closePath();
            ctx.fill();
        });
        ctx.restore();
    }

    function drawHex(x, y, size, col, alpha) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = col;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            const px = x + size * Math.cos(angle);
            const py = y + size * Math.sin(angle);
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }

    function drawDots(x, y, cols, rows, col, alpha) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = col;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                ctx.beginPath();
                ctx.arc(x + c * 14, y + r * 14, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }
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

    // --- Main animation loop ---
    function animate() {
        ctx.clearRect(0, 0, W(), H());

        shapes.forEach(s => {
            const w = W(), h = H();
            s.t += s.speed || 0.005;

            if (s.type === 'wave') {
                drawWave(s.t, 0, 0.5, 0.68);

            } else if (s.type === 'wave2') {
                drawWave(s.t, Math.PI * 0.5, 0.35, 0.78);

            } else if (s.type === 'line1') {
                drawLine1(s.t);

            } else if (s.type === 'circle') {
                const x = s.xr * w + Math.sin(s.t) * 25;
                const y = s.yr * h + Math.cos(s.t * 0.8) * 20;
                ctx.save();
                ctx.globalAlpha = s.op;
                ctx.beginPath();
                ctx.arc(x, y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = s.col;
                ctx.fill();
                ctx.restore();

            } else if (s.type === 'ball') {
                const x = s.xr * w + Math.sin(s.t) * s.ax;
                const y = s.yr * h + Math.cos(s.t * 0.9) * s.ay;
                ctx.save();
                ctx.globalAlpha = 0.9;
                const grad = ctx.createRadialGradient(x - s.r * 0.3, y - s.r * 0.3, 0, x, y, s.r);
                grad.addColorStop(0, '#ffffff');
                grad.addColorStop(1, 'rgba(200,220,245,0.7)');
                ctx.beginPath();
                ctx.arc(x, y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
                ctx.restore();

            } else if (s.type === 'dots') {
                const x = s.xr * w + Math.sin(s.t) * 8;
                const y = s.yr * h + Math.cos(s.t * 0.7) * 8;
                drawDots(x, y, s.cols, s.rows, '#1a5fa8', 0.35);

            } else if (s.type === 'chevron') {
                const x = s.xr * w + Math.sin(s.t) * 10;
                const y = s.yr * h + Math.cos(s.t * 0.8) * 8;
                drawChevron(x, y, '#1a5fa8', 0.45);

            } else if (s.type === 'triangles') {
                const x = s.xr * w + Math.sin(s.t) * 10;
                const y = s.yr * h + Math.cos(s.t * 0.6) * 10;
                drawTriangles(x, y, '#1a5fa8', 0.45);

            } else if (s.type === 'hex') {
                const x = s.xr * w + Math.sin(s.t) * 12;
                const y = s.yr * h + Math.cos(s.t * 0.75) * 10;
                drawHex(x, y, s.size, '#1a5fa8', 0.15);

            } else if (s.type === 'circleOutline') {
                const x = s.xr * w + Math.sin(s.t) * 10;
                const y = s.yr * h + Math.cos(s.t * 0.9) * 8;
                ctx.save();
                ctx.globalAlpha = 0.2;
                ctx.strokeStyle = '#1a5fa8';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(x, y, s.r, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();

            } else if (s.type === 'plus') {
                const x = s.xr * w + Math.sin(s.t) * 9;
                const y = s.yr * h + Math.cos(s.t * 0.85) * 9;
                drawPlus(x, y, '#1a5fa8', 0.4);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
});