/**
 * 
 * @author jskonst
 */
function TextFieldView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var textField = new P.TextField("Text field");
    textField.height = 27;
    textField.width = 200;

    function initWidget() {
        form.txtText.text = textField.text;
        textField.emptyText = form.txtEmptyText.text;
    }

    self.getDemoComponent = function () {
        return textField;
    };

    self.getViewComponent = function () {
        return textField;
    };

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidget();
        aPanel.add(form.view);
    };

    form.txtText.onActionPerformed = function () {
        textField.text = form.txtText.text;
    };

    textField.onValueChange = function () {
        form.txtText.text = textField.text;
    };

    textField.demoOnActionPerformed = textField.onValueChange;

    form.txtEmptyText.onActionPerformed = function (event) {
        textField.emptyText = form.txtEmptyText.text;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
