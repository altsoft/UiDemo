/**
 * 
 * @author jskonst
 */
function TextAreaView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var textArea = new P.TextArea("Text Area");
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
