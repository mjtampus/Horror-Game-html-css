const TOTAL_NIGHTS = 10;

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
  intervals:[],
  nightToken: 0,
};

const DIFFICULTY = {
  easy: {
    insideTimer: 90,
  },
  normal: {
    insideTimer: 45,
  },
  hard: {
    insideTimer: 15,
  },
};

const $ = id => document.getElementById(id);
