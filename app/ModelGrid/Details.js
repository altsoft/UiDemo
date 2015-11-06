/* global P */

/**
 * 
 * @author mg
 * {global P}
 */
function Details() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var widget = new P.AnchorsPane();
    widget.width = 750;
    widget.height = 120;
    
    var masterGrid = new P.ModelGrid();
    masterGrid.editable = masterGrid.deletable = masterGrid.insertable = false;
    
    masterGrid.addColumnNode(new P.ServiceGridColumn());
    
    var colName = new P.ModelGridColumn();
    colName.title = "Pet";
    colName.minWidth = 107;
    colName.field = 'name'; 
    masterGrid.addColumnNode(colName);
    
    widget.add(masterGrid, {left: 0, width: 150, top: 0, bottom: 0});
    
    var detailGrid = new P.ModelGrid();
    
    detailGrid.editable = detailGrid.deletable = detailGrid.insertable = false;
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
    
    detailGrid.addColumnNode(new P.ServiceGridColumn());
    detailGrid.addColumnNode(colFromDate);
    detailGrid.addColumnNode(colToDate);
    detailGrid.addColumnNode(colIsPaid);
    
    widget.add(detailGrid, {left: 170, width: 400, top: 0, bottom: 0, height: 120});

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        model.requery(function(){
            masterGrid.data = model.qAllPets;
            detailGrid.data = model.qAllPets;
            detailGrid.field = 'cursor.visits';
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
