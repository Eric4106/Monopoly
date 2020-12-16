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

    if (tile.smallBox == null) return;
    if (tile.color != null) fill(tile.color);
    else fill(150, 255, 200);
    rect(tile.smallBox.x * scale, tile.smallBox.y * scale, tile.smallBox.width * scale, tile.smallBox.height * scale);
  });
  fill(150, 255, 200);
  strokeWeight(3);
  rect(2 * scale + 1, 2 * scale + 1, 9 * scale - 2, 9 * scale - 2);

  tiles.forEach(tile => {
    if (tile.smallBox != null && tile.type != "jail") {
      if ((mouseX >= tile.smallBox.x * scale && mouseX <= (tile.smallBox.x + tile.smallBox.width) * scale) && (mouseY >= tile.smallBox.y * scale && mouseY <= (tile.smallBox.y + tile.smallBox.height) * scale)) {
        fill(tile.color);
      }
    }
  });

  strokeWeight(1);
  fill(24);
  textFont("monospace", 20);
  if (d1 != null) {
    text("Dice rolled: " + d1 + " and " + d2 + " which sum to " + (d1 + d2), 2 * scale + 10, 2 * scale + 25);
  }
  
  drawChance();
  drawChest();
  drawRailroad();

  strokeWeight(2);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);
}

function drawChance() {
  let rainbow = 0;
  strokeWeight(3);
  textFont("georgia", 1.30 * scale);
  colorMode(HSB, 360);
  
  fill((frameCount + (rainbow * 120)) % 360, 324, 324);
  rainbow++;
  translate(4.1875 * scale, 12.2 * scale);
  text("?", 0, 0);
  translate(-4.1875 * scale, -12.2 * scale);

  fill((frameCount + (rainbow * 120)) % 360, 324, 324);
  rainbow++;
  translate(3.8125 * scale, .8 * scale);
  rotate(Math.PI)
  text("?", 0, 0);
  rotate(-Math.PI)
  translate(-3.8125 * scale, -.8 * scale);

  fill((frameCount + (rainbow * 120)) % 360, 324, 324);
  translate(12.2 * scale, 7.8125 * scale);
  rotate(Math.PI * 1.5);
  text("?", 0, 0);
  rotate(-Math.PI * 1.5);
  translate(-12.2 * scale, -7.8125 * scale);
  colorMode(RGB, 255);
}

function drawChest() {
  strokeWeight(2);
  textFont("georgia", scale / 3.45);

  translate(9.125 * scale, 11.625 * scale);
  drawBox();
  translate(-9.125 * scale, -11.625 * scale);

  translate(1.375 * scale, 4.125 * scale);
  rotate(Math.PI * .5);
  drawBox();
  rotate(-Math.PI * .5);
  translate(-1.375 * scale, -4.125 * scale);

  translate(11.625 * scale, 4.875 * scale);
  rotate(Math.PI * 1.5);
  drawBox();
  rotate(-Math.PI * 1.5);
  translate(-11.625 * scale, -4.875 * scale);
}

function drawRailroad() {
  strokeWeight(1);
  textFont("georgia", scale / 3.45);
  fill(24);

  translate(6.5 * scale, 6.5 * scale);
  for (let i = 0; i < 4; i ++) {
    text("------------", -6.47 * scale, -.1 * scale);
    translate(0, scale / 6);
    text(" | | | | | | | ", -6.47 * scale, -.1 * scale);
    translate(0, scale / 6);
    text("------------", -6.47 * scale, -.1 * scale);
    translate(0, -2 * scale / 6);
    rotate(Math.PI * .5);
  }
  translate(-6.5 * scale, -6.5 * scale);
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
      if (tile.smallBox != null) {
        if ((mouseX >= tile.smallBox.x * scale && mouseX <= (tile.smallBox.x + tile.smallBox.width) * scale) && (mouseY >= tile.smallBox.y * scale && mouseY <= (tile.smallBox.y + tile.smallBox.height) * scale)) {
          console.log(tile);
        }
      }
    });
  }
}

function drawBox() {
  fill(0, 255, 255);
  beginShape();
  vertex(0, 0);//<bottom front
  vertex(.45 * scale, .125 * scale);
  vertex(.45 * scale, .45 * scale);
  vertex(0, .325 * scale);
  vertex(0, 0);//>
  vertex(.45 * scale, .125 * scale);
  vertex(.7 * scale, 0);//<bottom right
  vertex(.7 * scale, .325 * scale);
  vertex(.45 * scale, .45 * scale);
  vertex(.45 * scale, .125 * scale);
  vertex(.7 * scale, 0);//><top right
  vertex(.5 * scale, -.15 * scale);
  vertex(.5625 * scale, -.25 * scale);
  vertex(.7625 * scale, -.1 * scale);
  vertex(.7 * scale, 0);//>
  vertex(.5 * scale, -.15 * scale);//<top front
  vertex(.05 * scale, -.275 * scale);
  vertex(.1125 * scale, -.375 * scale);
  vertex(.5625 * scale, -.25 * scale);
  vertex(.5 * scale, -.15 * scale);//>
  vertex(.05 * scale, -.275 * scale);
  vertex(.05 * scale, -.275 * scale);//<inner top
  vertex(.25 * scale, -.125 * scale);
  vertex(.7 * scale, 0);
  vertex(.7 * scale, 0);
  vertex(.7 * scale, 0);
  vertex(.5 * scale, -.15 * scale);
  vertex(.05 * scale, -.275 * scale);
  vertex(.05 * scale, -.275 * scale);//>
  vertex(.25 * scale, -.125 * scale);
  vertex(0, 0);
  endShape();
  fill(0, 210, 210);
  beginShape();
  vertex(0, 0);//<inner bottom
  vertex(.45 * scale, .125 * scale);
  vertex(.7 * scale, 0);
  vertex(.25 * scale, -.125 * scale);
  vertex(.25 * scale, .070 * scale);
  vertex(.25 * scale, -.125 * scale);
  vertex(0, 0);//>
  endShape();
  fill(0, 160, 160);
  beginShape();
  vertex(.05 * scale, -.275 * scale);//<inner top
  vertex(.25 * scale, -.125 * scale);
  vertex(.7 * scale, 0);
  vertex(.7 * scale, 0);
  vertex(.7 * scale, 0);
  vertex(.5 * scale, -.15 * scale);
  vertex(.05 * scale, -.275 * scale);//>
  endShape();
}