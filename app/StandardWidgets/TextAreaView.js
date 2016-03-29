/**
 * 
 * @author jskonst
 */

define('TextAreaView', ['forms', 'ui', 'forms/text-area'], function (Forms, Ui, TextArea, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var textArea = new TextArea("Text Area");
        textArea.height = 80;
        textArea.width = 800;

        function initWidget() {
            textArea.emptyText = form.txtEmptyText.text;
        }

        self.getDemoComponent = function () {
            return textArea;
        };

        self.getViewComponent = function () {
            return textArea;
        };

        self.show = function () {
            form.show();
        };

        self.showOnPanel = function (aPanel) {
            initWidget();
            aPanel.add(form.view);
        };

        form.txtEmptyText.onActionPerformed = function (event) {
            textArea.emptyText = form.txtEmptyText.text;
        };

        self.getFormHeight = function () {
            return form.view.height;
        };
    }
    return module_constructor;
});