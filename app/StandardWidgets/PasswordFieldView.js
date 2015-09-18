/**
 * 
 * @author jskonst
 */
function PasswordFieldView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var passwordField = new P.PasswordField("Password");
    passwordField.height = 27;
    passwordField.width = 200;

    function initWidget() {
        form.txtText.text = passwordField.text;
        passwordField.emptyText = form.txtEmptyText.text;
    }

    self.getDemoComponent = function () {
        return passwordField;
    };

    self.getViewComponent = function () {
        return passwordField;
    };

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidget();
        aPanel.add(form.view);
    };

    form.txtText.onActionPerformed = function () {
        passwordField.text = form.txtText.text;
    };

    passwordField.onValueChange = function () {
        form.txtText.text = passwordField.text;
    };

    form.txtEmptyText.onActionPerformed = function (event) {
        passwordField.emptyText = form.txtEmptyText.text;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
