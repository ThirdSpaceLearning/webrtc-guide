
steps['create-answer-sdp'] = function(log, div) { 
	log("Creating an answer SDP");

	var constraints =  { 'mandatory': { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } };
	log(code("constraints = " + JSON.stringify(constraints)));

	log(code("pc.createAnswer(function(...))"));

	globals.pc.createAnswer( function(localdesc) {
		log("rtc.pc : createAnswer - Answer created...");

		globals.pc.ourAnswer = localdesc;
		div.append(code(JSON.stringify(localdesc)));
		log("Done.");

	}, function(error) {
		log("We failed because: " + error);
	}, constraints); // to maintain consistency in the API, constraints is the last parameter

};
