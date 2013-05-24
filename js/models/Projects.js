define(['jquery','underscore','backbone', 'js/Folionette', 'marionette'],
 function( $, _, Backbone, App){
  
	var Projects = {};
	// Todo Model
	// ----------

	Projects.Project = Backbone.Model.extend({
		
		defaults: {
			name: '',
			description: '',
			level: 0,
			skills: []
		},

		initialize: function() {

		}
	});

	// Project Collection
	// ---------------

	Projects.ProjectList = Backbone.Collection.extend({
		model: Projects.Project,
		
		url: 'data/projects.json'

	});
	return Projects;


});