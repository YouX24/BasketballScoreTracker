let homePoints = 0
let awayPoints = 0
let homePointEl = document.getElementById("home-points")
let awayPointEl = document.getElementById("away-points")

function addOneHome() {
    homePoints++
    homePointEl.textContent = homePoints
}

function addTwoHome() {
    homePoints += 2
    homePointEl.textContent = homePoints
}

function addThreeHome() {
    homePoints += 3
    homePointEl.textContent = homePoints
}

function addOneAway() {
    awayPoints++
    awayPointEl.textContent = awayPoints
}

function addTwoAway() {
    awayPoints += 2
    awayPointEl.textContent = awayPoints
}

function addThreeAway() {
    awayPoints += 3
    awayPointEl.textContent = awayPoints
}

function resetPoints() {
    homePoints = 0
    awayPoints = 0
    homePointEl.textContent = homePoints
    awayPointEl.textContent = awayPoints
}