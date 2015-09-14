/**
 * 
 * @author user
 */
function ModelTextCustom() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    self.getDemoComponent = function () {
        return mdlText;
    };
    var fieldsList = [{field: 'cursor.firstname'},
        {field: 'cursor.lastname'},
        {field: 'cursor.address'},
        {field: 'cursor.city'},
        {field: 'cursor.telephone'},
        {field: 'cursor.email'}];
    
    var mdlText = new P.ModelFormattedField();
    mdlText.data = model.qAllOwners;
    mdlText.field = "cursor.firstname";
    mdlText.height = 29;
    mdlText.width = 200;
    form.txtData.text = 'model.qAllOwners';
    form.mcField.data = fieldsList;
    form.mcField.displayList = fieldsList;
    form.mcField.displayField = 'field';
    form.mcField.field = 'field';

    for (var item in fieldsList) {
        if (fieldsList[item].field === mdlText.field) {
            form.mcField.value = fieldsList[item];
        }
    }

    form.mcField.onValueChange = function (event) {
        if (form.mcField.value) {
            mdlText.field = form.mcField.value.field;
        }
    };

    self.getViewComponent = function () {
        return mdlText;
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
    form.txtFormat.onActionPerformed = function(event) {
        // TODO Добавьте здесь свой код
    };
}
