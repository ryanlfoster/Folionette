//Module that combines router and controller
define(['jquery', 'underscore', 'backbone',
        'js/models/About',
        'js/views/About',
        'marionette'
    ], function ($, _, Backbone, AboutModel, Views) {


        var About = {}; //Combines router and controller

        // SkillList Router 
        // ------------------------------
        About.Router = Backbone.Marionette.AppRouter.extend({
                initialize: function (options) {
                    this.controller = options.controller;
                },
                routes: {
                    'about': 'highlight'
                },

                showAbout: function () {
                    this.controller.show();
                },
                highlight: function () {
                    this.controller.highlight();
                }

            });

        // About Controller

        About.Controller = Backbone.Marionette.Controller.extend({

                initialize: function (options) {
                    var _self = this;
                    this.about = new AboutModel();
                    this.region = options.region;
                    this.about.on('sync', function () {
                            _self.show();
                        });

                },

                start: function () {

                    this.about.fetch();
                    //this.region.currentView.render();

                },

                show: function () {
                    this.view = new Views.ItemView({
                            model: this.about
                        });
                    this.region.show(this.view);
                },
                highlight: function () {
                    $('.active').removeClass('active');
                    $(this.region.el).addClass('active');
                }
            });

        return About;


    });