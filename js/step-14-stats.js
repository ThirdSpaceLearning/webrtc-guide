steps['stats'] = function(log, div) { 
	log("getStats");
	log(code("pc.getStats(function(stats)"));
		
	globals.pc.getStats(function(stats) {
		var full = '';

		stats.result().forEach(function (result) {
            var item = {};
            result.names().forEach(function (name) {
                item[name] = result.stat(name);
            });

            full += result.id + ":" + result.type + "@" + result.timestamp + " :: " + JSON.stringify(item) + '<br>';
        });

        div.html(full);

		log("Done.");
	});
};
