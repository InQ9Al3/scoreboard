let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score") 

let homeValue = 0
let guestValue = 0

homeScore.textContent = homeValue
guestScore.textContent = guestValue

function homeAdd1() {
    console.log("home 1 clicked")
    homeValue += 1
    homeScore.textContent = homeValue
}

function homeAdd2() {
    homeValue += 2
    homeScore.textContent = homeValue
}

function homeAdd3() {
    homeValue += 3
    homeScore.textContent = homeValue
}

function guestAdd1() {
    guestValue += 1
    guestScore.textContent = guestValue
}

function guestAdd2() {
    guestValue += 2
    guestScore.textContent = guestValue
}

function guestAdd3() {
    guestValue += 3
    guestScore.textContent = guestValue
}

function newGame() {
    guestValue = 0
    homeValue = 0
    homeScore.textContent = homeValue
    guestScore.textContent = guestValue
}

