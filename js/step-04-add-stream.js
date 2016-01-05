
steps['add-stream'] = function(log, div) { 
	log("Calling add stream");
	log(code("pc.addStream(localMediaStream)"));

	globals.pc.addStream(globals.localMediaStream);

	log("Done");
};
