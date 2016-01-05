
steps['local-set-remote-description'] = function(log, div) { 
	log(code("pc.setRemoteDescription(remoteSessionDescription, function(..."));

	globals.pc.setRemoteDescription(globals.remoteSessionDescription,
		function() {
			log("Done.");
			
		}, function(error) {
			log("We failed because: " + error);
		}
	);
};
