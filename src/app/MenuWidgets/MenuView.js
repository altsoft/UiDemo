/**
 * 
 * @author user
 */
define('MenuView', ['forms', 'ui', 'forms/menu-bar'], function (Forms, Ui, MenuBar, ModuleName) {
    function module_constructor(allItemsList) {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var widget;
        widget = new MenuBar();

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

    }
    return module_constructor;
});