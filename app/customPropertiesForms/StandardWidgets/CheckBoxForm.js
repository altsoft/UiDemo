/**
 * 
 * @author jskonst
 */
function CheckBoxForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    
    self.setDemoComponent = function(aDemoComponent){
        demoComponent = aDemoComponent;
        demoComponent.onActionPerformed = demoOnActionPerformed;
    };
    
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

    
    if (demoComponent){
        demoComponent.onActionPerformed = demoOnActionPerformed;
    };
    
    var demoOnActionPerformed = function (event) {
        form.chbSelected1.selected = demoComponent.selected;
    };
    
    form.txtText.onActionPerformed = function(event) {
        demoComponent.text = form.txtText.text;
    };
}
