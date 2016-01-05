
steps['offer-sdp'] = function(log, div) { 
	
	log("Creating offer SDP");

	var constraints =  { 'mandatory': { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } };
	log(code("constraints = " + JSON.stringify(constraints)));
	
	log(code("pc.createOffer(function(...), function(...), constraints"));
	globals.pc.createOffer(function (sdp) {
		log("rtc.pc : createOffer - Offer created...");

		globals.pc.setLocalDescription(sdp);
		globals.localSDP = sdp;
		div.append(code(JSON.stringify(sdp)));
		log("Done.");

	}, function(error) {
		log("We failed because: " + error);
	}, constraints);
};
