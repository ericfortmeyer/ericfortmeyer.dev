function submit() {
	$(document).ready(function(){
		$('#confirmationSubmitButton').click(function(){

				var testButton = document.getElementById("confirmationSubmitButton");
				var overlay = document.getElementById("formColor");
	
				testButton.value = "loading...";
				testButton.style.color = "blue";
				testButton.style.opacity = "0.6";
				testButton.setAttribute("disabled", true);
				
				overlay.style.opacity = "0.6";
				$('form#confirmation').fadeTo(1900,"0.6");

				// To Display progress bar
				var opts = {
				  lines: 11 // The number of lines to draw
				, length: 24 // The length of each line
				, width: 6 // The line thickness
				, radius: 32 // The radius of the inner circle
				, scale: 1 // Scales overall size of the spinner
				, corners: 1 // Corner roundness (0..1)
				, color: '#000' // #rgb or #rrggbb or array of colors
				, opacity: 0.25 // Opacity of the lines
				, rotate: 0 // The rotation offset
				, direction: 1 // 1: clockwise, -1: counterclockwise
				, speed: 1.8 // Rounds per second
				, trail: 60 // Afterglow percentage
				, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
				, zIndex: 2e9 // The z-index (defaults to 2000000000)
				, className: 'spinner' // The CSS class to assign to the spinner
				, top: '10%' // Top position relative to parent
				, left: '50%' // Left position relative to parent
				, shadow: false // Whether to render a shadow
				, hwaccel: false // Whether to use hardware acceleration
				, position: 'absolute' // Element positioning
				}
				console.log(this);
				var target = document.getElementById('spinner')
				var spinner = new Spinner(opts).spin(target);
				setTimeout(function() {
					$('form#confirmation').submit();
				}, 1500);
				event.preventDefault();
		});

		$('#logOutButton').click(function(){

				var testButton = document.getElementById("logOutButton");
				var overlay = document.getElementById("formColor");
	
				testButton.value = "loading...";
				testButton.style.color = "blue";
				testButton.style.opacity = "0.6";
				testButton.setAttribute("disabled", true);
				
				overlay.style.opacity = "0.6";
				$('form').fadeTo(1900,"0.6");
				console.log(this);
				// To Display progress bar
				var opts = {
				  lines: 11 // The number of lines to draw
				, length: 24 // The length of each line
				, width: 6 // The line thickness
				, radius: 32 // The radius of the inner circle
				, scale: 1 // Scales overall size of the spinner
				, corners: 1 // Corner roundness (0..1)
				, color: '#000' // #rgb or #rrggbb or array of colors
				, opacity: 0.25 // Opacity of the lines
				, rotate: 0 // The rotation offset
				, direction: 1 // 1: clockwise, -1: counterclockwise
				, speed: 1.8 // Rounds per second
				, trail: 60 // Afterglow percentage
				, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
				, zIndex: 2e9 // The z-index (defaults to 2000000000)
				, className: 'spinner' // The CSS class to assign to the spinner
				, top: '10%' // Top position relative to parent
				, left: '50%' // Left position relative to parent
				, shadow: false // Whether to render a shadow
				, hwaccel: false // Whether to use hardware acceleration
				, position: 'absolute' // Element positioning
				}
				var target = document.getElementById('spinner')
				var spinner = new Spinner(opts).spin(target);
				setTimeout(function() {
					$('form#logOutLink').submit();
				}, 1500);
				event.preventDefault();
		});

		
		$('#submitButton').click(function(){

				var testButton = document.getElementById("submitButton");
				var overlay = document.getElementById("formColor");
	
				testButton.value = "loading...";
				testButton.style.color = "blue";
				testButton.style.opacity = "0.6";
				testButton.setAttribute("disabled", true);
				
				overlay.style.opacity = "0.6";
				$('form').fadeTo(1900,"0.6");
				console.log(this);
				// To Display progress bar
				var opts = {
				  lines: 11 // The number of lines to draw
				, length: 24 // The length of each line
				, width: 6 // The line thickness
				, radius: 32 // The radius of the inner circle
				, scale: 1 // Scales overall size of the spinner
				, corners: 1 // Corner roundness (0..1)
				, color: '#000' // #rgb or #rrggbb or array of colors
				, opacity: 0.25 // Opacity of the lines
				, rotate: 0 // The rotation offset
				, direction: 1 // 1: clockwise, -1: counterclockwise
				, speed: 1.8 // Rounds per second
				, trail: 60 // Afterglow percentage
				, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
				, zIndex: 2e9 // The z-index (defaults to 2000000000)
				, className: 'spinner' // The CSS class to assign to the spinner
				, top: '10%' // Top position relative to parent
				, left: '50%' // Left position relative to parent
				, shadow: false // Whether to render a shadow
				, hwaccel: false // Whether to use hardware acceleration
				, position: 'absolute' // Element positioning
				}
				var target = document.getElementById('spinner')
				var spinner = new Spinner(opts).spin(target);
				setTimeout(function() {
					$('form').submit();
				}, 1500);
				event.preventDefault();
		});
	});
}
