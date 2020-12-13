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

  console.log("SETUP FINISHED");
}

function draw() {
  background(150, 255, 200);

  strokeWeight(3);
  stroke(24);
  tiles.forEach(tile => {
    fill(150, 255, 200);
    if (tile.shape == "square") square(tile.x * scale, tile.y * scale, 2 * scale);
    else if (tile.shape == "vRectangle") rect(tile.x * scale, tile.y * scale, scale, 2 * scale);
    else if (tile.shape == "hRectangle") rect(tile.x * scale, tile.y * scale, 2 * scale, scale);
    if (tile.color != null) fill(tile.color);
    else fill(150, 255, 200);
    colorMode(HSB, 100);
    //if (tile.color == "rainbow") fill(((Math.cos(frameCount / 500) / 2) + .5) * 100, 100, 100);
    if (tile.color == "rainbow") fill((frameCount / 2) % 100, 75, 90);
    rect(tile.smallBox.x * scale, tile.smallBox.y * scale, tile.smallBox.width * scale, tile.smallBox.height * scale);
    colorMode(RGB, 255);
  });
  fill(150, 255, 200);
  strokeWeight(3);
  rect(2 * scale + 1, 2 * scale + 1, 9 * scale - 2, 9 * scale - 2);

  strokeWeight(1);
  fill(24);
  textFont("monospace", 20);
  if (d1 != null) {
    text("Dice rolled: " + d1 + " and " + d2 + " which sum to " + (d1 + d2), 2 * scale + 10, 2 * scale + 25);
  }
  
  drawChance();

  textFont("georgia", scale / 3.6);
  fill(24);
  translate(.05 * scale, 6.385 * scale);
  text("------------", 0, 0);
  translate(0, scale / 6);
  text(" | | | | | | | ", 0, 0);
  translate(0, scale / 6);
  text("------------", 0, 0);
  translate(0, -2 * scale / 6);
  translate(-.05 * scale, -6.385 * scale);

  strokeWeight(2);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);
}

function drawChance() {
  colorMode(HSB, 100);
  fill((frameCount / 2) % 100, 75, 90);
  colorMode(RGB, 255);
  textFont("georgia", scale);
  
  translate(4.25 * scale, 12.6 * scale);
  text("?", 0, 0);
  translate(-4.25 * scale, -12.6 * scale);

  translate(3.75 * scale, .4 * scale);
  rotate(Math.PI)
  text("?", 0, 0);
  rotate(-Math.PI)
  translate(-3.75 * scale, -.4 * scale);

  translate(12.6 * scale, 7.75 * scale);
  rotate(Math.PI * 1.5);
  text("?", 0, 0);
  rotate(-Math.PI * 1.5);
  translate(-12.6 * scale, -7.75 * scale);
}

function moveToFrom(tile, oldTile) {
  if (tile < oldTile) {
    moveToWith(tile, true);
  }
  else {
    moveToWith(tile, false);
  }
}

function moveToWith(tile, go) {
  if (go) console.log("200")//players[turn].collect(200);
  moveTo(tile);
}

function moveTo(tile) {
  players[turn].tile = tile;
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

function mousePressed(event) {
  if (event.target.nodeName === "CANVAS") {
    tiles.forEach(tile => {
      if ((mouseX >= tile.smallBox.x * scale && mouseX <= (tile.smallBox.x + tile.smallBox.width) * scale) && (mouseY >= tile.smallBox.y * scale && mouseY <= (tile.smallBox.y + tile.smallBox.height) * scale)) {
        console.log(tile);
      }
    });
  }
}