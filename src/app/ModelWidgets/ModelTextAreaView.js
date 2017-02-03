/**
 * 
 * @author user
 */

define('ModelTextAreaView', ['orm', 'forms', 'ui', 'forms/model-text-area'], function (Orm, Forms, Ui, ModelTextArea, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        var widget;

        form.panel.clear();
        widget = new ModelTextArea();
        widget.data = model.qAllOwners;
        widget.field = 'cursor.firstname';
        form.panel.add(widget);

        self.show = function () {
            form.show();
        };

        model.requery(function () {
        });

        self.getDemoComponent = function () {
            return widget;
        };

        self.getViewComponent = function () {
            return form.view;
        };

    }
    return module_constructor;
});