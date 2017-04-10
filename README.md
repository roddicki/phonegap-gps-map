# phonegap-gps-map
This is a basic phonegap application that is ready for testing and further development.
Note it does not contain a config.xml file
This application checks the device gps and displays the location on a google map.

How to use
----------
Create a new phonegap project using Phonegap cli or desktop app 
Replace the www directory with this repository.

More information
----------
This repository differs from the standard “hello world” application by rewriting a simpler event handler that binds any custom JavaScript functions to the status of the mobile device (deviceready).

The relevant code live in www/js/index.js.

Code example
------------
The event Listener:
```
document.addEventListener('deviceready', function() {
    
});
```

An example function:
```
document.addEventListener('deviceready', function() {
    
    //example function
    function changeSomeText() {
        document.getElementById('change').innerHTML = "this text was changed by javascript";
    }

    //run the example function
    changeSomeText();
});
```