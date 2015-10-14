/**
 * 
 * @author user
 */
function ModelDateCustom() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var mdlDate = new P.ModelDate();
    mdlDate.valueType = Date;
    mdlDate.format = 'h:mm:ss a z EEEE MMMM dd yyyy';
    mdlDate.data = model.qAllVisits;
    mdlDate.field = 'cursor.fromdate';
    
    mdlDate.width = 500;
    mdlDate.height = 29;
    var fieldsList = [{field: 'cursor.fromdate'}, {field: 'cursor.todate'}];
    form.chIsDate.selected = mdlDate.datePicker;
    form.chIsTime.selected = mdlDate.timePicker;
    form.txtData.text = "model.qAllVisits";
    form.txtFormat.text = mdlDate.format;
    form.mcField.displayList = fieldsList;
    form.mcField.displayField = 'field';

    for (var item in fieldsList) {
        if (fieldsList[item].field === mdlDate.field) {
            form.mcField.value = fieldsList[item];
        }
    }

    form.mcField.onValueChange = function (event) {
        if (form.mcField.value) {
            mdlDate.field = form.mcField.value.field;
        }
    };

    self.getDemoComponent = function () {
        return mdlDate;
    };
    
    self.getViewComponent = function () {
        return mdlDate;
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    self.getFormHeight = function () {
        return form.view.height;
    };

    model.requery(function () {
    });

    form.chIsDate.onActionPerformed = function (event) {
        mdlDate.datePicker = form.chIsDate.selected;
    };

    form.chIsTime.onActionPerformed = function (event) {
        mdlDate.timePicker = form.chIsTime.selected;
    };

    form.txtFormat.onActionPerformed = function (event) {
        mdlDate.format = form.txtFormat.text;
    };
}
