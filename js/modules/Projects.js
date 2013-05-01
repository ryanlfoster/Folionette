//Module that has it's own router and controller
define(['jquery','underscore','backbone', 
	'js/Folionette', 
	'js/models/Projects',
  	'js/views/Projects',
  	'marionette'], 
function( $, _, Backbone, App, Projects, Views){
	ProjectList = {};
	//  Router 
	// ------------------------------
	ProjectList.Router = Backbone.Marionette.AppRouter.extend({
		
		initialize: function(options){
      		this.controller = options.controller;
    	},
		routes: {
			'filterprojects': 'filterStuff',
			'projects': 'highlight'
		},

		filterStuff: function(){
			this.controller.filterItems();

		},
		showProjects: function(){
			this.controller.showProjectList();
		},
		highlight: function(){
			this.controller.highlight();
		}
	});



	ProjectList.Controller = Backbone.Marionette.Controller.extend({

		initialize: function(options){
      		this.region = options.region;
    	},
    	
		start: function(){
			this.projectList = new Projects.ProjectList();
			this.showProjectList();
			this.projectList.fetch();
		},

		showProjectList: function() {
			this.region.show(new Views.ListView({
				collection : this.projectList
			}));
		},
		highlight: function (){
			$('.active').removeClass('active');
			$(this.region.el).addClass('active');

		},


		// Set the filter to show filtered items
		filterItems: function() {
			console.log('filtering---------------------------');
		}
	});

	return ProjectList;

});