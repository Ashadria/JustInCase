JustInCase.MapPage = M.PageView.design({

	events: {
        pageshow: {
            target: JustInCase.MapController,
            action: 'createMap'
        }
    },

        childViews: 'header map',

        header: M.ToolbarView.design({
            value: 'Requested Location',
            showBackButton: YES
        }),

        map: M.MapView.design({

        	cssClass: 'map',
            isInset: YES,
            showMapTypeControl: YES,
            showStreetViewControl: NO,
            showNavigationControl: YES,
            mapType: M.MAP_ROADMAP,
            zoomLevel: 11,
            isDraggable: YES,

            initialLocation: M.Location.extend({
                latitude: 39.114171,
                longitude: -94.627457
            }),
            callbacks: {
                error: {
                    target: JustInCase.MapController,
                    action: 'connectionError'
                }
            },

            contentBinding: {
                target: JustInCase.MapController,
                property: 'markers'
            }

        })
    });