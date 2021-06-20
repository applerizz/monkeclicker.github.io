import btn from './btnexport.js'

async function getGameName() {
    const response = await fetch('./json/config.json')
    const gameName = await response.json()
    const clickName = gameName.gameName

    document.getElementById("myGame").innerHTML = "&nbsp;" + clickName
}
getGameName()


let btn1 = new btn(0, 1)
document.getElementById("cursorImage").addEventListener('click', btn1.btnPressed)
document.getElementById("upgrade1").addEventListener('click', btn1.upgrade1)
document.getElementById("upgrade2").addEventListener('click', btn1.upgrade2)

window.onload = function () {
    if (btn1.buttonValue == 0) {
        btn1.cursorCount()
    }

    console.log('%cI Have Loaded!', 'font-size: 40px; color: red');
}