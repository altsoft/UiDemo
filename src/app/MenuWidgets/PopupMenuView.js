/**
 * 
 * @author user
 */
define('PopupMenuView', ['environment', 'forms', 'ui', 'forms/label'], function (Env, Forms, Ui, Label, ModuleName) {
    function module_constructor(allItemsList) {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var widget = new Label('Right click to call popup menu');
        form.panel.add(widget);
        if (Env.agent == Env.HTML5) {
            form.panel.element.style.border = "thin solid #ccc";
            form.panel.element.style.borderRadius = "5px";
        }

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