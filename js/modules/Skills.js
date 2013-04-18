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
			'skills': 'showSkills'
		},

		filterStuff: function(){
			this.controller.filterItems();

		},
		showSkills: function(){
			this.controller.start();
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

			this.showHeader(this.skillList);

			this.showFooter(this.skillList);

			this.showSkillList(this.skillList);
			
			this.skillList.fetch();


		},

		showHeader: function(skillList) {
			var header = new Layout.Header({
				collection: skillList
			});
			this.app.header.show(header);
		},

		showFooter: function(skillList) {
			var footer = new Layout.Footer({
				collection: skillList
			});
			this.app.footer.show(footer);
		},
		showSkillList: function(skillList) {
			this.region.show(new Views.ListView({
				collection : skillList
			}));
		},


		// Set the filter to show complete or all items
		filterItems: function() {
			console.log('filtering---------------------------');
		}
	});

	return SkillList;


});