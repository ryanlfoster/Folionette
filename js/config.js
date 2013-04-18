require.config({
    baseUrl:"",

    // 3rd party script alias names 
    paths:{
        // Core Libraries
        "jquery":"js/lib/jquery",
        "underscore":"js/lib/underscore",
        "backbone":"js/lib/backbone",
        "marionette":"js/lib/backbone.marionette",


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
        }

    }
});

// Start Application
require(["js/Folionette", "jquery", "backbone", "marionette"],
    function (Folionette, $) {
        window.Folionette = Folionette;
    });
