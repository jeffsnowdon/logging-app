define(['backbone'], function(Backbone) {

    return Backbone.View.extend({
        render: function() {
          console.log("REDER BADY");
            var html = "";
            html += "<table><thead><tr><th>Number</th><th>Data</th><tr></thead><tbody>";
            var entries = this.model.get('entries');
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                var entryHtml = "<tr><td>" + entry['number'] + "</td><td>" + entry['data'] + "</td></tr>";
                html += entryHtml;
            }
            html += "</tbody></table>";
            this.$el.html(html);
        },
        initialize: function() {
            this.model.on('change', function() {
                this.render();
            }, this);
        }
    });
});
