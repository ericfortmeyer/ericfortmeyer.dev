function checkoutForm(clientToken) {

	braintree.setup(clientToken, "dropin", {
	container: "bt-dropin",
	id: "my-sample-form",  
	hostedFields: {
	  number: {
		selector: "#card-number"
	  },
	  cvv: {
		selector: "#cvv"
	  },
	  expirationDate: {
		selector: "#expiration-date"
	  },

	} 

	});
}