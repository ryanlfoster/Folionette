define([
'backbone', 'js/modules/Skills', 'js/modules/Projects', 'js/modules/About', 'js/modules/Sections', 'js/modules/Social', 'marionette'],
 function(Backbone, SkillList, ProjectList, About, Sections,  SocialList) {

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
			region : Folionette.main,
			app : Folionette
		});
		Folionette.skillRouter = new SkillList.Router({
			controller : Folionette.skillController
		});

		//add Projects
		Folionette.projectsController = new ProjectList.Controller({
			region : Folionette.main
		});
		Folionette.projectsRouter = new ProjectList.Router({
			controller : Folionette.projectsController
		});


		//add Social
		Folionette.socialController = new SocialList.Controller({
			region : Folionette.main
		});
		Folionette.socialRouter = new SocialList.Router({
			controller : Folionette.socialController
		});


		//add About
		Folionette.aboutController = new About.Controller({
			region : Folionette.main
		});
		Folionette.aboutRouter = new About.Router({
			controller : Folionette.aboutController
		});
                //add Sections
		Folionette.sectionController = new Sections.Controller({
			region : Folionette.navigation
		});
		Folionette.sectionRouter = new Sections.Router({
			controller : Folionette.sectionController
		});



//		//start Skills
//		Folionette.skillController.start();
		//start Projects
//		Folionette.projectsController.start();
//		//start Social
//		Folionette.socialController.start();
		//start About
		//Folionette.aboutController.start();
                
                Folionette.sectionController.start();


	});

	Folionette.start();

	return Folionette;

});

