//Module that combines router and controller

define(['jquery','underscore','backbone', 
 	'js/models/Skills',
  	'js/Folionette.Layout',
  	'js/views/Skills',
   	'marionette'], 
	function( $, _, Backbone, Skills, Layout, Views){

	
	var SkillList={}; // Skilllist combines router and controller
	
	// SkillList Router 
	// ------------------------------
	SkillList.Router = Backbone.Marionette.AppRouter.extend({
		initialize: function(options){
      		this.controller = options.controller;
    	},
		routes: {
			'filter': 'filterStuff',
			'skills': 'highlight'
		},

		filterStuff: function(){
			this.controller.filterItems();

		},
		showSkills: function(){
			this.controller.start();
		},
		highlight: function(){
			this.controller.highlight();
		}
		
			
	});

	// SkillList Controller (Mediator)
	// ------------------------------
	//
	// Control the workflow and logic that exists at the application
	// level, above the implementation detail of views and models

	SkillList.Controller = Backbone.Marionette.Controller.extend({
		initialize: function(options){
      		this.region = options.region;
      		this.app = options.app;
    	},
		// Start the app by showing the appropriate views
		// and fetching the list of skill items, if there are any
		start: function(){

			this.skillList = new Skills.SkillList();



			this.showSkillList(this.skillList);
			
			this.skillList.fetch();


		},

		showSkillList: function(skillList) {
			this.region.show(new Views.ListView({
				collection : skillList
			}));
			
			
		},
		highlight: function (){
			console.log(this.region);
			$('.active').removeClass('active');
			$(this.region.el).addClass('active');

		},


		// Set the filter to show complete or all items
		filterItems: function() {
			console.log('filtering---------------------------');
		}
	});

	return SkillList;


});