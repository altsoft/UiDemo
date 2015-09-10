/**
 * 
 * @author jskonst
 */
function HtmlAreaView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var htmlArea = new P.HtmlArea("Html Area");
    htmlArea.value = "";
    htmlArea.height = 120;
    htmlArea.width = 840;

    function initWidget() {
        form.txtSource.text = htmlArea.value;
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

    form.txtSource.onValueChange = function(event) {
        htmlArea.text = form.txtSource.text;
    };


    htmlArea.onValueChange = function () {
        form.txtSource.text = htmlArea.value;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
