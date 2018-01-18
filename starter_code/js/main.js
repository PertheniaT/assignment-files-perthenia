$(document).ready(function() {
	$('#burger').on('click', function(event) {
		event.preventDefault();
		$(this).parent().find('nav').toggleClass('hidden');
	});
});