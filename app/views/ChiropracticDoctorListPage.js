m_require('app/views/FamilyDoctorListPageTemplate.js');
JustInCase.ChiropracticDoctorListPage = M.PageView.design({

	childViews: 'header content',

	events: {
        pageshow: {
            target: JustInCase.DoctorListPageController,
            action: 'initChiropractic'
        }
    },

    header: M.ToolbarView.design({
        value: 'Chiropractic Medicine',
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