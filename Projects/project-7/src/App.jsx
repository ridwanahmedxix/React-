/*
  ============================================================
  LUMIÈRE — Modern E-commerce (Single File React App)
  ============================================================

  📦 SETUP INSTRUCTIONS:

  1) Install Node.js (v16+): https://nodejs.org
  2) Create project folder with this structure:
       /public/index.html
       /src/App.jsx
       /src/index.js   (create with: 
                         import React from 'react';
                         import ReactDOM from 'react-dom/client';
                         import App from './App';
                         ReactDOM.createRoot(document.getElementById('root')).render(<App />);
                        )
       package.json
  3) Run:
       npm install
       npm start

  📚 Required Dependencies:
     - react
     - react-dom
     - react-scripts

  🌐 Data Source: https://fakestoreapi.com/products
  ============================================================
*/

import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
} from "react";

/* ===================== THEME / STYLES ===================== */
const GlobalStyles = () => (
  <style>{`
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      transition: background .4s ease, color .4s ease;
      min-height: 100vh;
    }
    :root {
      --bg: #f7f3ef;
      --bg-grad: radial-gradient(1200px 600px at 10% -10%, #ffe6f0 0%, transparent 60%),
                 radial-gradient(1000px 500px at 90% 10%, #e9e3ff 0%, transparent 55%),
                 linear-gradient(180deg, #f7f3ef 0%, #f2ebe4 100%);
      --text: #1a1624;
      --text-soft: #544d66;
      --card: rgba(255,255,255,0.65);
      --card-border: rgba(255,255,255,0.8);
      --accent: #7c3aed;
      --accent-2: #ec4899;
      --accent-3: #f59e0b;
      --danger: #ef4444;
      --success: #10b981;
      --shadow: 0 10px 30px rgba(55, 35, 95, 0.08);
      --ring: 0 0 0 3px rgba(124,58,237,.25);
    }
    [data-theme="dark"] {
      --bg: #0f0b1e;
      --bg-grad: radial-gradient(1200px 600px at 10% -10%, #3b1d4a 0%, transparent 60%),
                 radial-gradient(1000px 500px at 90% 10%, #1c2260 0%, transparent 55%),
                 linear-gradient(180deg, #0f0b1e 0%, #0a0814 100%);
      --text: #f4f1ff;
      --text-soft: #b8b1cf;
      --card: rgba(30,22,50,0.55);
      --card-border: rgba(255,255,255,0.08);
      --shadow: 0 10px 30px rgba(0,0,0,0.35);
    }
    body { background: var(--bg-grad); }
    a { color: inherit; text-decoration: none; }
    button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
    img { max-width: 100%; display: block; }
    
    .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
    @media (max-width: 640px){ .container { padding: 0 16px; } }

    /* NAVBAR */
    .nav {
      position: sticky; top: 0; z-index: 100;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      background: color-mix(in srgb, var(--bg) 75%, transparent);
      border-bottom: 1px solid var(--card-border);
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 72px; gap: 16px;}
    .logo { font-weight: 800; font-size: 22px; letter-spacing: -0.5px; display:flex; align-items:center; gap:8px;}
    .logo-badge { width: 30px; height: 30px; border-radius: 9px; background: linear-gradient(135deg, var(--accent), var(--accent-2)); display:grid; place-items:center; color:#fff; font-weight:800; }
    .nav-links { display: flex; gap: 6px; align-items: center; }
    .nav-link {
      padding: 8px 14px; border-radius: 10px; font-weight: 600; font-size: 14.5px;
      color: var(--text-soft); transition: all .2s;
    }
    .nav-link:hover, .nav-link.active { color: var(--text); background: var(--card); }
    .nav-actions { display: flex; gap: 8px; align-items: center; }
    .icon-btn {
      width: 42px; height: 42px; border-radius: 12px;
      display: grid; place-items: center; position: relative;
      background: var(--card); border: 1px solid var(--card-border);
      transition: transform .2s ease, box-shadow .2s ease;
    }
    .icon-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
    .badge {
      position: absolute; top:-5px; right:-5px; min-width:20px; height:20px; padding:0 5px;
      background: linear-gradient(135deg, var(--accent-2), var(--accent-3)); color:#fff;
      border-radius: 999px; font-size: 11px; font-weight: 700; display:grid; place-items:center;
    }
    .menu-btn { display: none; }
    @media (max-width: 900px) {
      .nav-links { display: none; }
      .menu-btn { display: grid; }
      .nav-links.open {
        display: flex; flex-direction: column; position: absolute; top: 72px; left: 0; right: 0;
        background: var(--bg); padding: 16px; gap: 4px; border-bottom: 1px solid var(--card-border);
      }
    }

    /* HERO */
    .hero {
      position: relative; padding: 80px 0 100px; overflow: hidden;
    }
    .hero-inner { display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px; align-items: center; }
    @media (max-width: 900px) { .hero-inner { grid-template-columns: 1fr; } .hero { padding: 40px 0 60px; } }
    .hero-eyebrow {
      display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px;
      border-radius: 999px; background: var(--card); border: 1px solid var(--card-border);
      font-size: 13px; font-weight: 600; color: var(--text-soft); margin-bottom: 20px;
    }
    .hero h1 {
      font-size: clamp(38px, 6vw, 68px); line-height: 1.05; letter-spacing: -1.5px;
      font-weight: 800; margin-bottom: 20px;
    }
    .hero h1 .grad {
      background: linear-gradient(135deg, var(--accent), var(--accent-2), var(--accent-3));
      -webkit-background-clip: text; background-clip: text; color: transparent;
    }
    .hero p { font-size: 18px; color: var(--text-soft); max-width: 520px; margin-bottom: 32px; line-height: 1.6; }
    .hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }
    .btn {
      padding: 14px 26px; border-radius: 12px; font-weight: 700; font-size: 15px;
      transition: all .25s; display: inline-flex; align-items: center; gap: 8px;
    }
    .btn-primary {
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: white; box-shadow: 0 8px 24px rgba(124,58,237,.35);
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(124,58,237,.45); }
    .btn-ghost {
      background: var(--card); border: 1px solid var(--card-border); color: var(--text);
    }
    .btn-ghost:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
    .hero-visual {
      position: relative; aspect-ratio: 1/1; max-width: 520px; margin: 0 auto;
    }
    .hero-blob {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      border-radius: 40% 60% 55% 45% / 50% 45% 55% 50%;
      animation: blob 12s ease-in-out infinite;
      filter: blur(2px);
    }
    @keyframes blob {
      0%,100% { border-radius: 40% 60% 55% 45% / 50% 45% 55% 50%; }
      50% { border-radius: 55% 45% 45% 55% / 45% 55% 45% 55%; }
    }
    .hero-card {
      position: absolute; background: var(--card); backdrop-filter: blur(20px);
      border: 1px solid var(--card-border); border-radius: 20px; padding: 16px;
      box-shadow: var(--shadow); display: flex; align-items: center; gap: 12px;
      animation: float 6s ease-in-out infinite;
    }
    .hero-card.c1 { top: 15%; left: -10%; animation-delay: 0s; }
    .hero-card.c2 { bottom: 15%; right: -10%; animation-delay: 1.5s; }
    @keyframes float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-15px);} }

    /* SECTION */
    .section { padding: 70px 0; }
    .section-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 36px; gap: 20px; flex-wrap: wrap; }
    .section-title { font-size: clamp(26px, 4vw, 38px); font-weight: 800; letter-spacing: -1px; }
    .section-sub { color: var(--text-soft); margin-top: 8px; }

    /* PRODUCT GRID */
    .grid {
      display: grid; gap: 24px;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
    .card {
      background: var(--card); backdrop-filter: blur(16px);
      border: 1px solid var(--card-border); border-radius: 20px;
      overflow: hidden; transition: all .3s; display: flex; flex-direction: column; position: relative;
    }
    .card:hover { transform: translateY(-6px); box-shadow: var(--shadow); }
    .card-img {
      aspect-ratio: 1/1; background: white; padding: 24px;
      display: grid; place-items: center; position: relative;
    }
    .card-img img { max-height: 100%; object-fit: contain; transition: transform .4s; }
    .card:hover .card-img img { transform: scale(1.08); }
    .card-wish {
      position: absolute; top: 12px; right: 12px; width: 38px; height: 38px;
      border-radius: 50%; background: rgba(255,255,255,.9); display:grid; place-items:center;
      transition: all .2s; z-index: 2;
    }
    .card-wish.active { background: var(--accent-2); color: white; }
    .card-wish:hover { transform: scale(1.1); }
    .card-body { padding: 18px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
    .card-cat { font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--accent); letter-spacing: 1px; }
    .card-title { font-weight: 700; font-size: 15px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 42px;}
    .card-foot { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 8px;}
    .price { font-size: 20px; font-weight: 800; }
    .cart-mini-btn {
      width: 38px; height: 38px; border-radius: 10px;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: white; display: grid; place-items: center; transition: all .2s;
    }
    .cart-mini-btn:hover { transform: scale(1.08); }

    /* SKELETON */
    .skel {
      background: linear-gradient(90deg, rgba(128,128,128,.08) 25%, rgba(128,128,128,.18) 50%, rgba(128,128,128,.08) 75%);
      background-size: 200% 100%; animation: shimmer 1.4s infinite; border-radius: 12px;
    }
    @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    .skel-card { aspect-ratio: 3/4; border-radius: 20px; }

    /* TOOLBAR */
    .toolbar { display: grid; grid-template-columns: 1fr auto auto; gap: 12px; margin-bottom: 30px; }
    @media (max-width: 700px) { .toolbar { grid-template-columns: 1fr; } }
    .input, .select {
      padding: 12px 16px; border-radius: 12px; background: var(--card);
      border: 1px solid var(--card-border); color: var(--text); font-size: 14px; font-family: inherit;
      transition: all .2s; outline: none; width: 100%;
    }
    .input:focus, .select:focus { box-shadow: var(--ring); border-color: var(--accent); }

    /* PRODUCT DETAILS */
    .pd { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; padding: 40px 0; }
    @media (max-width: 900px) { .pd { grid-template-columns: 1fr; gap: 30px; } }
    .pd-img { background: white; border-radius: 24px; padding: 50px; display: grid; place-items: center; min-height: 400px;}
    .pd-img img { max-height: 420px; object-fit: contain; }
    .pd-info h1 { font-size: clamp(26px, 4vw, 38px); font-weight: 800; letter-spacing: -0.5px; line-height: 1.15; margin-bottom: 14px; }
    .pd-cat { color: var(--accent); font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1.5px; margin-bottom: 12px; }
    .pd-price { font-size: 36px; font-weight: 800; margin: 20px 0; }
    .pd-desc { color: var(--text-soft); line-height: 1.7; margin-bottom: 24px; }
    .rating { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: var(--card); border: 1px solid var(--card-border); border-radius: 999px; font-weight: 600; font-size: 13px;}

    /* CART */
    .cart-grid { display: grid; grid-template-columns: 1fr 380px; gap: 30px; }
    @media (max-width: 900px) { .cart-grid { grid-template-columns: 1fr; } }
    .cart-item {
      display: grid; grid-template-columns: 100px 1fr auto; gap: 18px;
      padding: 18px; background: var(--card); border: 1px solid var(--card-border);
      border-radius: 16px; align-items: center; margin-bottom: 14px;
    }
    @media (max-width: 600px){ .cart-item { grid-template-columns: 80px 1fr; } .cart-item .ci-actions { grid-column: 1 / -1; } }
    .cart-item img { width: 100%; aspect-ratio: 1/1; object-fit: contain; background: white; border-radius: 12px; padding: 8px; }
    .qty { display: inline-flex; align-items: center; background: var(--bg); border: 1px solid var(--card-border); border-radius: 10px; overflow: hidden;}
    .qty button { padding: 6px 12px; font-weight: 700; transition: background .2s; }
    .qty button:hover { background: var(--card); }
    .qty span { padding: 0 14px; font-weight: 700; }
    .ci-actions { display: flex; align-items: center; gap: 12px; justify-content: flex-end; }
    .summary {
      background: var(--card); border: 1px solid var(--card-border); border-radius: 20px;
      padding: 26px; position: sticky; top: 90px; height: fit-content;
    }
    .summary h3 { margin-bottom: 20px; font-size: 20px; }
    .sum-row { display: flex; justify-content: space-between; padding: 10px 0; color: var(--text-soft); }
    .sum-row.total { border-top: 1px solid var(--card-border); padding-top: 16px; margin-top: 10px; font-size: 20px; color: var(--text); font-weight: 800; }

    /* FORM */
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    @media (max-width: 700px){ .form-grid { grid-template-columns: 1fr; } }
    .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
    .field label { font-size: 13px; font-weight: 600; color: var(--text-soft); }
    .field .err { color: var(--danger); font-size: 12px; }

    /* AUTH */
    .auth-wrap { min-height: 70vh; display: grid; place-items: center; padding: 40px 0; }
    .auth-card {
      width: 100%; max-width: 460px; background: var(--card); backdrop-filter: blur(20px);
      border: 1px solid var(--card-border); border-radius: 24px; padding: 40px; box-shadow: var(--shadow);
    }
    .auth-card h2 { font-size: 28px; margin-bottom: 6px; }
    .auth-card p.sub { color: var(--text-soft); margin-bottom: 28px; }
    .auth-tabs { display: grid; grid-template-columns: 1fr 1fr; background: var(--bg); padding: 4px; border-radius: 12px; margin-bottom: 20px; }
    .auth-tab { padding: 10px; border-radius: 9px; font-weight: 600; font-size: 14px; transition: all .2s; }
    .auth-tab.active { background: var(--card); box-shadow: var(--shadow); }

    /* 404 / SUCCESS */
    .center-box { min-height: 60vh; display: grid; place-items: center; text-align: center; padding: 40px; }
    .center-box h1 { font-size: clamp(60px, 12vw, 140px); font-weight: 800; line-height: 1;
      background: linear-gradient(135deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; color: transparent; }
    .success-icon { width:90px; height:90px; border-radius:50%; background: linear-gradient(135deg, #10b981, #059669); display:grid; place-items:center; margin:0 auto 20px; color:white; box-shadow: 0 10px 30px rgba(16,185,129,.4); }

    /* TOAST */
    .toast-wrap { position: fixed; top: 90px; right: 20px; z-index: 1000; display: flex; flex-direction: column; gap: 10px; }
    .toast {
      padding: 14px 20px; background: var(--card); backdrop-filter: blur(20px);
      border: 1px solid var(--card-border); border-radius: 14px; box-shadow: var(--shadow);
      display: flex; align-items: center; gap: 12px; min-width: 260px;
      animation: slideIn .3s ease, slideOut .3s ease 2.7s forwards;
    }
    @keyframes slideIn { from { transform: translateX(120%); opacity: 0;} to { transform: none; opacity: 1;} }
    @keyframes slideOut { to { transform: translateX(120%); opacity: 0;} }
    .toast-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--success); }

    /* FOOTER */
    .footer {
      margin-top: 80px; padding: 60px 0 30px;
      border-top: 1px solid var(--card-border);
      background: color-mix(in srgb, var(--bg) 80%, transparent);
    }
    .foot-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
    @media (max-width: 800px){ .foot-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 500px){ .foot-grid { grid-template-columns: 1fr; } }
    .foot-col h4 { margin-bottom: 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
    .foot-col a { display: block; color: var(--text-soft); padding: 6px 0; transition: color .2s; font-size: 14px;}
    .foot-col a:hover { color: var(--accent); }
    .socials { display: flex; gap: 10px; margin-top: 14px;}
    .social { width: 40px; height: 40px; border-radius: 10px; background: var(--card); border: 1px solid var(--card-border); display: grid; place-items: center; transition: all .2s;}
    .social:hover { background: var(--accent); color: white; transform: translateY(-3px);}
    .copy { text-align: center; color: var(--text-soft); font-size: 13px; padding-top: 24px; border-top: 1px solid var(--card-border);}

    /* LOAD MORE */
    .load-more-wrap { text-align: center; margin-top: 40px; }

    /* ERROR UI */
    .error-box { text-align: center; padding: 60px 20px; background: var(--card); border: 1px solid var(--card-border); border-radius: 20px;}
    .error-box h3 { color: var(--danger); margin-bottom: 10px; font-size: 22px; }
  `}</style>
);

