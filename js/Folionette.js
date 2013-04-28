define([
'backbone', 'js/modules/Skills', 'js/modules/Projects', 'js/modules/About', 'marionette'],
 function(Backbone, SkillList, ProjectList, About) {

	Folionette = new Backbone.Marionette.Application();

	Folionette.addRegions({
		header : '#header',
		main : '#main',
		column1: "#column1",
		column2: "#column2",
		column3: "#column3",
		column4: "#column4",
		navigation : '#navigation',
		footer : '#footer'
	});

	Folionette.addInitializer(function() {

		//console.log('App Initilising');

	});
	//start the app
	Folionette.on('initialize:after', function() {
		Backbone.history.start();
		//add Skills Module
		Folionette.skillController = new SkillList.Controller({
			region : Folionette.column2,
			app : Folionette
		});
		Folionette.skillRouter = new SkillList.Router({
			controller : Folionette.skillController
		});

		//add Projects
		Folionette.projectsController = new ProjectList.Controller({
			region : Folionette.column1
		});
		Folionette.projectsRouter = new ProjectList.Router({
			controller : Folionette.projectsController
		});

		//add About
		Folionette.aboutController = new About.Controller({
			region : Folionette.main
		});
		Folionette.aboutRouter = new About.Router({
			controller : Folionette.aboutController
		});



		//start Skills
		Folionette.skillController.start();
		//start Projects
		Folionette.projectsController.start();
		//start About
		Folionette.aboutController.start();
		//bind model update to rendering
		Folionette.aboutController.about.on('sync', function() {
			  Folionette.aboutController.show();
			});

	});

	Folionette.start();

	return Folionette;

});

