/**
 * 
 * @author user
 */
define('PopupMenuView', ['forms', 'ui', 'forms/label'], function (Forms, Ui, Label, ModuleName) {
    function module_constructor(allItemsList) {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var widget = new Label('Right click to call popup menu');
        form.panel.add(widget);

        self.getDemoComponent = function () {
            return widget;
        };

        self.getViewComponent = function () {
            return form.view;
        };

        self.getCombo = function () {
            return form.mdlItemsList;
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
    return module_constructor;
});