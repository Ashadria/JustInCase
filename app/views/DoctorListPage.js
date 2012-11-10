m_require('app/views/DoctorListPageTemplate.js');
JustInCase.DoctorListPage = M.PageView.design({

	childViews: 'header content',

	events: {
        pageshow: {
            target: JustInCase.DoctorListPageController,
            action: 'init'
        }
    },

    header: M.ToolbarView.design({
        value: 'Family Doctor locations',
        showBackButton: YES
    }),

    content: M.PaginationView.design({

    	listItemTemplateView: JustInCase.DoctorListPageTemplate,
    	contentBinding: {
            target: JustInCase.DoctorListPageController,
            property: 'list'
        },
        itemsPerPage: 10,
        idName: 'objectID'
    })
});