
steps['gum'] = function(log, div) { 
	log("Creating a media object")
	log(code("navigator.webkitGetUserMedia({video: true, audio:true},"));

	// We intentionally use the webkit version here.
	// What are the alternatives? How can we abstract this?
	navigator.webkitGetUserMedia({video: true, audio:true},
		function(stream) {
			log("Done."); 

			var video = $('<video autoplay width="320"></video>');
		    video.attr('src', URL.createObjectURL(stream));
		    div.append(video);

			globals.localMediaStream = stream;
		},
		
		function(failed) {
			log("We failed because: " + failed);
		});
};
