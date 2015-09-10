/**
 * 
 * @author jskonst
 */
function ProgressBarView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var progressBar = new P.ProgressBar();
    progressBar.height = 30;
    progressBar.width = 500;
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
        var progress = progressBar.element.getElementsByClassName('gwt-ProgressBar-bar');
        if (form.tglTransition.selected) {
            progress[0].style.transition = 'linear width 1s';
        } else {
            progress[0].style.transition = null;
        }
    };
    form.tglTransition.onActionPerformed();
}
