/**
 * 
 * @author jskonst
 */
function textFieldForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;

    function preparations() {
        form.txtText.text = demoComponent.text;
        demoComponent.emptyText = form.txtEmptyText.text;
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

    form.txtText.onActionPerformed = function() {
        demoComponent.text = form.txtText.text ;
    };
    
    demoComponent.onActionPerformed = function() {
        form.txtText.text = demoComponent.text ;
    };

    form.txtEmptyText.onActionPerformed = function(event) {
        demoComponent.emptyText = form.txtEmptyText.text;
    };


}
