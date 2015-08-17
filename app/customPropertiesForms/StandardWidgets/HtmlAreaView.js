/**
 * 
 * @author jskonst
 */
function HtmlAreaView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var htmlArea = new P.HtmlArea("Html Area");
    htmlArea.height = 120;
    htmlArea.width = 840;

    function initWidget() {
        form.txtText.text = htmlArea.text;
        htmlArea.emptyText = form.txtEmptyText.text;
    }

    self.getDemoComponent = function () {
        return htmlArea;
    };

    self.getViewComponent = function () {
        return htmlArea;
    };

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidget();
        aPanel.add(form.view);
    };

    form.txtText.onActionPerformed = function () {
        htmlArea.text = form.txtText.text;
    };

    htmlArea.onValueChange = function () {
        form.txtText.text = htmlArea.value;
    };

    self.getFormHeight = function () {
        return form.view.heigh;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
