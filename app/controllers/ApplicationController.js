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
                    action: 'goToDoctorListPage'
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
                    action: 'goToDoctorListPage'
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
                    action: 'goToDoctorListPage'
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
                    action: 'goToDoctorListPage'
                }
            }
        },
        {
            icon: 'theme/images/mental.png',
            label: 'Mental Health',
            value: 'mental',
            events: {
                tap: {
                    target: this,
                    action: 'goToOtherPage'
                }
            }
        }];

        this.set('items', items);
    },

    goToDoctorListPage: function() {
    	this.switchToPage('doctorListPage', M.TRANSITION.SLIDE);
    },

    goToOtherPage: function () {
    	this.switchToPage('other', M.TRANSITION.SLIDE);
    },

    listObjectClicked : function(id, nameId){
        console.log('you clicked on the list item with the DOM id:', id, 'and has the name', nameId);
    }
});