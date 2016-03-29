/**
 * 
 * @author user
 */
define('ModelDateView', ['orm', 'forms', 'ui', 'forms/model-date'], function (Orm, Forms, Ui, ModelDate, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        var widget;
        form.panel.clear();
        widget = new ModelDate();
        widget.data = model.qAllVisits;
        widget.field = 'cursor.fromdate';
        widget.valueType = Date;
        widget.format = 'HH:mm:ss z MMMM dd yyyys'
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
    return module_constructor;
});