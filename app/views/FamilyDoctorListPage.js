m_require('app/views/FamilyDoctorListPageTemplate.js');
JustInCase.FamilyDoctorListPage = M.PageView.design({

	childViews: 'header content',

	events: {
        pageshow: {
            target: JustInCase.DoctorListPageController,
            action: 'initFamily'
        }
    },

    header: M.ToolbarView.design({
        value: 'Family Medicine',
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