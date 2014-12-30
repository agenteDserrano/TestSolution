

model.Customer.fullName.onGet = function() {
	var date = new Date();
	return this.firstName + " " + this.lastName + " " + date;
};
