
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
        "inPrison": false
        },
        {
        "name": "EricGamma",
        "color": "#f00",
        "token": "car",
        "tile": 0,
        "money": 1500,
        "properties": [],
        "jailCards": 0,
        "inPrison": false
        },
        {
        "name": "EricIota",
        "color": "#0f0",
        "token": "dog",
        "tile": 0,
        "money": 1000,
        "properties": [],
        "jailCards": 0,
        "inPrison": false
        },
        {
        "name": "EricOmicron",
        "color": "#00f",
        "token": "ship",
        "tile": 0,
        "money": 500,
        "properties": [],
        "jailCards": 0,
        "inPrison": false
        }
    ];
    return players;
}  

function loadTiles () {
    var tiles = [
        {
            "x": 0,
            "y": 0,
            "shape": "square",
            "type": "go",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Mediterranean Avenue",
                "color": "saddleBrown",
                "id": 0
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "chest",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Baltic Avenue",
                "color": "saddleBrown",
                "id": 1
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "tax200",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "railroad",
            "property": {
                "name": "Reading Railroad",
                "color": "black",
                "id": 22
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Oriental Avenue",
                "color": "skyBlue",
                "id": 2
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "chance",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Vermont Avenue",
                "color": "skyBlue",
                "id": 3
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Connecticut Avenue",
                "color": "skyBlue",
                "id": 4
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "square",
            "type": "jail",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "St. Charles Place",
                "color": "darkOrchid",
                "id": 5
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "utility",
            "property": {
                "name": "Electric Company",
                "color": "white",
                "id": 26
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "States Avenue",
                "color": "darkOrchid",
                "id": 6
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Virginia Avenue",
                "color": "darkOrchid",
                "id": 7
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "railroad",
            "property": {
                "name": "Pennsylvania Railroad",
                "color": "black",
                "id": 23
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "St. James Place",
                "color": "orange",
                "id": 8
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "chest",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Tennesse Avenue",
                "color": "orange",
                "id": 9
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "New York Avenue",
                "color": "orange",
                "id": 10
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "square",
            "type": "parking",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Kentucky Avenue",
                "color": "red",
                "id": 11
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "chance",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Indiana Avenue",
                "color": "red",
                "id": 12
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Illinois Avenue",
                "color": "red",
                "id": 13
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "railroad",
            "property": {
                "name": "B. & O. Railroad",
                "color": "black",
                "id": 24
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Atlantic Avenue",
                "color": "yellow",
                "id": 14
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Ventnor Avenue",
                "color": "yellow",
                "id": 15
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "utility",
            "property": {
                "name": "Water Works",
                "color": "white",
                "id": 27
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Marvin Gardens",
                "color": "yellow",
                "id": 16
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "square",
            "type": "toJail",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Pacific Avenue",
                "color": "green",
                "id": 17
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "North Carolina Avenue",
                "color": "green",
                "id": 18
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "chance",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Pennsylvania Avenue",
                "color": "green",
                "id": 19
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "railroad",
            "property": {
                "name": "Short Line",
                "color": "black",
                "id": 25
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "chance",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Park Place",
                "color": "blue",
                "id": 20
            }
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "tax100",
            "property": null
        },
        {
            "x": 0,
            "y": 0,
            "shape": "rectangle",
            "type": "property",
            "property": {
                "name": "Boardwalk",
                "color": "blue",
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
            "buttonText": "Collect M10",
            "action": null//players[turn].collect(10)
        },
        {
            "text": "Income Tax Refund",
            "buttonText": "Collect M20",
            "action": null//players[turn].collect(20)
        },
        {
            "text": "Consultancy Fee",
            "buttonText": "Collect M25",
            "action": null//players[turn].collect(25)
        },
        {
            "text": "From Sale of Stock",
            "buttonText": "You Get M50",
            "action": null//players[turn].collect(50)
        },
        {
            "text": "Life Insurance Matures",
            "buttonText": "Collect M100",
            "action": null//players[turn].collect(100)
        },
        {
            "text": "You Inherit",
            "buttonText": "Collect M100",
            "action": null//players[turn].collect(100)
        },
        {
            "text": "Vacation Fund Matures",
            "buttonText": "Collect M100",
            "action": null//players[turn].collect(100)
        },
        {
            "text": "Bank Error in Your Favor",
            "buttonText": "Collect M200",
            "action": null//players[turn].collect(200)
        },
        {
            "text": "School Fees",
            "buttonText": "Pay M50",
            "action": null//players[turn].pay(50)
        },
        {
            "text": "Doctor's Fees",
            "buttonText": "Pay M50",
            "action": null//players[turn].pay(50)
        },
        {
            "text": "Hospital Fees",
            "buttonText": "Pay M100",
            "action": null//players[turn].pay(100)
        },
        {
            "text": "It is Your Birthday",
            "buttonText": "Collect M10 From Every Player",
            "action": () => {
                //players[turn].collect(10 * (players.length - 1));
                console.log("player " + turn + " collects M" + (10 * (players.length - 1)));
                for(let i = 0; i < players.length; i++) {
                    if (i == turn) continue;
                    //players[i].pay(10);
                    console.log("player " + i + " pays M" + 10);
                }
            },
        },
        {
            "text": "You are Assessed For Street Repairs",
            "buttonText": "Pay M40 per House and M115 per Hotel you own",
            "action": null//players[turn].pay(40, 115)
        },
        {
            "text": "Advace to GO",
            "buttonText": "Collect M200",
            "action": null//players[turn].moveTo(0, true) if you come from a larger value than your target you pass go
        },
        {
            "text": "Go to Jail",
            "buttonText": "Go Directly to Jail - Do Not Pass GO - Do Not Collect M200",
            "action": () => {
                //players[turn].moveTo(10, false);
                players[turn].inPrison = true;
            }
        },
        {
            "text": "Get Out of Jail Free",
            "buttonText": "This card may be kept until needed or traded",
            "action": () => players[turn].jailCards++
        }
    ];
    return chest;
}

//------------------------------------

function loadChance() {
    var chance = [
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        },
        {
            "text": "",
            "buttonText": "",
            "action": null
        }
    ];
    return chance;
}