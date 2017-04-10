# phonegap-gps-map
This is a basic phonegap application that is ready for testing and further development.
Note it does not contain a config.xml file.
This application checks the device gps and displays the location on a google map.

How to use
----------
Create a new phonegap project using Phonegap cli or desktop app 
Replace the www directory with this repository.

More information
----------
This repository differs from the standard “hello world” application by rewriting a simpler event handler that binds any custom JavaScript functions to the status of the mobile device (deviceready).

The relevant code lives in www/js/index.js.

The application uses the device orientation plug in to retrieve gps co-ordinates.
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-orientation/index.html

It then uses the Google Map API to plot the retrieved location on a map.

Note that this application requires an Google Map API key to work. This should be added in the script tags at the bottom of index.html 
```
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY-HERE"></script>

```

Code example
------------

A example function to retrieve gps co-ordinates :
```
document.addEventListener('deviceready', function() {
    
    function testGPS() {
	  navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge: 3600000, timeout: 5000, enableHighAccuracy: true}); 
	}

    // onSuccess Callback
	// This passes a Position object into the function, which contains the current GPS coordinates
	function onSuccess(position) {
		//display the co ordinates
	    document.getElementById('gpsresult').innerHTML = position.coords.latitude +','+ position.coords.longitude;
	};

	// onError Callback receives a PositionError object
	function onError(error) {
	    //add some message about location services being turned off
	    var error = ('code: ' + error.code + 'message: ' + error.message);
	    document.getElementById('gpsresult').innerHTML = error;
	    alert("Location Services Unavailable");

	}
});
```