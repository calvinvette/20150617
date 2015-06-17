//alert("Loaded");

var customers = [ ];

// anonymous callback function
// that gets invoked after the page loads
window.onload = function() {

var txtFirstName = document.getElementById("firstName");
var txtLastName = document.getElementById("lastName");
var txtPhoneNumber = document.getElementById("phoneNumber");
var tblCustomers = document.getElementById("tblCustomers");


txtFirstName.value = "Ginny";
txtLastName.value = "Weasley";
txtPhoneNumber.value = "+44 0206 555-1212";

var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function(evt) {
	console.log("You clicked the button!!!");
	var cust = {
		firstName : txtFirstName.value,
		lastName : txtLastName.value,
		phoneNumber : txtPhoneNumber.value
	};
	customers.push(cust);
	txtFirstName.value = "";
	txtLastName.value = "";
	txtPhoneNumber.value = ""; // reset pn field
	//console.log(customers);

	// Clear out the table except for the header row
	while (tblCustomers.rows.length > 1) {
		tblCustomers.deleteRow(1); // Delete the top data row
		// Delete from the bottom:
		//var lastRow = tblCustomers.rows.length - 1;
		//tblCustomers.deleteRow(lastRow);
	} 

	//for (var rowNum = 1; rowNum < tblCustomers.rows.length; rowNum++) {
	//	tblCustomers.deleteRow(rowNum);
	//}	

	for (var i = 0; i < customers.length; i++) {
		//console.log(customers[i]);
		tblCustomers.innerHTML += 
			"<tr>"
			+ "<td>" + customers[i].firstName + "</td>"
			+ "<td>" + customers[i].lastName + "</td>"
			+ "<td>" + customers[i].phoneNumber + "</td>"
		 	+ "</tr>"
		;
	}
};


};
