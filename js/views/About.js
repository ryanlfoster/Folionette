define(['jquery','underscore','backbone', 'js/Folionette',
 'tpl!templates/aboutItemView.tmpl', 'marionette'],
 function( $, _, Backbone, App, aboutView){
	var Views={};


	Views.ItemView = Marionette.ItemView.extend({

		template: aboutView

	});
	return Views;


});