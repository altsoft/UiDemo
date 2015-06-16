/**
 * 
 * @author jskonst
 */
function FormattedFieldForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var textForm;
//    var horizontalAlign;
//    var verticalText;
//    var verticalAlign;

    self.setDemoComponent = function (aDemoComponent) {
        demoComponent = aDemoComponent;
    };

    function preparations() {
        textForm = new TextFieldForm(demoComponent);
        form.txtFormat.text = demoComponent.format;
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        
        preparations();
        textForm.showOnPanel(aPanel);
        aPanel.add(form.view);
    };

    form.txtFormat.onActionPerformed = function () {
        demoComponent.format = form.txtFormat.text;
    };

}
