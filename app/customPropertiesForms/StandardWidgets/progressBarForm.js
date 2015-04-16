/**
 * 
 * @author jskonst
 */
function progressBarForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var btnGroup = new P.ButtonGroup();
    btnGroup.add(form.rbHorizontal);
    btnGroup.add(form.rbVertical);
    
    function preparations() {
//        var demoComponent = new P.Slider();
        form.txtMaximum.value = demoComponent.maximum;
        form.txtMinimum.value = demoComponent.minimum;
        form.txtValue.value = demoComponent.value;
        form.txtText.text = demoComponent.text;
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

    form.button.onActionPerformed = function(event) {
        demoComponent.maximum = form.txtMaximum.value;
        demoComponent.minimum = form.txtMinimum.value;
        demoComponent.value = form.txtValue.value;
    };
    form.txtText.onActionPerformed = function(event) {
        demoComponent.text =  form.txtText.text;
    };
}
