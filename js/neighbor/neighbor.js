/**
 * neighbors.js
 * ------------
 * Drop into your  js/  folder and add
 *   <script src="./js/neighbors.js"></script>
 * BEFORE gameplay.js / main.js in index.html.
 *
 * Call  randomiseNeighbor()  alongside randomiseMonster()
 * inside startNight() in gameplay.js.
 */

const NEIGHBORS = [

    /* ── 1. THE ORIGINAL ─────────────────────────────────────────── */
    /* Middle-aged guy in green jacket, holding a candle */
    `<svg width="80" height="130" viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="70" width="40" height="55" rx="4" fill="#2a3a2a"/>
      <rect x="28" y="70" width="24" height="55" rx="2" fill="#334433"/>
      <ellipse cx="40" cy="52" rx="20" ry="22" fill="#c8a882"/>
      <ellipse cx="40" cy="34" rx="21" ry="12" fill="#3a2810"/>
      <rect x="19" y="34" width="5" height="20" rx="2" fill="#3a2810"/>
      <rect x="56" y="34" width="5" height="20" rx="2" fill="#3a2810"/>
      <ellipse cx="33" cy="50" rx="4" ry="4.5" fill="#fff"/>
      <ellipse cx="47" cy="50" rx="4" ry="4.5" fill="#fff"/>
      <circle cx="33" cy="51" r="2.5" fill="#5a3820"/>
      <circle cx="47" cy="51" r="2.5" fill="#5a3820"/>
      <circle cx="32" cy="50" r="0.8" fill="#fff"/>
      <circle cx="46" cy="50" r="0.8" fill="#fff"/>
      <path d="M32 60 Q40 66 48 60" fill="none" stroke="#a07050" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M20 85 Q8 90 10 105"  stroke="#2a3a2a" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M60 85 Q72 80 70 95"  stroke="#2a3a2a" stroke-width="10" fill="none" stroke-linecap="round"/>
      <ellipse cx="10" cy="107" rx="7" ry="6" fill="#c8a882"/>
      <rect x="66" y="82" width="5" height="18" rx="1" fill="#d4a04a"/>
      <ellipse cx="68" cy="80" rx="4" ry="6" fill="#ffdd44" opacity="0.9"/>
      <ellipse cx="68" cy="78" rx="2" ry="3" fill="#fff" opacity="0.6"/>
    </svg>`,
  
    /* ── 2. ELDERLY WOMAN ────────────────────────────────────────── */
    /* Small hunched old lady in a grey cardigan holding a mug */
    `<svg width="80" height="130" viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
      <!-- body — hunched, narrow -->
      <path d="M24 78 Q18 100 20 125 L56 125 Q58 100 52 78 Z" fill="#6a6a72"/>
      <rect x="30" y="78" width="16" height="47" rx="2" fill="#7a7a84"/>
      <!-- cardigan lapels -->
      <path d="M32 78 L28 100" stroke="#555560" stroke-width="2" fill="none"/>
      <path d="M44 78 L48 100" stroke="#555560" stroke-width="2" fill="none"/>
      <!-- buttons -->
      <circle cx="38" cy="88"  r="1.5" fill="#444"/>
      <circle cx="38" cy="96"  r="1.5" fill="#444"/>
      <circle cx="38" cy="104" r="1.5" fill="#444"/>
      <!-- head — smaller, lower -->
      <ellipse cx="38" cy="60" rx="16" ry="18" fill="#d4aa88"/>
      <!-- white hair bun -->
      <ellipse cx="38" cy="43" rx="16" ry="9"  fill="#ddd"/>
      <ellipse cx="38" cy="40" rx="10" ry="7"  fill="#eee"/>
      <!-- eyes — small, kind -->
      <ellipse cx="31" cy="58" rx="3.5" ry="3.5" fill="#fff"/>
      <ellipse cx="45" cy="58" rx="3.5" ry="3.5" fill="#fff"/>
      <circle  cx="31" cy="59" r="2"   fill="#6b4c2a"/>
      <circle  cx="45" cy="59" r="2"   fill="#6b4c2a"/>
      <circle  cx="30" cy="58" r="0.7" fill="#fff"/>
      <circle  cx="44" cy="58" r="0.7" fill="#fff"/>
      <!-- wrinkle lines -->
      <path d="M27 54 Q29 56 27 58" stroke="rgba(0,0,0,0.15)" stroke-width="0.8" fill="none"/>
      <path d="M49 54 Q47 56 49 58" stroke="rgba(0,0,0,0.15)" stroke-width="0.8" fill="none"/>
      <!-- gentle smile -->
      <path d="M31 66 Q38 71 45 66" fill="none" stroke="#b07858" stroke-width="1.5" stroke-linecap="round"/>
      <!-- left arm down -->
      <path d="M24 90 Q12 98 14 112" stroke="#6a6a72" stroke-width="9" fill="none" stroke-linecap="round"/>
      <ellipse cx="14" cy="114" rx="6" ry="5" fill="#d4aa88"/>
      <!-- right arm — holding mug -->
      <path d="M52 88 Q62 84 62 96" stroke="#6a6a72" stroke-width="9" fill="none" stroke-linecap="round"/>
      <!-- mug -->
      <rect x="58" y="90" width="14" height="14" rx="3" fill="#8899aa"/>
      <path d="M72 93 Q78 93 78 97 Q78 101 72 101" stroke="#8899aa" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- steam -->
      <path d="M62 88 Q60 82 62 76" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M67 87 Q65 80 67 74" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>`,
  
    /* ── 3. YOUNG WOMAN IN BATHROBE ─────────────────────────────── */
    /* Tired-looking young woman, fluffy robe, messy hair, flashlight */
    `<svg width="80" height="130" viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
      <!-- bathrobe body — wide, fluffy -->
      <path d="M16 72 Q12 110 14 126 L62 126 Q64 110 60 72 Z" fill="#e8e0d8"/>
      <!-- robe shading folds -->
      <path d="M28 72 Q24 100 26 126" stroke="rgba(0,0,0,0.07)" stroke-width="3" fill="none"/>
      <path d="M48 72 Q52 100 50 126" stroke="rgba(0,0,0,0.07)" stroke-width="3" fill="none"/>
      <!-- robe collar V -->
      <path d="M30 72 L38 92 L46 72" fill="#d8d0c8" stroke="#c8c0b8" stroke-width="1"/>
      <!-- fluffy robe trim -->
      <path d="M16 72 Q14 80 14 126" stroke="#f8f4f0" stroke-width="4" fill="none"/>
      <path d="M60 72 Q62 80 62 126" stroke="#f8f4f0" stroke-width="4" fill="none"/>
      <!-- head -->
      <ellipse cx="38" cy="52" rx="18" ry="20" fill="#f0c8a0"/>
      <!-- messy hair -->
      <ellipse cx="38" cy="34" rx="20" ry="11" fill="#4a3020"/>
      <path d="M18 36 Q16 26 22 22" stroke="#4a3020" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M22 30 Q20 20 26 16" stroke="#3a2818" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M58 36 Q60 26 55 24" stroke="#4a3020" stroke-width="5" fill="none" stroke-linecap="round"/>
      <!-- tired eyes — slightly droopy -->
      <ellipse cx="30" cy="50" rx="5" ry="4.5" fill="#fff"/>
      <ellipse cx="46" cy="50" rx="5" ry="4.5" fill="#fff"/>
      <ellipse cx="30" cy="51" rx="3.5" ry="3"   fill="#6b8a5a"/>
      <ellipse cx="46" cy="51" rx="3.5" ry="3"   fill="#6b8a5a"/>
      <circle  cx="30" cy="51" r="2"   fill="#000"/>
      <circle  cx="46" cy="51" r="2"   fill="#000"/>
      <circle  cx="29" cy="50" r="0.8" fill="#fff"/>
      <circle  cx="45" cy="50" r="0.8" fill="#fff"/>
      <!-- droopy eyelid line -->
      <path d="M25 48 Q30 46 35 48" stroke="rgba(0,0,0,0.2)" stroke-width="1" fill="none"/>
      <path d="M41 48 Q46 46 51 48" stroke="rgba(0,0,0,0.2)" stroke-width="1" fill="none"/>
      <!-- neutral/tired mouth -->
      <path d="M32 61 Q38 63 44 61" fill="none" stroke="#c09070" stroke-width="1.5" stroke-linecap="round"/>
      <!-- left arm down -->
      <path d="M18 88 Q6 96 8 112"  stroke="#e8e0d8" stroke-width="11" fill="none" stroke-linecap="round"/>
      <ellipse cx="8" cy="114" rx="6" ry="5" fill="#f0c8a0"/>
      <!-- right arm — flashlight -->
      <path d="M58 86 Q70 82 70 96"  stroke="#e8e0d8" stroke-width="11" fill="none" stroke-linecap="round"/>
      <!-- flashlight body -->
      <rect x="66" y="80" width="8" height="20" rx="3" fill="#555"/>
      <ellipse cx="70" cy="78" rx="5" ry="4" fill="#777"/>
      <!-- flashlight beam -->
      <path d="M65 76 Q50 60 55 50" stroke="rgba(255,255,180,0.25)" stroke-width="8" fill="none" stroke-linecap="round"/>
      <ellipse cx="70" cy="78" rx="3" ry="2.5" fill="#ffffc0" opacity="0.8"/>
    </svg>`,
  
    /* ── 4. DELIVERY GUY ─────────────────────────────────────────── */
    /* Tired courier in high-vis vest, holding a package */
    `<svg width="80" height="130" viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
      <!-- trousers -->
      <rect x="22" y="88" width="34" height="38" rx="3" fill="#2a2a3a"/>
      <line x1="39" y1="88" x2="39" y2="126" stroke="#1a1a28" stroke-width="2"/>
      <!-- shirt -->
      <rect x="20" y="64" width="38" height="28" rx="3" fill="#3a3a4a"/>
      <!-- high-vis vest -->
      <path d="M20 64 L20 92 L26 92 L26 64 Z" fill="#e8a800"/>
      <path d="M52 64 L52 92 L58 92 L58 64 Z" fill="#e8a800"/>
      <rect x="26" y="64" width="26" height="6" rx="1" fill="#e8a800"/>
      <!-- reflective strips -->
      <rect x="20" y="80" width="38" height="3" rx="1" fill="rgba(255,255,200,0.5)"/>
      <rect x="20" y="72" width="6"  height="2" rx="1" fill="rgba(255,255,200,0.4)"/>
      <rect x="52" y="72" width="6"  height="2" rx="1" fill="rgba(255,255,200,0.4)"/>
      <!-- head -->
      <ellipse cx="39" cy="46" rx="18" ry="19" fill="#c8a070"/>
      <!-- cap -->
      <ellipse cx="39" cy="30" rx="20" ry="8"  fill="#222"/>
      <rect x="19" y="28" width="40" height="8" rx="2" fill="#333"/>
      <rect x="14" y="32" width="18" height="4" rx="2" fill="#222"/>
      <!-- eyes — neutral tired -->
      <ellipse cx="31" cy="46" rx="4.5" ry="4" fill="#fff"/>
      <ellipse cx="47" cy="46" rx="4.5" ry="4" fill="#fff"/>
      <circle  cx="31" cy="47" r="2.5" fill="#5a3820"/>
      <circle  cx="47" cy="47" r="2.5" fill="#5a3820"/>
      <circle  cx="30" cy="46" r="0.8" fill="#fff"/>
      <circle  cx="46" cy="46" r="0.8" fill="#fff"/>
      <!-- mouth — flat -->
      <path d="M33 55 Q39 57 45 55" fill="none" stroke="#a07040" stroke-width="1.5" stroke-linecap="round"/>
      <!-- left arm down -->
      <path d="M22 74 Q10 84 10 102" stroke="#3a3a4a" stroke-width="10" fill="none" stroke-linecap="round"/>
      <ellipse cx="10" cy="104" rx="6" ry="5" fill="#c8a070"/>
      <!-- right arm — package -->
      <path d="M56 74 Q68 78 68 94"  stroke="#3a3a4a" stroke-width="10" fill="none" stroke-linecap="round"/>
      <!-- package box -->
      <rect x="60" y="88" width="18" height="16" rx="2" fill="#c8a060"/>
      <rect x="60" y="88" width="18" height="4"  rx="2" fill="#b89050"/>
      <!-- tape cross on box -->
      <line x1="69" y1="92" x2="69" y2="104" stroke="rgba(255,255,180,0.6)" stroke-width="2"/>
      <line x1="62" y1="97" x2="78" y2="97"  stroke="rgba(255,255,180,0.6)" stroke-width="2"/>
    </svg>`,
  
    /* ── 5. LITTLE KID ───────────────────────────────────────────── */
    /* Small child in pajamas holding a teddy bear, wide awake */
    `<svg width="80" height="130" viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
      <!-- PJ bottoms -->
      <rect x="24" y="90" width="28" height="36" rx="4" fill="#5577cc"/>
      <!-- PJ stripes -->
      <rect x="24" y="94"  width="28" height="4" rx="1" fill="#4466bb" opacity="0.5"/>
      <rect x="24" y="102" width="28" height="4" rx="1" fill="#4466bb" opacity="0.5"/>
      <rect x="24" y="110" width="28" height="4" rx="1" fill="#4466bb" opacity="0.5"/>
      <rect x="24" y="118" width="28" height="4" rx="1" fill="#4466bb" opacity="0.5"/>
      <!-- PJ top -->
      <rect x="20" y="68" width="36" height="26" rx="4" fill="#6688dd"/>
      <!-- collar -->
      <path d="M30 68 L38 80 L46 68" fill="#5577cc" stroke="#4466bb" stroke-width="1"/>
      <!-- small head — higher up, kid proportions -->
      <ellipse cx="38" cy="52" rx="17" ry="18" fill="#f0c898"/>
      <!-- hair — messy, sticking up -->
      <ellipse cx="38" cy="36" rx="18" ry="10" fill="#5a3820"/>
      <path d="M22 36 Q20 26 24 20" stroke="#5a3820" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M38 33 Q36 22 40 16" stroke="#5a3820" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M54 36 Q56 28 52 22" stroke="#5a3820" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- big wide eyes -->
      <ellipse cx="30" cy="52" rx="6" ry="6.5" fill="#fff"/>
      <ellipse cx="46" cy="52" rx="6" ry="6.5" fill="#fff"/>
      <ellipse cx="30" cy="53" rx="4" ry="4.5" fill="#6a9ad4"/>
      <ellipse cx="46" cy="53" rx="4" ry="4.5" fill="#6a9ad4"/>
      <circle  cx="30" cy="53" r="2.5" fill="#000"/>
      <circle  cx="46" cy="53" r="2.5" fill="#000"/>
      <circle  cx="28" cy="51" r="1.2" fill="#fff"/>
      <circle  cx="44" cy="51" r="1.2" fill="#fff"/>
      <!-- small nose dot -->
      <circle cx="38" cy="58" r="1.5" fill="rgba(180,100,80,0.4)"/>
      <!-- open innocent mouth -->
      <path d="M32 63 Q38 68 44 63" fill="none" stroke="#c08060" stroke-width="1.5" stroke-linecap="round"/>
      <!-- left arm -->
      <path d="M22 80 Q10 88 12 104" stroke="#6688dd" stroke-width="9" fill="none" stroke-linecap="round"/>
      <ellipse cx="12" cy="106" rx="5.5" ry="5" fill="#f0c898"/>
      <!-- right arm — holding teddy -->
      <path d="M54 80 Q66 78 65 93"  stroke="#6688dd" stroke-width="9" fill="none" stroke-linecap="round"/>
      <!-- teddy bear (simple) -->
      <!-- body -->
      <ellipse cx="70" cy="102" rx="9" ry="11" fill="#c8a060"/>
      <!-- head -->
      <ellipse cx="70" cy="89"  rx="8" ry="8"  fill="#c8a060"/>
      <!-- ears -->
      <circle cx="63" cy="83" r="4" fill="#c8a060"/>
      <circle cx="63" cy="83" r="2.5" fill="#b89050"/>
      <circle cx="77" cy="83" r="4" fill="#c8a060"/>
      <circle cx="77" cy="83" r="2.5" fill="#b89050"/>
      <!-- teddy face -->
      <circle cx="67" cy="88" r="1.5" fill="#000"/>
      <circle cx="73" cy="88" r="1.5" fill="#000"/>
      <ellipse cx="70" cy="92" rx="3" ry="2" fill="#b89050"/>
      <path d="M68 93 Q70 95 72 93" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
    </svg>`,
  
    /* ── 6. OLDER MAN WITH NEWSPAPER ────────────────────────────── */
    /* Bald neighbor in a vest, holding a rolled newspaper */
    `<svg width="80" height="130" viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
      <!-- trousers -->
      <rect x="22" y="86" width="34" height="40" rx="3" fill="#4a3a28"/>
      <line x1="39" y1="86" x2="39" y2="126" stroke="#382a1a" stroke-width="2"/>
      <!-- shirt -->
      <rect x="20" y="62" width="38" height="28" rx="3" fill="#d4c4b0"/>
      <!-- vest over shirt -->
      <path d="M20 62 L20 90 L30 90 L30 62 Z" fill="#8a6a44"/>
      <path d="M48 62 L48 90 L58 90 L58 62 Z" fill="#8a6a44"/>
      <rect x="30" y="62" width="18" height="5" rx="1" fill="#8a6a44"/>
      <!-- vest buttons -->
      <circle cx="39" cy="72" r="1.5" fill="#6a4a28"/>
      <circle cx="39" cy="80" r="1.5" fill="#6a4a28"/>
      <!-- head — rounder, older -->
      <ellipse cx="39" cy="46" rx="18" ry="19" fill="#d0a878"/>
      <!-- bald head — slight shine -->
      <ellipse cx="39" cy="32" rx="18" ry="11" fill="#c89c68"/>
      <ellipse cx="33" cy="28" rx="6"  ry="4"  fill="rgba(255,230,200,0.25)"/>
      <!-- side hair tufts -->
      <path d="M21 38 Q18 30 20 24" stroke="#5a3820" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M57 38 Q60 30 58 24" stroke="#5a3820" stroke-width="5" fill="none" stroke-linecap="round"/>
      <!-- eyes — slightly squinting -->
      <ellipse cx="31" cy="46" rx="4.5" ry="4" fill="#fff"/>
      <ellipse cx="47" cy="46" rx="4.5" ry="4" fill="#fff"/>
      <ellipse cx="31" cy="47" rx="3"   ry="3" fill="#4a3020"/>
      <ellipse cx="47" cy="47" rx="3"   ry="3" fill="#4a3020"/>
      <circle  cx="30" cy="46" r="0.8"  fill="#fff"/>
      <circle  cx="46" cy="46" r="0.8"  fill="#fff"/>
      <!-- thick brows -->
      <path d="M26 41 Q31 39 36 41" stroke="#4a3020" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M42 41 Q47 39 52 41" stroke="#4a3020" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- mouth — slight frown/neutral -->
      <path d="M33 56 Q39 54 45 56" fill="none" stroke="#a07040" stroke-width="1.5" stroke-linecap="round"/>
      <!-- left arm down -->
      <path d="M22 74 Q10 84 10 102" stroke="#d4c4b0" stroke-width="10" fill="none" stroke-linecap="round"/>
      <ellipse cx="10" cy="104" rx="6" ry="5" fill="#d0a878"/>
      <!-- right arm — rolled newspaper -->
      <path d="M56 74 Q68 74 68 90"  stroke="#d4c4b0" stroke-width="10" fill="none" stroke-linecap="round"/>
      <!-- newspaper roll -->
      <rect x="63" y="72" width="10" height="22" rx="4" fill="#e8e0c8"/>
      <line x1="65" y1="78" x2="71" y2="78" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="65" y1="82" x2="71" y2="82" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
      <line x1="65" y1="86" x2="71" y2="86" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
    </svg>`,
  
  ];
  
  /**
   * Pick a random neighbor SVG and inject it into #hall-neighbor.
   */
  function randomiseNeighbor() {
    const el = document.getElementById("hall-neighbor");
    if (!el) return;
    const svg = NEIGHBORS[Math.floor(Math.random() * NEIGHBORS.length)];
    el.innerHTML = svg;
  }
  
  window.NEIGHBORS       = NEIGHBORS;
  window.randomiseNeighbor = randomiseNeighbor;
