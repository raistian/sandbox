$.fn.axe = function() {
  var editOnRow = function(pId) {

    var suffix = '_data_panel'; // Apex appends this to the end of IRR Static ID.
    var el = $('[id='+pId+suffix+']').find('td a.clickAnywhere').first();
    var elUrl = el.attr('href');

    var elHeader = $('.u-tL[headers="STEPSNAME"').first();
    elHeader.attr('title', 'overriden click');
    elHeader.css('cursor','pointer');
    elHeader.on('click', function() {
      location.href = elUrl;
    });

  }

} // end $.fn.axe

// $('.a-IRR-table tr td.u-tL').text();
