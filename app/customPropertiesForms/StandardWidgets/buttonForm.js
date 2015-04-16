/**
 * 
 * @author jskonst
 */
function buttonForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    
    self.show = function() {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        var lblForm = new labelForm(demoComponent);
        lblForm.showOnPanel(aPanel);
    };

}
