/**
 * 
 * @author jskonst
 */
function checkBoxForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    form.txtText.text = demoComponent.text;
    
    function preparations(){
        form.chbSelected1.selected = demoComponent.selected;
        form.txtText.text = demoComponent.text;
        
    };
    
    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };


    form.chbSelected1.onActionPerformed = function (event) {
        demoComponent.selected = form.chbSelected1.selected;
    };

    demoComponent.onActionPerformed = function (event) {
        form.chbSelected1.selected = demoComponent.selected;
    };
    form.txtText.onActionPerformed = function(event) {
        demoComponent.text = form.txtText.text;
    };
}
