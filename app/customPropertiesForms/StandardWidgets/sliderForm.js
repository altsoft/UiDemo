/**
 * 
 * @author jskonst
 */
function sliderForm(aDemoComponent) {
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

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };


    demoComponent.onActionPerformed = function () {
        form.txtValue.value = demoComponent.value;
    };
    form.button.onActionPerformed = function(event) {
        demoComponent.maximum = form.txtMaximum.value;
        demoComponent.minimum = form.txtMinimum.value;
        demoComponent.value = form.txtValue.value;
    };
}
