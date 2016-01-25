
steps['rcv-ice'] = function(log, div) { 
	var jsonICE = prompt("Please enter the ICE candidate");

	log("Creating ICE...");
	log(code("iceCandidate = new RTCIceCandidate({sdpMLineIndex:ice.sdpMLineIndex, candidate: ice.candidate});"));
	log(code("pc.addIceCandidate(iceCandidate, function(..."));

	var ice, iceCandidate;
	var anArray = jsonICE.split('{');
	var successes = 0;
	for(var i=0;i<anArray.length;++i) {
		anArray[i] = '{' + anArray[i];

		try {
			ice = JSON.parse(anArray[i]);
			iceCandidate = new RTCIceCandidate({sdpMLineIndex:ice.sdpMLineIndex, candidate: ice.candidate});
		
			globals.pc.addIceCandidate(iceCandidate,
				function() {
					++successes;
					log("Managed to add " + successes + " of " + anArray.length + " candidates");
				
				}, function(error) {
					log("Error adding ICE candidate: " + error)
				}
			);
		} catch (e) {
			log("Error processing ICE candidate: " + e)
		}
	}
};
