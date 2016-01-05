
steps['rcv-answer-sdp'] = function(log, div) { 
	var jsonSDP = prompt("Please enter the answer SDP");

	log("Creating a sesson description from the answer SDP");
	log(code("remoteSessionDescription = new RTCSessionDescription(remoteSDP)"));
	
	globals.remoteSDP = JSON.parse(jsonSDP);
	globals.remoteSessionDescription = new RTCSessionDescription(globals.remoteSDP);
};
