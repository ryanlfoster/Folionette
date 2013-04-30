define(['jquery','underscore','backbone', 'js/Folionette', 'marionette'],
 function( $, _, Backbone, App){
  
	var Social = {};
	//Social Model

	Social.Channel = Backbone.Model.extend({
		
		defaults: {
			name: '',
			description: '',
			link: ''
		},

		initialize: function() {

		}
	});

	// Social Collection
	// ---------------

	Social.ChannelList = Backbone.Collection.extend({
		model: Social.Channel,
		
		url: 'data/social.json'

	});
	return Social;


});
