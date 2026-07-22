// ============================================================
//  PRODUCT DATABASE
// ============================================================
const PRODUCTS = {
    tshirt: {
        name: "Printed T-Shirt",
        price: 19.99,
        category: "Fashion / Men's Clothing",
        img: "pics/T-shirt.png",
        description: "A comfortable everyday printed t-shirt made from breathable cotton. Perfect for casual outings and relaxed styles.",
        variants: ["Select Size", "XS", "S", "M", "L", "XL", "XXL"]
    },
    rtx5090: {
        name: "RTX 5090 Graphics Card",
        price: 1999.99,
        category: "Electronics / PC Components",
        img: "pics/rtx 50.png",
        description: "NVIDIA's flagship GPU featuring next-gen ray tracing and AI-powered performance. Built for 4K gaming and professional workloads.",
        variants: ["Select Model", "Founders Edition", "ASUS ROG", "MSI Gaming X"]
    },
    ben10: {
        name: "Ben 10 Kid's Short",
        price: 9.99,
        category: "Fashion / Kids",
        img: "pics/Ben-10.png",
        description: "Fun and colorful Ben 10 themed shorts for kids. Made from soft, durable fabric perfect for active play.",
        variants: ["Select Size", "3-4 yrs", "5-6 yrs", "7-8 yrs", "9-10 yrs"]
    },
    ariadress: {
        name: "Aria Linen Shirt Dress",
        price: 10.99,
        category: "Fashion / Women's Clothing",
        img: "pics/women dress.png",
        description: "A breezy linen shirt dress perfect for warm days. Features a relaxed fit and elegant minimalist design.",
        variants: ["Select Size", "XS", "S", "M", "L", "XL"]
    },
    omnitrix: {
        name: "Omnitrix fx Limited Edition",
        price: 9.99,
        category: "Toys / Collectibles",
        img: "pics/omnitrix.png",
        description: "Limited edition Omnitrix replica with sound effects and light-up features. A must-have collectible for Ben 10 fans.",
        variants: ["Select Edition", "Standard", "Limited Edition"]
    },
    redragon: {
        name: "Redragon Fizz RGB Keyboard",
        price: 19.99,
        category: "Electronics / Peripherals",
        img: "pics/Red.png",
        description: "A compact TKL mechanical keyboard with per-key RGB lighting and tactile clicky switches. Great for gaming and typing.",
        variants: ["Select Switch", "Red Switch", "Blue Switch", "Brown Switch"]
    },
    cmfwatch: {
        name: "CMF Watch 3 Pro",
        price: 59,
        category: "Electronics / Wearables",
        img: "pics/cmf.png",
        description: "A stylish and affordable smartwatch with AMOLED display, health tracking, and up to 7 days battery life.",
        variants: ["Select Color", "Black", "Silver", "Blue"]
    },
    iphone17: {
        name: "Apple iPhone 17 512GB",
        price: 1499,
        category: "Electronics / Smartphones",
        img: "pics/iphone17.png",
        description: "Apple's latest flagship smartphone featuring a stunning display, next-gen A-series chip, and an advanced camera system.",
        variants: ["Select Color", "Black", "White", "Desert Gold", "Ultramarine"]
    },
    jbl: {
        name: "JBL Tune Flex Wireless Earbuds",
        price: 49.99,
        category: "Electronics / Audio",
        img: "https://m.media-amazon.com/images/I/61PPlQVg8xL._AC_SL1500_.jpg",
        description: "True wireless earbuds with JBL Pure Bass Sound, active noise cancellation, and up to 32 hours total playback.",
        variants: ["Select Color", "Black", "White", "Blue", "Purple"]
    },
    coofandy: {
        name: "COOFANDY Men's Linen Beach Shirt",
        price: 29.99,
        category: "Fashion / Men's Clothing",
        img: "https://m.media-amazon.com/images/I/71p9qhn9XbL._AC_SX569_.jpg",
        description: "A lightweight linen shirt perfect for beach days, casual outings, or summer events. Breathable and stylish.",
        variants: ["Select Size", "S", "M", "L", "XL", "XXL"]
    },
    airmax: {
        name: "Nike Air Max 270 Sneakers",
        price: 129.99,
        category: "Fashion / Footwear",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfQQY-hLHvndn3ckzEcnGuYQx19MqXztz7il9a-z4PfZ9sidxDr45haWxlmr5l7jNcYqvxjYI9KNKmWVfEVD0IK_BivnkJnbw0wxTSX7iu5hm0eWNyc3bzbg",
        description: "Nike's tallest Air unit yet delivers an incredibly smooth ride. Lifestyle sneaker with bold style and all-day comfort.",
        variants: ["Select Size", "7", "8", "9", "10", "11", "12"]
    },
    mxmaster: {
        name: "Logitech MX Master 3S Mouse",
        price: 89.99,
        category: "Electronics / Peripherals",
        img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX569_.jpg",
        description: "The ultimate precision mouse for creators and professionals. Features MagSpeed electromagnetic scrolling and 8K DPI sensor.",
        variants: ["Select Color", "Graphite", "Pale Grey"]
    },
    gamingpc: {
        name: "KOTIN Prebuilt Gaming PC Desktop",
        price: 1299.99,
        category: "Electronics / PC Components",
        img: "pics/gamingpc.png",
        description: "Powered by AMD Ryzen 5 9600X up to 5.4GHz and GeForce RTX 5060 8GB GDDR7. Comes with 16GB DDR5-6000, 1TB PCIe 4.0 NVMe SSD, 650W 80+ Gold PSU, WiFi 7, and Windows 11 Home. Perfect for 1080p and 1440p gaming.",
        variants: ["Select Configuration", "Standard", "With Monitor Bundle"]
    }
};


