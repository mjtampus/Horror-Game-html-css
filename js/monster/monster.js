const MONSTERS = [
 
    /* ── 1. THE ORIGINAL BEAST ────────────────────────────────────── */
    /* Dark hulking creature with red glowing eyes */
    `<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="100" rx="32" ry="44" fill="#150a0a"/>
      <rect x="40" y="58" width="20" height="20" fill="#150a0a"/>
      <ellipse cx="50" cy="46" rx="26" ry="30" fill="#1a0c0c"/>
      <ellipse cx="38" cy="40" rx="9" ry="11" fill="#0d0505"/>
      <ellipse cx="62" cy="40" rx="9" ry="11" fill="#0d0505"/>
      <ellipse cx="38" cy="40" rx="6" ry="7" fill="#cc0000"/>
      <ellipse cx="62" cy="40" rx="6" ry="7" fill="#cc0000"/>
      <ellipse cx="38" cy="40" rx="3" ry="4" fill="#ff2200"/>
      <ellipse cx="62" cy="40" rx="3" ry="4" fill="#ff2200"/>
      <circle cx="38" cy="40" r="1.5" fill="#000"/>
      <circle cx="62" cy="40" r="1.5" fill="#000"/>
      <circle cx="36" cy="38" r="1" fill="rgba(255,255,255,0.3)"/>
      <circle cx="60" cy="38" r="1" fill="rgba(255,255,255,0.3)"/>
      <path d="M28 68 Q50 84 72 68" fill="none" stroke="#550000" stroke-width="2"/>
      <path d="M33 68 L30 76 M40 72 L39 80 M50 74 L50 82 M60 72 L61 80 M67 68 L70 76"
            stroke="#cc4444" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M18 90 Q0 110 6 130"  stroke="#150a0a" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M82 90 Q100 110 94 130" stroke="#150a0a" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M6 130 L0 140 M6 130 L6 142 M6 130 L13 140"  stroke="#880000" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M94 130 L88 140 M94 130 L94 142 M94 130 L100 140" stroke="#880000" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`,
   
    /* ── 2. THE WRAITH ────────────────────────────────────────────── */
    /* Tall, hooded silhouette with hollow white eyes and torn hem */
    `<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wraithGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%"   stop-color="rgba(180,0,0,0.25)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
        <filter id="wraithBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3"/>
        </filter>
      </defs>
      <!-- body aura -->
      <ellipse cx="50" cy="75" rx="42" ry="72" fill="url(#wraithGlow)" filter="url(#wraithBlur)"/>
      <!-- robe body -->
      <path d="M22 40 Q20 10 50 8 Q80 10 78 40 L82 130
               Q70 118 62 130 Q56 118 50 130 Q44 118 38 130 Q32 118 26 130 Q20 118 18 130 Z"
            fill="#0e0e12" stroke="rgba(80,0,0,0.6)" stroke-width="1"/>
      <!-- hood shadow -->
      <ellipse cx="50" cy="36" rx="28" ry="30" fill="#08080c"/>
      <!-- LEFT hollow eye -->
      <ellipse cx="38" cy="32" rx="7" ry="9" fill="#000"/>
      <ellipse cx="38" cy="32" rx="4" ry="5" fill="rgba(220,220,200,0.9)"/>
      <ellipse cx="38" cy="32" rx="2" ry="2.5" fill="#000"/>
      <!-- RIGHT hollow eye -->
      <ellipse cx="62" cy="32" rx="7" ry="9" fill="#000"/>
      <ellipse cx="62" cy="32" rx="4" ry="5" fill="rgba(220,220,200,0.9)"/>
      <ellipse cx="62" cy="32" rx="2" ry="2.5" fill="#000"/>
      <!-- thin mouth slash -->
      <path d="M40 48 Q50 44 60 48" stroke="rgba(150,0,0,0.8)" stroke-width="1.5" fill="none"/>
      <!-- claw left -->
      <path d="M22 100 Q6 108 4 122" stroke="#1a1a22" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M4 122 L0 132 M4 122 L5 134 M4 122 L10 130" stroke="#550022" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- claw right -->
      <path d="M78 100 Q94 108 96 122" stroke="#1a1a22" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M96 122 L92 132 M96 122 L97 134 M96 122 L102 130" stroke="#550022" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- torn hem -->
      <path d="M18 130 L22 142 L28 130 L34 144 L40 130 L46 143 L52 130 L58 144 L64 130 L70 143 L76 130 L82 130"
            fill="#0e0e12" stroke="none"/>
    </svg>`,
   
    /* ── 3. THE CRAWLER ───────────────────────────────────────────── */
    /* Low, spider-like horror with too many limbs and yellow eyes */
    `<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="crawlerGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <!-- ambient glow -->
      <ellipse cx="50" cy="95" rx="40" ry="30" fill="rgba(40,30,0,0.4)" filter="url(#crawlerGlow)"/>
      <!-- upper body / carapace -->
      <ellipse cx="50" cy="80" rx="28" ry="22" fill="#1a1400"/>
      <!-- abdomen -->
      <ellipse cx="50" cy="110" rx="22" ry="28" fill="#221b00"/>
      <!-- neck -->
      <rect x="44" y="72" width="12" height="14" fill="#1a1400"/>
      <!-- head -->
      <ellipse cx="50" cy="62" rx="20" ry="18" fill="#252000"/>
      <!-- eye cluster — 4 eyes -->
      <ellipse cx="38" cy="58" rx="6" ry="6" fill="#000"/>
      <ellipse cx="38" cy="58" rx="4" ry="4" fill="#aaaa00"/>
      <circle  cx="38" cy="58" r="2"          fill="#000"/>
      <circle  cx="37" cy="57" r="0.8"        fill="rgba(255,255,180,0.5)"/>
   
      <ellipse cx="52" cy="55" rx="7" ry="7" fill="#000"/>
      <ellipse cx="52" cy="55" rx="5" ry="5" fill="#cccc00"/>
      <circle  cx="52" cy="55" r="2.5"        fill="#000"/>
      <circle  cx="51" cy="54" r="1"          fill="rgba(255,255,180,0.5)"/>
   
      <ellipse cx="62" cy="59" rx="5" ry="5" fill="#000"/>
      <ellipse cx="62" cy="59" rx="3.5" ry="3.5" fill="#999900"/>
      <circle  cx="62" cy="59" r="1.5"        fill="#000"/>
   
      <ellipse cx="44" cy="68" rx="4" ry="4" fill="#000"/>
      <ellipse cx="44" cy="68" rx="2.5" ry="2.5" fill="#888800"/>
      <circle  cx="44" cy="68" r="1"           fill="#000"/>
   
      <!-- mandibles -->
      <path d="M40 72 Q34 80 30 76" stroke="#443300" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M60 72 Q66 80 70 76" stroke="#443300" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M30 76 L27 82 M30 76 L33 83"  stroke="#775500" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M70 76 L67 82 M70 76 L73 83"  stroke="#775500" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- 6 legs -->
      <path d="M30 82 Q10 72 2  62" stroke="#2a2200" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M28 92 Q8  88 0  80" stroke="#2a2200" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M30 102 Q10 106 4 118" stroke="#2a2200" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M70 82 Q90 72 98 62"  stroke="#2a2200" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M72 92 Q92 88 100 80" stroke="#2a2200" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M70 102 Q90 106 96 118" stroke="#2a2200" stroke-width="5" fill="none" stroke-linecap="round"/>
      <!-- leg tips -->
      <path d="M2 62 L-2 58 M2 62 L0 68"   stroke="#664400" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M0 80 L-3 76 M0 80 L-2 86"  stroke="#664400" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M4 118 L1 124 M4 118 L8 124" stroke="#664400" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M98 62 L102 58 M98 62 L100 68"   stroke="#664400" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M100 80 L103 76 M100 80 L102 86"  stroke="#664400" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M96 118 L93 124 M96 118 L100 124" stroke="#664400" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>`,
   
    /* ── 4. THE PALE ONE ──────────────────────────────────────────── */
    /* Gaunt, tall humanoid with long neck, no nose, gaping black mouth */
    `<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="paleGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
      </defs>
      <!-- sickly glow -->
      <ellipse cx="50" cy="70" rx="38" ry="65" fill="rgba(30,60,20,0.2)" filter="url(#paleGlow)"/>
      <!-- thin body -->
      <path d="M34 70 Q30 120 28 148 L72 148 Q70 120 66 70 Z" fill="#1a2a18"/>
      <!-- long neck -->
      <rect x="44" y="44" width="12" height="28" rx="5" fill="#1e1e18"/>
      <!-- elongated head -->
      <ellipse cx="50" cy="34" rx="18" ry="26" fill="#2a2a20"/>
      <!-- sunken LEFT eye -->
      <ellipse cx="38" cy="28" rx="9" ry="10" fill="#080808"/>
      <ellipse cx="38" cy="28" rx="6" ry="7"  fill="rgba(0,80,0,0.9)"/>
      <ellipse cx="38" cy="28" rx="3" ry="3.5" fill="#000"/>
      <circle  cx="37" cy="26" r="1.2" fill="rgba(100,200,80,0.6)"/>
      <!-- sunken RIGHT eye -->
      <ellipse cx="62" cy="28" rx="9" ry="10" fill="#080808"/>
      <ellipse cx="62" cy="28" rx="6" ry="7"  fill="rgba(0,80,0,0.9)"/>
      <ellipse cx="62" cy="28" rx="3" ry="3.5" fill="#000"/>
      <circle  cx="61" cy="26" r="1.2" fill="rgba(100,200,80,0.6)"/>
      <!-- no-nose cavities -->
      <ellipse cx="46" cy="40" rx="2" ry="3" fill="#0a0a08"/>
      <ellipse cx="54" cy="40" rx="2" ry="3" fill="#0a0a08"/>
      <!-- wide gaping mouth -->
      <path d="M33 52 Q50 68 67 52 Q60 62 50 64 Q40 62 33 52 Z" fill="#050505"/>
      <path d="M36 52 L34 58 M44 58 L43 64 M56 58 L57 64 M64 52 L66 58"
            stroke="rgba(80,0,0,0.7)" stroke-width="1" fill="none"/>
      <!-- long spindly left arm -->
      <path d="M34 80 Q16 96 10 118" stroke="#1a2a18" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M10 118 L4 126 M10 118 L8 128 M10 118 L16 126" stroke="#335533" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- long spindly right arm -->
      <path d="M66 80 Q84 96 90 118" stroke="#1a2a18" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M90 118 L84 126 M90 118 L90 128 M90 118 L96 126" stroke="#335533" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- rib suggestion lines -->
      <path d="M38 80 Q50 84 62 80" stroke="rgba(60,80,50,0.5)" stroke-width="1" fill="none"/>
      <path d="M37 88 Q50 92 63 88" stroke="rgba(60,80,50,0.4)" stroke-width="1" fill="none"/>
      <path d="M38 96 Q50 99 62 96" stroke="rgba(60,80,50,0.3)" stroke-width="1" fill="none"/>
    </svg>`,
   
    /* ── 5. THE BURNING ONE ───────────────────────────────────────── */
    /* Charred silhouette with orange-white ember eyes, flame tendrils */
    `<svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fireCore" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stop-color="rgba(255,140,0,0.35)"/>
          <stop offset="60%"  stop-color="rgba(180,40,0,0.15)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
        <filter id="fireGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <!-- heat aura -->
      <ellipse cx="50" cy="80" rx="44" ry="66" fill="url(#fireCore)" filter="url(#fireGlow)"/>
      <!-- charred body -->
      <ellipse cx="50" cy="108" rx="26" ry="36" fill="#100500"/>
      <rect    x="40" y="72" width="20" height="22" fill="#100500"/>
      <!-- charred head -->
      <ellipse cx="50" cy="52" rx="22" ry="24" fill="#180800"/>
      <!-- crack lines on body -->
      <path d="M44 80 Q46 96 43 112" stroke="rgba(255,80,0,0.4)" stroke-width="1" fill="none"/>
      <path d="M56 76 Q54 92 57 108" stroke="rgba(255,60,0,0.3)" stroke-width="1" fill="none"/>
      <path d="M36 100 Q50 104 64 100" stroke="rgba(200,50,0,0.3)" stroke-width="1" fill="none"/>
      <!-- ember LEFT eye -->
      <ellipse cx="38" cy="48" rx="8" ry="9"   fill="#000"/>
      <ellipse cx="38" cy="48" rx="5" ry="6"   fill="#ff6600" filter="url(#fireGlow)"/>
      <ellipse cx="38" cy="48" rx="2.5" ry="3" fill="#ffe0a0"/>
      <!-- ember RIGHT eye -->
      <ellipse cx="62" cy="48" rx="8" ry="9"   fill="#000"/>
      <ellipse cx="62" cy="48" rx="5" ry="6"   fill="#ff6600" filter="url(#fireGlow)"/>
      <ellipse cx="62" cy="48" rx="2.5" ry="3" fill="#ffe0a0"/>
      <!-- scorched mouth -->
      <path d="M36 64 Q50 72 64 64" fill="#050200" stroke="rgba(180,60,0,0.7)" stroke-width="1.5"/>
      <!-- flame tendrils from head -->
      <path d="M38 30 Q34 16 38 4"  stroke="rgba(255,100,0,0.6)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M50 26 Q50 10 52 0"  stroke="rgba(255,140,0,0.7)" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M62 30 Q66 16 62 4"  stroke="rgba(255,80,0,0.55)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M44 28 Q40 18 43 8"  stroke="rgba(200,60,0,0.4)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M56 27 Q60 17 57 7"  stroke="rgba(220,80,0,0.45)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- arms -->
      <path d="M26 88 Q8 104 6 124"  stroke="#100500" stroke-width="11" fill="none" stroke-linecap="round"/>
      <path d="M74 88 Q92 104 94 124" stroke="#100500" stroke-width="11" fill="none" stroke-linecap="round"/>
      <!-- ember claw tips -->
      <path d="M6 124 L2 132 M6 124 L6 134 M6 124 L12 132"  stroke="rgba(255,80,0,0.7)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M94 124 L90 132 M94 124 L94 134 M94 124 L100 132" stroke="rgba(255,80,0,0.7)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>`,
   
  ];
   
  /**
   * Pick a random monster SVG and inject it into #hall-monster.
   * Safe to call before the DOM is fully ready — it will wait.
   */
  function randomiseMonster() {
    const el = document.getElementById("hall-monster");
    if (!el) return;
    const svg = MONSTERS[Math.floor(Math.random() * MONSTERS.length)];
    el.innerHTML = svg;
  }
   
  window.MONSTERS        = MONSTERS;
  window.randomiseMonster = randomiseMonster;
   