document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');

    //USING THE DEVICE ORIENTATION PLUG IN
    //BASIC GET GPS LOCATION
    //event listener for the Get Gps button, when clicked run testGPS()
    document.getElementById('getgps').addEventListener("click", testGPS);

    //make some variables to store the gps info for use later
    var userLat = 0; //set to 0 initially
    var userLong = 0;

    //use the device-orientation plugin to get the Phone's location, 
    //run onSuccess() function when location retreived. Run onError() function if fails
    //https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-orientation/index.html
    function testGPS() {
	  navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge: 3600000, timeout: 5000, enableHighAccuracy: true}); 
	}

    // onSuccess Callback
	// This passes a Position object into the function, which contains the current GPS coordinates
	function onSuccess(position) {
		//display the co ordinates
	    document.getElementById('gpsresult').innerHTML = position.coords.latitude +','+ position.coords.longitude;
	    //set the variables with the latitude and longtitude for use later
	    userLat = position.coords.latitude;
	    userLong = position.coords.longitude;
	    //draw the google map with user position - see the drawMap function below
	    drawMap(userLat, userLong);
	};

	// onError Callback receives a PositionError object
	function onError(error) {
	    //add some message about lcoation services being turned off
	    var error = ('code: ' + error.code + 'message: ' + error.message);
	    document.getElementById('gpsresult').innerHTML = error;
	    alert("Location Services Unavailable");

	}
	//END BASIC GET THE GPS
	


	//MAKE THE GOOGLE MAP
	//https://developers.google.com/maps/documentation/javascript/geolocation
    function drawMap(latitude, longitude) {
        //var map = app.map;
        var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        
        var pos = {
              lat: latitude,
              lng: longitude
            };
        infoWindow = new google.maps.InfoWindow;
        infoWindow.setPosition(pos);
        infoWindow.setContent('We Found You.');
        infoWindow.open(map);
        map.setCenter(pos);
    }
	//END MAKE THE GOOGLE MAP

});

