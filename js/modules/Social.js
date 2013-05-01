//Module that has it's own router and controller
define(['jquery','underscore','backbone', 
	'js/Folionette', 
	'js/models/Social',
  	'js/views/Social',
  	'marionette'], 
function( $, _, Backbone, App, Model, Views){
	Social = {};
	//  Router 
	// ------------------------------
	Social.Router = Backbone.Marionette.AppRouter.extend({
		
		initialize: function(options){
      		this.controller = options.controller;
    	},
		routes: {
			'social': 'highlight'
		},
		showSocial: function(){
			this.controller.showChannelList();
		},
		highlight: function(){
			this.controller.highlight();
		}
	});

	Social.Controller = Backbone.Marionette.Controller.extend({

		initialize: function(options){
      		this.region = options.region;
    	},
    	
		start: function(){
			this.channelList = new Model.ChannelList();
			this.showChannelList();
			this.channelList.fetch();
		},

		showChannelList: function() {
			this.region.show(new Views.ListView({
				collection : this.channelList
			}));
		},
		highlight: function (){
			$('.active').removeClass('active');
			$(this.region.el).addClass('active');

		},
	});

	return Social;

});
