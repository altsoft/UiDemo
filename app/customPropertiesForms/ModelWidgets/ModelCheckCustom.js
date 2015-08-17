/**
 * 
 * @author user
 */
function ModelCheckCustom() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

//    var modelCheckView = new ModelCheckView();
    //var mdlCheckBox = self.getDemoComponent();
    
    var mdlCheckBox = new P.ModelCheckBox();
    mdlCheckBox.height = 29;
    mdlCheckBox.width = 200;
    mdlCheckBox.data = model.qAllVisits;
    mdlCheckBox.field = "cursor.ispaid";
    mdlCheckBox.text = "ispaid";
    
    form.txtData.text = "model.qAllVisits";
    form.txtField.text = "'" + mdlCheckBox.field + "'";
    form.txtText.text = mdlCheckBox.text;

    self.getDemoComponent = function () {
        return mdlCheckBox;
    };

    self.getViewComponent = function () {
        return mdlCheckBox;
        //return modelCheckView.getViewComponent();
        
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

    form.txtText.onActionPerformed = function (event) {
        mdlCheckBox.text = form.txtText.text;
    };
}
