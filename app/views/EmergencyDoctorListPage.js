m_require('app/views/FamilyDoctorListPageTemplate.js');
JustInCase.EmergencyDoctorListPage = M.PageView.design({

	childViews: 'header content',

	events: {
        pageshow: {
            target: JustInCase.DoctorListPageController,
            action: 'initEmergency'
        }
    },

    header: M.ToolbarView.design({
        value: 'FEmergency Medicine',
        showBackButton: YES
    }),

    content: M.PaginationView.design({

    	listItemTemplateView: JustInCase.FamilyDoctorListPageTemplate,
    	contentBinding: {
            target: JustInCase.DoctorListPageController,
            property: 'list'
        },
        itemsPerPage: 10,
        idName: 'objectID'
    })
});