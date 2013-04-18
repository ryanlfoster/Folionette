define(['jquery','underscore',  'backbone', 'js/Folionette', 'marionette'], 
function( $, _, Backbone, App){
  			
				
	var About = Backbone.Model.extend({
		defaults: {
			title: '',
			content: ''
		},
		initialiaze: function(){
		
		},
		url: 'data/about.json'
	}); 
	console.log(About);
	return About;
});
