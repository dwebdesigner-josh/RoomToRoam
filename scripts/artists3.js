(() => {
    const AtoZ = document.querySelector('.dt-column-order');

    function assignID(){
    AtoZ.setAttribute("id","id-override-dt-column-order");

  }

  $(document).ready(function(){assignID();});
//THIS DOESNT WORK BECAUSE ARTISTS 2 ALREADY HAS A DOCUMENT READY FUNCTION HAPPENING -  so to fix I moved:
   // const AtoZ = document.querySelector('.dt-column-order');
  //  AtoZ.setAttribute("id","id-override-dt-column-order");
//inside that document ready function



//featured artist details button

  const button = document.querySelector('.artist-continue-link');
  const artistDetails = document.querySelector('.artist-details');
  const expandArrow = document.querySelector('.img-expand-arrow');
  let expanded = false;

  function expand() {
      if (!expanded) {
          expanded = true;
          artistDetails.setAttribute("aria-expanded", "true");
          expandArrow.setAttribute("src", "/RoomToRoam/images/expandarrowup.png");
      } else {
          expanded = false;
          artistDetails.setAttribute("aria-expanded", "false");
          expandArrow.setAttribute("src", "/RoomToRoam/images/expandarrowdown.png");
      }
  }


  button.addEventListener('click', expand);
  button.addEventListener('keydown', function(event) {
      // Check if the key pressed is Enter (key code 13)
      if (event.key === 'Enter' || event.keyCode === 13) {
          expand();
      }
  });

})();
