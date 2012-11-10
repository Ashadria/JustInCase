m_require('app/views/FamilyDoctorListPageTemplate.js');
JustInCase.PediatricsDoctorListPage = M.PageView.design({

	childViews: 'header content',

	events: {
        pageshow: {
            target: JustInCase.DoctorListPageController,
            action: 'initPediatrics'
        }
    },

    header: M.ToolbarView.design({
        value: 'Pediatrics',
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