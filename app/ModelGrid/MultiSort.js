/* global P */

/**
 * 
 * @author mg
 * {global P}
 */
function MultiSort() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var widget = new P.BorderPane();
    widget.width = 500;
    widget.height = 150;
    
    var grid = new P.ModelGrid();
    grid.editable = grid.deletable = grid.insertable = false;
    
    var colName = new P.ModelGridColumn();
    colName.title = "Pet's name";
    colName.minWidth = 107;
    colName.sortable = true;
    colName.field = 'pet'; 
    colName.editor = new P.ModelCombo();
    colName.editor.displayField = 'name';
    
    var colFromDate = new P.ModelGridColumn();
    colFromDate.title = 'From date';
    colFromDate.minWidth = 107;
    colFromDate.sortable = true;
    colFromDate.field = 'fromdate';
    colFromDate.editor = new P.ModelDate();
    colFromDate.editor.format = 'dd.MM.yyyy';
    
    var colToDate = new P.ModelGridColumn();
    colToDate.title = 'To date';
    colToDate.minWidth = 107;
    colToDate.sortable = true;
    colToDate.field = 'todate';    
    colToDate.editor = new P.ModelDate();
    colToDate.editor.format = 'dd.MM.yyyy';
    
    var colIsPaid = new P.ModelGridColumn();
    colIsPaid.title = 'Paid';
    colIsPaid.minWidth = 65;
    colIsPaid.sortable = true;
    colIsPaid.field = 'ispaid';
    colIsPaid.editor = new P.ModelCheckBox();
    
    grid.addColumnNode(new P.ServiceGridColumn());
    grid.addColumnNode(colName);
    grid.addColumnNode(colFromDate);
    grid.addColumnNode(colToDate);
    grid.addColumnNode(colIsPaid);
    
    widget.add(grid);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        model.requery(function(){
            grid.data = model.qAllVisits;
        });
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
