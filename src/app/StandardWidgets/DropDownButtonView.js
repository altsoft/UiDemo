/**
 * 
 * @author jskonst
 */
define('DropDownButtonView', ['forms', 'ui', 'forms/drop-down-button', 'forms/popup-menu', 'forms/menu-item','LabelView'],
 function (Forms, Ui, DropDownButton, PopupMenu, MenuItem,LabelView, ModuleName) {
    function module_constructor(aDemoComponent) {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var dropDownButton = new DropDownButton("Drop down button");
        dropDownButton.onActionPerformed = function (evt) {
            alert('Action from \"'+  evt.source.text + '\"');
        };
        dropDownButton.name = "DropDown button";
        dropDownButton.height = 30;
        dropDownButton.width = 150;
        dropDownButton.dropDownMenu = new PopupMenu();
        var item1 = new MenuItem('Menu item');
        var item2 = new MenuItem('Another menu item');
        item1.onActionPerformed = item2.onActionPerformed = dropDownButton.onActionPerformed;
        dropDownButton.dropDownMenu.add(item1);
        dropDownButton.dropDownMenu.add(item2);

        var lblForm;
        self.showOnPanel = function (aPanel) {
            lblForm = new LabelView(dropDownButton);
            lblForm.showOnPanel(aPanel);
        };

        self.getDemoComponent = function () {
            return dropDownButton;
        };

        self.getViewComponent = function () {
            return dropDownButton;
        };

    }
    return module_constructor;
});