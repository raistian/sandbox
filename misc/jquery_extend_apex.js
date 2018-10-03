$.fn.axe = function() {

  var editOnRow = function(pId) {

    var suffix = '_data_panel'; // Apex appends this to the end of IRR Static ID.
    var rows = $('[id='+pId+suffix+']').find('td.u-tC').closest('tr');
    rows.each(function(i,row) {
      $(row).find('td.u-tL').each(function(j,col) {
        console.log( $(col).text() );
        $(col).attr('title', 'overriden click').css('cursor','pointer');
      });
    });
  } // editOnRow

} // $.fn.axe

// $('.a-IRR-table tr td.u-tC').text();
// $('.a-IRR-table tr td.u-tL').text();
