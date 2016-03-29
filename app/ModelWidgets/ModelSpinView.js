/**
 * 
 * @author user
 */
define('ModelSpinView', ['orm', 'forms', 'ui', 'forms/model-spin'], function (Orm, Forms, Ui, ModelSpin, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        var widget;
        form.panel.clear();
        widget = new ModelSpin();
        widget.data = model.qAllVisits;
        widget.field = "cursor.cost";
        widget.emptyText = "Enter cost...";
        form.panel.add(widget);

        model.requery(function () {
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
    return module_constructor;
});
