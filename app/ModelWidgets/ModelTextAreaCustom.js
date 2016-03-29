/**
 * 
 * @author user
 */
define('ModelTextAreaCustom', ['orm', 'forms', 'ui', 'forms/model-text-area'], function (Orm, Forms, Ui, ModelTextArea, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };

        var fieldsList = [{field: 'cursor.firstname'},
            {field: 'cursor.lastname'},
            {field: 'cursor.address'},
            {field: 'cursor.city'},
            {field: 'cursor.telephone'},
            {field: 'cursor.email'}];

        var mdlTextArea = new ModelTextArea();
        mdlTextArea.data = model.qAllOwners;
        mdlTextArea.field = 'cursor.firstname';
        mdlTextArea.width = 500;
        mdlTextArea.height = 100;
        form.txtData.text = 'model.qAllOwners';

        form.mcField.displayList = fieldsList;
        form.mcField.displayField = 'field';

        for (var item in fieldsList) {
            if (fieldsList[item].field === mdlTextArea.field) {
                form.mcField.value = fieldsList[item];
            }
        }

        form.mcField.onValueChange = function (event) {
            if (form.mcField.value) {
                mdlTextArea.field = form.mcField.value.field;
            }
        };

        self.getDemoComponent = function () {
            return mdlTextArea;
        };

        self.getViewComponent = function () {
            return mdlTextArea;
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
    }
    return module_constructor;
});
