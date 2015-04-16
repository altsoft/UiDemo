/**
 * 
 * @author jskonst
 */
function toggleButtonForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        var lblForm = new labelForm(demoComponent);
        lblForm.showOnPanel(aPanel);
    };

    form.chbSelected1.onActionPerformed = function (event) {
        demoComponent.selected = form.chbSelected1.selected;
    };

    demoComponent.onActionPerformed = function (event) {
        form.chbSelected1.selected = demoComponent.selected;
    };
}
