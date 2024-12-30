let homeScore=0
let guestScore=0
let homeScoreEl=document.getElementById("home-el")
let guestScoreEl=document.getElementById("guest-el")

function increment(team,points){
    if (team==="home"){
        homeScore += points
        homeScoreEl.textContent = homeScore
    }
    else if (team==="guest"){
        guestScore += points
        guestScoreEl.textContent = guestScore
    }
    updateLeader()
}

function updateLeader(){
    if (homeScore>guestScore){
        guestScoreEl.classList.remove("leader")
        homeScoreEl.classList.add("leader")  
    }
    else if (guestScore>homeScore){
        homeScoreEl.classList.remove("leader")
        guestScoreEl.classList.add("leader")
    }
    else{
        guestScoreEl.classList.remove("leader")
        homeScoreEl.classList.remove("leader")
    }
}

function reset(){
    guestScoreEl.classList.remove("leader")
    homeScoreEl.classList.remove("leader")
    homeScore=0
    guestScore=0
    homeScoreEl.textContent=homeScore
    guestScoreEl.textContent=guestScore
}
