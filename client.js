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
  textFont("monospace", .45 * scale);
  if (d1 != null) {
    text("Dice rolled: " + d1 + " and " + d2 + " which sum to " + (d1 + d2), 2.25 * scale, 2.5 * scale);
    drawDiceButton();
  }
  else text("Roll Dice", 2.25 * scale, 2.5 * scale);
  
  tiles.forEach(tile => {
    if (tile.property != null) {
      if ((mouseX >= tile.smallBox.x * scale && mouseX <= (tile.smallBox.x + tile.smallBox.width) * scale) && (mouseY >= tile.smallBox.y * scale && mouseY <= (tile.smallBox.y + tile.smallBox.height) * scale)) {
        drawPropertyText(tile);
      }
    }
  });
  drawTileText();
  drawChance();
  drawChest();
  drawRailroad();

  drawPlayers();

  strokeWeight(2);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);

  $("#turn").text("It is " + players[turn].name + "'s turn");
}

function drawPlayers() {
  strokeWeight(2);
  players.forEach(player => {
    fill(player.color);
    if (tiles[player.tile].shape == "square") {
      if (tiles[player.tile].type != "jail") {
        if (players[0] == player) circle((tiles[player.tile].x + .5) * scale, (tiles[player.tile].y + .5) * scale, .4 * scale);
        if (players[1] == player) circle((tiles[player.tile].x + 1.5) * scale, (tiles[player.tile].y + .5) * scale, .4 * scale);
        if (players[2] == player) circle((tiles[player.tile].x + .5) * scale, (tiles[player.tile].y + 1.5) * scale, .4 * scale);
        if (players[3] == player) circle((tiles[player.tile].x + 1.5) * scale, (tiles[player.tile].y + 1.5) * scale, .4 * scale);
      }
      else {
        if (player.inPrison) {
          if (players[0] == player) circle((tiles[player.tile].smallBox.x + (.5 * tiles[player.tile].smallBox.width / 2)) * scale, (tiles[player.tile].smallBox.y + (.5 * tiles[player.tile].smallBox.height / 2)) * scale, .2 * scale);
          if (players[1] == player) circle((tiles[player.tile].smallBox.x + (1.5 * tiles[player.tile].smallBox.width / 2)) * scale, (tiles[player.tile].smallBox.y + (.5 * tiles[player.tile].smallBox.height / 2)) * scale, .2 * scale);
          if (players[2] == player) circle((tiles[player.tile].smallBox.x + (.5 * tiles[player.tile].smallBox.width / 2)) * scale, (tiles[player.tile].smallBox.y + (1.5 * tiles[player.tile].smallBox.height / 2)) * scale, .2 * scale);
          if (players[3] == player) circle((tiles[player.tile].smallBox.x + (1.5 * tiles[player.tile].smallBox.width / 2)) * scale, (tiles[player.tile].smallBox.y + (1.5 * tiles[player.tile].smallBox.height / 2)) * scale, .2 * scale);
        }
        else {
          if (players[0] == player) circle((tiles[player.tile].x + (.5 * (2 - tiles[player.tile].smallBox.width))) * scale, (tiles[player.tile].y + (1 * (2 / 5))) * scale, .3 * scale);
          if (players[1] == player) circle((tiles[player.tile].x + (.5 * (2 - tiles[player.tile].smallBox.width))) * scale, (tiles[player.tile].y + (2 * (2 / 5))) * scale, .3 * scale);
          if (players[2] == player) circle((tiles[player.tile].x + (.5 * (2 - tiles[player.tile].smallBox.width))) * scale, (tiles[player.tile].y + (3 * (2 / 5))) * scale, .3 * scale);
          if (players[3] == player) circle((tiles[player.tile].x + (.5 * (2 - tiles[player.tile].smallBox.width))) * scale, (tiles[player.tile].y + (4 * (2 / 5))) * scale, .3 * scale);
        }
      }
    }
    else if (tiles[player.tile].shape == "vRectangle") {
      if (tiles[player.tile].y == 0) {
        if (players[0] == player) circle((tiles[player.tile].x + .25) * scale, (tiles[player.tile].y + .25) * scale, .3 * scale);
        if (players[1] == player) circle((tiles[player.tile].x + .75) * scale, (tiles[player.tile].y + .25) * scale, .3 * scale);
        if (players[2] == player) circle((tiles[player.tile].x + .25) * scale, (tiles[player.tile].y + .75) * scale, .3 * scale);
        if (players[3] == player) circle((tiles[player.tile].x + .75) * scale, (tiles[player.tile].y + .75) * scale, .3 * scale);
      }
      else {
        if (players[0] == player) circle((tiles[player.tile].x + .25) * scale, scale + (tiles[player.tile].y + .25) * scale, .3 * scale);
        if (players[1] == player) circle((tiles[player.tile].x + .75) * scale, scale + (tiles[player.tile].y + .25) * scale, .3 * scale);
        if (players[2] == player) circle((tiles[player.tile].x + .25) * scale, scale + (tiles[player.tile].y + .75) * scale, .3 * scale);
        if (players[3] == player) circle((tiles[player.tile].x + .75) * scale, scale + (tiles[player.tile].y + .75) * scale, .3 * scale);

      }
    }
    else if (tiles[player.tile].shape == "hRectangle") {
      if (tiles[player.tile].x == 0) {
        if (players[0] == player) circle((tiles[player.tile].x + .25) * scale, (tiles[player.tile].y + .25) * scale, .3 * scale);
        if (players[1] == player) circle((tiles[player.tile].x + .75) * scale, (tiles[player.tile].y + .25) * scale, .3 * scale);
        if (players[2] == player) circle((tiles[player.tile].x + .25) * scale, (tiles[player.tile].y + .75) * scale, .3 * scale);
        if (players[3] == player) circle((tiles[player.tile].x + .75) * scale, (tiles[player.tile].y + .75) * scale, .3 * scale);
      }
      else {
        if (players[0] == player) circle(scale + (tiles[player.tile].x + .25) * scale, (tiles[player.tile].y + .25) * scale, .3 * scale);
        if (players[1] == player) circle(scale + (tiles[player.tile].x + .75) * scale, (tiles[player.tile].y + .25) * scale, .3 * scale);
        if (players[2] == player) circle(scale + (tiles[player.tile].x + .25) * scale, (tiles[player.tile].y + .75) * scale, .3 * scale);
        if (players[3] == player) circle(scale + (tiles[player.tile].x + .75) * scale, (tiles[player.tile].y + .75) * scale, .3 * scale);

      }
    }
  });
}

