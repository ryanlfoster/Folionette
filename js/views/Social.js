define(['jquery','underscore','backbone', 'js/Folionette',
'tpl!templates/socialItemView.tmpl', 'tpl!templates/socialListView.tmpl', 'marionette'],
 function( $, _, Backbone, App, socialItemView, socialListView){
	var Views={};

	//Item View
	Views.ItemView = Marionette.ItemView.extend({
		tagName: 'li',
		template: socialItemView,

		ui: {
			view: '.view',
			details: '.details'
		},

		events : {
			'click .show-details': 'showDetails',
		},

		showDetails: function(){
			this.ui.details.toggle();
		}
	});

	// Item List View

	Views.ListView = Backbone.Marionette.CompositeView.extend({
		template: socialListView,
		itemView: Views.ItemView,
		itemViewContainer: '#social-list',

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
