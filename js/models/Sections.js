define(['jquery','underscore','backbone', 'js/Folionette', 'marionette'],
 function( $, _, Backbone, App){
  
	var Sections = {
            Section: {}, 
            SectionList: {}
        };
	// Section Model
	Sections.Section = Backbone.Model.extend({
		defaults: {
			name: '',
			description: ''

		},
		initialize: function() {

		}
	});

	// Sections Collection
	Sections.SectionList = Backbone.Collection.extend({
		model: Sections.Section,
		url: 'data/sections.json'

	});
	return Sections;


});