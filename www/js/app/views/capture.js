define([
    'jquery', 
    'underscore', 
    'backbone',
    'text!templates/case.html',
    'text!templates/captureNavbar.html'
    ],
    function ($, _, Backbone, caseTemplate, caseNavbarTemplate, casesTemplate) {

    "use strict";
    
    


    return Backbone.View.extend({
        el: $("#mainContent"),
        events :{
            "click #submitCaptureButton" : "submit"
        },
        submit : function(){
            console.log('clicked');
            window.location.href= "/#";
            this.$el.html(casesTemplate);
        },
        render: function () {
            $("#navbarContent").html(caseNavbarTemplate);
            this.$el.html(caseTemplate);
            
            return this;
        }

    });

});