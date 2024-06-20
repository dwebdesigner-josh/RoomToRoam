(() => {
// Check if it's the first time the user is visiting
var firstTime = localStorage.getItem("first_time") === null;
const loadScreen = document.querySelector('.loadscreen'); 

function loadSpeedChanger (){
if(firstTime) {
    // Perform actions for the first time load 
    // Set the flag in localStorage to indicate the user has visited
    localStorage.setItem("first_time", "1");
}

else{
    loadScreen.setAttribute("id","loadscreen-notfirst");
   // loadScreen.style.animation = "scrolldown 5s linear 1"; - issue with all animation related styles being overwritten as well, so would need to add a bunch of extra code anyway, so maybe just doing the below instead  
   // loadScreen.setAttribute("style","animation: scrolldown 5s linear 1;") - issue with this is you'd have to readd all styles plus the changed animations style or else all others would be overwritten
   // loadScreen.setAttribute("style","width: 100%;height: 100%;background-image: url(/RoomToRoam/images/starV1frame1.png);background-repeat: repeat;  position: absolute;top: 0;transform: translateY(0);z-index: 20;display: flex;justify-content: center;animation: scrolldown 10s linear 1;animation-play-state: running;animation-iteration-count: 1;animation-fill-mode: both;")
}
}

loadSpeedChanger();

})();