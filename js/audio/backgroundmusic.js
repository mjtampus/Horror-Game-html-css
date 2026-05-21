let audioCtx;
let masterGain;
let currentSource = null;

let audioStarted = false;
let muted = false;
let volume = 0.38;

function applyVolume(){

  if(!masterGain || !audioCtx) return;

  const finalVolume = muted ? 0 : volume;

  masterGain.gain.setTargetAtTime(
    finalVolume,
    audioCtx.currentTime,
    0.01
  );
}

async function initAudio(){

  if(audioStarted) return;

  audioStarted = true;

  audioCtx =
    new (window.AudioContext || window.webkitAudioContext)();

  await audioCtx.resume();

  masterGain = audioCtx.createGain();

  masterGain.connect(audioCtx.destination);

  const response = await fetch('./assets/audio/horror.mp3');

  const arrayBuffer = await response.arrayBuffer();

  musicBuffer =
    await audioCtx.decodeAudioData(arrayBuffer);

  startMusic();

}

async function loadMusic(url){

  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.loop = true;

  source.connect(masterGain);
  source.start(0);

  currentSource = source;

  applyVolume();
}

function setVol(v){
  volume = parseFloat(v);
  applyVolume();
}

function toggleMute(){

  muted = !muted;

  document.getElementById('mute-btn').textContent =
    muted ? 'UNMUTE' : 'MUTE';

  applyVolume();
}

function stopMusicFade(){

  if(!audioCtx || !masterGain || !currentSource)
    return;

  masterGain.gain.setTargetAtTime(
    0,
    audioCtx.currentTime,
    0.5
  );

  setTimeout(() => {

    currentSource.stop();

    currentSource.disconnect();

    currentSource = null;

  }, 600);
}

  setTimeout(() => {
    if (currentSource) {
      currentSource.stop();
      currentSource.disconnect();
      currentSource = null;
    }
  }, 600);

function startMusic(){

  if(!audioCtx || !musicBuffer) return;

  if(currentSource) return;

  const source =
    audioCtx.createBufferSource();

  source.buffer = musicBuffer;

  source.loop = true;

  source.connect(masterGain);

  source.start(0);

  currentSource = source;

  applyVolume();

}
