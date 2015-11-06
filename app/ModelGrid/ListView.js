/* global P */

/**
 * 
 * @author mg
 * {global P}
 */
function ListView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var widget = new P.AnchorsPane();
    widget.width = 750;
    widget.height = 120;
    
    var listVew = new P.ModelGrid();
    listVew.editable = listVew.deletable = listVew.insertable = false;
    listVew.headerVisible = false;
    listVew.showHorizontalLines = false;
    listVew.showVerticalLines = false;
    listVew.showOddRowsInOtherColor = false;
    
    var colName = new P.ModelGridColumn();
    colName.title = "Pet";
    colName.minWidth = 107;
    colName.field = 'name'; 
    listVew.addColumnNode(colName);
    
    widget.add(listVew, {left: 0, width: 150, top: 0, bottom: 0, height: 120});

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        model.requery(function(){
            listVew.data = model.qAllPets;
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
