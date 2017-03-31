/**
 * 
 * @author user
 */
define('ModelSpinCustom', ['orm', 'forms', 'ui','forms/model-spin'], function (Orm, Forms, Ui,ModelSpin, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
                
    self.show = function () {
        form.show();
    };

    var mdlSpin = new ModelSpin();
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

    form.txtEmptyText.onActionPerformed = function (event) {
        mdlSpin.emptyText = form.txtEmptyText.text;
    };

    mdlSpin.onValueChange = function (event) {
        form.txtValue.text = mdlSpin.value;
    };

}
    return module_constructor;
});