/**
 * 
 * @author jskonst
 */
function SliderForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    function preparations() {
//        var demoComponent = new P.Slider();
        form.txtMaximum.value = demoComponent.maximum;
        form.txtMinimum.value = demoComponent.minimum;
        form.txtValue.value = demoComponent.value;
    }

    self.setDemoComponent = function (aDemoComponent) {
        demoComponent = aDemoComponent;
        demoComponent.onActionPerformed = demoOnActionPerformed;
    };

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

    var demoOnActionPerformed = function (event) {
        form.txtValue.value = demoComponent.value;
    };


    if (demoComponent) {
        demoComponent.onActionPerformed = demoOnActionPerformed;
    }
    
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
