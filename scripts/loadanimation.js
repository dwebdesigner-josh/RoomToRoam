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
}
}

loadSpeedChanger();

})();