// ============================================================
//  SIDE MENU TOGGLE
// ============================================================
let menuitems = document.getElementsByClassName("menu-items")[0];

function menuToggle() {
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


// ============================================================
//  CART HELPERS
// ============================================================
let cart = JSON.parse(localStorage.getItem('novacart')) || [];

function saveCart() {
    localStorage.setItem('novacart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    document.querySelectorAll('.cart-icon').forEach(icon => {
        let badge = icon.querySelector('.cart-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.classList.add('cart-badge');
            icon.appendChild(badge);
        }

        if (totalItems > 0) {
            badge.textContent = totalItems;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

function addToCart(name, price, img) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name, price, img, qty: 1 });
    }
    saveCart();
    updateCartCount();
}


// ============================================================
//  PRODUCTS PAGE — Buy Now → redirect to product-details
// ============================================================
const buyNowBtns = document.querySelectorAll('.buy-now-btn');
buyNowBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const id = this.dataset.id;
        if (id) {
            window.location.href = `product-details.html?id=${id}`;
        }
    });
});


// ============================================================
//  PRODUCT DETAILS PAGE — load product from URL param
// ============================================================
document.addEventListener("DOMContentLoaded", () => {

    // --- Product Details Page ---
    const productImg = document.getElementById('productImg');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productCategory = document.getElementById('product-category');
    const productDescription = document.getElementById('product-description');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const variantSelect = document.querySelector('.single-product select');
    const relatedContainer = document.getElementById('related-products');

    if (productImg && productName) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const product = PRODUCTS[id];

        if (product) {
            document.title = product.name + " - NovaCart";

            productImg.src = product.img;
            productName.textContent = product.name;
            productPrice.textContent = "$" + product.price.toFixed(2);
            productCategory.textContent = product.category;
            productDescription.textContent = product.description;

            const smallImgs = document.querySelectorAll('.small-img');
            smallImgs.forEach(img => { img.src = product.img; });

            smallImgs.forEach(img => {
                img.onclick = function () { productImg.src = this.src; };
            });

            if (variantSelect && product.variants) {
                variantSelect.innerHTML = '';
                product.variants.forEach(v => {
                    const opt = document.createElement('option');
                    opt.textContent = v;
                    variantSelect.appendChild(opt);
                });
            }

            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    const qty = parseInt(document.getElementById('product-qty').value) || 1;
                    for (let i = 0; i < qty; i++) {
                        addToCart(product.name, product.price, product.img);
                    }
                    this.textContent = '✓ Added to Cart!';
                    this.style.background = '#28a745';
                    setTimeout(() => {
                        this.textContent = 'Add to Cart';
                        this.style.background = '';
                    }, 1500);
                });
            }

            if (relatedContainer) {
                const others = Object.entries(PRODUCTS).filter(([key]) => key !== id);
                const shuffled = others.sort(() => 0.5 - Math.random()).slice(0, 4);
                relatedContainer.innerHTML = shuffled.map(([key, p]) => `
                    <div class="col-4">
                        <img src="${p.img}" onclick="window.location.href='product-details.html?id=${key}'" style="cursor:pointer">
                        <h4>${p.name}</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i><i class="fa fa-star"></i>
                            <i class="fa fa-star-half-alt"></i>
                        </div>
                        <p>$${p.price.toFixed(2)}</p>
                        <button class="buy-now-btn" onclick="window.location.href='product-details.html?id=${key}'">Buy now</button>
                    </div>
                `).join('');
            }

        } else {
            productName.textContent = "Product not found.";
            productDescription.textContent = "Please go back to the products page.";
        }
    }


    // ============================================================
    //  CART PAGE — render cart from localStorage
    // ============================================================
    const cartBody = document.getElementById('cart-items-body');
    const cartEmptyMsg = document.getElementById('cart-empty-msg');
    const cartTotals = document.getElementById('cart-totals');

    if (cartBody) {
        renderCart();
    }

    function renderCart() {
        cart = JSON.parse(localStorage.getItem('novacart')) || [];

        if (cart.length === 0) {
            cartBody.innerHTML = '';
            cartEmptyMsg.style.display = 'block';
            cartTotals.style.display = 'none';
            return;
        }

        cartEmptyMsg.style.display = 'none';
        cartTotals.style.display = '';

        cartBody.innerHTML = cart.map((item, index) => {
            const itemPrice = parseFloat(item.price) || 0;
            const subtotal = (itemPrice * item.qty).toFixed(2);
            return `
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="${item.img}" alt="${item.name}">
                            <div>
                                <p>${item.name}</p>
                                <small>Price: $${itemPrice.toFixed(2)}</small>
                                <a href="#" onclick="removeFromCart(${index}); return false;">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input type="number" value="${item.qty}" min="1"
                            onchange="updateQty(${index}, this.value)">
                    </td>
                    <td>$${subtotal}</td>
                </tr>
            `;
        }).join('');

        const subtotal = cart.reduce((sum, item) => {
            return sum + (parseFloat(item.price) || 0) * item.qty;
        }, 0);
        const tax = subtotal * 0.10;
        const total = subtotal + tax;

        document.getElementById('subtotal-val').textContent = '$' + subtotal.toFixed(2);
        document.getElementById('tax-val').textContent = '$' + tax.toFixed(2);
        document.getElementById('total-val').innerHTML = '<strong>$' + total.toFixed(2) + '</strong>';
    }


    // ============================================================
    //  ANIMATED CANVAS BACKGROUND (account.html)
    // ============================================================
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    function rand(a, b) { return a + Math.random() * (b - a); }

    const shapes = [];

    // BIG CIRCLES
    [
        { x: 0.08, y: 0.85, r: 90, darkCol: '#8a6a1a', lightCol: '#004a7c', op: 1 },
        { x: 0.95, y: 0.92, r: 70, darkCol: '#6b5015', lightCol: '#003f6b', op: 1 },
        { x: 0.02, y: 0.15, r: 50, darkCol: '#c9a84c', lightCol: '#0070ba', op: 0.85 },
    ].forEach(c => shapes.push({
        type: 'circle', xr: c.x, yr: c.y, r: c.r,
        darkCol: c.darkCol, lightCol: c.lightCol, op: c.op,
        t: rand(0, Math.PI * 2), speed: rand(0.004, 0.009)
    }));

    // SMALL BALLS
    [
        { x: 0.22, y: 0.55, r: 18, ax: 30, ay: 30 },
        { x: 0.88, y: 0.38, r: 13, ax: 25, ay: 20 },
        { x: 0.60, y: 0.82, r: 10, ax: 20, ay: 20 },
    ].forEach(c => shapes.push({
        type: 'ball', xr: c.x, yr: c.y, r: c.r, ax: c.ax, ay: c.ay,
        t: rand(0, Math.PI * 2), speed: rand(0.006, 0.013)
    }));

    shapes.push({ type: 'wave',  t: 0,          speed: 0.007 });
    shapes.push({ type: 'wave2', t: Math.PI,     speed: 0.005 });

    [
        { x: 0.08, y: 0.42, cols: 4, rows: 4 },
        { x: 0.72, y: 0.08, cols: 5, rows: 3 },
    ].forEach(g => shapes.push({
        type: 'dots', xr: g.x, yr: g.y, cols: g.cols, rows: g.rows,
        t: rand(0, Math.PI * 2), speed: rand(0.004, 0.008)
    }));

    [
        { x: 0.28, y: 0.12 },
        { x: 0.68, y: 0.72 },
    ].forEach(c => shapes.push({
        type: 'chevron', xr: c.x, yr: c.y,
        t: rand(0, Math.PI * 2), speed: rand(0.003, 0.007)
    }));

    [
        { x: 0.18, y: 0.22 },
        { x: 0.82, y: 0.18 },
    ].forEach(c => shapes.push({
        type: 'triangles', xr: c.x, yr: c.y,
        t: rand(0, Math.PI * 2), speed: rand(0.005, 0.009)
    }));

    shapes.push({ type: 'hex',           xr: 0.55, yr: 0.35, size: 120, t: rand(0, Math.PI * 2), speed: 0.004 });
    shapes.push({ type: 'circleOutline', xr: 0.88, yr: 0.55, r: 55,     t: rand(0, Math.PI * 2), speed: 0.005 });

    [
        { x: 0.38, y: 0.68 },
        { x: 0.78, y: 0.48 },
        { x: 0.12, y: 0.64 },
    ].forEach(c => shapes.push({
        type: 'plus', xr: c.x, yr: c.y,
        t: rand(0, Math.PI * 2), speed: rand(0.004, 0.009)
    }));

    shapes.push({ type: 'line1', t: 0, speed: 0.004 });

    // ── helper: returns colors based on current mode ──────────
    function getColors() {
        const dark = document.body.classList.contains('dark-mode');
        return {
            isDark:      dark,
            accent:      dark ? '#c9a84c' : '#005b96',
            wave1a:      dark ? 'rgba(120, 90, 20, 0.55)' : 'rgba(0, 91, 150, 0.35)',
            wave1b:      dark ? 'rgba(60, 40, 5, 0.70)'   : 'rgba(0, 47, 78, 0.50)',
            ballHigh:    dark ? '#f5e6c0'                  : '#cce0f5',
            ballLow:     dark ? 'rgba(180, 140, 60, 0.7)'  : 'rgba(0, 91, 150, 0.6)',
        };
    }

    function drawWave(t, phase, alpha, yBase) {
        const c = getColors();
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
        grad.addColorStop(0, c.wave1a);
        grad.addColorStop(1, c.wave1b);
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
        [[0, 0], [14, 0], [28, 0], [7, -14], [21, -14]].forEach(([tx, ty]) => {
            ctx.beginPath();
            ctx.moveTo(x + tx, y + ty - 6);
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
        const c = getColors();
        const w = W(), h = H();
        const ox = Math.sin(t) * 15;
        const oy = Math.cos(t * 0.7) * 10;
        ctx.save();
        ctx.globalAlpha = 0.18;
        ctx.strokeStyle = c.accent;
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

    function animate() {
        ctx.clearRect(0, 0, W(), H());

        // ── get current mode colors once per frame ────────────
        const c = getColors();

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
                const col = c.isDark ? s.darkCol : s.lightCol;
                ctx.save(); ctx.globalAlpha = s.op;
                ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = col; ctx.fill(); ctx.restore();

            } else if (s.type === 'ball') {
                const x = s.xr * w + Math.sin(s.t) * s.ax;
                const y = s.yr * h + Math.cos(s.t * 0.9) * s.ay;
                ctx.save(); ctx.globalAlpha = 0.9;
                const grad = ctx.createRadialGradient(x - s.r * 0.3, y - s.r * 0.3, 0, x, y, s.r);
                grad.addColorStop(0, c.ballHigh);
                grad.addColorStop(1, c.ballLow);
                ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = grad; ctx.fill(); ctx.restore();

            } else if (s.type === 'dots') {
                const x = s.xr * w + Math.sin(s.t) * 8;
                const y = s.yr * h + Math.cos(s.t * 0.7) * 8;
                drawDots(x, y, s.cols, s.rows, c.accent, 0.35);

            } else if (s.type === 'chevron') {
                const x = s.xr * w + Math.sin(s.t) * 10;
                const y = s.yr * h + Math.cos(s.t * 0.8) * 8;
                drawChevron(x, y, c.accent, 0.45);

            } else if (s.type === 'triangles') {
                const x = s.xr * w + Math.sin(s.t) * 10;
                const y = s.yr * h + Math.cos(s.t * 0.6) * 10;
                drawTriangles(x, y, c.accent, 0.45);

            } else if (s.type === 'hex') {
                const x = s.xr * w + Math.sin(s.t) * 12;
                const y = s.yr * h + Math.cos(s.t * 0.75) * 10;
                drawHex(x, y, s.size, c.accent, 0.15);

            } else if (s.type === 'circleOutline') {
                const x = s.xr * w + Math.sin(s.t) * 10;
                const y = s.yr * h + Math.cos(s.t * 0.9) * 8;
                ctx.save(); ctx.globalAlpha = 0.2;
                ctx.strokeStyle = c.accent; ctx.lineWidth = 1;
                ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2);
                ctx.stroke(); ctx.restore();

            } else if (s.type === 'plus') {
                const x = s.xr * w + Math.sin(s.t) * 9;
                const y = s.yr * h + Math.cos(s.t * 0.85) * 9;
                drawPlus(x, y, c.accent, 0.4);
            }
        });

        requestAnimationFrame(animate);
    }
    animate();

    // --- Tab logic (account.html) ---
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    const panelSignin = document.getElementById('signin');
    const panelSignup = document.getElementById('signup');
    const welcomeSignin = document.getElementById('welcome-signin');
    const welcomeSignup = document.getElementById('welcome-signup');

    if (tabSignin && tabSignup) {
        function switchTab(tab) {
            if (tab === 'signin') {
                tabSignin.classList.add('active'); panelSignin.classList.add('active'); welcomeSignin.classList.add('active');
                tabSignup.classList.remove('active'); panelSignup.classList.remove('active'); welcomeSignup.classList.remove('active');
            } else {
                tabSignup.classList.add('active'); panelSignup.classList.add('active'); welcomeSignup.classList.add('active');
                tabSignin.classList.remove('active'); panelSignin.classList.remove('active'); welcomeSignin.classList.remove('active');
            }
        }
        tabSignin.addEventListener('click', () => switchTab('signin'));
        tabSignup.addEventListener('click', () => switchTab('signup'));
    }

}); // end DOMContentLoaded


