/**
 * 
 * @author user
 */
define('DesktopInnerForm', ['forms', 'ui'], function (Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        self.onWindowClosed;
        self.show = function () {
            form.show();
        };

        self.onDesktop = function (aDesktop) {
            form.showInternalFrame(aDesktop);
        };

        self.close = function () {
            form.close();
        };

        form.onWindowClosed = function (event) {
            self.onWindowClosed();
        };

        self.setTitle = function (aTitle) {
            form.title = aTitle;
        }
    }
    return module_constructor;
});