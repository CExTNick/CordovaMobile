define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone')


    return Backbone.View.extend({
        el: $("#mainContent"),
        initialize: function () {
            this.render();
        },

        render: function () {

            this.$el.html('<div class="input-group">    <h5>Case Name</h5>    <input type="text" class="form-control" aria-describedby="basic-addon1"></input></div><div class="input-group">    <h5>Is Complaint Warranted?</h5>    <label class="radio-inline">      <input type="radio" name="optradio">Yes    </label>    <label class="radio-inline">      <input type="radio" name="optradio">No    </label></div><div class="input-group">    <h5>First Name</h5>    <input type="text" class="form-control" aria-describedby="basic-addon1"></input></div><div class="input-group">    <h5>Last Name</h5>    <input type="text" class="form-control" aria-describedby="basic-addon1"></input></div>');
            return this;
        }

    });

});