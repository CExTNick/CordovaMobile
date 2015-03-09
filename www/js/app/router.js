define([
        'jquery',
        'backbone',
        'bootstrap',
        'app/views/home',
        'app/views/capture'
    ],
    function($, Backbone, Bootstrap, HomeView, CaptureView) {

        "use strict";

        var homeView = new HomeView();
        var captureView = new CaptureView();

        return Backbone.Router.extend({

            routes: {
                "": "home",
                "capture": "capture"
            },

            home: function() {
                homeView.render();
            },
            capture: function() {
                captureView.render();
            }

        });

    });
