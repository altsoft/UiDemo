/**
 * 
 * @author jskonst
 */
function RadioButtonForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = new P.RadioButton("Check box");
    demoComponent.height = 27;
    demoComponent.width = 100;

    self.getDemoComponent = function () {
        return demoComponent;
    };

    self.getViewComponent = function () {
        return demoComponent;
    };

    function initWidgets() {
        form.chbSelected1.selected = demoComponent.selected;
        form.txtText.text = demoComponent.text;
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidgets();
        aPanel.add(form.view);
    };

    form.chbSelected1.onActionPerformed = function (event) {
        demoComponent.selected = form.chbSelected1.selected;
    };

    demoComponent.OnActionPerformed = function (event) {
        form.chbSelected1.selected = demoComponent.selected;
    };

    form.txtText.onActionPerformed = function (event) {
        demoComponent.text = form.txtText.text;
    };
}
