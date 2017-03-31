/**
 * 
 * @author jskonst
 */
define('PasswordFieldView', ['forms', 'ui', 'forms/password-field'], function (Forms, Ui, PasswordField, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var passwordField = new PasswordField("Password");
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

    }
    return module_constructor;
});
