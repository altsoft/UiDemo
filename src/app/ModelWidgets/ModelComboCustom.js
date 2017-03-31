/**
 * 
 * @author user
 */
define('ModelComboCustom', ['orm', 'forms', 'ui', 'forms/model-combo'], function (Orm, Forms, Ui, ModelCombo, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };

        var mdlComboBox = new ModelCombo();
        mdlComboBox.data = model.qAllVisits;
        mdlComboBox.displayField = "name";
        mdlComboBox.displayList = model.qAllPets;
        mdlComboBox.emptyText = "Choose a pet...";
        mdlComboBox.field = "cursor.pet";
        mdlComboBox.width = 300;
        mdlComboBox.height = 30;

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

        model.requery(function () {
        });

        form.chIsList.onActionPerformed = function (event) {
            mdlComboBox.list = form.chIsList.selected;
        };
        form.txtEmptyText.onActionPerformed = function (event) {
            mdlComboBox.emptyText = form.txtEmptyText.text;
        };
    }
    return module_constructor;
});