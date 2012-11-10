JustInCase.DoctorListPageController = M.Controller.extend({

	list: '',

	init: function() {
	       this.set('list',
	    		   [
	    		    {
	    		    	image: 'icon_clock.png',
	    		    	name: 'Dr Smith',
	    		    	address: '2301 East Lamar Blvd. Suite 140. City, Arlington'
	    		    },
	    		    {
	    		    	name: 'Dr Doe'
	    		    },
	                {
	    		    	name: 'Dr Brown'
	                },
	                {
	                	name: 'Dr Black'
	                }
	                ]);
	},

	listObjectClicked : function(id, nameId){
    	this.switchToPage('map', M.TRANSITION.SLIDE);
    }
});