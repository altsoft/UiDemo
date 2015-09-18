/**
 * 
 * @author user
 */
function ModelSpinView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var widget;

    form.panel.clear();
    widget = new P.ModelSpin();
    widget.data = model.qAllVisits;
    widget.field = "cursor.cost";
    widget.emptyText = "Enter cost...";
    form.panel.add(widget);
    model.requery(function () {
        // TODO : place your code here
    });

    self.getDemoComponent = function () {
        return widget;
    };

    self.getViewComponent = function () {
        return form.view;
    };

    self.getFormView = function () {
        return form.view;
    };

}
