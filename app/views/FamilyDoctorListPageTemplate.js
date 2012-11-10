JustInCase.FamilyDoctorListPageTemplate = M.ListItemView.design({

	childViews: 'image name address',

	events: {
        tap: {
            target: JustInCase.DoctorListPageController,
            action:'listObjectClicked'
        }
    },

    image: M.ImageView.design({
    	value: 'theme/images/map.png'
    }),

    name: M.LabelView.design({
        isInline: YES,
        computedValue: {
            valuePattern: '<%= name %>',
            operation: function(v) {
                return v + ' ';
            }
        },
        cssClass: 'redListItemLabel'
    }),

    address: M.LabelView.design({

        valuePattern: '<%= address %>',

        cssClass: 'address'

    })
});