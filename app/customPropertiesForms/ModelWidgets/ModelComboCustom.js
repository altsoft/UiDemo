/**
 * 
 * @author user
 */
function ModelComboCustom() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    
    var mdlComboBox = new P.ModelCombo();
    mdlComboBox.data = model.qAllVisits;
    mdlComboBox.displayField = "name";
    mdlComboBox.displayList = model.qAllPets;
    mdlComboBox.emptyText = "Choose a pet...";
    mdlComboBox.field = "cursor.pet";
    mdlComboBox.height =29;
    mdlComboBox.width = 200;
    
    form.txtData.text = "model.qAllVisits";
    form.txtField.text = "'" + mdlComboBox.field + "'";
    form.txtDisplayField.text = "'" + mdlComboBox.displayField + "'";
    form.txtDisplayList.text = "model.qAllPets";
    form.txtEmptyText.text = mdlComboBox.emptyText;
    form.chIsList.selected = mdlComboBox.list;

    self.getDemoComponent = function () {
        return mdlComboBox;
    };

    self.getViewComponent = function () {
        return mdlComboBox;
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
    model.requery(function () {
        
    });

    form.chIsList.onActionPerformed = function (event) {
        mdlComboBox.list = form.chIsList.selected;
    };
    form.txtEmptyText.onActionPerformed = function (event) {
        mdlComboBox.emptyText = form.txtEmptyText.text;
    };
}
