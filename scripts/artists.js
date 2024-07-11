$(document).ready( function () {
    $('#myTable').DataTable();
    var table = $('#mytable').DataTable({ fuzzySearch: { rankColumn: 6, toggleSmart: true } });
} );


