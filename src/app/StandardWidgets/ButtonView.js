/**
 * 
 * @author jskonst
 */
define('ButtonView', ['forms','forms/button','LabelView'], function (Forms, Button,LabelView, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);
                
        var button = new Button("Button");
        button.height = 27;
        button.width = 100;
        var lblForm;
        self.showOnPanel = function (aPanel) {
            lblForm = new LabelView(button);
            lblForm.showOnPanel(aPanel);
        };

        self.getDemoComponent = function () {
            return button;
        };

        self.getViewComponent = function () {
            return button;
        };

    }
    return module_constructor;
});