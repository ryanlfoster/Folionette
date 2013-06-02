define(['jquery','underscore','backbone', 
'tpl!templates/sectionItemView.tmpl', 'tpl!templates/sectionListView.tmpl', 'marionette'],
 function( $, _, Backbone,  sectionItemView, sectionListView){
	var Views={};
	// Project List Item View
	// -------------------
	//
	// Display an individual project item

	Views.SectionView = Marionette.ItemView.extend({
		tagName: 'li',
                className: 'span3 section-block',
		template: sectionItemView,

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
                       //slide the section up
                       $(this.el).slideUp();
                       //slide the section that was main before down
                       $('.section-block:hidden').slideDown();
                       
                       //start the controller for the section
                       Folionette[this.model.attributes.module+'Controller'].start();
			//this.ui.details.toggle();
		}
	});

	// Item List View
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of activs vs completed items for display.

	Views.ListView = Backbone.Marionette.CompositeView.extend({
		template: sectionListView,
		itemView: Views.SectionView,
		itemViewContainer: '#section-list',

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