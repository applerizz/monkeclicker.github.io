var nameInput = document.getElementById("nameInput").value
var entirePage = document.getElementById("entirePage")
var testSubject = document.getElementById("testSubject")

if (!localStorage.monkes) {
    var monkes = 0
} else if (localStorage.monkes) {
    var monkes = Number(localStorage.monkes)
}

if (!localStorage.adder) {
    var adder = 1
    localStorage.setItem('adder', adder)
    var adder = Number(localStorage.adder)
} else if (localStorage.adder) {
    localStorage.getItem('adder')
    var adder = Number(localStorage.adder)
}


var result = document.getElementById("result")
document.getElementById("disabled").disabled = false;



function monkeyPressed() {
    parseInt(localStorage.monkes)
    monkes = monkes + Number(localStorage.adder)
    localStorage.setItem('monkes', monkes)

    if (monkes < 1000) {
        result.innerHTML = "There are " + monkes + " monkes"
    } else if (monkes >= 1000 && monkes < 1000000) {
        result.innerHTML = "There are " + (monkes / 1000).toFixed(2) + "K monkes"
    } else if (monkes >= 1000000 && monkes < 1000000000) {
        result.innerHTML = "There are " + (monkes / 1000000).toFixed(2) + "M monkes"
    }
}

function monkeyPressed2() {
    if (monkes >= 10) {
        monkes = monkes - 10
        result.innerHTML = "There are " + monkes + " monkes"
        localStorage.setItem('adder', '2')
        localStorage.setItem('disabled', 'true')
    }

    if (localStorage.getItem('disabled') === 'true') {
        document.getElementById("disabled").disabled = true
    }
}



function enterGame() {
    var nameInput = document.getElementById("nameInput").value
    var everything = document.getElementById("everything")
    var testSubject = document.getElementById("testSubject")

    if (entirePage.style.display === "none" && nameInput.length != 0) {
        var z = nameInput
        localStorage.setItem('name', z)
        testSubject.innerHTML = localStorage.name
        entirePage.style.display = "flex"
        everything.style.display = "none"

        if (!localStorage.logged) {
            localStorage.setItem('logged', 'placeholder')
        }
    } else if (nameInput.length == 0) {
        console.log('test')
        var z = "Anonymous"
        localStorage.setItem('name', z)
    }
};

$(window).on("load", function () {
$(".loader-container").delay(5000).fadeOut(1000)
});

window.onload = function() {
    if (localStorage.logged === 'placeholder') {
        var entirePage = document.getElementById("entirePage")
        var everything = document.getElementById("everything")
        entirePage.style.display = "flex"
        everything.style.display = "none"
    }
    var testSubject = document.getElementById("testSubject")
    testSubject.innerHTML = localStorage.name

    if (localStorage.getItem('disabled') === 'true') {
        document.getElementById("disabled").disabled = true;
    }

    if (monkes < 1000) {
        result.innerHTML = "There are " + monkes + " monkes"
    } else if (monkes >= 1000 && monkes < 1000000) {
        result.innerHTML = "There are " + (monkes / 1000).toFixed(2) + "K monkes"
    } else if (monkes >= 1000000 && monkes < 1000000000) {
        result.innerHTML = "There are " + (monkes / 1000000).toFixed(2) + "M monkes"
    }
}
