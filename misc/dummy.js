var dummy = function(pId) {

  var suffix = '_data_panel'; // Apex appends this to the end of IRR Static ID.
  var el = $('[id='+pId+suffix+']').find('td a.clickAnywhere').first();
  var elUrl = el.attr('href');

  //closest("tr").find("td a.clickAnywhere").attr("href");
  //$("#STEPS_data_panel").find("td a.clickAnywhere").first().text();
  //console.log( el.find("td a.clickAnywhere").first().text() );
  //el.find("td a.clickAnywhere").first().text();
  //var firstRow = el.closest('td a.clickAnywhere');
  //console.log( firstRow.text() );

  var elHeader = $('.u-tL[headers="STEPSNAME"').first();
  elHeader.attr('title', 'overriden click');
  elHeader.css('cursor','pointer');
  elHeader.on('click', function() {
    location.href = elUrl;
  });

}
