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
		switch(specialty){
			case "Family Medicine":
				return [
				        {
				        	name: 'Simanovsky, Michael',
				        	address: '9150 E 41st Ter Kansas City, MO 64133'
				        },
				        {
				        	name: 'Colliton, William',
				        	address: '2301 Holmes St Primary Office Ste 350456 Kansas City, MO 64108'
				        },
				        {
				        	name: 'Barnett, Angela',
				        	address: '2301 Holmes St Ste 800 Kansas City, MO 64108'
				        },
				        {
				        	name: 'Voss, Laura',
				        	address: '2301 Holmes St Ste 800 Kansas City, MO 64108'
				        },
				        {
				        	name: 'Kaiser, Scott',
				        	address: '2300 Main St Ste 910 Kansas City, MO 64108'
				        },
				        {
				        	name: 'Dasta, Susan',
				        	address: '304 Delaware St Kansas City, MO 64105'
				        },
				        {
				        	name: 'Mesa, Stephen',
				        	address: '4419 S Crysler Ave Primary Office Ste 082084 Independence, MO 64055'
				        },
				        {
				        	name: 'Brown, Robert',
				        	address: '2025 Swift Ave North Kansas City, MO 64116'
				        },
				        {
				        	name: 'Wright, Gill',
				        	address: '2025 Swift Ave North Kansas City, MO 64116'
				        },
				        {
				        	name: 'Bybee, Kevin',
				        	address: '4330 Wornall Rd Ste 2000 Kansas City, MO 64111'
				        },
				        {
				        	name: 'Weaver, Marsha',
				        	address: '4323 Wornall Rd Peet Ctr Kansas City, MO 64111'
				        },
				        {
				        	name: 'Williams, Linnea',
				        	address: '4620 J C Nichols Pky Ste 405 Kansas City, MO 64112'
				        }
			    ];
			case "Emergency Medicine":
				return [
				        {
				        	name: 'Voss, Laura',
				        	address: '2301 Holmes St Primary Office Ste 350456 Kansas City, MO 64108'
				        },
				        {
				        	name: 'Thomas, Kenneth',
				        	address: '2301 Holmes St Ste 800 Kansas City, MO 64108'
				        },
				        {
				        	name: 'Kaiser, Scott',
				        	address: '2300 Main St Ste 910 Kansas City, MO 64108'
				        },
				        {
				        	name: 'Bybee, Kevin',
				        	address: '4330 Wornall Rd Ste 2000 Kansas City, MO 64111'
				        },
				        {
				        	name: 'Williams, Linnea',
				        	address: '4620 J C Nichols Pky Ste 405 Kansas City, MO 64112'
				        }
			    ];
			case "Pediatrics":
				return [
				        {
				        	name: 'Colliton, William',
				        	address: '2301 Holmes St Primary Office Ste 350456 Kansas City, MO 64108'
				        },
				        {
				        	name: 'Thomas, Kenneth',
				        	address: '2301 Holmes St Ste 800 Kansas City, MO 64108'
				        }
			    ];
			case "Chiropractic Medicine":
				return [
				        {
				        	name: '',
				        	address: ''
				        },
				        {
				        	name: '',
				        	address: ''
				        }
			    ];
		}
	},

	listObjectClicked : function(id, nameId){
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