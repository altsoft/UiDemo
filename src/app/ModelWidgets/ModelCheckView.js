/**
 * 
 * @author user
 */
define('ModelCheckView', ['orm', 'forms', 'ui', 'forms/model-check-box'], function (Orm, Forms, Ui, ModelCheckBox, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        var widget = new ModelCheckBox();
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

    }
    return module_constructor;
});