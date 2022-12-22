let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score") 

homeScore.textContent = 0
guestScore.textContent = 0

function homeAdd1() {
    homeScore.textContent += 1
}

function homeAdd2() {
    homeScore.textContent += 2
}

function homeAdd3() {
    homeScore.textContent += 3
}

function guestAdd1() {
    guestScore.textContent += 1
}

function guestAdd2() {
    guestScore.textContent += 2
}

function guestAdd3() {
    guestScore.textContent += 3
}

