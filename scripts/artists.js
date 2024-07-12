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

