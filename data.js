function loadPlayers() {
    var players = [
        {
            "name": "EricAlpha",
            "color": "#0ff",
            "token": "cat",
            "tile": 0,
            "money": 2000,
            "properties": [],
            "jailCards": 0,
            "inPrison": false,
            "collect": (x) => players[turn].money += x,
            "pay": (x) => players[turn].money -= x,
            "payUpgrades": (x, y) => {
                var houses = 0;
                var hotels = 0;
                players[turn].properties.forEach(id => {
                    if (properties[id].upgrades < 5) houses += properties[id].upgrades;
                    else if (properties[id].upgrades == 5) hotels++;
                });
                players[turn].pay((x * houses) + (y * hotels))
            }
        },
        {
            "name": "EricGamma",
            "color": "#f00",
            "token": "car",
            "tile": 0,
            "money": 1500,
            "properties": [],
            "jailCards": 0,
            "inPrison": false,
            "collect": (x) => players[turn].money += x,
            "pay": (x) => players[turn].money -= x,
            "payUpgrades": (x, y) => {
                var houses = 0;
                var hotels = 0;
                players[turn].properties.forEach(id => {
                    if (properties[id].upgrades < 5) houses += properties[id].upgrades;
                    else if (properties[id].upgrades == 5) hotels++;
                });
                players[turn].pay((x * houses) + (y * hotels))
            }
        },
        {
            "name": "EricIota",
            "color": "#0f0",
            "token": "dog",
            "tile": 0,
            "money": 1000,
            "properties": [],
            "jailCards": 0,
            "inPrison": false,
            "collect": (x) => players[turn].money += x,
            "pay": (x) => players[turn].money -= x,
            "payUpgrades": (x, y) => {
                var houses = 0;
                var hotels = 0;
                players[turn].properties.forEach(id => {
                    if (properties[id].upgrades < 5) houses += properties[id].upgrades;
                    else if (properties[id].upgrades == 5) hotels++;
                });
                players[turn].pay((x * houses) + (y * hotels))
            }
        },
        {
            "name": "EricOmicron",
            "color": "#00f",
            "token": "ship",
            "tile": 0,
            "money": 500,
            "properties": [],
            "jailCards": 0,
            "inPrison": false,
            "collect": (x) => players[turn].money += x,
            "pay": (x) => players[turn].money -= x,
            "payUpgrades": (x, y) => {
                var houses = 0;
                var hotels = 0;
                players[turn].properties.forEach(id => {
                    if (properties[id].upgrades < 5) houses += properties[id].upgrades;
                    else if (properties[id].upgrades == 5) hotels++;
                });
                players[turn].pay((x * houses) + (y * hotels))
            }
        }
    ];
    return players;
}  

