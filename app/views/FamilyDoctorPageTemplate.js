JustInCase.FamilyDoctorListTemplate = M.ListItemView.design({

	childViews: 'image name address',

	events: {
        tap: {
            target: JustInCase.FamilyDoctorController,
            action:'listObjectClicked'
        }
    },

    image: M.ImageView.design({
        computedValue: {
            valuePattern: '<%= image %>',
            operation: function(v) {
                return 'theme/images/' + v;
            }
        }
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