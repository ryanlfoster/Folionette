define(['jquery','underscore','backbone', 'js/Folionette', 'tpl!templates/header.tmpl', 'tpl!templates/footer.tmpl', 'marionette'], 
function( $, _, Backbone, App, templateHeader, templateFooter){
	var Layout={};
	// Layout Header View
	// ------------------

	Layout.Header = Backbone.Marionette.ItemView.extend({
		
		template: templateHeader,
		ui: {
			listCount: '#skills-number'
		},
		events: {
			
		},
		initialize: function(){
			this.listenTo(this.collection, 'all', this.updateCount, this);
			
		},
		updateCount: function() {
			this.ui.listCount.html(this.collection.length);
			
		}

	});

	// Layout Footer View
	// ------------------

	Layout.Footer = Backbone.Marionette.Layout.extend({
		template: templateFooter,

		ui: {
			
		},
		events: {
			
		},
		initialize: function(){
			
		}
	});
	return Layout;

});