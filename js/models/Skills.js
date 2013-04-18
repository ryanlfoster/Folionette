define(['jquery','underscore',  'backbone', 'js/Folionette', 'marionette'], 
function( $, _, Backbone, App){
  			
				
 var Skills={}; //combine Model and Collection 

	// Todo Model
	// ----------

	Skills.Skill = Backbone.Model.extend({
		
		defaults: {
			name: '',
			description: '',
			level: 0
		},

		initialize: function() {

		}
	});

	// Skill Collection
	// ---------------

	Skills.SkillList = Backbone.Collection.extend({
		model: Skills.Skill,
		
		url: 'data/skills.json',


		getHighLevel: function() {
			return this.filter(this.level>5);
		},

		getLowLevel: function() {
			return this.reject(this.level<5);
		}

	});
	return Skills;
});