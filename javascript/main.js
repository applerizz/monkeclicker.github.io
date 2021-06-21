import btn from './btnexport.js'

async function getGameName() {
    const response = await fetch('./json/config.json')
    const gameName = await response.json()
    const clickName = gameName.gameName

    document.getElementById("myGame").innerHTML = "Welcome To: " + clickName
}
getGameName()



let btn1 = new btn(0, 1, 0, 0)
document.getElementById("cursorImage").addEventListener('click', btn1.btnPressed)
//upgrades
document.getElementById("upgrade1").addEventListener('click', btn1.upgrade1)
document.getElementById("upgrade2").addEventListener('click', btn1.upgrade2)
document.getElementById("upgrade3").addEventListener('click', btn1.upgrade3)
//autoclickers
document.getElementById("autoclicker1").addEventListener('click', btn1.autoclicker1)
document.getElementById("autoclicker2").addEventListener('click', btn1.autoclicker2)

window.onload = function () {
    if (btn1.buttonValue == 0) {
        btn1.cursorCount()
    }
    document.getElementById("autoclickerAmount1").innerHTML = btn1.cursorAmount
    document.getElementById("autoclickerCost1").innerHTML = 50

    document.getElementById("farmerAmount1").innerHTML = btn1.cursorAmount
    document.getElementById("farmerCost1").innerHTML = 250

    document.getElementById("cursorCount").innerHTML = "Cursor Count: " + btn1.buttonValue

    console.log('%cI Have Loaded!', 'font-size: 40px; color: red');
}