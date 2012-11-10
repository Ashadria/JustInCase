JustInCase.FamilyDoctorListPageController = M.Controller.extend({

	list: '',

	init: function() {
		   var providers = this.getProviders(zipcode, doctorType);
	       this.set('list', providers);
	},

	getProviders : function(zipcode, doctorType){
		//Make request for Family Medicine Doctors
		return [
		        {
		        	image: 'icon_clock.png',
		        	name: 'Dr Smith',
		        	address: '2301 East Lamar Blvd. Suite 140. City, Arlington'
		        },
		        {
		        	image: 'icon_clock.png',
		        	name: 'Dr Brown',
		        	address: '2301 East Lamar Blvd. Suite 140. City, Arlington'
		        }
	    ];
	},

	listObjectClicked : function(id, nameId){
    	this.switchToPage('map', M.TRANSITION.SLIDE);
    },

});