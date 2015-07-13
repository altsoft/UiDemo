/**
 * 
 * @author jskonst
 */
function SliderForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    var demoComponent = new P.Slider("Slider");
    demoComponent.height = 40;
    demoComponent.width = 500;
    
    function initWidgets() {
        form.txtMaximum.value = demoComponent.maximum;
        form.txtMinimum.value = demoComponent.minimum;
        form.txtValue.value = demoComponent.value;
    }
    
    self.getDemoComponent = function () {
        return demoComponent;
    };

    self.getViewComponent = function () {
        return demoComponent;
    };

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidgets();
        aPanel.add(form.view);
    };

    demoComponent.onActionPerformed = function (event) {
        form.txtValue.value = demoComponent.value;
    };

    form.txtMaximum.onValueChange = function(event) {
        demoComponent.maximum = form.txtMaximum.value;
    };

    form.txtMinimum.onValueChange = function(event) {
        demoComponent.minimum = form.txtMinimum.value;
    };

    form.txtValue.onValueChange = function(event) {
        demoComponent.value = form.txtValue.value;
    };

    
}
