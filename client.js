var canvasSize, canvasSize, scale;
var font;
var d1, d2;
var players = [];
var tiles = [];
var properties = [];
var chest = [];
var chance = [];
var turn = 0;

function preload() {
  //font = loadFont("https://github.com/googlefonts/Inconsolata/blob/master/fonts/otf/Inconsolata-Regular.otf");
  //font = loadFont("Inconsolata-Regular.otf");
  font = new p5.Font("Inconsolata-Regular.otf");
  //console.log(font);
}

function setup() {
  canvasSize = windowWidth * .5;
  canvasSize -= canvasSize % 13;
  scale = canvasSize / 13;

  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("Canvas");
  var canvasDiv = document.getElementById("Canvas");
  canvasDiv.style.width = "" + canvasSize + "px";
  canvasDiv.style.height = "" + canvasSize + "px";
  canvasDiv.style.marginLeft = "" + ((windowWidth - canvasSize) / 2 - getScrollbarWidth()) + "px";
  //console.log(canvasDiv);

  players = loadPlayers();
  tiles = loadTiles();
  properties = loadProperties();
  chest = loadChest();
  chance = loadChance();
  console.log("players");
  console.log(players);
  console.log("tiles");
  console.log(tiles);
  console.log("properties");
  console.log(properties);
  console.log("chest");
  console.log(chest);
  console.log("chance");
  console.log(chance);
}

function draw() {
  background(150, 255, 200);

  strokeWeight(3);
  stroke(24);
  fill(150, 255, 200);
  for (let i = 2; i < 11; i++) {
    rect(i * scale, 0, scale, 2 * scale);
    rect(i * scale, 11 * scale, scale, 2 * scale);
    rect(0, i * scale, 2 * scale, scale);
    rect(11 * scale, i * scale, 2 * scale, scale);
  }
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      rect(i * 11 * scale, j * 11 * scale, 2 * scale, 2 * scale);
    }
  }
  strokeWeight(3);
  rect(2 * scale + 1, 2 * scale + 1, 9 * scale - 2, 9 * scale - 2);

  strokeWeight(1);
  fill(24);
  textFont("monospace", 16);
  text("hello world!", canvasSize / 2, 300);
  textFont("monospace", 20);
  text("test", canvasSize / 2, 350);
  if (d1 != null) {
    text("Dice rolled: " + d1 + " and " + d2 + " which sum to " + (d1 + d2), 2 * scale + 10, 2 * scale + 25);
  }

  strokeWeight(2);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);
}

function rollDice() {
  d1 = Math.floor((Math.random() * 6) + 1);
  d2 = Math.floor((Math.random() * 6) + 1);
  console.log('click');
}

//https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}