/* global P */

/**
 * 
 * @author mg
 * {global P}
 */
function TreeView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    model.ownersPets.elementClass = function(){
        Object.defineProperty(this, 'owner', {
            get: function(){
                return model.ownersPets.findByKey(this.owner_id);
            }
        });
        Object.defineProperty(this, 'pets', {
            get: function(){
                return model.ownersPets.find({owner_id: this.id});
            }
        });
    };

    self.show = function () {
        form.show();
    };

    var widget = new P.AnchorsPane();
    widget.width = 750;
    widget.height = 120;

    var ownersPetsTreeView = new P.ModelGrid();
    ownersPetsTreeView.editable = ownersPetsTreeView.deletable = ownersPetsTreeView.insertable = false;
    ownersPetsTreeView.headerVisible = false;
    ownersPetsTreeView.showHorizontalLines = false;
    ownersPetsTreeView.showVerticalLines = false;
    ownersPetsTreeView.showOddRowsInOtherColor = false;

    ownersPetsTreeView.childrenField = 'pets';
    ownersPetsTreeView.parentField = 'owner';

    var colName = new P.ModelGridColumn();
    colName.title = "Owner->Pet";
    colName.minWidth = 80;
    colName.field = 'aName';
    ownersPetsTreeView.addColumnNode(colName);

    widget.add(ownersPetsTreeView, {left: 0, width: 150, top: 0, bottom: 0, height: 120});
    
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        model.requery(function () {
            ownersPetsTreeView.data = model.ownersPets;
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
