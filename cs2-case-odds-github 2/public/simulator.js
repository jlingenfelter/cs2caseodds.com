// CS2 Case Opening Simulator
(function(){
'use strict';

const ODDS = { milspec:0.7992, restricted:0.1598, classified:0.032, covert:0.0064, gold:0.0026 };
const RARITY_ORDER = ['milspec','restricted','classified','covert','gold'];
const RARITY_COLORS = { milspec:'#4b69ff', restricted:'#8847ff', classified:'#d32ce6', covert:'#eb4b4b', gold:'#ffd700' };
const RARITY_NAMES = { milspec:'Mil-Spec', restricted:'Restricted', classified:'Classified', covert:'Covert', gold:'Knife / Gloves' };

let caseData = null;
let stats = { total:0, milspec:0, restricted:0, classified:0, covert:0, gold:0, history:[] };
let isSpinning = false;
let mode = 'roulette'; // 'roulette' or 'quick'

function init() {
  const el = document.getElementById('sim-app');
  if (!el) return;

  // Load case data from embedded JSON
  const dataEl = document.getElementById('sim-data');
  if (dataEl) {
    try { caseData = JSON.parse(dataEl.textContent); } catch(e) { console.error('Failed to parse case data'); return; }
  }
  if (!caseData || !caseData.skins) return;

  // Mode toggle
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      mode = btn.dataset.mode;
      document.querySelectorAll('[data-mode]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('roulette-container').style.display = mode === 'roulette' ? 'block' : 'none';
      document.getElementById('quick-container').style.display = mode === 'quick' ? 'block' : 'none';
    });
  });

  // Open buttons
  document.getElementById('btn-open')?.addEventListener('click', openCase);
  document.getElementById('btn-open-5')?.addEventListener('click', () => openMultiple(5));
  document.getElementById('btn-open-10')?.addEventListener('click', () => openMultiple(10));
  document.getElementById('btn-reset')?.addEventListener('click', resetStats);

  buildSkinList();
  updateStats();
}

function rollRarity() {
  const r = Math.random();
  let cum = 0;
  for (const rarity of RARITY_ORDER) {
    cum += ODDS[rarity];
    if (r < cum) return rarity;
  }
  return 'milspec';
}

function rollSkin() {
  const rarity = rollRarity();
  const skinsOfRarity = caseData.skins.filter(s => s.rarity === rarity);
  if (skinsOfRarity.length === 0) return { name:'Unknown', weapon:'Unknown', rarity };
  return skinsOfRarity[Math.floor(Math.random() * skinsOfRarity.length)];
}

function openCase() {
  if (isSpinning) return;
  const skin = rollSkin();

  if (mode === 'roulette') {
    spinRoulette(skin);
  } else {
    quickOpen(skin);
  }
}

function openMultiple(count) {
  if (isSpinning) return;
  const results = [];
  for (let i = 0; i < count; i++) results.push(rollSkin());

  // Show all results
  const container = document.getElementById('multi-results');
  if (container) {
    container.innerHTML = results.map(s =>
      `<div class="multi-item" style="border-color:${RARITY_COLORS[s.rarity]}">
        <div class="multi-rarity" style="background:${RARITY_COLORS[s.rarity]}">${RARITY_NAMES[s.rarity]}</div>
        <div class="multi-weapon">${s.weapon}</div>
        <div class="multi-name">${s.name}</div>
      </div>`
    ).join('');
    container.style.display = 'flex';
  }

  // Update stats
  results.forEach(s => {
    stats.total++;
    stats[s.rarity]++;
    stats.history.unshift(s);
  });
  if (stats.history.length > 100) stats.history = stats.history.slice(0, 100);
  updateStats();
  updateHistory();
}

// ========== ROULETTE ANIMATION ==========
function spinRoulette(winSkin) {
  isSpinning = true;
  const strip = document.getElementById('roulette-strip');
  const container = document.getElementById('roulette-window');
  if (!strip || !container) { isSpinning = false; return; }

  // Hide multi results
  const mr = document.getElementById('multi-results');
  if (mr) mr.style.display = 'none';

  // Build strip: ~60 random items with the winner placed at position ~50
  const items = [];
  const winPos = 48 + Math.floor(Math.random() * 4);
  const ITEM_W = 120; // width of each item in px

  for (let i = 0; i < 60; i++) {
    if (i === winPos) {
      items.push(winSkin);
    } else {
      items.push(rollSkin());
    }
  }

  strip.innerHTML = items.map(s =>
    `<div class="roulette-item" style="border-bottom:3px solid ${RARITY_COLORS[s.rarity]}">
      <div class="ri-color" style="background:${RARITY_COLORS[s.rarity]}20;color:${RARITY_COLORS[s.rarity]}">${s.weapon}</div>
      <div class="ri-name">${s.name}</div>
    </div>`
  ).join('');

  // Calculate scroll distance
  const containerW = container.offsetWidth;
  const targetX = (winPos * ITEM_W) + (ITEM_W / 2) - (containerW / 2);

  // Reset position
  strip.style.transition = 'none';
  strip.style.transform = 'translateX(0)';

  // Force reflow
  strip.offsetHeight;

  // Animate with easing
  const duration = 4000 + Math.random() * 1000;
  strip.style.transition = `transform ${duration}ms cubic-bezier(0.15, 0.85, 0.25, 1)`;
  strip.style.transform = `translateX(-${targetX}px)`;

  setTimeout(() => {
    isSpinning = false;
    showResult(winSkin);
    stats.total++;
    stats[winSkin.rarity]++;
    stats.history.unshift(winSkin);
    if (stats.history.length > 100) stats.history = stats.history.slice(0, 100);
    updateStats();
    updateHistory();
  }, duration + 200);
}

