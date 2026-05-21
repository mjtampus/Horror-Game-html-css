function startGame(){

    $('intro-screen').style.display =
      'none';
  
    G.started = true;
  
    updateHUD();
  
    startNight();
  }

  function gameInterval(fn, delay){
    const token = G.nightToken;
  
    const id = setInterval(() => {
      if (G.nightToken !== token || G.gameOver) {
        clearInterval(id);
        return;
      }
      fn();
    }, delay);
  
    return id;
  }

  function gameTimeout(fn, delay){
    const token = G.nightToken;
  
    const id = setTimeout(() => {
      if (G.nightToken !== token) return;
      if (G.gameOver) return;
      fn();
    }, delay);
  
    return id;
  }  
  
  function startNight(){
    stopKnockSound();
  
    G.nightToken++;

    if(G.night>TOTAL_NIGHTS){winGame();return;}
    G.canAct=false;G.peekRevealed=false;G.crossUsed=false;
    clearHints();$('night-num').textContent=G.night;
  
    const roll=Math.random();
    if     (roll<0.28)G.scenario=S.MONSTER_OUTSIDE;
    else if(roll<0.52)G.scenario=S.MONSTER_INSIDE;
    else if(roll<0.78)G.scenario=S.NEIGHBOR;
    else              G.scenario=S.EMPTY;
  
    if(G.scenario===S.MONSTER_INSIDE){
      gameTimeout(() => {
        $('scratches').classList.add('show');
        $('scratches').style.opacity = '1';
      }, 1400);
    }

    if(G.scenario===S.NEIGHBOR||G.scenario===S.MONSTER_OUTSIDE){
      gameTimeout(() => knockDoor(), 900);
      gameTimeout(() => knockDoor(), 2100);
    }
  
    $('hall-monster').classList.toggle('show',G.scenario===S.MONSTER_OUTSIDE);
    $('monster-shadow').classList.toggle('show',G.scenario===S.MONSTER_OUTSIDE);
    $('hall-neighbor').classList.toggle('show',G.scenario===S.NEIGHBOR);
    randomiseNeighbor();
    randomiseMonster();
  
    setLights(true);
    const flavors={
      [S.EMPTY]:['NIGHT '+G.night,'silence fills the hallway...'],
      [S.MONSTER_OUTSIDE]:['NIGHT '+G.night,'something is knocking at your door...'],
      [S.MONSTER_INSIDE]:['NIGHT '+G.night,'you are not alone in this room...'],
      [S.NEIGHBOR]:['NIGHT '+G.night,'something is knocking at your door...'],
    };
    const[t,s]=flavors[G.scenario];
    announce(t,s,300);
  
    setTimeout(()=>{
      G.canAct=true;
    
      if(G.scenario===S.MONSTER_INSIDE){
        
        let countdown = 7;

        const timer = gameInterval(() => {
        
          if(G.crossUsed){
            clearInterval(timer);
            return;
          }
        
          countdown--;
        
          if(countdown <= 0){
        
            clearInterval(timer);
        
            if(!G.canAct) return;
        
            G.canAct = false;
        
            flickerThen(() => {
              gameTimeout(() => {
                triggerDeath("You die ghost is inside, you didn't repel the ghost");
              }, 760);
            });
          }
        
        }, 1000);
    
      }
    
    },2000);
  }
  
  function toggleLight(){
  
    if(!G.started) return;
  
    if(G.lightsOn){
  
      setLights(false);
  
    }else{
  
      setLights(true);
    }
  }
  
  function useCross(){
    if(!G.canAct||G.gameOver||!G.started)return;
    if(G.crossUsed)return;
    if(G.scenario!==S.MONSTER_INSIDE){
      announce('NOTHING TO BANISH','the cross glows... but finds no ghost.',200);return;
    }
    G.crossUsed=true;G.canAct=false;
    $('cross-item').classList.add('used');
    playCrossChime();flashCross();
    const gh=$('room-ghost');
    gh.classList.remove('show');gh.classList.add('repelled');
    $('scratches').classList.remove('show');
    setTimeout(()=>{
      G.survived++;$('survived-num').textContent=G.survived;
      announce('GHOST BANISHED','the holy light drove it into the dark.',300);
      setTimeout(()=>{G.night++;startNight();},2800);
    },950);
  }

  function openPeep(){
    if(!G.canAct||G.gameOver||!G.started)return;
    G.peeking=true;G.peekRevealed=true;
    $('btn-open-door-peep').classList.toggle('show',G.scenario===S.NEIGHBOR);
    $('peep-overlay').classList.add('show');
    if(G.scenario===S.MONSTER_OUTSIDE||G.scenario===S.MONSTER_INSIDE)playScare();
  }

  function closePeepOnly(){
    G.peeking=false;$('peep-overlay').classList.remove('show');
    if(G.scenario===S.NEIGHBOR&&G.peekRevealed)$('neighbor-hint').classList.add('show');
  }

    function handlePeepOverlayClick(e){if(e.target===$('peep-overlay'))closePeepOnly();
    }
    function openDoorFromPeep(){$('peep-overlay').classList.remove('show');G.peeking=false;openDoorAction();

    }
  
