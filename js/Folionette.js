define([
	//'jquery', 'underscore', 
	'backbone', 
	'js/modules/Skills',
	'js/modules/Projects',
	'js/modules/About',
	'marionette'
], function(Backbone, SkillList, ProjectList, About ){

	// create App id doesn't exist or return the current App
	if(typeof(Folionette)==='undefined'){
		Folionette = new Backbone.Marionette.Application();

		Folionette.addRegions({
			header:'#header',
			main: '#main',
			navigation: '#navigation',
			footer: '#footer'
		});
		
		Folionette.addInitializer(function(){
			
			//console.log('App Initilising');
			
		});
		//start the app
		Folionette.on('initialize:after', function(){
			Backbone.history.start();
			//add Skills Module
			Folionette.skillController = new SkillList.Controller({
				region: Folionette.main,
				app: Folionette
			});
			Folionette.skillRouter = new SkillList.Router({
				controller: Folionette.skillController
			});
			
			//add Projects
			Folionette.projectsController = new ProjectList.Controller({
				region: Folionette.main
			});
			Folionette.projectsRouter = new ProjectList.Router({
				controller: Folionette.projectsController
			});
			
			//add About 
			Folionette.aboutController = new About.Controller({
				region: Folionette.main
			});
			Folionette.aboutRouter = new About.Router({
				controller: Folionette.aboutController
			});
			
			//start Skills
			Folionette.skillController.start();
			//start Projects
					
			Folionette.projectsController.start();
			//start About
			Folionette.aboutController.start();
			
			
		});	
		
		Folionette.start();
	}

	return Folionette;
	
});

