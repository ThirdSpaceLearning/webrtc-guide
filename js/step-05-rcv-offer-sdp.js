
steps['rcv-offer-sdp'] = function(log, div) { 
	var jsonSDP = prompt("Please enter the offer SDP");

	log("Creating a sesson description from the offer SDP");
	log(code("remoteSessionDescription = new RTCSessionDescription(remoteSDP)"));
	
	globals.remoteSDP = JSON.parse(jsonSDP);
	globals.remoteSessionDescription = new RTCSessionDescription(globals.remoteSDP);
};
