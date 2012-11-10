DashboardSample.TemplateView = M.ListItemView.design({
    childViews: 'string',
    isSelectable: YES,
    string: M.LabelView.design({
        valuePattern: '<%= label %>'
    })
});