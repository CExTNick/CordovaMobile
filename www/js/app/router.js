define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        Bootstrap   = require('bootstrap'),
        HomeView    = require('app/views/home'),
        CaptureView  = require('app/views/capture'),
        homeView = new HomeView(),
        captureView = new CaptureView();

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "capture":"capture"
        },

        home: function () {
            homeView.render();
        },
        capture: function (){
            captureView.render();
        }

    });

});