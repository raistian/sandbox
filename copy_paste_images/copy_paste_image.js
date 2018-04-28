/**
 * Warn user if they're using browser without API's used by this Page
**/
function checkBrowserAPI() {
	if (! (window.File && window.FileReader && window.Blob) ) {
		alert("This page uses features that your browser does not support.\nConsider using a modern browser like Chrome."); 
	}
}

/**
 * Javascript call to an APEX Application Process
**/
function runAppProcess(pAppProcess) {
	$.post('wwv_flow.show', {
			"p_request"				:	"APPLICATION_PROCESS="+pAppProcess,
			"p_flow_id"				:	$v('pFlowId'),
			"p_flow_step_id"	:	$v('pFlowStepId'),
			"p_instance"			:	$v('pInstance')
  	},
		function() {
			if (event.target.readyState <= 3) {
				console.log("runAppProcess=" + pAppProcess + "- running.");
			} else if (event.target.readyState == 4) {
				console.log("runAppProcess=" + pAppProcess + "- done.");
			}	else {
				console.log("runAppProcess=" + pAppProcess + "- error!");
				return false;
			}
		}
	);
}

/**
 * Handle the Browser's paste event
**/
function pasteHandler(pEvent) {

	for (var i=0;i<pEvent.clipboardData.items.length;i++) {

		// Get clipboard data
		var clipboardItem = pEvent.clipboardData.items[i];
		var clipboardItemType = clipboardItem.type;

		// If it's an image we show it
		if (clipboardItemType.indexOf("image") != -1) {

 			// Get the pasted image and its DOM element
			var blob = clipboardItem.getAsFile();
			var blobUrl = URL.createObjectURL(blob);

			// Set the pasted image using its DOM element
			var pastedImg = $("#theImg");
			pastedImg.attr("src",blobUrl);

			// Read blob for data transfer
			var reader = new FileReader();
			//reader.readAsDataURL(blob);				// base64 data
			//reader.readAsArrayBuffer(blob);		// array buffer
			reader.readAsBinaryString(blob);		// binary data
			reader.onloadend = function() {			// use onloadend, check readyState
				if (reader.readyState == FileReader.DONE) {		// DONE==2
					// Convert to base64 format
					var payLoad = btoa(reader.result);
					//console.log(payLoad);

					// Create APEX clob
					var clobObj = new apex.ajax.clob(
						function(p) {
							if (p.readyState == 1||p.readyState == 2||p.readyState == 3) {
								console.log("CLOB setup start..");
							} else if (p.readyState == 4) {
								console.log("CLOB setup completed.");
								runAppProcess("PROCESS_CLOB");
							}	else {
								return false;
							}
						});
					// Transmit data to APEX clob
					clobObj._set(payLoad);
				}
			}
		} else {
			alert("No image found in Clipboard!");
			//console.log("Not supported: " + type);
		}

	} // for
} // pasteHandler

/**
 * Main
**/
$(document).ready(function() {
	checkBrowserAPI();
	window.addEventListener("paste",pasteHandler);
});


