/**
 * 
 * @author jskonst
 */
function CheckBoxView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var checkBox = new P.CheckBox("Check box");
    checkBox.height = 27;
    checkBox.width = 100;

    self.getDemoComponent = function () {
        return checkBox;
    };

    self.getViewComponent = function () {
        return checkBox;
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

    checkBox.OnActionPerformed = function (event) {
        form.chbSelected1.selected = checkBox.selected;
    };

    form.txtText.onActionPerformed = function (event) {
        checkBox.text = form.txtText.text;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
