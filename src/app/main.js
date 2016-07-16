define(['jquery', 'app/table/table-model', 'app/table/table-view'], function($, TableModel, TableView) {

    return {
        init: function() {
          console.log("call init");
            var tableModel = new TableModel({
                numberToFind: 1000
            });
            var tableView = new TableView({
                model: tableModel
            });
            tableView.render();
            $('#container').html(tableView.$el);
            tableModel.fetch();
            // $.ajax("http://localhost:8000/logs", {
            //   data: {number: 1000},
            //   success : function(){
            //     console.log("fuck");
            //   }
            // })
        }
    }
});
