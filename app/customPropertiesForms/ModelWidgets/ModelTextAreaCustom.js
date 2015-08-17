/**
 * 
 * @author user
 */
function ModelTextAreaCustom() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var fieldsList = [{field: 'cursor.firstname'},
        {field: 'cursor.lastname'},
        {field: 'cursor.address'},
        {field: 'cursor.city'},
        {field: 'cursor.telephone'},
        {field: 'cursor.email'}];
    
    var mdlTextArea = new P.ModelTextArea();
    mdlTextArea.data = model.qAllOwners;
    mdlTextArea.field = 'cursor.firstname';
    mdlTextArea.width = 500;
    mdlTextArea.height = 100;
    form.txtData.text = 'model.qAllOwners';

    form.mcField.data = fieldsList;
    form.mcField.displayList = fieldsList;
    form.mcField.displayField = 'field';
    form.mcField.field = 'field';

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
