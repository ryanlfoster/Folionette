define(['jquery','underscore','backbone', 'js/Folionette',
'tpl!templates/projectItemView.tmpl', 'tpl!templates/projectListView.tmpl', 'marionette'],
 function( $, _, Backbone, App, projectItemView, projectListView){
	var Views={};
	// Project List Item View
	// -------------------
	//
	// Display an individual project item

	Views.ItemView = Marionette.ItemView.extend({
		tagName: 'li',
		template: projectItemView,

		ui: {
			view: '.view',
			details: '.details'
		},

		events : {
				'click .show-details': 'showDetails',
		},

		initialize: function() {
			

		},

		onRender: function() {


		},

		showDetails: function(){
			this.ui.details.toggle();
		}
	});

	// Item List View
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of activs vs completed items for display.

	Views.ListView = Backbone.Marionette.CompositeView.extend({
		template: projectListView,
		itemView: Views.ItemView,
		itemViewContainer: '#project-list',

		ui: {

		},

		events : {
		
		},
		initialize: function() {

		},

		onRender: function() {


		}

	});
	return Views;

});