// ========== QUICK OPEN ==========
function quickOpen(skin) {
  const el = document.getElementById('quick-result');
  if (!el) return;

  // Hide multi results
  const mr = document.getElementById('multi-results');
  if (mr) mr.style.display = 'none';

  el.className = 'quick-reveal';
  el.style.borderColor = RARITY_COLORS[skin.rarity];
  el.innerHTML = `
    <div class="qr-flash" style="background:${RARITY_COLORS[skin.rarity]}"></div>
    <div class="qr-rarity" style="color:${RARITY_COLORS[skin.rarity]}">${RARITY_NAMES[skin.rarity]}</div>
    <div class="qr-weapon">${skin.weapon}</div>
    <div class="qr-name">${skin.name}</div>
  `;

  // Trigger animation
  requestAnimationFrame(() => {
    el.classList.add('revealed');
  });

  stats.total++;
  stats[skin.rarity]++;
  stats.history.unshift(skin);
  if (stats.history.length > 100) stats.history = stats.history.slice(0, 100);
  updateStats();
  updateHistory();
}

function showResult(skin) {
  const el = document.getElementById('result-display');
  if (!el) return;
  el.style.display = 'block';
  el.style.borderColor = RARITY_COLORS[skin.rarity];
  el.innerHTML = `
    <div style="color:${RARITY_COLORS[skin.rarity]};font-weight:700;font-size:0.9rem;margin-bottom:0.25rem">${RARITY_NAMES[skin.rarity]}</div>
    <div style="font-size:1.2rem;font-weight:700;color:var(--text)">${skin.weapon} | ${skin.name}</div>
  `;
}

function updateStats() {
  const el = document.getElementById('sim-stats');
  if (!el || stats.total === 0) return;

  const rows = RARITY_ORDER.map(r => {
    const count = stats[r];
    const pct = ((count / stats.total) * 100).toFixed(1);
    const expected = (ODDS[r] * 100).toFixed(1);
    return `<tr>
      <td><span style="color:${RARITY_COLORS[r]};font-weight:600">${RARITY_NAMES[r]}</span></td>
      <td>${count}</td>
      <td>${pct}%</td>
      <td>${expected}%</td>
    </tr>`;
  }).join('');

  el.innerHTML = `
    <div style="font-weight:700;margin-bottom:0.5rem;color:var(--text)">Total Opens: <span style="color:var(--accent)">${stats.total}</span></div>
    <table>
      <tr><th>Rarity</th><th>Count</th><th>Your %</th><th>Expected %</th></tr>
      ${rows}
    </table>`;
}

function updateHistory() {
  const el = document.getElementById('sim-history');
  if (!el || stats.history.length === 0) return;

  el.innerHTML = '<h3 style="margin-top:0;margin-bottom:0.5rem">Recent Opens</h3>' +
    '<div style="display:flex;flex-wrap:wrap;gap:0.3rem">' +
    stats.history.slice(0, 30).map(s =>
      `<span style="display:inline-block;padding:0.2rem 0.5rem;background:${RARITY_COLORS[s.rarity]}20;border:1px solid ${RARITY_COLORS[s.rarity]}40;border-radius:4px;font-size:0.75rem;color:${RARITY_COLORS[s.rarity]}">${s.weapon} | ${s.name}</span>`
    ).join('') +
    '</div>';
}

function resetStats() {
  stats = { total:0, milspec:0, restricted:0, classified:0, covert:0, gold:0, history:[] };
  const el = document.getElementById('sim-stats');
  if (el) el.innerHTML = '<p style="color:var(--muted)">Open cases to start tracking stats.</p>';
  const hist = document.getElementById('sim-history');
  if (hist) hist.innerHTML = '';
  const res = document.getElementById('result-display');
  if (res) res.style.display = 'none';
  const mr = document.getElementById('multi-results');
  if (mr) mr.style.display = 'none';
}

function buildSkinList() {
  const el = document.getElementById('case-contents');
  if (!el || !caseData) return;

  const grouped = {};
  caseData.skins.forEach(s => {
    if (!grouped[s.rarity]) grouped[s.rarity] = [];
    grouped[s.rarity].push(s);
  });

  el.innerHTML = RARITY_ORDER.filter(r => grouped[r]).map(r =>
    `<div style="margin-bottom:0.5rem">
      <span style="color:${RARITY_COLORS[r]};font-weight:600;font-size:0.85rem">${RARITY_NAMES[r]} (${(ODDS[r]*100).toFixed(2)}%)</span>
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.3rem">
        ${grouped[r].map(s => `<span style="padding:0.2rem 0.5rem;background:var(--surface2);border:1px solid ${RARITY_COLORS[r]}40;border-radius:4px;font-size:0.8rem">${s.weapon} | ${s.name}</span>`).join('')}
      </div>
    </div>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', init);
})();
