m_require('app/views/FamilyDoctorListPageTemplate.js');
JustInCase.FamilyDoctorListPage = M.PageView.design({

	childViews: 'header content',

	events: {
        pageshow: {
            target: JustInCase.FamilyDoctorListPageController,
            action: 'init'
        }
    },

    header: M.ToolbarView.design({
        value: 'Family Doctor locations',
        showBackButton: YES
    }),

    content: M.PaginationView.design({

    	listItemTemplateView: JustInCase.FamilyDoctorListPageTemplate,
    	contentBinding: {
            target: JustInCase.FamilyDoctorListPageController,
            property: 'list'
        },
        itemsPerPage: 10,
        idName: 'objectID'
    })
});