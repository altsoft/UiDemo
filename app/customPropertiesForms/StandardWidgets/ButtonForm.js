/**
 * 
 * @author jskonst
 */
function ButtonForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    
    self.show = function() {
        form.show();
    };

    self.setDemoComponent = function(aDemoComponent){
        demoComponent = aDemoComponent;
    };

    self.showOnPanel = function (aPanel) {
        var lblForm = new LabelForm(demoComponent);
        lblForm.showOnPanel(aPanel);
    };

}
