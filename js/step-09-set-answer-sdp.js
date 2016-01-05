
steps['set-answer-sdp'] = function(log, div) { 

	log("Now set the answer as _our_ local description");
	log(code("pc.setLocalDescription(pc.ourAnswer, function(..."));
		
	globals.pc.setLocalDescription(globals.pc.ourAnswer, function() {
		log("Done.");
		
	}, function(error) {
		log("We failed because: " + error);
	});
};
