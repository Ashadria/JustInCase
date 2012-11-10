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

	getProviders : function(zipcode, specialty){
		//Make request for Family Medicine Doctors
		return [
		        {
		        	image: 'icon_clock.png',
		        	name: 'Dr Smith ' + specialty,
		        	address: '2301 East Lamar Blvd. Suite 140. City, Arlington'
		        },
		        {
		        	image: 'icon_clock.png',
		        	name: 'Dr Brown ' + specialty,
		        	address: '2301 East Lamar Blvd. Suite 140. City, Arlington'
		        }
	    ];
	},

	listObjectClicked : function(id, nameId){
    	this.switchToPage('map', M.TRANSITION.SLIDE);
    }
});