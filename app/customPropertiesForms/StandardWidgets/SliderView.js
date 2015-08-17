/**
 * 
 * @author jskonst
 */
function SliderView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var slider = new P.Slider("Slider");
    slider.height = 40;
    slider.width = 500;

    var sliderParams = {'maximum': 100,
        'minimum': 0,
        'value': 0};
    
    form.mdlMaximum.data = sliderParams;
    form.mdlMaximum.field = 'maximum';
    form.mdlMinimum.data = sliderParams;
    form.mdlMinimum.field = 'minimum';
    form.mdlValue.data = sliderParams;
    form.mdlValue.field = 'value';

    function initWidgets() {
        sliderParams.maximum = slider.maximum;
        sliderParams.minimum = slider.minimum;
        sliderParams.value = slider.value;
    }

    self.getDemoComponent = function () {
        return slider;
    };

    self.getViewComponent = function () {
        return slider;
    };

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidgets();
        aPanel.add(form.view);
    };

    slider.onActionPerformed = function (event) {
        sliderParams.value = slider.value;
    };

    form.mdlMaximum.onValueChange = function (event) {
        slider.maximum = sliderParams.maximum;
    };

    form.mdlMinimum.onValueChange = function (event) {
        slider.minimum = sliderParams.minimum;
    };

    form.mdlValue.onValueChange = function (event) {
        slider.value = sliderParams.value;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
