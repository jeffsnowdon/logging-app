define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            entries: []
        },
        initialize: function(options) {
            this.numberToFind = options.numberToFind;
        },
        url: function() {
            return "http://localhost:8000/logs";
        },
        fetch: function(){
          Backbone.Model.prototype.fetch.apply(this, {
            data: {number : this.numberToFind},
            crossDomain: true
          });
        }
    })
});
