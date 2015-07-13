/**
 * 
 * @author user
 */
function ModelComboView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var widget;

    form.panel.clear();
    widget = new P.ModelCombo();
    widget.data = model.qAllVisits;
    widget.displayField = "name";
    widget.displayList = model.qAllPets;
    widget.emptyText = "Choose a pet...";
    widget.field = "cursor.pet";
    form.panel.add(widget);

    self.show = function () {
        form.show();
    };
    // TODO : place your code here

    model.requery(function () {
        // TODO : place your code here
    });

    self.getDemoComponent = function () {
        return widget;
    };

    self.getViewComponent = function () {
        return form.view;
    };


}
