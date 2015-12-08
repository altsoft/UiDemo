/* global P */

/**
 * 
 * @author mg
 * {global P}
 */
function Filters() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var widget = new P.AnchorsPane();
    widget.width = 750;
    widget.height = 180;

    var petsGrid = new P.ModelGrid();
    petsGrid.editable = petsGrid.deletable = petsGrid.insertable = false;

    petsGrid.addColumnNode(new P.ServiceGridColumn());

    var colName = new P.ModelGridColumn();
    colName.title = "Pet";
    colName.minWidth = 107;
    colName.field = 'name';
    petsGrid.addColumnNode(colName);

    var filterInput = new P.FormattedField();
    var filterLabel = new P.Label('Filter pets by name:');

    widget.add(filterLabel, {left: 0, width: 200, top: 0, bottom: 0, height: 20});
    widget.add(filterInput, {left: 0, width: 200, top: 30, bottom: 0, height: 30});
    widget.add(petsGrid, {left: 250, width: 200, top: 20, bottom: 0, height: 150});

    filterInput.onValueChange = filterInput.onKeyReleased = function (evt) {
        var filterKey = filterInput.text;
        filterPets(filterKey);
    };

    function filterPets(aKey) {
        var filtered = model.qAllPets.filter(function (aPet) {
            return aPet.name.toLowerCase().indexOf(aKey.toLowerCase()) !== -1;
        });
        petsGrid.data = filtered;
    }

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        model.requery(function () {
            petsGrid.data = model.qAllPets;
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
}
