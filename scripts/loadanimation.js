(() => {
// Check if it's the first time the user is visiting
var firstTime = localStorage.getItem("first_time") === null;
const loadScreen = document.querySelector('#loadscreen'); 

function loadSpeedChanger (){
if(firstTime) {
    // Perform actions for the first time load
   alert("Welcome! This is your first visit.");    
    // Set the flag in localStorage to indicate the user has visited
    localStorage.setItem("first_time", "1");
}

else{
    loadScreen.style.animation = "scrolldown 5s linear 1"; 
   // setAttribute("style","animation: scrolldown 5s linear 1;") - issue with this is you'd have to readd all styles plus the changed animations style or else all others would be overwritten
}
}

loadSpeedChanger();

})();