JustInCase.MapController = M.Controller.extend({

    markers: null,

    textFieldValue: null,

    init: function(isFirstTime) {

        if(isFirstTime) {

            var map = M.ViewManager.getView('map', 'map');
            map.initMap({
                callbacks: {
                    success: {
                        target: this,
                        action: function() {
                        	debugger;
                            /* google namespace is loaded, so use places now */
                            var service = new google.maps.places.PlacesService(map.map);
                            var request = {
                                location: new google.maps.LatLng(39.073791, -95.471191),
                                radius: '100',
                                types: ['store']
                            };

                            service.search(request, function(results, status) {
                            	debugger;
                                console.log('STATUS: ' + status);
                                console.log('RESULTS: ' + results);

                                JustInCase.MapController.findDoctorLocation();
                                //Find user's location
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
        }
    },

    findDoctorLocation: function() {
    	debugger;
    	var map = M.ViewManager.getView('map', 'map');

        //Get doctors location
        var doctorMarker = M.MapMarkerView.init({
            location: M.Location.init(39.073791, -95.471191),
            markerAnimationType: M.MAP_MARKER_ANIMATION_DROP,
            showAnnotationOnClick: YES,
            map: map,
            title: 'Doctor Name',
            message: 'This is the address where the doctor works.'
        });
        map.addMarker(doctorMarker);
    },

    findUserLocation: function() {
    	debugger;
        M.LoaderView.show('Looking for you ...');

        M.LocationManager.getLocation(this, this.onSuccess, this.onError, {
            maximumAge: 0,
            timeout: 10000,
            accuracy: 5000
        });
    },

    onSuccess: function(location) {
    	debugger;
        M.LoaderView.hide();

        var map = M.ViewManager.getView('map', 'map');

        var userMarker = M.MapMarkerView.init({
            location: location,
            markerAnimationType: M.MAP_MARKER_ANIMATION_DROP,
            showAnnotationOnClick: YES,
            map: map,
            title: 'User',
            message: 'This is the address where you currently are.'
        });

        map.addMarker(userMarker);

    },

    onError: function(error) {
    	debugger;
        M.LoaderView.hide();

        M.DialogView.alert({
            title: 'Error: ' + error,
            message: 'An error occured while trying to find your location. Please check your service and try again later.'
        });
    }

});