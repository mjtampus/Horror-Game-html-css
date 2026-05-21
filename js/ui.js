const knockSound = new Audio('./assets/audio/knock.mp3');
knockSound.volume = 0.8;
knockSound.preload = 'auto';

function stopKnockSound(){
  knockSound.pause();
  knockSound.currentTime = 0;
}

function setLights(on){
    G.lightsOn=on;
    $('room').classList.toggle('lit',on);$('room').classList.toggle('dark',!on);
    $('lamp-glow').classList.toggle('off',!on);$('light-cone').classList.toggle('off',!on);
    $('switch-toggle').classList.toggle('off',!on);
  }
  
  function updateHUD(){
  
    $('night-num').textContent =
      G.night;
  
    $('lives-num').textContent =
      G.lives;
  
    $('survived-num').textContent =
      G.survived;
  }

  function buildHearts(){
    const r=$('hearts-row');r.innerHTML='';
    for(let i=0;i<3;i++){const s=document.createElement('span');s.className='heart'+(i>=G.lives?' lost':'');s.textContent='♥';r.appendChild(s);}
  }

function flashRed(){const f=$('red-flash');f.classList.remove('show');void f.offsetWidth;f.classList.add('show');}
function flashGreen(){const f=$('green-flash');f.classList.remove('show');void f.offsetWidth;f.classList.add('show');}
function flashCross(){const f=$('cross-flash');f.classList.remove('show');void f.offsetWidth;f.classList.add('show');}
function announce(title,sub,delay=0){
  setTimeout(()=>{
    $('announce-title').textContent=title;$('announce-sub').textContent=sub;
    $('announce').classList.add('show');
    setTimeout(()=>$('announce').classList.remove('show'),2400);
  },delay);
}
function flickerThen(cb){
  $('room').classList.add('flicker');
  setTimeout(()=>{$('room').classList.remove('flicker');if(cb)cb();},1400);
}
function knockDoor(){

  knockSound.currentTime = 0;
  knockSound.play();

  const d = $('door-el');

  d.classList.remove('knocking');
  void d.offsetWidth;
  d.classList.add('knocking');

  setTimeout(() => d.classList.remove('knocking'), 1400);
}
  
function clearHints(){
  $('scratches').classList.remove('show');$('scratches').style.opacity='0';
  $('hall-monster').classList.remove('show');$('monster-shadow').classList.remove('show');
  $('hall-neighbor').classList.remove('show');
  $('neighbor-hint').classList.remove('show');
  const g=$('room-ghost');g.classList.remove('show','repelled');g.style.opacity='0';
  $('cross-item').classList.remove('used');
}
