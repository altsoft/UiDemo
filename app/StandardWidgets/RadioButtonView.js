/**
 * 
 * @author jskonst
 */
function RadioButtonView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var radioButton = new P.RadioButton("Radio button");
    radioButton.name = 'Radio button';
    radioButton.height = 27;
    radioButton.width = 200;

    self.getDemoComponent = function () {
        return radioButton;
    };

    self.getViewComponent = function () {
        return radioButton;
    };

    function initWidgets() {
        form.chbSelected1.selected = radioButton.selected;
        form.txtText.text = radioButton.text;
    }

    form.mdlGroup.displayField = "name";
    form.mdlGroup.displayList = buttonGroups;

    form.mdlGroup.onValueChange = function (event) {
        if (form.mdlGroup.value) {
            radioButton.buttonGroup = form.mdlGroup.value.group;
        } else {
            radioButton.buttonGroup = null;
        }
    };

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidgets();
        aPanel.add(form.view);
    };

    form.chbSelected1.onActionPerformed = function (event) {
        radioButton.selected = form.chbSelected1.selected;
    };

    radioButton.onActionPerformed = function (event) {
        form.chbSelected1.selected = radioButton.selected;
    };

    form.txtText.onActionPerformed = function (event) {
        radioButton.text = form.txtText.text;
    };
    
    self.getFormHeight = function () {
        return form.view.height;
    };
}
