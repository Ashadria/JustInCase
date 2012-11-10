JustInCase.DoctorListPageController = M.Controller.extend({

	list: '',

	initFamily: function() {
		var providers = this.getProviders(zipcode, specialties[0]);
		this.set('list', providers);
	},

	initEmergency: function() {
		var providers = this.getProviders(zipcode, specialties[1]);
	    this.set('list', providers);
	},

	initPediatrics: function() {
		var providers = this.getProviders(zipcode, specialties[2]);
		this.set('list', providers);
	},

	initChiropractic: function() {
		var providers = this.getProviders(zipcode, specialties[3]);
		this.set('list', providers);
	},

	getProviders : function(zipcode, specialty){
		//Make request for Family Medicine Doctors
		return [
		        {
		        	name: 'Dr Smith ',
		        	address: '2301 East Lamar Blvd. Suite 140. City, Arlington'
		        },
		        {
		        	name: 'Dr Brown ',
		        	address: '2301 East Lamar Blvd. Suite 140. City, Arlington'
		        }
	    ];
	},

	listObjectClicked : function(id, nameId){
		debugger;
		//Parse Out the Address
		var initialElementString = window.document.getElementById(id).innerHTML;
		var beginOfAddressElement = initialElementString.search("address");
		var cutSubstring = initialElementString.substring(beginOfAddressElement + 9);
		var endOfAddressElement = cutSubstring.search("<");
		doctorAddress = cutSubstring.substring(0,endOfAddressElement);

		//Parse Out the Name
		var beginOfRedListItemLabelElement = initialElementString.search("redListItemLabel");
		var cutSubstring = initialElementString.substring(beginOfRedListItemLabelElement + 18);
		var endOfRedListItemLabelAddressElement = cutSubstring.search("<");
		doctorName = cutSubstring.substring(0,endOfRedListItemLabelAddressElement);


		console.log('' + window.document.getElementById(id).innerHTML);
    	this.switchToPage('map', M.TRANSITION.SLIDE);
    }
});