/**
 * 
 * @author jskonst
 */
function ToggleButtonView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var toggleButton = new P.ToggleButton("Toggle button");
    toggleButton.height = 27;
    toggleButton.width = 100;
    var lblForm;
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        lblForm = new LabelView(toggleButton);
        lblForm.showOnPanel(aPanel);
    };

    form.chbSelected1.onActionPerformed = function (event) {
        toggleButton.selected = form.chbSelected1.selected;
    };

    toggleButton.OnActionPerformed = function (event) {
        form.chbSelected1.selected = toggleButton.selected;
    };
    self.getDemoComponent = function () {
        return toggleButton;
    };

    self.getViewComponent = function () {
        return toggleButton;
    };
    
    self.getFormHeight = function () {
        var commonHeight = lblForm.getFormHeight();
        if (commonHeight>form.view.height){
            return commonHeight;
        }else{
            return form.view.height;
        }
    };
}
