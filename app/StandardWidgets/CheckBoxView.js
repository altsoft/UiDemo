/**
 * 
 * @author jskonst
 */
function CheckBoxView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var checkBox = new P.CheckBox("Check box");
    checkBox.name = "Check box";
    checkBox.height = 27;
    checkBox.width = 200;

    self.getDemoComponent = function () {
        return checkBox;
    };

    self.getViewComponent = function () {
        return checkBox;
    };

    form.mdlGroup.displayField = "name";
    form.mdlGroup.displayList = buttonGroups;

    form.mdlGroup.onValueChange = function (event) {
        if (form.mdlGroup.value){
        checkBox.buttonGroup = form.mdlGroup.value.group;
        }else{
            checkBox.buttonGroup = null;
        }
    };

    function initWidgets() {
        form.chbSelected1.selected = checkBox.selected;
        form.txtText.text = checkBox.text;
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidgets();
        aPanel.add(form.view);
    };

    form.chbSelected1.onActionPerformed = function (event) {
        checkBox.selected = form.chbSelected1.selected;
    };

    checkBox.onActionPerformed = function (event) {
        form.chbSelected1.selected = checkBox.selected;
    };

    form.txtText.onActionPerformed = function (event) {
        checkBox.text = form.txtText.text;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
