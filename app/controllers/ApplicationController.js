JustInCase.ApplicationController = M.Controller.extend({

    items: null,

    events: [],

    init: function() {
        var items = [{
            icon: 'theme/images/family.png',
            label: 'Family',
            value: 'family',
            events: {
                tap: {
                    target: this,
                    action: 'goToFamilyDoctorListPage'
                }
            }
        },
        {
            icon: 'theme/images/emergency.png',
            label: 'Emergency',
            value: 'emergency',
            events: {
                tap: {
                    target: this,
                    action: 'goToEmergencyDoctorListPage'
                }
            }
        },
        {
            icon: 'theme/images/pediatrics.png',
            label: 'Pediatrics',
            value: 'pediatrics',
            events: {
                tap: {
                    target: this,
                    action: 'goToPediatricsDoctorListPage'
                }
            }
        },
            {
            icon: 'theme/images/chriropractic.png',
            label: 'Chiropractic',
            value: 'chiropractic',
            events: {
                tap: {
                    target: this,
                    action: 'goToChiropracticDoctorListPage'
                }
            }
        },
        {
            icon: 'theme/images/mental.png',
            label: 'Other',
            value: 'other',
            events: {
                tap: {
                    target: this,
                    action: 'goToOtherPage'
                }
            }
        }];

        this.set('items', items);
    },



    goToFamilyDoctorListPage: function() {
    	this.switchToPage('familyDoctorListPage', M.TRANSITION.SLIDE);
    },

    goToEmergencyDoctorListPage: function() {
    	this.switchToPage('emergencyDoctorListPage', M.TRANSITION.SLIDE);
    },

    goToPediatricsDoctorListPage: function() {
    	this.switchToPage('pediatricsDoctorListPage', M.TRANSITION.SLIDE);
    },

    goToChiropracticDoctorListPage: function() {
    	this.switchToPage('chiropracticDoctorListPage', M.TRANSITION.SLIDE);
    },

    goToOtherPage: function () {
    	this.switchToPage('other', M.TRANSITION.SLIDE);
    },

    listObjectClicked : function(id, nameId){
        console.log('you clicked on the list item with the DOM id:', id, 'and has the name', nameId);
    }
});
