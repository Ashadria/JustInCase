JustInCase.ApplicationController = M.Controller.extend({

    items: null,

    events: [],

    init: function() {
        var items = [{
            icon: 'theme/images/icon_settings.png',
            label: 'Family',
            value: 'family',
            events: {
                tap: {
                    target: this,
                    action: 'goToFamilyDoctorPage'
                }
            }
        },
        {
            icon: 'theme/images/icon_edit.png',
            label: 'Emergency',
            value: 'emergency',
            events: {
                tap: {
                    target: this,
                    action: 'goToEmergencyMedicinePage'
                }
            }
        },
        {
            icon: 'theme/images/icon_wifi.png',
            label: 'Pediatrics',
            value: 'pediatrics',
            events: {
                tap: {
                    target: this,
                    action: 'goToPediatricsPage'
                }
            }
        },
            {
            icon: 'theme/images/icon_clock.png',
            label: 'Chiropractic',
            value: 'chiropractic',
            events: {
                tap: {
                    target: this,
                    action: 'goToChiropracticPage'
                }
            }
        },
        {
            icon: 'theme/images/icon_home.png',
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

    goToFamilyDoctorPage: function() {
    	this.switchToPage('familyDoctor', M.TRANSITION.SLIDE);
    },

    goToEmergencyMedicinePage: function () {
    	this.switchToPage('emergencyMedicine', M.TRANSITION.SLIDE);
    },

    goToPediatricsPage: function () {
    	this.switchToPage('pediatrics', M.TRANSITION.SLIDE);
    },

    goToChiropracticPage: function () {
    	this.switchToPage('chiropractic', M.TRANSITION.SLIDE);
    },

    goToOtherPage: function () {
    	this.switchToPage('other', M.TRANSITION.SLIDE);
    },

    listObjectClicked : function(id, nameId){
        console.log('you clicked on the list item with the DOM id:', id, 'and has the name', nameId);
    }
});