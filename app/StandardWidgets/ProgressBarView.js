/**
 * 
 * @author jskonst
 */
define('ProgressBarView', ['forms', 'ui', 'forms/progress-bar'], function (Forms, Ui, ProgressBar, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var progressBar = new ProgressBar();
        progressBar.height = 30;
        progressBar.width = 500;
        progressBar.value = 60;
        form.tglTransition.selected = true;


        var pbParams = {'maximum': 100,
            'minimum': 0,
            'value': 0};

        form.mdlMaximum.data = pbParams;
        form.mdlMaximum.field = 'maximum';
        form.mdlMinimum.data = pbParams;
        form.mdlMinimum.field = 'minimum';
        form.mdlValue.data = pbParams;
        form.mdlValue.field = 'value';


        function initWidget() {
            pbParams.maximum = progressBar.maximum;
            pbParams.minimum = progressBar.minimum;
            pbParams.value = progressBar.value;
            form.txtText.text = progressBar.text;
        }

        self.show = function () {
            form.show();
        };

        self.getDemoComponent = function () {
            return progressBar;
        };

        self.getViewComponent = function () {
            return progressBar;
        };

        self.showOnPanel = function (aPanel) {
            initWidget();
            aPanel.add(form.view);
        };

        form.mdlMaximum.onValueChange = function (event) {
            progressBar.maximum = pbParams.maximum;
        };

        form.mdlMinimum.onValueChange = function (event) {
            progressBar.minimum = pbParams.minimum;
        };

        form.mdlValue.onValueChange = function (event) {
            progressBar.value = pbParams.value;
        };

        form.txtText.onActionPerformed = function (event) {
            if (form.txtText.text) {
                progressBar.text = form.txtText.text;
            } else {
                progressBar.text = null;
            }

        };

        self.getFormHeight = function () {
            return form.view.height;
        };

        form.tglTransition.onActionPerformed = function (event) {
            var progress = progressBar.element.getElementsByClassName('progress-bar');
            if (form.tglTransition.selected) {
                progress[0].style.transition = null;
            } else {
                progress[0].style.transition = 'linear width 0s';
            }
        };
        form.tglTransition.onActionPerformed();
    }
    return module_constructor;
});