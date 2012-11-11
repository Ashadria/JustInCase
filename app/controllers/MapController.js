JustInCase.MapController = M.Controller.extend({

    markers: null,

    textFieldValue: null,

    createMap: function(isFirstTime) {
        if(isFirstTime) {
            var map = M.ViewManager.getView('map', 'map');
            map.initMap({
                callbacks: {
                    success: {
                        target: this,
                        action: function() {
                            /* google namespace is loaded, so use places now */
                            var service = new google.maps.places.PlacesService(map.map);
                            var request = {
                                location: new google.maps.LatLng(39.073791, -95.471191),
                                radius: '100',
                                types: ['store']
                            };

                            service.search(request, function(results, status) {
                                console.log('STATUS: ' + status);
                                console.log('RESULTS: ' + results);

                                JustInCase.MapController.findDoctorLocation();
                                JustInCase.MapController.findUserLocation();

                            });
                        }
                    },
                    error: {
                        target: this,
                        action: function() {
                            console.log('Err');
                        }
                    }
                }
            });
        } else {
        	M.ViewManager.getView('map', 'map').updateMap({
                initialLocation: M.Location.init(39.073791, -95.471191),
                zoomLevel: 10,
                setMarkerAtInitialLocation: NO
            });
        	JustInCase.MapController.findDoctorLocation();
            JustInCase.MapController.findUserLocation();
        }
    },

    findDoctorLocation: function() {
    	var map = M.ViewManager.getView('map', 'map');

        //Get doctors location
        var doctorMarker = M.MapMarkerView.init({
            location: M.Location.init(39.073791, -95.471191),
            markerAnimationType: M.MAP_MARKER_ANIMATION_DROP,
            showAnnotationOnClick: YES,
            map: map,
            title: '' + doctorName,
            message: '' + doctorAddress
        });
        map.addMarker(doctorMarker);
    },

    findUserLocation: function() {
        M.LoaderView.show('Looking for you ...');

        M.LocationManager.getLocation(this, this.onSuccess, this.onError, {
            maximumAge: 0,
            timeout: 10000,
            accuracy: 5000
        });
    },

    onSuccess: function(location) {
        M.LoaderView.hide();

        var map = M.ViewManager.getView('map', 'map');

        var userMarker = M.MapMarkerView.init({
            location: location,
            markerAnimationType: M.MAP_MARKER_ANIMATION_DROP,
            showAnnotationOnClick: YES,
            map: map,
            title: 'User',
            message: 'This is where you currently are.'
        });

        map.addMarker(userMarker);

    },

    onError: function(error) {
        M.LoaderView.hide();

        M.DialogView.alert({
            title: 'Error: ' + error,
            message: 'An error occured while trying to find your location. Please check your service and try again later.'
        });
    }

});