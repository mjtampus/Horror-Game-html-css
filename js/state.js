const TOTAL_NIGHTS = 5;

const S = {
  EMPTY:0,
  MONSTER_OUTSIDE:1,
  MONSTER_INSIDE:2,
  NEIGHBOR:3
};

let G = {
  night:1,
  lives:3,
  survived:0,
  lightsOn:true,
  gameOver:false,
  started:false,
  scenario:S.EMPTY,
  timers: [],
  intervals:[],
  nightToken: 0,
};

const $ = id => document.getElementById(id);
