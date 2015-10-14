/**
 * 
 * @author user
 */
function ModelCheckView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var widget;
    widget = new P.ModelCheckBox();
    widget.data = model.qAllVisits;
    widget.field = "cursor.ispaid";
    widget.text = "ispaid";
    form.panel.add(widget);

    model.requery(function () {
    });

    self.getDemoComponent = function () {
        return widget;
    };

    self.getViewComponent = function () {
        return form.view;
    };

    self.show = function () {
        form.show();
    };

    self.getWidget = function () {
        return widget;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
