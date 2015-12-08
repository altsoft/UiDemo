/* global P */

/**
 * 
 * @author mg
 * {global P}
 */
function OOBinding() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var widget = new P.AnchorsPane();
    widget.width = 500;
    widget.height = 400;

    function initGrid() {
        var grid = new P.ModelGrid();
        grid.deletable = grid.insertable = false;

        var colService = new P.ServiceGridColumn();
        var colName = new P.ModelGridColumn();
        colName.title = "Pet's name";
        colName.minWidth = 107;
        colName.field = 'pet';
        var colFromDate = new P.ModelGridColumn();
        colFromDate.title = 'From date';
        colFromDate.minWidth = 107;
        colFromDate.field = 'fromdate';
        colFromDate.editor = new P.ModelDate();
        colFromDate.editor.format = 'dd.MM.yyyy';
        var colToDate = new P.ModelGridColumn();
        colToDate.title = 'To date';
        colToDate.minWidth = 107;
        colToDate.field = 'todate';
        colToDate.editor = new P.ModelDate();
        colToDate.editor.format = 'dd.MM.yyyy';
        var colIsPaid = new P.ModelGridColumn();
        colIsPaid.title = 'Paid';
        colIsPaid.minWidth = 65;
        colIsPaid.field = 'ispaid';
        colIsPaid.editor = new P.ModelCheckBox();

        grid.addColumnNode(colService);
        grid.addColumnNode(colName);
        grid.addColumnNode(colFromDate);
        grid.addColumnNode(colToDate);
        grid.addColumnNode(colIsPaid);
        
        return grid;
    }

    var grid1 = initGrid();
    var grid2 = initGrid();
    widget.add(grid1, {left: 0, top: 0, width: 500, height: 180});
    widget.add(grid2, {left: 0, top: 210, width: 500, height: 180});

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        grid1.data = grid2.data = [
            {pet: 'Jerry', fromdate: new Date(), todate: new Date(), ispaid: true},
            {pet: 'Tom', fromdate: new Date(), todate: new Date(), ispaid: false},
            {pet: 'Drujok', fromdate: new Date(), todate: new Date(), ispaid: false},
            {pet: 'Mailo', fromdate: new Date(), todate: new Date(), ispaid: false},
            {pet: 'Pick', fromdate: new Date(), todate: new Date(), ispaid: true},
            {pet: 'Vaska', fromdate: new Date(), todate: new Date(), ispaid: true}
        ];
    };

    self.getDemoComponent = function () {
        return widget;
    };

    self.getViewComponent = function () {
        return widget;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
    // TODO : place your code here

    model.requery(function () {
        // TODO : place your code here
    });

}
