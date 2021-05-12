parseInt(localStorage.getItem('clickcount'))
function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
        console.log(testCost)
    } else {
        localStorage.clickcount = 1;
    }
    if (localStorage.clickcount < 1000) {
        document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";
    } else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {
    }
    document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kWorker + " times";
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (localStorage.clickcount < 1000) {
    localStorage.kWorker = localStorage.clickcount
} else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {
    window.setInterval(function () {
        const kWorker = (localStorage.clickcount / 1000).toFixed(2) + "K"
        localStorage.setItem('kWorker', kWorker)
    }, 1);
}

if (localStorage.cursors == null) {
    var cursors = 0
    localStorage.setItem('cursors', cursors)
}

if (localStorage.cursors != null) {
    var cursors = localStorage.cursorCount
}

if (localStorage.cursorCost == null) {
    var cursorCost = Math.floor(10 * Math.pow(1.1, parseInt(localStorage.cursors)));
    console.log(cursorCost)

    localStorage.setItem('cursorCost', cursorCost)
}

var cursorCost = parseInt(localStorage.cursorCost)
var cursorCount = parseInt(localStorage.getItem('cursors'))
var testCost = 0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buyCursor() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors
    var cursorCost = Math.floor(10 * Math.pow(1.05, cursorCount));

    if (localStorage.clickcount < cursorCost) {

    } else if (localStorage.clickcount >= cursorCost) {
        cursorCount = cursorCount + 1;
         testCost = testCost + 1;
        localStorage.setItem('cursors', cursorCount)
        localStorage.setItem('cursorCost', cursorCost)

        localStorage.clickcount = localStorage.clickcount - cursorCost;
        document.getElementById('cursors').innerHTML = cursorCount;
        document.getElementById('cursorCost').innerHTML = cursorCount;
        if (localStorage.clickcount < 1000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";
        } else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {

            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kWorker + " times";
        }

        window.setInterval(function () {
            clickCounter(cursorCount);

        }, 1000);

    };
    var nextCost = Math.floor(10 * Math.pow(1.05, cursorCount));

    document.getElementById('cursorCost').innerHTML = cursorCost;

};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (localStorage.bananas == null) {
    var bananas = 0
    localStorage.setItem('bananas', bananas)
}

if (localStorage.bananas != null) {
    var bananas = localStorage.bananaCount
}

if (localStorage.bananaCost == null) {
    var bananaCost = Math.floor(40 * Math.pow(1.05, parseInt(localStorage.bananas)));
    console.log(bananaCost)

    localStorage.setItem('bananaCost', bananaCost)
}

var bananaCost = parseInt(localStorage.bananaCost)
var bananaCount = parseInt(localStorage.getItem('bananas'))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buyBanana() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors

    var bananaCost = Math.floor(40 * Math.pow(1.05, bananaCount));

    if (localStorage.clickcount < bananaCost) {

    } else if (localStorage.clickcount >= bananaCost) {
        bananaCount = bananaCount + 1;

        localStorage.setItem('bananas', bananaCount)
        localStorage.setItem('bananaCost', bananaCost)

        localStorage.clickcount = localStorage.clickcount - bananaCost;
        document.getElementById('banana').innerHTML = bananaCount;
        document.getElementById('bananaCost').innerHTML = bananaCost;
        if (localStorage.clickcount < 1000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";
        } else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kWorker + " times";
        }

        window.setInterval(function () {
            clickCounter(bananaCount);

        }, 200);

    };
    var nextCost = Math.floor(40 * Math.pow(1.1, bananaCount));

    document.getElementById('bananaCost').innerHTML = bananaCost;

};

/////////////////////////////////////////////////////////////////////////////////////////


if (localStorage.nursuries == null) {
    var nursuries = 0
    localStorage.setItem('nursuries', nursuries)
}

if (localStorage.nursuries != null) {
    var nursuries = localStorage.nurseryCount
}

if (localStorage.nurseryCost == null) {
    var nurseryCost = Math.floor(200 * Math.pow(1.05, parseInt(localStorage.nursuries)));
    console.log(nurseryCost)

    localStorage.setItem('nurseryCost', nurseryCost)
}

var nurseryCost = parseInt(localStorage.nurseryCost)
var nurseryCount = parseInt(localStorage.getItem('nursuries'))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buyNursery() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors

    var nurseryCost = Math.floor(200 * Math.pow(1.05, nurseryCount));

    if (localStorage.clickcount < nurseryCost) {

    } else if (localStorage.clickcount >= nurseryCost) {
        nurseryCount = nurseryCount + 1;

        localStorage.setItem('nursuries', nurseryCount)
        localStorage.setItem('nurseryCost', nurseryCost)

        localStorage.clickcount = localStorage.clickcount - nurseryCost;
        document.getElementById('nursery').innerHTML = nurseryCount;
        document.getElementById('nurseryCost').innerHTML = nurseryCost;
        if (localStorage.clickcount < 1000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";
        } else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kWorker + " times";
        }

        window.setInterval(function () {
            clickCounter(nurseryCount);

        }, 200);

    };
    var nextCost = Math.floor(200 * Math.pow(1.1, nurseryCount));

    document.getElementById('nurseryCost').innerHTML = nurseryCost;

};









if (localStorage.tribes == null) {
    var tribes = 0
    localStorage.setItem('tribes', tribes)
}