/* ===================== ICONS ===================== */
const Icon = ({ name, size = 20 }) => {
  const icons = {
    cart: (
      <path
        d="M3 3h2l.4 2M7 13h12l3-8H6.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-8-5h.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    heart: (
      <path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    heartFill: (
      <path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      />
    ),
    sun: (
      <g strokeWidth="2" strokeLinecap="round" fill="none">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </g>
    ),
    moon: (
      <path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    search: (
      <g strokeWidth="2" fill="none" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </g>
    ),
    menu: (
      <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
    ),
    close: (
      <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
    ),
    plus: <path d="M12 5v14M5 12h14" strokeWidth="2.5" strokeLinecap="round" />,
    trash: (
      <g
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      </g>
    ),
    star: (
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
      />
    ),
    arrow: (
      <path
        d="M5 12h14M13 5l7 7-7 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    check: (
      <path
        d="M20 6L9 17l-5-5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    fb: (
      <path
        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    ig: (
      <g
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </g>
    ),
    tw: (
      <path
        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor">
      {icons[name]}
    </svg>
  );
};

/* ===================== CONTEXTS ===================== */
const ShopContext = createContext();
const useShop = () => useContext(ShopContext);

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lum_cart")) || [];
    } catch {
      return [];
    }
  });
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lum_wish")) || [];
    } catch {
      return [];
    }
  });
  const [theme, setTheme] = useState(
    () => localStorage.getItem("lum_theme") || "light",
  );
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    localStorage.setItem("lum_cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("lum_wish", JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    localStorage.setItem("lum_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toast = (msg) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  };

  const addToCart = (p) => {
    setCart((c) => {
      const ex = c.find((i) => i.id === p.id);
      if (ex)
        return c.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { ...p, qty: 1 }];
    });
    toast(`Added "${p.title.slice(0, 30)}..." to cart`);
  };
  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const updateQty = (id, delta) =>
    setCart((c) =>
      c.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i,
      ),
    );
  const clearCart = () => setCart([]);
  const toggleWish = (p) => {
    setWishlist((w) =>
      w.find((i) => i.id === p.id) ? w.filter((i) => i.id !== p.id) : [...w, p],
    );
    toast(
      wishlist.find((i) => i.id === p.id)
        ? "Removed from wishlist"
        : "Added to wishlist",
    );
  };
  const isWished = (id) => wishlist.some((i) => i.id === id);
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        theme,
        setTheme,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        toggleWish,
        isWished,
        totalItems,
        totalPrice,
        toast,
        toasts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

