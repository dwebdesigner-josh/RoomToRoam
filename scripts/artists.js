//$(document).ready( function () {
  //  $('#mytable').DataTable();
    //var table = $('#mytable').DataTable({ fuzzySearch: { rankColumn: 6, toggleSmart: true } });
//} );

//new DataTable('#mytable');

var table = $('#mytable').DataTable({fuzzySearch: { toggleSmart: false }});

  // Get unique values for the column you want to filter (left to right column numbers: 0 , 1, 2, ...)
  var uniqueValues = [];
  table.column(1).data().unique().sort().each(function(d) {
      uniqueValues.push(d);
  });

  // Populate the dropdown menu with the unique values
  uniqueValues.forEach(function(value) {
      $('#columnFilter').append('<option value="'+value+'">'+value+'</option>');
  });

  // Add event listener to the dropdown menu
  $('#columnFilter').on('change', function() {
      var selectedValue = $(this).val();
      if (selectedValue) {
          table.column(1).search('^' + selectedValue + '$', true, false).draw();
      } else {
          table.column(1).search('').draw();
      }
  });

//artist details button
  (() => {
    const button = document.querySelector('#artist-continue-link');
    const artistDetails = document.querySelector('#featured-artist-details');
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