if (localStorage.tribes != null) {
    var tribes = localStorage.tribeCount
}

if (localStorage.tribeCost == null) {
    var tribeCost = Math.floor(1000 * Math.pow(1.05, parseInt(localStorage.tribes)));
    console.log(tribeCost)

    localStorage.setItem('tribeCost', tribeCost)
}

var tribeCost = parseInt(localStorage.tribeCost)
var tribeCount = parseInt(localStorage.getItem('tribes'))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buyTribe() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors

    var tribeCost = Math.floor(1000 * Math.pow(1.05, tribeCount));

    if (localStorage.clickcount < tribeCost) {

    } else if (localStorage.clickcount >= tribeCost) {
        tribeCount = tribeCount + 1;

        localStorage.setItem('tribes', tribeCount)
        localStorage.setItem('tribeCost', tribeCost)

        localStorage.clickcount = localStorage.clickcount - tribeCost;
        document.getElementById('tribe').innerHTML = tribeCount;
        document.getElementById('tribeCost').innerHTML = tribeCost;
        if (localStorage.clickcount < 1000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";
        } else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kWorker + " times";
        }

        window.setInterval(function () {
            clickCounter(tribeCount);

        }, 10);

    };
    var nextCost = Math.floor(1000 * Math.pow(1.1, tribeCount));

    document.getElementById('tribeCost').innerHTML = tribeCost;

};









if (localStorage.zoos == null) {
    var zoos = 0
    localStorage.setItem('zoos', zoos)
}

if (localStorage.zoos != null) {
    var zoos = localStorage.zooCount
}

if (localStorage.zooCost == null) {
    var zooCost = Math.floor(10000 * Math.pow(1.05, parseInt(localStorage.zoos)));
    console.log(zooCost)

    localStorage.setItem('zooCost', zooCost)
}

var zooCost = parseInt(localStorage.zooCost)
var zooCount = parseInt(localStorage.getItem('zoos'))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buyZoo() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors

    var zooCost = Math.floor(10000 * Math.pow(1.05, zooCount));

    if (localStorage.clickcount < zooCost) {

    } else if (localStorage.clickcount >= zooCost) {
        zooCount = zooCount + 1;

        localStorage.setItem('zoos', zooCount)
        localStorage.setItem('zooCost', zooCost)

        localStorage.clickcount = localStorage.clickcount - zooCost;
        document.getElementById('zoo').innerHTML = zooCount;
        document.getElementById('zooCost').innerHTML = zooCost;
        if (localStorage.clickcount < 1000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";
        } else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {
            document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kWorker + " times";
        }

        window.setInterval(function () {
            clickCounter(zooCount);

        }, 1);

    };
    var nextCost = Math.floor(10000 * Math.pow(1.1, zooCount));

    document.getElementById('zooCost').innerHTML = zooCost;

};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function buyMultipleCursors() {
    parseInt(localStorage.clickcount)
    parseInt(localStorage.cursors)
    console.log(cursorCost)
    if (localStorage.clickcount >= cursorCost*10) {
        localStorage.clickcount = localStorage.clickcount - cursorCost*10;
        localStorage.cursors = localStorage.cursors + 10;
        localStorage.cursorCost
    } else if (localStorage.clickcount < cursorCost*10) {
        alert('You do not have enough monkes to buy 10 Cursors.')
    }
}
 */















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function () {
    
    alert("You have joined the world's best game\n\nMonke Clicker was created by Aaron and Charlie in 2021\n\nmonke")
    
    if (localStorage.clickcount < 1000) {
        document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";
    } else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {
    }
    document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kWorker + " times";
}

parseInt(localStorage.getItem('clickcount'))

document.getElementById('cursors').innerHTML = cursorCount
document.getElementById('cursorCost').innerHTML = cursorCost

for (var i = 0; i < cursorCount; i++) {
    window.setInterval(function () {
        clickCounter(cursorCount);

    }, 1000);
}

document.getElementById('banana').innerHTML = bananaCount
document.getElementById('bananaCost').innerHTML = bananaCost

for (var i = 0; i < bananaCount; i++) {
    window.setInterval(function () {

        clickCounter(bananaCount);
    }, 200);
}

document.getElementById('nursery').innerHTML = nurseryCount
document.getElementById('nurseryCost').innerHTML = nurseryCost

for (var i = 0; i < nurseryCount; i++) {
    window.setInterval(function () {

        clickCounter(nurseryCount);
    }, 50);
}

document.getElementById('tribe').innerHTML = tribeCount
document.getElementById('tribeCost').innerHTML = tribeCost

for (var i = 0; i < tribeCount; i++) {
    window.setInterval(function () {

        clickCounter(tribeCount);
    }, 10);
}

document.getElementById('zoo').innerHTML = zooCount
document.getElementById('zooCost').innerHTML = zooCost

for (var i = 0; i < zooCount; i++) {
    window.setInterval(function () {

        clickCounter(zooCount);
    }, 1);
}

if (localStorage.clickcount < 1000) {
    localStorage.clickcount = localStorage.clickcount
    console.log('e')
} else if (localStorage.clickcount >= 1000 && localStorage.clickcount < 1000000) {
    window.setInterval(function () {
        const kWorker = (localStorage.clickcount / 1000).toFixed(2) + "K"
    }, 1);
}

window.onbeforeunload = function () {
    return "Are you sure you want to leave the worlds best game?";
    console.log('e')
};
