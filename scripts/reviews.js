$(document).ready(function() {
    // Initialize DataTable with fuzzy search options and other configurations
    var table = $('#mytable').DataTable({ 
        fuzzySearch: { toggleSmart: false },
        "columnDefs": [
                    {
                        "targets": [2, 3], // Third and Fourth columns are not searchable
                        "searchable": false
                    }
                ],
    });


    const AtoZ = document.querySelector('.dt-column-order');

    AtoZ.setAttribute("id","id-override-dt-column-order");



    // Handle filtering by column using dropdown menu
    var uniqueValues = [];
    table.column(1).data().unique().sort().each(function(d) {
        uniqueValues.push(d);
    });

    $('#columnFilter').empty().append('<option value="">All</option>'); // Clear existing options
    uniqueValues.forEach(function(value) {
        $('#columnFilter').append('<option value="'+value+'">'+value+'</option>');
    });

    $('#columnFilter').on('change', function() {
        var selectedValue = $(this).val();
        if (selectedValue) {
            table.column(1).search('^' + selectedValue + '$', true, false).draw();
        } else {
            table.column(1).search('').draw();
        }
    });

    // Toggle custom sorting on and off - recently featured button
    $('#alpha-toggle').on('change', function() {
        if (this.checked) {
            table.order([2, 'desc']).draw();
        } else {
            table.order([0, 'asc']).draw();
        }
    });

});


(() => {

//IMAGE SCROLL ANIMATION
window.addEventListener('scroll', function() {
   // var scrollPosition = window.scrollY;
    
    var imageWrappers = document.querySelectorAll('.list-background-img');

    imageWrappers.forEach(function(imageWrapper) {
        // Get the bounding rectangle of the image wrapper relative to the viewport
        if (window.matchMedia("(max-width: 670px)").matches) {
                    var scrollOffset = imageWrapper.getBoundingClientRect().top /8 +50;
                  }
                  if (window.matchMedia("(min-width: 671px) and (max-width: 1000px)").matches) {
                    var scrollOffset = imageWrapper.getBoundingClientRect().top /8 +100;
                  }
                  if (window.matchMedia("(min-width: 1001px) and (max-width: 1800px)").matches) {
                    var scrollOffset = imageWrapper.getBoundingClientRect().top /8 +180;
                  }
                  if (window.matchMedia("(min-width: 1801px) and (max-width: 2600px)").matches) {
                    var scrollOffset = imageWrapper.getBoundingClientRect().top /8 +300;
                  }
                  if (window.matchMedia("(min-width: 2601px)").matches) {
                    var scrollOffset = imageWrapper.getBoundingClientRect().top /8 +500;
                  }
        
        imageWrapper.style.top = '-' + scrollOffset + 'px';
    });
});


  

})();

