define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone')


    return Backbone.View.extend({
        el: $("#mainContent"),
        render: function () {
            this.$el.html('<div class="jumbotron">    <p class="text-center">You do not have any Cases</p>    <p class="text-center">Use the plus button to create a new Case.</p></div>');
            return this;
        }
    });

});