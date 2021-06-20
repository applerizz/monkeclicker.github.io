export default class btn {
    constructor(buttonValue, adder) {
        this.buttonValue = buttonValue
        this.adder = adder
    }

    cursorCount() {
        const cursorCount = document.getElementById("cursorCount")
        cursorCount.innerHTML = btn1.buttonValue
    }

    btnPressed() {
        btn1.buttonValue = btn1.buttonValue += btn1.adder;
        const cursorCount = document.getElementById("cursorCount")
        cursorCount.innerHTML = btn1.buttonValue
    }

    upgrade1() {
        if (btn1.buttonValue >= 10) {
            btn1.buttonValue = btn1.buttonValue - 10
            btn1.cursorCount()

            document.getElementById('upgrade1').disabled = true;

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

            document.getElementById('upgrade2').disabled = true;

            let node = document.getElementById("upgrade2");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }

            btn1.adder = 5
        } else if (btn1.buttonValue < 500) {
            alert(`You do not have enough cursors! You need ${500-btn1.buttonValue} more!`)
        }
    }
}

let btn1 = new btn(0, 1)