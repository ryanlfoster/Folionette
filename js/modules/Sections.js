//Module that has it's own router and controller
define(['jquery','underscore','backbone', 
	'js/models/Sections',
  	'js/views/Sections',
  	'marionette'], 
function( $, _, Backbone, Sections, Views){
	SectionList = {};
	//  Router 
	// ------------------------------
	SectionList.Router = Backbone.Marionette.AppRouter.extend({
		
		initialize: function(options){
      		this.controller = options.controller;
                }

	});

	SectionList.Controller = Backbone.Marionette.Controller.extend({

		initialize: function(options){
      		this.region = options.region;
    	},
    	
		start: function(){
			this.sectionList = new Sections.SectionList();
			this.showSectionList();
			this.sectionList.fetch();
		},

		showSectionList: function() {
			this.region.show(new Views.ListView({
				collection : this.sectionList
			}));
		}
	});

	return SectionList;

});