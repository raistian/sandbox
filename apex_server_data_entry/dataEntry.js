function dataEntry(p_id) {
  $s('P&APP_PAGE_ID._ID', p_id);
  if (p_id == 0) {
    /*
    $s('P&APP_PAGE_ID._TCR_NBR', '');
    $s('P&APP_PAGE_ID._RFC_ESA', '');
    $s('P&APP_PAGE_ID._NDD_VERSION', '');
    $s('P&APP_PAGE_ID._DESIGNER', '');
    $s('P&APP_PAGE_ID._STAGE_OF_COMPLETION', '');
    $s('P&APP_PAGE_ID._CHANGE_DT', '');
    $s('P&APP_PAGE_ID._NDD_ISSUE_DT', '');
    $s('P&APP_PAGE_ID._HFC_ONSITE_CONSTRUCT_DT', '');
    $s('P&APP_PAGE_ID._DROP_DEAD_DATE', '');
    $s('P&APP_PAGE_ID._IMPACTED_STAKEHOLDERS', '');
    $s('P&APP_PAGE_ID._EFFORT_REQUIRED', '');
    $s('P&APP_PAGE_ID._REQUESTOR', '');
    $s('P&APP_PAGE_ID._CHANGE_DESC', '');
    $s('P&APP_PAGE_ID._COMMENTS', '');
    $s('P&APP_PAGE_ID._STATUS', '');
    */
  } else {
    apex.server.process ('P1DataEntrySave', {
        pageItems: '#P&APP_PAGE_ID._ID,#P&APP_PAGE_ID._TCR_NBR,#P&APP_PAGE_ID._RFC_ESA,#P&APP_PAGE_ID._NDD_VERSION,#P&APP_PAGE_ID._DESIGNER,#P&APP_PAGE_ID._STAGE_OF_COMPLETION,#P&APP_PAGE_ID._CHANGE_DT,#P&APP_PAGE_ID._NDD_ISSUE_DT,#P&APP_PAGE_ID._HFC_ONSITE_CONSTRUCT_DT,#P&APP_PAGE_ID._DROP_DEAD_DATE,#P&APP_PAGE_ID._IMPACTED_STAKEHOLDERS'
    }, {
        loadingIndicator: '#dataEntrySaveBtn',
        loadingIndicatorPosition: 'after',
        dataType: 'json',
        success: function() {console.log('apex.server.process success');},
        error: function() {console.log('apex.server.process error');}
    });
  }

  var dialog = $('#dataEntry').dialog({
    //title: 'Technical CR - Details',
    modal: true,
    autoOpen: true,
    width: '700px',
    open: function() {
      $('#P&APP_PAGE_ID._NDD_VERSION').focus();
    }
  });
}

function dataEntrySave() {
  apex.server.process ('P1DataEntrySave', {
        pageItems: '#P&APP_PAGE_ID._ID,#P&APP_PAGE_ID._TCR_NBR,#P&APP_PAGE_ID._RFC_ESA,#P&APP_PAGE_ID._NDD_VERSION,#P&APP_PAGE_ID._DESIGNER,#P&APP_PAGE_ID._STAGE_OF_COMPLETION,#P&APP_PAGE_ID._CHANGE_DT,#P&APP_PAGE_ID._NDD_ISSUE_DT,#P&APP_PAGE_ID._HFC_ONSITE_CONSTRUCT_DT,#P&APP_PAGE_ID._DROP_DEAD_DATE,#P&APP_PAGE_ID._IMPACTED_STAKEHOLDERS'
  }, {
    loadingIndicator: '#dataEntrySaveBtn',
    loadingIndicatorPosition: 'after',
    dataType: 'text',
    success: function(data, status, xhr) {
      console.log('apex.server.process success');
      //console.log(data);
      //console.log(status);
      //console.log(xhr);
      //gReport.search('SEARCH');
      //$('#dataEntry').dialog.close(); // check doco!
    },
    error: function(status) {
      console.log('apex.server.process error');
    }
  });
}
