require.config({
    baseUrl:"",

    // 3rd party script alias names 
    paths:{
        // Core Libraries
        "jquery":"js/lib/jquery",
        "jqueryEasing":"js/lib/jquery.easing.min",
        "underscore":"js/lib/underscore",
        "backbone":"js/lib/backbone",
        "marionette":"js/lib/backbone.marionette",
        "isotope":"js/lib/isotope",


        // Plugins
        "text": "js/lib/text",
        "tpl": "js/lib/tpl"

    },
    shim:{
        // Backbone
        "backbone":{
            // Depends on underscore and jQuery
            "deps":["underscore", "jquery"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
        //Marionette
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            "exports":"Marionette"
        },
        //Isotope
        "isotope":{
            "deps":["jquery"],
            "exports":"Isotope"
        },
        //jqueryEasing
        "jqueryEasing": {
            "deps":["jquery"]
        }

    }
});

// Start Application
require(["js/Folionette", "jquery", "backbone", "marionette", "isotope", "jqueryEasing"],
    function (Folionette, $) {
        window.Folionette = Folionette;
    });
