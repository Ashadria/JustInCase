var JustInCase  = JustInCase || {};

var zipcode = 0;
var doctorType = 'bla';


/* Page 1 */
JustInCase.InitialDashboard = M.PageView.design({

    childViews: 'header  content',

    events: {
        pageshow: {
            target: JustInCase.ApplicationController,
            action: 'init'
        }
    },

    header: M.ToolbarView.design({
        value: 'Just in Case'
    }),

    content: M.ScrollView.design({
        childViews: 'dashboard',

        dashboard: M.DashboardView.design({

            events: {
                tap: {
                    target: JustInCase.ApplicationController,
                    action: function(id) {
                        this.events.unshift({
                            label: (this.events.length + 1) + ') ' + M.ViewManager.getViewById(id).label + ' (global)'
                        });
                        this.set('events', this.events);
                    }
                }
            },
            itemsPerLine: 2,
            isEditable: NO,
            contentBinding: {
                target: JustInCase.ApplicationController,
                property: 'items'
            }
        })
    })
});

JustInCase.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'initial',

    initial: JustInCase.InitialDashboard,
    familyDoctorListPage: JustInCase.FamilyDoctorListPage,
    emergencyDoctorListPage: JustInCase.EmergencyDoctorListPage,
    pediatricsDoctorListPage: JustInCase.PediatricsDoctorListPage,
    chiropracticDoctorListPage: JustInCase.ChiropracticDoctorListPage,
    other: JustInCase.OtherPage,
    map: JustInCase.MapPage
});