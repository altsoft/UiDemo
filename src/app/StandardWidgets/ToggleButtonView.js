/**
 * 
 * @author jskonst
 */
define('ToggleButtonView', ['forms', 'ui', 'forms/toggle-button','LabelView','ButtonGroupView'], function (Forms, Ui, ToggleButton,LabelView,ButtonGroupView, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var toggleButton = new ToggleButton("Toggle button");
        toggleButton.name = "Toggle button";
        toggleButton.height = 30;
        toggleButton.width = 100;
        var lblForm;
        self.showOnPanel = function (aPanel) {
            aPanel.add(form.view);
            lblForm = new LabelView(toggleButton);
            lblForm.showOnPanel(aPanel);
        };

        form.mdlGroup.displayField = "name";
        form.mdlGroup.displayList = new ButtonGroupView().getButtonGroups();

        form.mdlGroup.onValueChange = function (event) {
            if (form.mdlGroup.value) {
                toggleButton.buttonGroup = form.mdlGroup.value.group;
            } else {
                toggleButton.buttonGroup = null;
            }
        };

        form.chbSelected1.onActionPerformed = function (event) {
            toggleButton.selected = form.chbSelected1.selected;
        };

        toggleButton.onActionPerformed = function (event) {
            form.chbSelected1.selected = toggleButton.selected;
        };
        self.getDemoComponent = function () {
            return toggleButton;
        };

        self.getViewComponent = function () {
            return toggleButton;
        };

    }
    return module_constructor;
});
