/**
 * 
 * @author user
 */
define('ModelComboView', ['orm', 'forms', 'ui', 'forms/model-combo'], function (Orm, Forms, Ui, ModelCombo, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        var widget;
        form.panel.clear();
        widget = new ModelCombo();
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
    return module_constructor;
});