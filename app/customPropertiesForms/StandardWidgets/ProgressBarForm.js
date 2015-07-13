/**
 * 
 * @author jskonst
 */
function ProgressBarForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = new P.ProgressBar();
    demoComponent.height = 30;
    demoComponent.width = 500;
    demoComponent.maximum = 100;
    demoComponent.minimum = 0;
    demoComponent.value = 0;

    function initWidget() {
        form.txtMaximum.value = demoComponent.maximum;
        form.txtMinimum.value = demoComponent.minimum;
        form.txtValue.value = demoComponent.value;
        form.txtText.text = demoComponent.text;
    }

    self.show = function () {
        form.show();
    };
    
    self.getDemoComponent = function () {
        return demoComponent;
    };

    self.getViewComponent = function () {
        return demoComponent;
    };

    self.showOnPanel = function (aPanel) {
        initWidget();
        aPanel.add(form.view);
    };

    form.txtValue.onValueChange = function (event) {
        demoComponent.value = form.txtValue.value;
    };

    form.txtMaximum.onActionPerformed = function (event) {
        demoComponent.maximum = form.txtMaximum.value;
    };

    form.txtMinimum.onValueChange = function (event) {
        demoComponent.minimum = form.txtMinimum.value;
    };

    form.txtText.onActionPerformed = function (event) {
        demoComponent.text = form.txtText.text;
    };
}