function drawDiceButton() {
  fill(125, 225, 175);
  rect(2.75 * scale, 2.85 * scale, 1.6 * scale, .75 * scale);
  fill(24);
  textFont("georgia", .55 * scale);
  text("Move", 2.88 * scale, 3.45 * scale);
}

function drawTileText() {
  strokeWeight(2);
  textFont("georgia", .8 * scale);

  fill(255, 0, 0);
  translate(11.5 * scale, 12.6 * scale);
  rotate(-Math.PI / 4);
  text("GO!", 0, 0);
  rotate(Math.PI / 4);
  translate(-11.5 * scale, -12.6 * scale);

  textFont("georgia", .7 * scale);
  fill(0, 127, 255);
  translate(11.45 * scale, .425 * scale);
  rotate(Math.PI / 4);
  text("Go to", 0, 0);
  translate(.2 * scale, .7 * scale);
  text("Jail", 0, 0);
  translate(-.2 * scale, -.7 * scale);
  rotate(-Math.PI / 4);
  translate(-11.45 * scale, -.425 * scale);

  textFont("georgia", .5 * scale);
  fill(255);
  translate(.4 * scale, 1.1 * scale);
  rotate(-Math.PI / 4);
  text("Free", 0, 0);
  translate(-.35 * scale, .6 * scale);
  text("Parking", 0, 0);
  translate(.35 * scale, -.6 * scale);
  rotate(Math.PI / 4);
  translate(-.4 * scale, -1.1 * scale);

  textFont("georgia", .5 * scale);
  fill(255);
  translate(1 * scale, 11.8 * scale);
  text("Jail", 0, 0);
  translate(-1 * scale, -11.8 * scale);
}

function drawPropertyText(tile) {
  strokeWeight(3);
  textFont("georgia", .8 * scale);
  fill(tile.color);
  text(tile.property.name, 2.25 * scale, 4.5 * scale);
  strokeWeight(1);
  fill(24);
  textFont("georgia", .4 * scale);
  if (properties[tile.property.id].owner != null) text("The current owner is " + players[properties[tile.property.id].owner].name, 2.25 * scale, 5.25 * scale);
  else text("This property costs M" + properties[tile.property.id].price + " to purchase", 2.25 * scale, 5.25 * scale);
  textFont("georgia", .35 * scale);
  text("Current Rent: M" + properties[tile.property.id].rent[properties[tile.property.id].upgrades], 2.25 * scale, 5.75 * scale);
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
  for (let i = 0; i < 4; i++) {
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
  if (tile >= 40) tile -= 40;
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
  if (d1 != null) return;
  d1 = Math.floor((Math.random() * 6) + 1);
  d2 = Math.floor((Math.random() * 6) + 1);
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
    if (d1 != null) {
      if ((mouseX >= 2.75 * scale && mouseX <= (2.75 + 1.6) * scale) && (mouseY >= 2.85 * scale && mouseY <= (2.85 + .75) * scale)) {
        moveToFrom(players[turn].tile + d1 + d2, players[turn].tile);
        turn++;
        if (turn >= players.length) turn = 0;
        d1 = null;
        d2 = null;
      }
    }
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
