//Module that combines router and controller

define(['jquery','underscore','backbone', 
 	'js/models/About',
  	'js/Folionette.Layout',
  	'js/views/About',
   	'marionette'], 
	function( $, _, Backbone, AboutModel, Layout, Views){

	
	var About={}; //Combines router and controller
	
	// SkillList Router 
	// ------------------------------
	About.Router = Backbone.Marionette.AppRouter.extend({
		initialize: function(options){
      		this.controller = options.controller;
    	},
		routes: {
			'about': 'showAbout'
		},

		showAbout: function(){
			this.controller.show();
		}
	
			
	});

	// About Controller (Mediator)

	About.Controller = Backbone.Marionette.Controller.extend({

		initialize: function(options){
      		this.region = options.region;

    	},
    	
		start: function(){

			this.about = new AboutModel();
//			this.show();

			this.about.fetch();
			//this.region.currentView.render();

		},

		show: function() {
			this.view = new Views.ItemView({
				model : this.about
			});
			this.region.show(this.view);
		}
	});

	return About;


});
	

