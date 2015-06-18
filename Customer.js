var Customer = function() {

	this.firstName = "";
	this.lastName = "";
	this.phoneNumber = "";
	this.customerId = -1;
	this.toString = function() {
		return "Customer#" + 
			this.customerId + ": " +
			this.firstName + " " +
			this.lastName + "; Ph:" + 
			this.phoneNumber;
	}; 
};


