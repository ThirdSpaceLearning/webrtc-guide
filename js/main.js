var steps = [];
var globals = {};

$(document).ready(function() {
	var ver = $.browser.version.split('.')[0];
	if ('http:' == document.location.protocol && $.browser.chrome && ver >= 47 ) {
		showError("You must use https with this version of Chrome, or downgrade to version 46. <a href='https://" + document.location.href.substr(7) + "'>Try it under https</a>");		
	}
});


function code(txt) {
	return "<div class='code'>" + txt + "</div><br>";
}

function action(widget) {
	var step = widget.getAttribute('data-step');
	var log = $('#log-' + step);
	var outputDiv = $('#out-' + step);

	try {
		steps[step](function(msg) {
			log.append(msg + "<br>");
		}, outputDiv);
	} catch (e) {
		log.append("Exception: " + e.message);
	}


	return false;	
}

function showError(msg) {
	$('#alert-box-error-text').html(msg);
	$('.alert-box.error').show();
}

function onCloseError() {
	$('.alert-box.error').hide("slow");
}

