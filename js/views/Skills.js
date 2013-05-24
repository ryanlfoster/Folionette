define(['jquery','underscore','backbone', 'js/Folionette',
 'tpl!templates/skillItemView.tmpl',  'tpl!templates/skillListView.tmpl',   'marionette'],
 function( $, _, Backbone, App, skillItemView, skillListView){
	var Views={};
	// Skill List Item View
	// -------------------
	//
	// Display an individual skill item


	Views.ItemView = Marionette.ItemView.extend({
		tagName: 'li',
			template: skillItemView,

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
		template: skillListView,
			itemView: Views.ItemView,
			itemViewContainer: '#skill-list',

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

			expand: function() {
				if(this.ui.expand.html()!='Close') {
					this.ui.expand.html('Close');
				} else {
					this.ui.expand.html('Expand');
				}
				
				$('#column2').toggleClass('expanded');
			}
		

	});
	return Views;


});