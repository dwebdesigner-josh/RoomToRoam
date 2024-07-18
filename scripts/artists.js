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

//TOGGLE RECENTLY FEATURED
    //TODO add function to below to remove any tr's that don't have a date listed in their recently featured td 
    
      // Toggle the custom sorting on and off
      $('#alpha-toggle').on('change', function() {
        if (this.checked) {
          table.order([3, 'natural']).draw();
        } else {
          table.order([3, 'asc']).draw();
        }
      });
    
      // Initially sort the table without this sorting
      table.order([3, 'asc']).draw();
  
  
  (() => {
      const AtoZ = document.querySelector('.dt-column-order');

      function assignID(){
      AtoZ.setAttribute("id","id-override-dt-column-order");

    }

    $(window).on('load', () => {
        assignID();
      });

    })();


//featured artist details button
  (() => {
    const button = document.querySelector('.artist-continue-link');
    const artistDetails = document.querySelector('.artist-details');
    const expandArrow = document.querySelector('.img-expand-arrow');
    let expanded = false;

    function expand() {
        if (!expanded) {
            expanded = true;
            artistDetails.setAttribute("aria-expanded", "true");
            expandArrow.setAttribute("src", "/images/expandarrowup.png");
        } else {
            expanded = false;
            artistDetails.setAttribute("aria-expanded", "false");
            expandArrow.setAttribute("src", "/images/expandarrowdown.png");
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


  (() => {
    // Loop through elements with ids starting with 'td-expand-' 
    const tdExpand = document.querySelectorAll('[id^="td-expand-"]');
    
    //nodelist function - https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach  
    tdExpand.forEach(function(tdExpand) {
            //for later - if id="td-expand-idNumber" , then:
            // const idNumber = parseInt(tdExpand.id.split('-')[2], 10);

            function listExpand(){
                if (tdExpand.getAttribute('aria-expanded') === 'true') {
                    tdExpand.setAttribute('aria-expanded', 'false');
                } else {
                    tdExpand.setAttribute('aria-expanded', 'true');
                }
            }

        tdExpand.addEventListener('click', listExpand);
              
        tdExpand.addEventListener('keydown', function(event) {
            // Check if the key pressed is Enter (key code 13)
            if (event.key === 'Enter' || event.keyCode === 13) {
                listExpand();
            }
        });
    });
  })();