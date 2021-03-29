/*
*
*	I use this script to impress the user with animations animations and transfer the value of user inputs like quantity and price.
*
*	Pioneer Cleaning
*	January 2017©
*
*	-Eric Fortmeyer
*
*	Whoot! whoot!
*
*	obviously jQuery required
*/



$(document).ready(function(){
	
	var priceList = [],
		price = 0,
		quantity = {},
		string = "",
		cart = document.getElementById('cart'),
		amount = $('#amount'),
		cart_quantity = $('#cart_quantity'),
		select = $('#select'),
		info = $('#info'),
		image = $('#image'),
		overlay = $('#overlay'),
		warning = $('#warning'),
		myDivs = [$('#first'),$('#second'),$('#third'),$('#last')],
		isMobile = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 798px)"),
		fadeWarning = function() {warning.fadeOut(4000)},
		fadeImage = function(){ image.fadeIn(1000)},
		fadeCart = function(){ $("#cart").fadeIn(500)},
		fadeOverlay = function(){overlay.fadeIn(1000)},
		fadeCertificates = function(){
								setTimeout(function () {myDivs[0].fadeIn(1000)},300);
								setTimeout(function () {myDivs[1].fadeIn(1000)},800);
								setTimeout(function () {myDivs[2].fadeIn(1000)},1500);
								setTimeout(function () {myDivs[3].fadeIn(1000)},2000);
							}
	
		priceList = [35,50,80,150];

/*	
	
 	This function turns the value and quantity of the gift certificates into a $_POST variable and show the user the value in a "cart"

*/	
	function changeCart(price,quantity,string) {setTimeout(function () {
		amount.val(price);
		cart_quantity.val(quantity);
		cart.innerHTML = string;
	},3500)};

/*

	 This function reveals a form for user information

*/
	function showForm (){setTimeout(function () {
		select.fadeOut(500);
		image.fadeOut(500);
		overlay.fadeOut(500);
		info.fadeIn(1000);
	},3000)};

/*

	 This function is self-explanatory  : )

*/	
	function showSpinner (){
		fadeImage();
		fadeOverlay();
	}

/*
	
 	Animations when page is loading

*/	

warning.fadeIn(1000);
fadeWarning();

if(!isMobile.matches) {
	image.fadeIn(1500);
	fadeCart();
	fadeCertificates();
	image.fadeOut(2000);
}

/*	

 	These functions set the cart and create a spin animation

*/	
	$('#first option').click(function() { 

		quantity = $(this).attr('value');
		price = priceList[0];
		string = "Gift certificates in cart: " + quantity + " at $" + price + " each.<br><br><h2>Total: $" + (quantity * price) + "</h2>";
		changeCart(price,quantity,string);
		showSpinner();
		showForm();
	})

	$('#second option').click(function() { 

		quantity= $(this).attr('value');
		price = priceList[1];
		string = "Gift certificates in cart: " + quantity + " at $" + price + " each.<br><br><h2>Total: $" + (quantity * price) + "</h2>";
		changeCart(price,quantity,string);
		showSpinner();
		showForm();
	})

	$('#third option').click(function() { 

		quantity= $(this).attr('value');
		price = priceList[2];
		string = "Gift certificates in cart: " + quantity + " at $" + price + " each.<br><br><h2>Total: $" + (quantity * price) + "</h2>";
		changeCart(price,quantity,string);
		showSpinner();
		showForm();
	})

	$('#last option').click(function() { 

		quantity= $(this).attr('value');
		price = priceList[3];
		string = "Gift certificates in cart: " + quantity + " at $" + price + " each.<br><br><h2>Total: $" + (quantity * price) + "</h2>";
		changeCart(price,quantity,string);
		showSpinner();
		showForm();
	})

})




