/**
 * 
 * @author user
 */
define('ModelCheckCustom', ['orm', 'forms', 'ui', 'forms/model-check-box'], function (Orm, Forms, Ui, ModelCheckBox, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };

//    var modelCheckView = new ModelCheckView();
        //var mdlCheckBox = self.getDemoComponent();

        var mdlCheckBox = new ModelCheckBox();
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
        };

        self.showOnPanel = function (aPanel) {
            aPanel.add(form.view);
        };

        model.requery(function () {
            // TODO : place your code here
        });

        form.txtText.onActionPerformed = function (event) {
            mdlCheckBox.text = form.txtText.text;
        };
    }
    return module_constructor;
});
