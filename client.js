var canvW, canvH;
var tileW, tileH;
var font;
var d1, d2;
var tiles = [];
var players = [];

function preload() {
  //font = loadFont("https://github.com/googlefonts/Inconsolata/blob/master/fonts/otf/Inconsolata-Regular.otf");
  //font = loadFont("Inconsolata-Regular.otf");
  font = new p5.Font("Inconsolata-Regular.otf");
  console.log(font);
}

function setup() {
  canvW = windowWidth * .5;
  canvH = windowWidth * .5;
  canvH -= canvH % 13;
  canvW -= canvW % 13;
  tileW = canvW / 13;
  tileH = (canvW * 2) / 13;

  var canvas = createCanvas(canvW, canvH);
  canvas.parent("Canvas");

  players = [
    {
    "name" : "Eric",
    "color" : "#0ff",
    "token" : "cat",
    "tile" : 0,
    "money" : 2000,
    "properties" : [],
    "jailCards" : 0
    },
    {
    "name" : "Deric",
    "color" : "#f00",
    "token" : "car",
    "tile" : 0,
    "money" : 1999,
    "properties" : [],
    "jailCards" : 0
    }
  ];
  console.log(players);
}

function draw() {
  background(24);
  strokeWeight(2);
  fill(150, 255, 200);
  for (let i = 2; i < 11; i++) {
    rect(i * tileW, 0, tileW, tileH);
    rect(i * tileW, 11 * tileW, tileW, tileH);
    rect(0, i * tileW, tileH, tileW);
    rect(11 * tileW, i * tileW, tileH, tileW);
  }
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      rect(i * 11 * tileW, j * 11 * tileW, tileH, tileH);
    }
  }

  textFont("monospace", 10);
  text("hello world!", canvW / 2, 300);
  textFont("monospace", 20);
  text("hello world!", canvW / 2, 350);
  if (d1 != null) {
    text("Dice rolled: " + d1 + " and " + d2, 150, 160);
    console.log('dice text');
  }
}

function rollDice() {
  d1 = Math.floor((Math.random() * 6) + 1);
  d2 = Math.floor((Math.random() * 6) + 1);
  console.log('click');
}