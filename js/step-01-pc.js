steps['pc'] = function(log, div) { 

	log("Initializing PeerConnection configuration");
	var turnURI = "turn:user@webrtcbook.com";
	var stunURI =  "stun:stun.l.google.com:19302";
	var config = [ {'url' : turnURI}, {'url' : stunURI} ];
	log(code("config = " + JSON.stringify(config)));


	log("Preparing PeerConnection constraints");

	var constraints = { optional: []};
	constraints.optional.push( { 'RtpDataChannels': true } );
	constraints.optional.push( { 'DtlsSrtpKeyAgreement': false } );
	log(code("constraints = " + JSON.stringify(constraints)));


	log("Preparing PC");
	log(code("pc = new webkitRTCPeerConnection({iceServers:config},constraints);"));

	globals.pc = new webkitRTCPeerConnection({iceServers:config},constraints);


	log("Adding handler methods");
	log(code("pc.onicecandidate = function(event) {"));
	globals.pc.onicecandidate = function(event) {
		log("rtc.pc : onicecandidate - Got a new ice candidate...");

		if (event.candidate) {
			div.append(code(JSON.stringify(event.candidate)));
		}
	};

	log(code("pc.onaddstream = function(event) {"));
	globals.pc.onaddstream = function(event) {
		log("rtc.pc : onaddstream - remote user has added a stream");

		var stream = event.stream;
		var video = $('<video autoplay width="320"></video>');
		video.attr('src', URL.createObjectURL(stream));
		div.append(video);

		globals.remoteMediaStream = stream;
	};

	div.append(JSON.stringify(globals.pc));
	
	log("Done!");
};
