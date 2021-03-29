$(document).ready(function(){

	var amountInput = $('#amount'),
		amountValue = amountInput.attr('value');

	$('#tip-15').click(function() {
		amountInput.val(parseInt(amountValue) + parseInt($(this).attr('value')));
	});

	$('#tip-20').click(function() {
		amountInput.val(parseInt(amountValue) + parseInt($(this).attr('value')));
	});

	$('#tip-25').click(function() {
		amountInput.val(parseInt(amountValue) + parseInt($(this).attr('value')));
	});

});
