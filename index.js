let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let countHome = 12;
let countGuest= 5;

function incHomeBy1() {
    countHome += 1;
    homeScoreEl.textContent = countHome;
}
function incHomeBy2() {
    countHome += 2;
    homeScoreEl.textContent = countHome;
}
function incHomeBy3() {
    countHome += 3;
    homeScoreEl.textContent = countHome;
    
}
function incGuestBy1(){
    countGuest += 1;
    guestScoreEl.textContent = countGuest;
}
function incGuestBy2(){
    countGuest += 2;
    guestScoreEl.textContent = countGuest;
}
function incGuestBy3(){
    countGuest += 3;
    guestScoreEl.textContent = countGuest;
}

// var scores = {
//     "home-score-el": 12,
//     "guest-score-el": 5
// }
// function increment(elemnt_id, inc_by) {
//     let scoreElement = document.getElementById(elemnt_id)
//     scores[elemnt_id] = scores[elemnt_id] + inc_by
//     scoreElement.textContent = scores[elemnt_id]
// }
