$(document).ready(function(){

var amountInput = $("#amount"),
amountValue = amountInput.attr("value");

$("#upcharge").click(function() {
    amountInput.val(parseInt(amountValue) + 5);
    $("#query_alert").hide();
})

function feeQuery(msg) {
    query_alert = $("#query_alert");
    query_alert.find(".message").text(msg);
    query_alert.find(".no").unbind().click(function() {
        query_alert.hide();
     });
    query_alert.show();
}

feeQuery("Does your vehicle have pet hair or muddy tires?");
})

// function change_value() {
// 	amount.value = parseInt(amount.value) + 5;
// }

function close_alert() {
	$("#query_alert").hide();
}