/* ===================== UTILS ===================== */
const formatPrice = (p) => `$${p.toFixed(2)}`;

/* ===================== COMPONENTS ===================== */
const Navbar = ({ page, navigate }) => {
  const { totalItems, theme, setTheme, wishlist } = useShop();
  const [open, setOpen] = useState(false);
  const links = [
    ["home", "Home"],
    ["shop", "Shop"],
    ["cart", "Cart"],
    ["login", "Login"],
  ];
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div
          className="logo"
          onClick={() => navigate("home")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo-badge">L</div> Lumière
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([k, l]) => (
            <button
              key={k}
              className={`nav-link ${page === k ? "active" : ""}`}
              onClick={() => {
                navigate(k);
                setOpen(false);
              }}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Theme"
          >
            <Icon name={theme === "light" ? "moon" : "sun"} size={18} />
          </button>
          <button
            className="icon-btn"
            onClick={() => navigate("shop")}
            aria-label="Wishlist"
          >
            <Icon name="heart" size={18} />
            {wishlist.length > 0 && (
              <span className="badge">{wishlist.length}</span>
            )}
          </button>
          <button
            className="icon-btn"
            onClick={() => navigate("cart")}
            aria-label="Cart"
          >
            <Icon name="cart" size={18} />
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Toasts = () => {
  const { toasts } = useShop();
  return (
    <div className="toast-wrap">
      {toasts.map((t) => (
        <div key={t.id} className="toast">
          <span className="toast-dot" /> {t.msg}
        </div>
      ))}
    </div>
  );
};

const ProductCard = ({ p, navigate }) => {
  const { addToCart, toggleWish, isWished } = useShop();
  return (
    <div className="card">
      <button
        className={`card-wish ${isWished(p.id) ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleWish(p);
        }}
      >
        <Icon name={isWished(p.id) ? "heartFill" : "heart"} size={16} />
      </button>
      <div
        className="card-img"
        onClick={() => navigate("product", p.id)}
        style={{ cursor: "pointer" }}
      >
        <img src={p.image} alt={p.title} loading="lazy" />
      </div>
      <div className="card-body">
        <div className="card-cat">{p.category}</div>
        <div
          className="card-title"
          onClick={() => navigate("product", p.id)}
          style={{ cursor: "pointer" }}
        >
          {p.title}
        </div>
        <div className="card-foot">
          <div className="price">{formatPrice(p.price)}</div>
          <button
            className="cart-mini-btn"
            onClick={() => addToCart(p)}
            aria-label="Add to cart"
          >
            <Icon name="plus" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const SkeletonGrid = ({ count = 8 }) => (
  <div className="grid">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="skel skel-card" />
    ))}
  </div>
);

const ErrorBox = ({ msg, onRetry }) => (
  <div className="error-box">
    <h3>Something went wrong</h3>
    <p style={{ color: "var(--text-soft)", marginBottom: 20 }}>{msg}</p>
    <button className="btn btn-primary" onClick={onRetry}>
      Try Again
    </button>
  </div>
);

/* ===================== PAGES ===================== */
const HomePage = ({ products, loading, error, refetch, navigate }) => {
  const featured = products.slice(0, 8);
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="hero-eyebrow">✨ New Collection 2025</span>
            <h1>
              Discover <span className="grad">Elegance</span> in Every Detail
            </h1>
            <p>
              Curated premium products from around the world. Shop the latest
              trends in fashion, electronics, jewelry and more — delivered to
              your door.
            </p>
            <div className="hero-cta">
              <button
                className="btn btn-primary"
                onClick={() => navigate("shop")}
              >
                Shop Now <Icon name="arrow" size={16} />
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => navigate("shop")}
              >
                Browse Categories
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-blob" />
            <div className="hero-card c1">
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "linear-gradient(135deg,#f59e0b,#ef4444)",
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                }}
              >
                <Icon name="star" size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800 }}>4.9 Rating</div>
                <div style={{ fontSize: 12, color: "var(--text-soft)" }}>
                  From 10k+ reviews
                </div>
              </div>
            </div>
            <div className="hero-card c2">
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "linear-gradient(135deg,#10b981,#059669)",
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                }}
              >
                <Icon name="check" size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800 }}>Free Shipping</div>
                <div style={{ fontSize: 12, color: "var(--text-soft)" }}>
                  On orders over $50
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">Featured Products</div>
              <div className="section-sub">
                Hand-picked favorites you'll love
              </div>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate("shop")}>
              View All <Icon name="arrow" size={14} />
            </button>
          </div>
          {loading ? (
            <SkeletonGrid />
          ) : error ? (
            <ErrorBox msg={error} onRetry={refetch} />
          ) : (
            <div className="grid">
              {featured.map((p) => (
                <ProductCard key={p.id} p={p} navigate={navigate} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const ShopPage = ({ products, loading, error, refetch, navigate }) => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("default");
  const [visible, setVisible] = useState(8);

  const categories = useMemo(
    () => ["all", ...new Set(products.map((p) => p.category))],
    [products],
  );

  const filtered = useMemo(() => {
    let r = [...products];
    if (q) r = r.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
    if (cat !== "all") r = r.filter((p) => p.category === cat);
    if (sort === "low") r.sort((a, b) => a.price - b.price);
    if (sort === "high") r.sort((a, b) => b.price - a.price);
    return r;
  }, [products, q, cat, sort]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-title">Shop Collection</div>
            <div className="section-sub">
              {filtered.length} products available
            </div>
          </div>
        </div>
        <div className="toolbar">
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-soft)",
              }}
            >
              <Icon name="search" size={16} />
            </span>
            <input
              className="input"
              style={{ paddingLeft: 40 }}
              placeholder="Search products..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <select
            className="select"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
          <select
            className="select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
        {loading ? (
          <SkeletonGrid count={8} />
        ) : error ? (
          <ErrorBox msg={error} onRetry={refetch} />
        ) : filtered.length === 0 ? (
          <div className="error-box">
            <h3 style={{ color: "var(--text)" }}>No products found</h3>
            <p style={{ color: "var(--text-soft)" }}>
              Try adjusting your filters
            </p>
          </div>
        ) : (
          <>
            <div className="grid">
              {filtered.slice(0, visible).map((p) => (
                <ProductCard key={p.id} p={p} navigate={navigate} />
              ))}
            </div>
            {visible < filtered.length && (
              <div className="load-more-wrap">
                <button
                  className="btn btn-primary"
                  onClick={() => setVisible((v) => v + 8)}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

const ProductPage = ({ products, productId, navigate }) => {
  const p = products.find((x) => x.id === productId);
  const { addToCart, toggleWish, isWished } = useShop();
  if (!p)
    return (
      <div className="center-box">
        <h2>Product not found</h2>
      </div>
    );
  const stars = Math.round(p.rating?.rate || 4);
  return (
    <section className="section">
      <div className="container">
        <button
          className="btn btn-ghost"
          onClick={() => navigate("shop")}
          style={{ marginBottom: 20 }}
        >
          ← Back to Shop
        </button>
        <div className="pd">
          <div className="pd-img">
            <img src={p.image} alt={p.title} />
          </div>
          <div className="pd-info">
            <div className="pd-cat">{p.category}</div>
            <h1>{p.title}</h1>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                marginTop: 14,
              }}
            >
              <div className="rating">
                <span style={{ color: "#f59e0b", display: "inline-flex" }}>
                  {Array.from({ length: 5 })
                    .map((_, i) => <Icon key={i} name="star" size={14} />)
                    .map((el, i) => (
                      <span key={i} style={{ opacity: i < stars ? 1 : 0.25 }}>
                        {el}
                      </span>
                    ))}
                </span>
                {p.rating?.rate} ({p.rating?.count} reviews)
              </div>
            </div>
            <div className="pd-price">{formatPrice(p.price)}</div>
            <p className="pd-desc">{p.description}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={() => addToCart(p)}>
                <Icon name="cart" size={16} /> Add to Cart
              </button>
              <button className="btn btn-ghost" onClick={() => toggleWish(p)}>
                <Icon name={isWished(p.id) ? "heartFill" : "heart"} size={16} />
                {isWished(p.id) ? "Wishlisted" : "Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CartPage = ({ navigate }) => {
  const { cart, removeFromCart, updateQty, totalPrice } = useShop();
  if (cart.length === 0)
    return (
      <div className="center-box">
        <div style={{ fontSize: 60, marginBottom: 10 }}>🛒</div>
        <h2 style={{ fontSize: 28, marginBottom: 10 }}>Your cart is empty</h2>
        <p style={{ color: "var(--text-soft)", marginBottom: 24 }}>
          Let's find something you'll love
        </p>
        <button className="btn btn-primary" onClick={() => navigate("shop")}>
          Start Shopping
        </button>
      </div>
    );
  const shipping = totalPrice > 50 ? 0 : 5.99;
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title">Your Cart</div>
        </div>
        <div className="cart-grid">
          <div>
            {cart.map((i) => (
              <div key={i.id} className="cart-item">
                <img src={i.image} alt={i.title} />
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {i.title}
                  </div>
                  <div
                    style={{
                      color: "var(--text-soft)",
                      fontSize: 13,
                      marginBottom: 10,
                    }}
                  >
                    {formatPrice(i.price)} each
                  </div>
                  <div className="qty">
                    <button onClick={() => updateQty(i.id, -1)}>−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => updateQty(i.id, 1)}>+</button>
                  </div>
                </div>
                <div className="ci-actions">
                  <div style={{ fontWeight: 800, fontSize: 18 }}>
                    {formatPrice(i.price * i.qty)}
                  </div>
                  <button
                    className="icon-btn"
                    onClick={() => removeFromCart(i.id)}
                    aria-label="Remove"
                  >
                    <Icon name="trash" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <h3>Order Summary</h3>
            <div className="sum-row">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="sum-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
            </div>
            <div className="sum-row">
              <span>Tax</span>
              <span>{formatPrice(totalPrice * 0.08)}</span>
            </div>
            <div className="sum-row total">
              <span>Total</span>
              <span>
                {formatPrice(totalPrice + shipping + totalPrice * 0.08)}
              </span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: "100%", marginTop: 16, justifyContent: "center" }}
              onClick={() => navigate("checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckoutPage = ({ navigate }) => {
  const { totalPrice, clearCart, cart } = useShop();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    card: "",
  });
  const [errors, setErrors] = useState({});

  if (cart.length === 0) {
    return (
      <div className="center-box">
        <h2>Your cart is empty</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("shop")}
          style={{ marginTop: 20 }}
        >
          Go Shopping
        </button>
      </div>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Name is required";
    if (!form.email.includes("@")) er.email = "Valid email required";
    if (!form.address.trim()) er.address = "Address required";
    if (!form.city.trim()) er.city = "City required";
    if (!form.zip.trim()) er.zip = "Zip required";
    if (form.card.replace(/\s/g, "").length < 12)
      er.card = "Valid card number required";
    setErrors(er);
    if (Object.keys(er).length === 0) {
      clearCart();
      navigate("success");
    }
  };

  const shipping = totalPrice > 50 ? 0 : 5.99;
  const total = totalPrice + shipping + totalPrice * 0.08;

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title">Checkout</div>
        </div>
        <div className="cart-grid">
          <form
            onSubmit={submit}
            className="summary"
            style={{ position: "static" }}
          >
            <h3>Shipping Information</h3>
            <div className="form-grid">
              <div className="field">
                <label>Full Name</label>
                <input
                  className="input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <span className="err">{errors.name}</span>}
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  className="input"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <span className="err">{errors.email}</span>}
              </div>
            </div>
            <div className="field">
              <label>Address</label>
              <input
                className="input"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
              {errors.address && <span className="err">{errors.address}</span>}
            </div>
            <div className="form-grid">
              <div className="field">
                <label>City</label>
                <input
                  className="input"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
                {errors.city && <span className="err">{errors.city}</span>}
              </div>
              <div className="field">
                <label>Zip Code</label>
                <input
                  className="input"
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                />
                {errors.zip && <span className="err">{errors.zip}</span>}
              </div>
            </div>
            <h3 style={{ marginTop: 16 }}>Payment</h3>
            <div className="field">
              <label>Card Number</label>
              <input
                className="input"
                placeholder="1234 5678 9012 3456"
                value={form.card}
                onChange={(e) => setForm({ ...form, card: e.target.value })}
              />
              {errors.card && <span className="err">{errors.card}</span>}
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "100%", justifyContent: "center", marginTop: 10 }}
            >
              Place Order
            </button>
          </form>
          <div className="summary">
            <h3>Order Summary</h3>
            {cart.map((i) => (
              <div
                key={i.id}
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 10,
                  fontSize: 13,
                }}
              >
                <img
                  src={i.image}
                  alt=""
                  style={{
                    width: 44,
                    height: 44,
                    background: "white",
                    borderRadius: 8,
                    padding: 4,
                    objectFit: "contain",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {i.title}
                  </div>
                  <div style={{ color: "var(--text-soft)", fontSize: 12 }}>
                    Qty: {i.qty}
                  </div>
                </div>
                <div style={{ fontWeight: 700 }}>
                  {formatPrice(i.price * i.qty)}
                </div>
              </div>
            ))}
            <div
              className="sum-row"
              style={{
                borderTop: "1px solid var(--card-border)",
                paddingTop: 12,
                marginTop: 10,
              }}
            >
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="sum-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
            </div>
            <div className="sum-row">
              <span>Tax</span>
              <span>{formatPrice(totalPrice * 0.08)}</span>
            </div>
            <div className="sum-row total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SuccessPage = ({ navigate }) => (
  <div className="center-box">
    <div className="success-icon">
      <Icon name="check" size={50} />
    </div>
    <h2 style={{ fontSize: 36, marginBottom: 10 }}>Order Placed!</h2>
    <p style={{ color: "var(--text-soft)", maxWidth: 400, marginBottom: 24 }}>
      Thank you for your purchase. A confirmation email has been sent to you.
      Your order will arrive in 3-5 business days.
    </p>
    <div
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <button className="btn btn-primary" onClick={() => navigate("shop")}>
        Continue Shopping
      </button>
      <button className="btn btn-ghost" onClick={() => navigate("home")}>
        Back to Home
      </button>
    </div>
  </div>
);

const AuthPage = ({ navigate }) => {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const { toast } = useShop();

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (mode === "signup" && !form.name.trim()) er.name = "Name required";
    if (!form.email.includes("@")) er.email = "Valid email required";
    if (form.password.length < 6) er.password = "Password must be 6+ chars";
    if (mode === "signup" && form.password !== form.confirm)
      er.confirm = "Passwords must match";
    setErrors(er);
    if (Object.keys(er).length === 0) {
      toast(mode === "login" ? "Welcome back!" : "Account created!");
      navigate("home");
    }
  };

  return (
    <div className="auth-wrap container">
      <div className="auth-card">
        <h2>{mode === "login" ? "Welcome Back" : "Create Account"}</h2>
        <p className="sub">
          {mode === "login"
            ? "Sign in to continue shopping"
            : "Join us and start shopping"}
        </p>
        <div className="auth-tabs">
          <button
            className={`auth-tab ${mode === "login" ? "active" : ""}`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`auth-tab ${mode === "signup" ? "active" : ""}`}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={submit}>
          {mode === "signup" && (
            <div className="field">
              <label>Full Name</label>
              <input
                className="input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <span className="err">{errors.name}</span>}
            </div>
          )}
          <div className="field">
            <label>Email</label>
            <input
              className="input"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <span className="err">{errors.email}</span>}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              className="input"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {errors.password && <span className="err">{errors.password}</span>}
          </div>
          {mode === "signup" && (
            <div className="field">
              <label>Confirm Password</label>
              <input
                className="input"
                type="password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              />
              {errors.confirm && <span className="err">{errors.confirm}</span>}
            </div>
          )}
          <button
            className="btn btn-primary"
            type="submit"
            style={{ width: "100%", justifyContent: "center", marginTop: 6 }}
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

const NotFoundPage = ({ navigate }) => (
  <div className="center-box">
    <h1>404</h1>
    <h2 style={{ fontSize: 28, marginBottom: 10 }}>Page Not Found</h2>
    <p style={{ color: "var(--text-soft)", marginBottom: 24 }}>
      The page you're looking for doesn't exist.
    </p>
    <button className="btn btn-primary" onClick={() => navigate("home")}>
      Back to Home
    </button>
  </div>
);

const Footer = ({ navigate }) => (
  <footer className="footer">
    <div className="container">
      <div className="foot-grid">
        <div className="foot-col">
          <div className="logo" style={{ marginBottom: 12 }}>
            <div className="logo-badge">L</div> Lumière
          </div>
          <p
            style={{
              color: "var(--text-soft)",
              fontSize: 14,
              lineHeight: 1.6,
              maxWidth: 340,
            }}
          >
            Curated premium products delivered to your door. Quality, style, and
            service you can trust.
          </p>
          <div className="socials">
            <a className="social" href="#">
              <Icon name="fb" size={16} />
            </a>
            <a className="social" href="#">
              <Icon name="ig" size={16} />
            </a>
            <a className="social" href="#">
              <Icon name="tw" size={16} />
            </a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Shop</h4>
          <a onClick={() => navigate("shop")} style={{ cursor: "pointer" }}>
            All Products
          </a>
          <a onClick={() => navigate("shop")} style={{ cursor: "pointer" }}>
            New Arrivals
          </a>
          <a onClick={() => navigate("shop")} style={{ cursor: "pointer" }}>
            Best Sellers
          </a>
        </div>
        <div className="foot-col">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
        </div>
        <div className="foot-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Lumière. All rights reserved. Crafted with
        ♥
      </div>
    </div>
  </footer>
);

/* ===================== APP ===================== */
const App = () => {
  const [page, setPage] = useState("home");
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = (p, id = null) => {
    setPage(p);
    setProductId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <HomePage
            products={products}
            loading={loading}
            error={error}
            refetch={fetchProducts}
            navigate={navigate}
          />
        );
      case "shop":
        return (
          <ShopPage
            products={products}
            loading={loading}
            error={error}
            refetch={fetchProducts}
            navigate={navigate}
          />
        );
      case "product":
        return (
          <ProductPage
            products={products}
            productId={productId}
            navigate={navigate}
          />
        );
      case "cart":
        return <CartPage navigate={navigate} />;
      case "checkout":
        return <CheckoutPage navigate={navigate} />;
      case "success":
        return <SuccessPage navigate={navigate} />;
      case "login":
        return <AuthPage navigate={navigate} />;
      default:
        return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <ShopProvider>
      <GlobalStyles />
      <Navbar page={page} navigate={navigate} />
      <Toasts />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </ShopProvider>
  );
};

export default App;
