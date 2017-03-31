/**
 * 
 * @author jskonst
 */
define('SliderView', ['forms', 'ui', 'forms/slider'], function (Forms, Ui, Slider, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var slider = new Slider("Slider");
        slider.height = 40;
        slider.width = 500;
        slider.value = 60;

        var sliderParams = {'maximum': 100,
            'minimum': 0,
            'value': 60};

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

    }
    return module_constructor;
});