// ============================================================
//  CART ACTIONS (called from cart.html inline onclick)
// ============================================================
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    const cartBody = document.getElementById('cart-items-body');
    if (cartBody) {
        location.reload();
    }
}

function updateQty(index, newQty) {
    const qty = parseInt(newQty);
    if (qty < 1) return;
    cart[index].qty = qty;
    saveCart();
    updateCartCount();
    location.reload();
}

// Init cart count on every page
updateCartCount();


// ============================================================
//  THANK YOU MODAL
// ============================================================
const checkout = document.getElementById('checkout-btn');
const thankyou = document.getElementById('thankyou-modal');
const close = document.getElementById('modal-close-btn');

if (checkout) {
    checkout.addEventListener('click', function () {
        if (cart.length === 0) return;
        thankyou.style.display = 'flex';
    });
}

if (close) {
    close.addEventListener('click', function () {
        thankyou.style.display = 'none';
        cart = [];
        saveCart();
        updateCartCount();
        window.location.href = 'products.html';
    });
}

if (thankyou) {
    thankyou.addEventListener('click', function (e) {
        if (e.target === thankyou) {
            thankyou.style.display = 'none';
        }
    });
}


// ============================================================
//  SCROLL FADE IN
// ============================================================
const fadeEls = document.querySelectorAll(
    '.col-3, .col-4, .col-5, .offer, .testimonial-card, .categories'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));


// ============================================================
//  DARK MODE TOGGLE
// ============================================================
const darkmodeBtn = document.getElementById('darkmode-btn');

function applyDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (darkmodeBtn) darkmodeBtn.innerHTML = '<i class="fa fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        if (darkmodeBtn) darkmodeBtn.innerHTML = '<i class="fa fa-moon"></i>';
    }
}

// Apply saved preference on page load
applyDarkMode(localStorage.getItem('novacart-darkmode') === 'true');

if (darkmodeBtn) {
    darkmodeBtn.addEventListener('click', function () {
        const isDark = !document.body.classList.contains('dark-mode');
        localStorage.setItem('novacart-darkmode', isDark);
        applyDarkMode(isDark);
    });
}