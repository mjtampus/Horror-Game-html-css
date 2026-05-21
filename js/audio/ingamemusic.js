const JumpscareAudio = new Audio('./assets/audio/jumpscare/jumpscare_scream.mp3');
JumpscareAudio.volume = 1;

function playScare(){
    if(!audioStarted||!audioCtx)return;
    const t=audioCtx.currentTime;
    [110,165,220,330].forEach((f,i)=>{
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.type='sawtooth';o.frequency.value=f*(1+Math.random()*0.05);
      g.gain.setValueAtTime(0.12/(i+1),t);g.gain.exponentialRampToValueAtTime(0.001,t+1.6);
      o.connect(g);g.connect(masterGain);o.start(t);o.stop(t+1.7);
    });
  }

  function playShockSound() {
       JumpscareAudio.currentTime = 0;
     
       JumpscareAudio.play().catch(err => {
         console.log("Audio play failed:", err);
       });
     }
 
     
  function stopKnockSound(){
      knockSound.pause();
      knockSound.currentTime = 0;
  }   
  
