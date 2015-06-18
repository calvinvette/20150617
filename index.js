//alert("Loaded");

var customers = [ ];

var weasleyCometDB = new Firebase('https://nz8cr24e0r7.firebaseio-demo.com/');


// anonymous callback function
// that gets invoked after the page loads
window.onload = function() {

$.get("http://www.nextgeneducation.com/weasley/customers.json", function(data) {
	customers = data;
	clearTable();
	populateTable();
});

var txtFirstName = document.getElementById("firstName");
var txtLastName = document.getElementById("lastName");
var txtPhoneNumber = document.getElementById("phoneNumber");
var tblCustomers = document.getElementById("tblCustomers");


txtFirstName.value = "Ginny";
txtLastName.value = "Weasley";
txtPhoneNumber.value = "+44 0206 555-1212";

function receiveCustomer(snapshot) {
	if (snapshot.key().indexOf("custs") == 0) {
		var custs = snapshot.val();
		for (var prop in custs) {
			var cust = JSON.parse(custs[prop]);
			addCustomer(cust);
		}
	} // else not a customer record, probably pixels...
}

weasleyCometDB.on("child_added", receiveCustomer);
//weasleyCometDB.on("child_removed", receiveCustomer); // TODO - add delete functionality
weasleyCometDB.on("child_changed", receiveCustomer);

var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function(evt) {
	console.log("You clicked the button!!!");
		/*
	var cust = {
		firstName : txtFirstName.value,
		lastName : txtLastName.value,
		phoneNumber : txtPhoneNumber.value
	};
	*/

	var cust = new Customer(); // Our business domain model
	cust.firstName = txtFirstName.value;
	cust.lastName = txtLastName.value;
	cust.phoneNumber = txtPhoneNumber.value;

	addCustomer(cust);

	var customerKeyName = "custs/" + cust.firstName + ":" + cust.lastName;
	weasleyCometDB.child(customerKeyName).set(JSON.stringify(cust));


	txtFirstName.value = "";
	txtLastName.value = "";
	txtPhoneNumber.value = ""; // reset pn field
	//console.log(customers);
};

function addCustomer(cust) {
	customers.push(cust);
	clearTable();	
	populateTable();
}

function clearTable() {
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
}

function populateTable() {
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
}









};
