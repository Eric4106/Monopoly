var canvW, canvH;
var tileW, tileH;
var font;
var d1, d2;
var players = [];
var tiles = [];
var properties = [];

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
  var canvasDiv = document.getElementById("Canvas");
  canvasDiv.style.width = "" + canvW + "px";
  canvasDiv.style.height = "" + canvH + "px";
  canvasDiv.style.marginLeft = "" + ((windowWidth - canvW) / 2 - getScrollbarWidth()) + "px";
  console.log(canvasDiv);

  createPlayers();
  loadTiles();
  createProperties();
}

function draw() {
  background(150, 255, 200);

  strokeWeight(3);
  stroke(24);
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
  strokeWeight(3);
  rect(2 * tileW + 1, 2 * tileW + 1, 9 * tileW - 2, 9 * tileW - 2);

  strokeWeight(1);
  fill(24);
  textFont("monospace", 16);
  text("hello world!", canvW / 2, 300);
  textFont("monospace", 20);
  text("test", canvW / 2, 350);
  if (d1 != null) {
    text("Dice rolled: " + d1 + " and " + d2 + " which sum to " + (d1 + d2), 150, 160);
    console.log('dice text');
  }

  strokeWeight(2);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);
}

function createPlayers() {
  players = [
    {
    "name": "Eric",
    "color": "#0ff",
    "token": "cat",
    "tile": 0,
    "money": 2000,
    "properties": [],
    "jailCards": 0,
    "inPrison": false
    },
    {
    "name": "Deric",
    "color": "#f00",
    "token": "car",
    "tile": 0,
    "money": 1999,
    "properties": [],
    "jailCards": 0,
    "inPrison": false
    }
  ];
  console.log(players);
}

function loadTiles() {
  /*var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      tiles = JSON.parse(this.responseText);
    }
  };
  xmlhttp.open("GET", "tiles.txt", true);
  xmlhttp.send();*/
  var json = $.getJSON("tiles.json");
  tiles = eval("(" + json.responseText + ")");
  console.log(tiles);
  //List of all of the monopoly cards and locations - https://play-k.kaserver5.org/Monopoly/Database/USOff.html | https://en.wikipedia.org/wiki/Template:Monopoly_board_layout
}

function createProperties() {
  properties = [
    {
      "owner": null,
      "price": 0,
      "upgrades": 0,
      "ungradeCost": 0,
      "rent": [],
      "mortgaged": false,
      "mortgage": 0,
      "unmortgage": 0
    }
  ];
  console.log(properties);
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