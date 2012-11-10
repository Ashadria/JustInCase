m_require('app/views/FamilyDoctorPageTemplate.js');
JustInCase.FamilyDoctorPage = M.PageView.design({

	childViews: 'header content',

	events: {
        pageshow: {
            target: JustInCase.FamilyDoctorController,
            action: 'init'
        }
    },

    header: M.ToolbarView.design({
        value: 'Family Doctor locations',
        showBackButton: YES
    }),

    content: M.PaginationView.design({

    	listItemTemplateView: JustInCase.FamilyDoctorListTemplate,
    	contentBinding: {
            target: JustInCase.FamilyDoctorController,
            property: 'list'
        },
        itemsPerPage: 10,
        idName: 'objectID'
    })
});