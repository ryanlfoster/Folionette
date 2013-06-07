define(['jquery','underscore','backbone', 
'tpl!templates/sectionItemView.tmpl', 'tpl!templates/sectionListView.tmpl', 'marionette'],
 function( $, _, Backbone,  sectionItemView, sectionListView){
	var Views={};
	// Project List Item View
	// -------------------
	//
	// Display an individual project item

	Views.SectionView = Marionette.ItemView.extend({
		tagName: 'li',
                className: 'span3 section-block',
		template: sectionItemView,

		ui: {
			view: '.view',
			details: '.details'
		},

		events : {
				'click .show-details': 'showDetails'

		},

		initialize: function() {
			

		},

		onRender: function() {
                    
                    if (this.model.get('active')){
                        console.log(this.el);
                        this.showDetails();
                        $(this.el).hide();
                    }


		},

		showDetails: function(){
                       //make all the sections inactive
                       
                       $.each(this.model.collection.models, function(key,model) {
                          if(model.get('active')) {
                               model.set('active', false);   
                               //animate the newly inactive
                               
                               
                          }
                         
                       });
                       //make this section active
                       this.model.set('active', true);
                       //slide the section up
                       $(this.el).animate(
                        {
                            
                            width: '0',
                            height: '0'
                          }, 1000
                        ).animate({width: 0, opacity: 0}, 500);

                       //move the section that was active
                       $('.section-block.active').animate({width: '200px', opacity: 100},200).removeClass('active');
                       
                       //mark as an active
                       $(this.el).addClass('active');
                       //slide the section that was main before down
                       $('.section-block:hidden').slideDown();
                       
                       //animate the main block
                       var self= this;
                       if($('#main .content').length) {
                           
                           $('#main .content').animate({opacity: 0}, 500, function(){
                           
                                    $('#main').animate({height:10},1000, function(){
                                //start the controller for the section

                                        Folionette[self.model.get('module') +'Controller'].start();
                                         $('#main .content').animate({opacity: 1}, 500);
                                    }).animate({height: 200}, 500);
                            });
                           
                       } else {
                        $('#main').animate({height:10},1000, function(){
                        //start the controller for the section

                        Folionette[self.model.get('module') +'Controller'].start();
                        $('#main .content').animate({opacity: 1}, { duration: 500, queue: false }, function(){


                        });

                        }).animate({height: 200}, 1000);
                       }
                       //Folionette[this.model.get('module') +'Controller'].start();

			//this.ui.details.toggle();
                        
                        //animate the main 
                        
		}
	});

	// Item List View
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of activs vs completed items for display.

	Views.ListView = Backbone.Marionette.CompositeView.extend({
		template: sectionListView,
		itemView: Views.SectionView,
		itemViewContainer: '#section-list',

		ui: {
			expand: '.expand'

		},

		events : {
				'click .expand': 'expand'
		
		},
		initialize: function() {

		},

		onRender: function() {


		},

		expand: function(){
                 
			if(this.ui.expand.html()!='Close') {
				this.ui.expand.html('Close');
			} else {
				this.ui.expand.html('Expand');
			}
				
			$('#column1').toggleClass('expanded');
		}

	});
	return Views;

});