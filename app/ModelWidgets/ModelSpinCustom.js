/**
 * 
 * @author user
 */
function ModelSpinCustom() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var mdlSpin = new P.ModelSpin();
    mdlSpin.data = model.qAllVisits;
    mdlSpin.field = "cursor.cost";
    mdlSpin.emptyText = "Enter cost...";
    
    mdlSpin.width = 300;
    mdlSpin.height = 30;
    form.txtData.text = "model.qAllVisits";
    form.txtField.text = "'" + mdlSpin.field + "'";
    form.txtValue.text = mdlSpin.value;
    form.txtEmptyText.text = mdlSpin.emptyText;
 
    self.getDemoComponent = function () {
        return mdlSpin;
    };

    self.getViewComponent = function () {
        return mdlSpin;
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    model.requery(function () {
        // TODO : place your code here
    });

    self.getFormHeight = function () {
        return form.view.height;
    };
    form.txtEmptyText.onActionPerformed = function (event) {
        mdlSpin.emptyText = form.txtEmptyText.text;
    };

    mdlSpin.onValueChange = function (event) {
        form.txtValue.text = mdlSpin.value;
    };

}