function openDoorAction(){
  if(!G.canAct||G.gameOver||!G.started)return;
  G.canAct=false;
  if(G.scenario===S.NEIGHBOR){
    $('door-el').classList.add('opening');flashGreen();
    setTimeout(()=>{
      $('door-el').classList.remove('opening');G.survived++;$('survived-num').textContent=G.survived;
      announce('NEIGHBOR SAFE','they were just frightened too...',200);
      setTimeout(()=>{G.night++;startNight();},2800);
    },800);
  } else if(G.scenario===S.MONSTER_OUTSIDE||G.scenario===S.MONSTER_INSIDE){
    $('door-el').classList.add('opening');
    flashRed();
    setTimeout(()=>playJumpscare(),60);
    setTimeout(()=>{
      $('door-el').classList.remove('opening');
      triggerDeath('you opened the door.',
        G.scenario===S.MONSTER_INSIDE?'there were two of them.\none was already inside with you.':'it was waiting for exactly that moment.');
    },750);
  } else {
    $('door-el').classList.add('opening');flashGreen();
    setTimeout(()=>{
      $('door-el').classList.remove('opening');G.survived++;$('survived-num').textContent=G.survived;
      announce('ALL CLEAR','nobody was there...',300);
      setTimeout(()=>{G.night++;startNight();},2600);
    },700);
  }
}

function toggleLight(){
    if(!G.canAct||G.gameOver||!G.started)return;
    if(!G.lightsOn){flickerThen(()=>setLights(true));return;}
    G.canAct=false;
    if(G.scenario===S.MONSTER_INSIDE){
      setLights(false);flashRed();
      setTimeout(()=>playJumpscare(),55);
      setTimeout(()=>triggerDeath('you turned off the lights.','it was already inside.\nthe darkness was its invitation.'),760);
    } else if(G.scenario===S.MONSTER_OUTSIDE){
      setLights(false);
      setTimeout(()=>{
        flickerThen(()=>{
          setLights(true);G.survived++;$('survived-num').textContent=G.survived;
          announce('MONSTER FLED','the darkness confused it... you are safe.',200);
          setTimeout(()=>{G.night++;startNight();},2800);
        });
      },500);
    } else if(G.scenario===S.NEIGHBOR){
      setLights(false);flashRed();
      setTimeout(()=>playJumpscare(),55);
      setTimeout(()=>triggerDeath('you turned off the lights.','your neighbor was keeping it at bay.\nwithout the light, it found you.'),760);
    } else {
      setLights(false);announce('ALL CLEAR','nothing stirs tonight...',400);
      setTimeout(()=>{setLights(true);G.survived++;$('survived-num').textContent=G.survived;setTimeout(()=>{G.night++;startNight();},2400);},1800);
    }
  }
  
  function triggerDeath(msg,sub){
    stopKnockSound();
    G.lives--;G.gameOver=true;clearHints();buildHearts();
    if(G.lives<=0){
      stopMusicFade();
      $('death-body').innerHTML=msg.replace(/\n/g,'<br>');
      $('death-flavor').textContent=`you survived ${G.survived} night${G.survived!==1?'s':''}.`;
      $('death-screen').classList.add('show');
    } else {
      flashRed();announce(`LIFE LOST  ♥×${G.lives}`,msg,300);
      setTimeout(()=>{G.gameOver=false;G.night++;startNight();},3800);
    }
  }
  function winGame(){
    stopMusicFade();
    stopKnockSound();
    G.gameOver=true;
    $('win-body').innerHTML=`You endured all ${TOTAL_NIGHTS} nights.<br>You learned who to let in,<br>what to shut out,<br>and when darkness is your only weapon.<br><br><span style="color:#224422;font-size:12px;">...or did it simply let you live?</span>`;
    $('win-screen').classList.add('show');
  }
  function startGame(){
    $('intro-screen').style.display='none';G.started=true;buildHearts();startNight();
  }
  function restartGame(){
    startMusic();
    G={night:1,lives:3,survived:0,lightsOn:true,peeking:false,scenario:S.EMPTY,peekRevealed:false,canAct:false,gameOver:false,started:true,crossUsed:false};
    $('death-screen').classList.remove('show');$('win-screen').classList.remove('show');$('peep-overlay').classList.remove('show');
    clearHints();buildHearts();$('survived-num').textContent=0;$('night-num').textContent=1;startNight();
  }

    /* Cross angelic chime */
    function playCrossChime(){
      if(!audioStarted||!audioCtx)return;
      const t=audioCtx.currentTime;
      [523,659,784,1047,1318].forEach((f,i)=>{
        const o=audioCtx.createOscillator(),g=audioCtx.createGain();
        o.type='sine';o.frequency.value=f;
        g.gain.setValueAtTime(0,t+i*0.08);g.gain.linearRampToValueAtTime(0.14,t+i*0.08+0.05);g.gain.exponentialRampToValueAtTime(0.001,t+i*0.08+1.4);
        o.connect(g);g.connect(masterGain);o.start(t+i*0.08);o.stop(t+i*0.08+1.5);
      });
    }
    
    /* Full jumpscare: shock sound + face + shake */
    function playJumpscare(){
      playShockSound();
      document.body.classList.remove('shaking');void document.body.offsetWidth;document.body.classList.add('shaking');
      setTimeout(()=>document.body.classList.remove('shaking'),850);
      const ov=document.getElementById('jumpscare-overlay');
      ov.classList.remove('show');void ov.offsetWidth;ov.classList.add('show');
      setTimeout(()=>ov.classList.remove('show'),2100);
    }
  
  document.addEventListener('keydown',e=>{
    if(e.key==='p'||e.key==='P'){G.peeking?closePeepOnly():openPeep();}
    if(e.key==='l'||e.key==='L')toggleLight();
    if(e.key==='o'||e.key==='O')openDoorAction();
    if(e.key==='c'||e.key==='C')useCross();
    if(e.key==='Escape')closePeepOnly();
  });
