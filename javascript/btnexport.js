class btn {
    constructor(buttonValue, adder, cursorAmount, farmerAmount, kWorker) {
        this.buttonValue = buttonValue
        this.adder = adder
        this.cursorAmount = cursorAmount
        this.farmerAmount = farmerAmount
        this.kWorker = kWorker
    }

    cursorCount() {
        const cursorCount = document.getElementById("cursorCount")
        cursorCount.innerHTML = "Cursor Count: " + btn1.buttonValue.toLocaleString()
        document.title = btn1.buttonValue.toLocaleString() + " " + "Cursors"
    }

 
    btnPressed() {
        btn1.buttonValue = btn1.buttonValue += btn1.adder;
        btn1.cursorCount()
    }

    upgrade1() {
        if (btn1.buttonValue >= 10) {
            btn1.buttonValue = btn1.buttonValue - 10
            btn1.cursorCount()

            let node = document.getElementById("upgrade1");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }

            btn1.adder = 2
        } else if (btn1.buttonValue < 10) {
            alert(`You do not have enough cursors! You need ${10-btn1.buttonValue} more!`)
        }
    }

    upgrade2() {
        if (btn1.buttonValue >= 500) {
            btn1.buttonValue = btn1.buttonValue - 500
            btn1.cursorCount()

            let node = document.getElementById("upgrade2");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }

            btn1.adder = 5
        } else if (btn1.buttonValue < 500) {
            alert(`You do not have enough cursors! You need ${500-btn1.buttonValue} more!`)
        }
    }

    upgrade3() {
        if (btn1.buttonValue >= 2500) {
            btn1.buttonValue = btn1.buttonValue - 2500
            btn1.cursorCount()

            let node = document.getElementById("upgrade3");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }

            btn1.adder = 8
        } else if (btn1.buttonValue < 2500) {
            alert(`You do not have enough cursors! You need ${2500-btn1.buttonValue} more!`)
        }
    }

    autoclicker1() {
        var autoClickerCost = Math.floor(50 * Math.pow(1.1, btn1.cursorAmount))
        if (btn1.buttonValue >= autoClickerCost) {
            btn1.cursorAmount = btn1.cursorAmount + 1
            btn1.buttonValue = btn1.buttonValue - autoClickerCost

            var autoClickerCost = Math.floor(50 * Math.pow(1.1, btn1.cursorAmount))


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
        var farmerCost = Math.floor(250 * Math.pow(1.09, btn1.farmerAmount))
        if (btn1.buttonValue >= farmerCost) {
            btn1.farmerAmount = btn1.farmerAmount + 1
            btn1.buttonValue = btn1.buttonValue - farmerCost

            var farmerCost = Math.floor(250 * Math.pow(1.09, btn1.farmerAmount))


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
}


let btn1 = new btn(0, 1, 0, 0, 0)

export default btn