/**
 * 
 * @author jskonst
 */
function ToggleButtonForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var demoComponent = new P.ToggleButton("Toggle button");
    demoComponent.height = 27;
    demoComponent.width = 100;
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
        aPanel.add(form.view);
        var lblForm = new LabelForm(demoComponent);
        lblForm.showOnPanel(aPanel);
    };

    form.chbSelected1.onActionPerformed = function (event) {
        demoComponent.selected = form.chbSelected1.selected;
    };

    demoComponent.OnActionPerformed = function (event) {
        form.chbSelected1.selected = demoComponent.selected;
    };
}