function loadTiles () {
    var tiles = [
        {
            "x": 11,
            "y": 11,
            "smallBox": null,
            "shape": "square",
            "type": "go",
            "color": "red",
            "property": null
        },
        {
            "x": 10,
            "y": 11,
            "smallBox": {
                "x": 10,
                "y": 11,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "saddleBrown",
            "property": {
                "name": "Mediterranean Avenue",
                "id": 0
            }
        },
        {
            "x": 9,
            "y": 11,
            "smallBox": null,
            "shape": "vRectangle",
            "type": "chest",
            "color": "cyan",
            "property": null
        },
        {
            "x": 8,
            "y": 11,
            "smallBox": {
                "x": 8,
                "y": 11,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "saddleBrown",
            "property": {
                "name": "Baltic Avenue",
                "id": 1
            }
        },
        {
            "x": 7,
            "y": 11,
            "smallBox": {
                "x": 7,
                "y": 11,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "tax200",
            "color": "lightGrey",
            "property": null
        },
        {
            "x": 6,
            "y": 11,
            "smallBox": {
                "x": 6,
                "y": 11,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "railroad",
            "color": "dimGrey",
            "property": {
                "name": "Reading Railroad",
                "id": 22
            }
        },
        {
            "x": 5,
            "y": 11,
            "smallBox": {
                "x": 5,
                "y": 11,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "skyBlue",
            "property": {
                "name": "Oriental Avenue",
                "id": 2
            }
        },
        {
            "x": 4,
            "y": 11,
            "smallBox": null,
            "shape": "vRectangle",
            "type": "chance",
            "color": "rainbow",
            "property": null
        },
        {
            "x": 3,
            "y": 11,
            "smallBox": {
                "x": 3,
                "y": 11,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "skyBlue",
            "property": {
                "name": "Vermont Avenue",
                "id": 3
            }
        },
        {
            "x": 2,
            "y": 11,
            "smallBox": {
                "x": 2,
                "y": 11,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "skyBlue",
            "property": {
                "name": "Connecticut Avenue",
                "id": 4
            }
        },
        {
            "x": 0,
            "y": 11,
            "smallBox": {
                "x": .75,
                "y": 11,
                "width": 1.25,
                "height": 1.25
            },
            "shape": "square",
            "type": "jail",
            "color": "orangeRed",
            "property": null
        },
        {
            "x": 0,
            "y": 10,
            "smallBox": {
                "x": 1.35,
                "y": 10,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "darkOrchid",
            "property": {
                "name": "St. Charles Place",
                "id": 5
            }
        },
        {
            "x": 0,
            "y": 9,
            "smallBox": {
                "x": 1.35,
                "y": 9,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "utility",
            "color": "white",
            "property": {
                "name": "Electric Company",
                "id": 26
            }
        },
        {
            "x": 0,
            "y": 8,
            "smallBox": {
                "x": 1.35,
                "y": 8,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "darkOrchid",
            "property": {
                "name": "States Avenue",
                "id": 6
            }
        },
        {
            "x": 0,
            "y": 7,
            "smallBox": {
                "x": 1.35,
                "y": 7,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "darkOrchid",
            "property": {
                "name": "Virginia Avenue",
                "id": 7
            }
        },
        {
            "x": 0,
            "y": 6,
            "smallBox": {
                "x": 1.35,
                "y": 6,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "railroad",
            "color": "dimGrey",
            "property": {
                "name": "Pennsylvania Railroad",
                "id": 23
            }
        },
        {
            "x": 0,
            "y": 5,
            "smallBox": {
                "x": 1.35,
                "y": 5,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "orange",
            "property": {
                "name": "St. James Place",
                "id": 8
            }
        },
        {
            "x": 0,
            "y": 4,
            "smallBox": null,
            "shape": "hRectangle",
            "type": "chest",
            "color": "cyan",
            "property": null
        },
        {
            "x": 0,
            "y": 3,
            "smallBox": {
                "x": 1.35,
                "y": 3,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "orange",
            "property": {
                "name": "Tennesse Avenue",
                "id": 9
            }
        },
        {
            "x": 0,
            "y": 2,
            "smallBox": {
                "x": 1.35,
                "y": 2,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "orange",
            "property": {
                "name": "New York Avenue",
                "id": 10
            }
        },
        {
            "x": 0,
            "y": 0,
            "smallBox": null,
            "shape": "square",
            "type": "parking",
            "color": "white",
            "property": null
        },
        {
            "x": 2,
            "y": 0,
            "smallBox": {
                "x": 2,
                "y": 1.35,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "red",
            "property": {
                "name": "Kentucky Avenue",
                "id": 11
            }
        },
        {
            "x": 3,
            "y": 0,
            "smallBox": null,
            "shape": "vRectangle",
            "type": "chance",
            "color": "rainbow",
            "property": null
        },
        {
            "x": 4,
            "y": 0,
            "smallBox": {
                "x": 4,
                "y": 1.35,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "red",
            "property": {
                "name": "Indiana Avenue",
                "id": 12
            }
        },
        {
            "x": 5,
            "y": 0,
            "smallBox": {
                "x": 5,
                "y": 1.35,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "red",
            "property": {
                "name": "Illinois Avenue",
                "id": 13
            }
        },
        {
            "x": 6,
            "y": 0,
            "smallBox": {
                "x": 6,
                "y": 1.35,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "railroad",
            "color": "dimGrey",
            "property": {
                "name": "B. & O. Railroad",
                "id": 24
            }
        },
        {
            "x": 7,
            "y": 0,
            "smallBox": {
                "x": 7,
                "y": 1.35,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "yellow",
            "property": {
                "name": "Atlantic Avenue",
                "id": 14
            }
        },
        {
            "x": 8,
            "y": 0,
            "smallBox": {
                "x": 8,
                "y": 1.35,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "yellow",
            "property": {
                "name": "Ventnor Avenue",
                "id": 15
            }
        },
        {
            "x": 9,
            "y": 0,
            "smallBox": {
                "x": 9,
                "y": 1.35,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "utility",
            "color": "white",
            "property": {
                "name": "Water Works",
                "id": 27
            }
        },
        {
            "x": 10,
            "y": 0,
            "smallBox": {
                "x": 10,
                "y": 1.35,
                "width": 1,
                "height": .65
            },
            "shape": "vRectangle",
            "type": "property",
            "color": "yellow",
            "property": {
                "name": "Marvin Gardens",
                "id": 16
            }
        },
        {
            "x": 11,
            "y": 0,
            "smallBox": null,
            "shape": "square",
            "type": "toJail",
            "color": "dodgerBlue",
            "property": null
        },
        {
            "x": 11,
            "y": 2,
            "smallBox": {
                "x": 11,
                "y": 2,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "green",
            "property": {
                "name": "Pacific Avenue",
                "id": 17
            }
        },
        {
            "x": 11,
            "y": 3,
            "smallBox": {
                "x": 11,
                "y": 3,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "green",
            "property": {
                "name": "North Carolina Avenue",
                "id": 18
            }
        },
        {
            "x": 11,
            "y": 4,
            "smallBox": null,
            "shape": "hRectangle",
            "type": "chest",
            "color": "cyan",
            "property": null
        },
        {
            "x": 11,
            "y": 5,
            "smallBox": {
                "x": 11,
                "y": 5,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "green",
            "property": {
                "name": "Pennsylvania Avenue",
                "id": 19
            }
        },
        {
            "x": 11,
            "y": 6,
            "smallBox": {
                "x": 11,
                "y": 6,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "railroad",
            "color": "dimGrey",
            "property": {
                "name": "Short Line",
                "id": 25
            }
        },
        {
            "x": 11,
            "y": 7,
            "smallBox": null,
            "shape": "hRectangle",
            "type": "chance",
            "color": "rainbow",
            "property": null
        },
        {
            "x": 11,
            "y": 8,
            "smallBox": {
                "x": 11,
                "y": 8,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "blue",
            "property": {
                "name": "Park Place",
                "id": 20
            }
        },
        {
            "x": 11,
            "y": 9,
            "smallBox": {
                "x": 11,
                "y": 9,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "tax100",
            "color": "lightGrey",
            "property": null
        },
        {
            "x": 11,
            "y": 10,
            "smallBox": {
                "x": 11,
                "y": 10,
                "width": .65,
                "height": 1
            },
            "shape": "hRectangle",
            "type": "property",
            "color": "blue",
            "property": {
                "name": "Boardwalk",
                "id": 21
            }
        }
    ];
    return tiles;
}

//------------------------------------

function loadProperties() {
    var properties = [
        {
            "owner": null,
            "price": 60,
            "upgrades": 0,
            "ungradeCost": 50,
            "rent": [2, 4, 10, 30, 90, 160, 250],
            "mortgaged": false,
            "mortgage": 30,
            "unmortgage": 33
        },
        {
            "owner": null,
            "price": 60,
            "upgrades": 0,
            "ungradeCost": 50,
            "rent": [4, 8, 20, 60, 180, 320, 450],
            "mortgaged": false,
            "mortgage": 30,
            "unmortgage": 33
        },
        {
            "owner": null,
            "price": 100,
            "upgrades": 0,
            "ungradeCost": 50,
            "rent": [6, 12, 30, 90, 270, 400, 550],
            "mortgaged": false,
            "mortgage": 50,
            "unmortgage": 55
        },
        {
            "owner": null,
            "price": 100,
            "upgrades": 0,
            "ungradeCost": 50,
            "rent": [6, 12, 30, 90, 270, 400, 550],
            "mortgaged": false,
            "mortgage": 50,
            "unmortgage": 55
        },
        {
            "owner": null,
            "price": 120,
            "upgrades": 0,
            "ungradeCost": 50,
            "rent": [8, 16, 40, 100, 300, 450, 600],
            "mortgaged": false,
            "mortgage": 60,
            "unmortgage": 66
        },
        {
            "owner": null,
            "price": 140,
            "upgrades": 0,
            "ungradeCost": 100,
            "rent": [10, 20, 50, 150, 450, 625, 750],
            "mortgaged": false,
            "mortgage": 80,
            "unmortgage": 88
        },
        {
            "owner": null,
            "price": 140,
            "upgrades": 0,
            "ungradeCost": 100,
            "rent": [10, 20, 50, 150, 450, 625, 750],
            "mortgaged": false,
            "mortgage": 80,
            "unmortgage": 88
        },
        {
            "owner": null,
            "price": 160,
            "upgrades": 0,
            "ungradeCost": 100,
            "rent": [12, 24, 60, 180, 500, 700, 900],
            "mortgaged": false,
            "mortgage": 80,
            "unmortgage": 88
        },
        {
            "owner": null,
            "price": 180,
            "upgrades": 0,
            "ungradeCost": 100,
            "rent": [14, 38, 70, 200, 550, 750, 950],
            "mortgaged": false,
            "mortgage": 90,
            "unmortgage": 99
        },
        {
            "owner": null,
            "price": 180,
            "upgrades": 0,
            "ungradeCost": 100,
            "rent": [14, 38, 70, 200, 550, 750, 950],
            "mortgaged": false,
            "mortgage": 90,
            "unmortgage": 99
        },
        {
            "owner": null,
            "price": 200,
            "upgrades": 0,
            "ungradeCost": 100,
            "rent": [16, 32, 80, 220, 600, 800, 1000],
            "mortgaged": false,
            "mortgage": 100,
            "unmortgage": 110
        },
        {
            "owner": null,
            "price": 220,
            "upgrades": 0,
            "ungradeCost": 150,
            "rent": [18, 36, 90, 250, 700, 875, 1050],
            "mortgaged": false,
            "mortgage": 110,
            "unmortgage": 121
        },
        {
            "owner": null,
            "price": 220,
            "upgrades": 0,
            "ungradeCost": 150,
            "rent": [18, 36, 90, 250, 700, 875, 1050],
            "mortgaged": false,
            "mortgage": 110,
            "unmortgage": 121
        },
        {
            "owner": null,
            "price": 240,
            "upgrades": 0,
            "ungradeCost": 150,
            "rent": [20, 40, 100, 300, 750, 925, 1100],
            "mortgaged": false,
            "mortgage": 120,
            "unmortgage": 132
        },
        {
            "owner": null,
            "price": 260,
            "upgrades": 0,
            "ungradeCost": 150,
            "rent": [22, 44, 110, 330, 800, 975, 1150],
            "mortgaged": false,
            "mortgage": 130,
            "unmortgage": 143
        },
        {
            "owner": null,
            "price": 260,
            "upgrades": 0,
            "ungradeCost": 150,
            "rent": [22, 44, 110, 330, 800, 975, 1150],
            "mortgaged": false,
            "mortgage": 130,
            "unmortgage": 143
        },
        {
            "owner": null,
            "price": 280,
            "upgrades": 0,
            "ungradeCost": 150,
            "rent": [24, 48, 120, 360, 850, 1025, 1200],
            "mortgaged": false,
            "mortgage": 140,
            "unmortgage": 154
        },
        {
            "owner": null,
            "price": 300,
            "upgrades": 0,
            "ungradeCost": 200,
            "rent": [26, 52, 130, 390, 900, 1100, 1275],
            "mortgaged": false,
            "mortgage": 150,
            "unmortgage": 165
        },
        {
            "owner": null,
            "price": 300,
            "upgrades": 0,
            "ungradeCost": 200,
            "rent": [26, 52, 130, 390, 900, 1100, 1275],
            "mortgaged": false,
            "mortgage": 150,
            "unmortgage": 165
        },
        {
            "owner": null,
            "price": 320,
            "upgrades": 0,
            "ungradeCost": 200,
            "rent": [28, 56, 150, 450, 1000, 1200, 1400],
            "mortgaged": false,
            "mortgage": 160,
            "unmortgage": 176
        },
        {
            "owner": null,
            "price": 350,
            "upgrades": 0,
            "ungradeCost": 200,
            "rent": [35, 70, 175, 500, 1100, 1300, 1500],
            "mortgaged": false,
            "mortgage": 175,
            "unmortgage": 193
        },
        {
            "owner": null,
            "price": 400,
            "upgrades": 0,
            "ungradeCost": 200,
            "rent": [50, 100, 200, 600, 1400, 1700, 2000],
            "mortgaged": false,
            "mortgage": 200,
            "unmortgage": 220
        },
        {
            "owner": null,
            "price": 200,
            "upgrades": 0,
            "ungradeCost": null,
            "rent": [25, 50, 100, 200],
            "mortgaged": false,
            "mortgage": 100,
            "unmortgage": 110
        },
        {
            "owner": null,
            "price": 200,
            "upgrades": 0,
            "ungradeCost": null,
            "rent": [25, 50, 100, 200],
            "mortgaged": false,
            "mortgage": 100,
            "unmortgage": 110
        },
        {
            "owner": null,
            "price": 200,
            "upgrades": 0,
            "ungradeCost": null,
            "rent": [25, 50, 100, 200],
            "mortgaged": false,
            "mortgage": 100,
            "unmortgage": 110
        },
        {
            "owner": null,
            "price": 200,
            "upgrades": 0,
            "ungradeCost": null,
            "rent": [25, 50, 100, 200],
            "mortgaged": false,
            "mortgage": 100,
            "unmortgage": 110
        },
        {
            "owner": null,
            "price": 150,
            "upgrades": 0,
            "ungradeCost": null,
            "rent": [4, 10],
            "mortgaged": false,
            "mortgage": 75,
            "unmortgage": 83
        },
        {
            "owner": null,
            "price": 150,
            "upgrades": 0,
            "ungradeCost": null,
            "rent": [4, 10],
            "mortgaged": false,
            "mortgage": 75,
            "unmortgage": 83
        }
    ];
    return properties;
}

//------------------------------------

function loadChest() {
    var chest = [
        {
            "text": "You have won Second Prize in a Beauty Contest!",
            "subText": null,
            "buttonText": "Collect M10",
            "action": () => players[turn].collect(10)
        },
        {
            "text": "Income Tax Refund",
            "subText": null,
            "buttonText": "Collect M20",
            "action": () => players[turn].collect(20)
        },
        {
            "text": "Consultancy Fee",
            "subText": null,
            "buttonText": "Collect M25",
            "action": () => players[turn].collect(25)
        },
        {
            "text": "From Sale of Stock",
            "subText": null,
            "buttonText": "You Get M50",
            "action": () => players[turn].collect(50)
        },
        {
            "text": "Life Insurance Matures",
            "subText": null,
            "buttonText": "Collect M100",
            "action": () => players[turn].collect(100)
        },
        {
            "text": "You Inherit",
            "subText": null,
            "buttonText": "Collect M100",
            "action": () => players[turn].collect(100)
        },
        {
            "text": "Vacation Fund Matures",
            "subText": null,
            "buttonText": "Collect M100",
            "action": () => players[turn].collect(100)
        },
        {
            "text": "Bank Error in Your Favor",
            "subText": null,
            "buttonText": "Collect M200",
            "action": () => players[turn].collect(200)
        },
        {
            "text": "School Fees",
            "subText": null,
            "buttonText": "Pay M50",
            "action": () => players[turn].pay(50)
        },
        {
            "text": "Doctor's Fees",
            "subText": null,
            "buttonText": "Pay M50",
            "action": () => players[turn].pay(50)
        },
        {
            "text": "Hospital Fees",
            "subText": null,
            "buttonText": "Pay M100",
            "action": () => players[turn].pay(100)
        },
        {
            "text": "It is Your Birthday",
            "subText": null,
            "buttonText": "Collect M10 From Every Player",
            "action": () => {
                players[turn].collect(10 * (players.length - 1));
                for(let i = 0; i < players.length; i++) {
                    if (i == turn) continue;
                    players[i].pay(10);
                }
            },
        },
        {
            "text": "You are Assessed For Street Repairs",
            "subText": "Pay M40 per House and M115 per Hotel you own",
            "buttonText": "Continue",
            "action": () => players[turn].payUpgrades(40, 115)
        },
        {
            "text": "Advace to GO",
            "subText": null,
            "buttonText": "Collect M200",
            "action": () => moveToWith(0, true)
        },
        {
            "text": "Go to Jail",
            "subText": "Go Directly to Jail - Do Not Pass GO - Do Not Collect M200",
            "buttonText": "Continue",
            "action": () => {
                moveToWith(10, false);
                players[turn].inPrison = true;
            }
        },
        {
            "text": "Get Out of Jail Free",
            "subText": "This card may be kept until needed or traded",
            "buttonText": "Continue",
            "action": () => players[turn].jailCards++
        }
    ];
    return chest;
}

//------------------------------------

function loadChance() {
    var chance = [
        {
            "text": "Bank Pays You Dividend",
            "subText": null,
            "buttonText": "Collect M50",
            "action": () => players[turn].collect(50)
        },
        {
            "text": "Your Building Loan Matures",
            "subText": null,
            "buttonText": "Collect M150",
            "action": () => players[turn].collect(150)
        },
        {
            "text": "Speeding Fine",
            "subText": null,
            "buttonText": "Pay M15",
            "action": () => players[turn].pay(15)
        },
        {
            "text": "You Have Been Elected Chairman of the Board",
            "subText": null,
            "buttonText": "Pay Each Player M50",
            "action": () => {
                players[turn].pay(50 * (players.length - 1));
                for(let i = 0; i < players.length; i++) {
                    if (i == turn) continue;
                    players[i].collect(50);
                }
            }
        },
        {
            "text": "Make General Repairs on all your Property",
            "subtext": "For Each House Pay M25 - For Each Hotel Pay M100",
            "buttonText": "Continue",
            "action": () => players[turn].payUpgrades(25, 100)
        },
        {
            "text": "Go Back Three Spaces",
            "subText": null,
            "buttonText": "Go Back",
            "action": () => moveTo(players[turn].tile - 3)
        },
        {
            "text": "Advance to St. Charles Place",
            "subText": "If you Pass GO, Collect M200",
            "buttonText": "Continue",
            "action": () => moveToFrom(11, players[turn].tile)
        },
        {
            "text": "Advance to Illinois Avenue",
            "subText": "If you Pass GO, Collect M200",
            "buttonText": "Continue",
            "action": () => moveToFrom(24, players[turn].tile)
        },
        {
            "text": "Take a Walk on the Boardwalk",
            "subText": null,
            "buttonText": "Advance to Boardwalk",
            "action": () => moveTo(39)
        },
        {
            "text": "Advance to GO",
            "subText": "Collect M200",
            "buttonText": "Continue",
            "action": () => moveToWith(0, true)
        },
        {
            "text": "Take a Trip to Reading Railroad",
            "subText": "If you Pass GO, Collect M200",
            "buttonText": "Continue",
            "action": () => moveToFrom(5, players[turn].tile)
        },
        {
            "text": "Advance to the Nearest Utility",
            "subText": "If Unowned, you may buy it from the Bank - If Owned, throw dice and pay owner 10 times the amount thrown",
            "buttonText": null,
            "action": null
        },
        {
            "text": "Advance to the Nearest Railroad",
            "subText": "If Unowned, you may buy it from the Bank - If Owned, throw dice and pay owner 10 times the amount thrown",
            "buttonText": null,
            "action": null
        },
        {
            "text": "Advance to the Nearest Railroad",
            "subText": "If Unowned, you may buy it from the Bank - If Owned, throw dice and pay owner 10 times the amount thrown",
            "buttonText": null,
            "action": null
        },
        {
            "text": "Go to Jail",
            "subText": "Go Directly to Jail - Do Not Pass GO - Do Not Collect M200",
            "buttonText": "Continue",
            "action": () => {
                moveToWith(10, false);
                players[turn].inPrison = true;
            }
        },
        {
            "text": "Get Out of Jail Free",
            "subText": "This card may be kept until needed or traded",
            "buttonText": "Continue",
            "action": () => players[turn].jailCards++
        }
    ];
    return chance;
}