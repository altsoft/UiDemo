/**
 * 
 * @author jskonst
 */
function DropDownButtonView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var dropDownButton = new P.DropDownButton("Drop down button");
    dropDownButton.onActionPerformed = function(evt){
        alert('Action!');
    };
    dropDownButton.name = "DropDown button";
    dropDownButton.height = 27;
    dropDownButton.width = 150;
    dropDownButton.dropDownMenu = new P.PopupMenu();
    var item1 = new P.MenuItem('Menu item');
    var item2 = new P.MenuItem('Another menu item');
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

    self.getFormHeight = function () {
        var commonHeight = lblForm.getFormHeight();
        if (commonHeight > form.view.height) {
            return commonHeight;
        } else {
            return form.view.height;
        }
    };
}
