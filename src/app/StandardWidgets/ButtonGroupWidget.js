/**
 * 
 * @author user
 */
define('ButtonGroupWidget', ['forms'], function (Forms, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        self.show = function () {
            form.show();
        };

        self.getDemoComponent = function () {
            return form.view;
        };

        self.getViewComponent = function () {
            return form.view;
        };

        self.getAllRadioButtons = function () {
            return [form.radioButton, form.radioButton1, form.radioButton2];
        };

        self.getAllToggleButtons = function () {
            return [form.toggleButton, form.toggleButton1, form.toggleButton2];
        };

        self.getFirstMenuItems = function () {
            return [form.firstRadioMenuItem, form.firstRadioMenuItem1, form.firstRadioMenuItem2];
        };

        self.getSecondMenuItems = function () {
            return [form.secondRadioMenuItem, form.secondRadioMenuItem1, form.secondRadioMenuItem2];
        };

        self.show = function () {
            form.show();
        };

        self.getWidget = function () {
            return form.view;
        };

    }
    return module_constructor;
});
