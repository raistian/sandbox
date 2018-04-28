// =============================================================================
// BOOM
// =============================================================================
$('#F4000_P4311_USE_CACHE_BEFORE_DEFAULT').val( 'YES' );
apex.submit('GET_NEXT_ID');


// =============================================================================
// LIBRARY
// =============================================================================

// Set Label from Page Item Name
$('#F4000_P4311_PROMPT').val( $('#F4000_P4311_NAME').val().substring(3) );

// Set Label Alignment
$('#P4311_LABEL_ALIGNMENT').val( 'LEFT-CENTER' );

// Set Element Alignment
$('#P4311_FIELD_ALIGNMENT').val( 'LEFT-CENTER' );

// Set Source Used
$('#F4000_P4311_USE_CACHE_BEFORE_DEFAULT').val( 'YES' );

// Set Source Type
$('#F4000_P4311_SOURCE_TYPE').val( 'STATIC' );

// Set Source Value
$('#F4000_P4311_SOURCE').text( '' );

// Submit and go to Next Item
apex.submit('GET_NEXT_ID');
