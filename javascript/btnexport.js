export default class btn {
    constructor(buttonValue, adder, cursorAmount, farmerAmount, storeAmount, ascendClicked) {
        this.buttonValue = buttonValue
        this.adder = adder
        this.cursorAmount = cursorAmount
        this.farmerAmount = farmerAmount
        this.storeAmount = storeAmount
        this.ascendClicked = ascendClicked
    }

    cursorCount() {
        const cursorCount = document.getElementById("cursorCount")


        if (btn1.buttonValue >= 1000) {
            var string = numeral(btn1.buttonValue).format('0a,0.00');
            cursorCount.innerHTML = "Cursor Count: " + string
            document.title = string + " " + "Cursors"
        }
        if (btn1.buttonValue < 1000) {
            var string2 = numeral(btn1.buttonValue).format('0')
            cursorCount.innerHTML = "Cursor Count: " + string2
            document.title = string2 + " " + "Cursors"
        }

        if (btn1.buttonValue >= 50000) {
            document.getElementById("ascend").disabled = false;
        }
    }



    btnPressed() {
        btn1.buttonValue = btn1.buttonValue += btn1.adder;
        btn1.cursorCount()
    }

    upgrade1() {
        if (btn1.ascendClicked == true) {
            alert("You have more than 2 adders!")
            btn1.adder = 10
            let node = document.getElementById("upgrade1");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            btn1.cursorCount()
        }

        if (btn1.buttonValue >= 10) {

            let node = document.getElementById("upgrade1");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            if (btn1.ascendClicked == false) {
                btn1.buttonValue = btn1.buttonValue - 10
                btn1.adder = 2
            }
            btn1.cursorCount()
        } else if (btn1.buttonValue < 10 && btn1.ascendClicked == false) {
            alert(`You do not have enough cursors! You need ${10-btn1.buttonValue} more!`)
        }
    }

    upgrade2() {
        if (btn1.ascendClicked == true) {
            alert("You have more than 5 adders!")
            btn1.adder = 10
            let node = document.getElementById("upgrade2");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            btn1.cursorCount()
        }
        if (btn1.buttonValue >= 500) {

            let node = document.getElementById("upgrade2");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            if (btn1.ascendClicked == false) {
                btn1.buttonValue = btn1.buttonValue - 500
                btn1.adder = 5
            }
            btn1.cursorCount()
        } else if (btn1.buttonValue < 500 && btn1.ascendClicked == false) {
            alert(`You do not have enough cursors! You need ${500-btn1.buttonValue} more!`)
        }
    }

    upgrade3() {
        if (btn1.ascendClicked == true) {
            alert("You have more than 8 adders!")
            btn1.adder = 10
            let node = document.getElementById("upgrade3");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            btn1.cursorCount()
        }
        if (btn1.buttonValue >= 2500) {

            let node = document.getElementById("upgrade3");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            if (btn1.ascendClicked == false) {
                btn1.buttonValue = btn1.buttonValue - 2500
                btn1.adder = 8
            }
            btn1.cursorCount()
        } else if (btn1.buttonValue < 2500 && btn1.ascendClicked == false) {
            alert(`You do not have enough cursors! You need ${2500-btn1.buttonValue} more!`)
        }
    }

    autoclicker1() {
        var autoClickerCost = Math.floor(50 * Math.pow(1.07, btn1.cursorAmount))
        if (btn1.buttonValue >= autoClickerCost) {
            btn1.cursorAmount = btn1.cursorAmount + 1
            btn1.buttonValue = btn1.buttonValue - autoClickerCost

            var autoClickerCost = Math.floor(50 * Math.pow(1.07, btn1.cursorAmount))


            window.setInterval(function () {
                btn1.btnPressed(btn1.cursorAmount);

            }, 1000);
        } else if (btn1.buttonValue < autoClickerCost) {
            return
        }
        document.getElementById("autoclickerAmount1").innerHTML = btn1.cursorAmount
        document.getElementById("autoclickerCost1").innerHTML = autoClickerCost
        btn1.cursorCount()
    }

    autoclicker2() {
        var farmerCost = Math.floor(250 * Math.pow(1.06, btn1.farmerAmount))
        if (btn1.buttonValue >= farmerCost) {
            btn1.farmerAmount = btn1.farmerAmount + 1
            btn1.buttonValue = btn1.buttonValue - farmerCost

            var farmerCost = Math.floor(250 * Math.pow(1.06, btn1.farmerAmount))


            window.setInterval(function () {
                btn1.btnPressed(btn1.farmerAmount);

            }, 500);
        } else if (btn1.buttonValue < farmerCost) {
            return
        }
        document.getElementById("farmerAmount1").innerHTML = btn1.farmerAmount
        document.getElementById("farmerCost1").innerHTML = farmerCost
        btn1.cursorCount()
    }

    autoclicker3() {
        var storeCost = Math.floor(1000 * Math.pow(1.05, btn1.storeAmount))
        if (btn1.buttonValue >= storeCost) {
            btn1.storeAmount = btn1.storeAmount + 1
            btn1.buttonValue = btn1.buttonValue - storeCost

            var storeCost = Math.floor(1000 * Math.pow(1.05, btn1.storeAmount))


            window.setInterval(function () {
                btn1.btnPressed(btn1.storeAmount);

            }, 250);
        } else if (btn1.buttonValue < storeCost) {
            return
        }
        document.getElementById("storeAmount1").innerHTML = btn1.storeAmount
        document.getElementById("storeCost1").innerHTML = storeCost
        btn1.cursorCount()
    }

    ascendPressed() {
        btn1.ascendClicked = true;

        btn1.buttonValue = btn1.buttonValue - 50000

        btn1.adder = 10
        console.log(btn1.adder)

        document.getElementById('ascend').remove()

        document.getElementById("alert").style.display = "block "


        document.getElementById('firstColumn').className = "col-2"
        document.getElementById('secondColumn').className = "col-2"
        document.getElementById('thirdColumn').className = "col-2"

        document.getElementById('cursorImage').width = "128"
        document.getElementById('cursorImage').height = "128"

        document.getElementById("fourthColumn").style.visibility = "visible"
        document.getElementById("fifthColumn").style.visibility = "visible"
        document.getElementById("sixthColumn").style.visibility = "visible"

        btn1.cursorCount()
    }

}


let btn1 = new btn(0, 1, 0, 0, 0, false)