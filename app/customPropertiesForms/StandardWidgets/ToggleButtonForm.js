/**
 * 
 * @author jskonst
 */
function ToggleButtonForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;

    self.show = function () {
        form.show();
    };

    self.setDemoComponent = function(aDemoComponent){
        demoComponent = aDemoComponent;
        demoComponent.onActionPerformed = demoOnActionPerformed;
    };
    
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        var lblForm = new LabelForm(demoComponent);
        lblForm.showOnPanel(aPanel);
    };

    form.chbSelected1.onActionPerformed = function (event) {
        demoComponent.selected = form.chbSelected1.selected;
    };

    if (demoComponent){
        demoComponent.onActionPerformed = demoOnActionPerformed;
    };
    var demoOnActionPerformed = function (event) {
        form.chbSelected1.selected = demoComponent.selected;
    };
}
