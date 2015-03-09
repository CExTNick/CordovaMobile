define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/noCases.html',
    'text!templates/indexNavbar.html',
    'text!templates/cases.html',
    'text!templates/caseListItem.html'],
    function ($, _, Backbone,
        noCaseTemplate, indexNavbar, caseListTemplate, caseListItemTemplate) {

    "use strict";


    return Backbone.View.extend({
        el: $("#mainContent"),

        cases : 0,
        render: function () {

            $('#navbarContent').html(indexNavbar);
            this.cases++;
            if(this.cases>1){
                this.$el.html(caseListTemplate);
                for(var i=1;i<this.cases;i++){
                    $('#caseList').append(caseListItemTemplate);
                }
            }else{
                this.$el.html(noCaseTemplate);
            }
            return this;
        }
    });

});