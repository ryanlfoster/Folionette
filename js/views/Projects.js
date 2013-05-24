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
				'click .show-details': 'showDetails'

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
			expand: '.expand'

		},

		events : {
				'click .expand': 'expand'
		
		},
		initialize: function() {

		},

		onRender: function() {


		},

		expand: function(){
			if(this.ui.expand.html()!='Close') {
				this.ui.expand.html('Close');
			} else {
				this.ui.expand.html('Expand');
			}
				
			$('#column1').toggleClass('expanded');
		}

	});
	return Views;

});