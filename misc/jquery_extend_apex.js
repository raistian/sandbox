$.fn.axe = function() {
  var editOnRow = function(pId) {

    var suffix = '_data_panel'; // Apex appends this to the end of IRR Static ID.
    var rows = $('[id='+pId+suffix+']').find('td.u-tC').closest('tr');
    
  } // editOnRow

} // $.fn.axe

// $('.a-IRR-table tr td.u-tC').text();
// $('.a-IRR-table tr td.u-tL').text();
