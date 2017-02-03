/**
 * 
 * @author user
 */

define('ModelTextView', ['orm', 'forms', 'ui', 'forms/model-formatted-field'], function (Orm, Forms, Ui, ModelFormattedField, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        var widget;
        var fieldsList = ["cursor.firstname", "cursor.lastname", "cursor.address", "cursor.city", "cursor.telephone", "cursor.telephone", "cursor.email"];
        var index = 0;
        form.panel.clear();
        widget = new ModelFormattedField();
        widget.data = model.qAllOwners;
        widget.field = "cursor.firstname";
        form.panel.add(widget);
        self.show = function () {
            form.show();
        };

        model.requery(function () {
            // TODO : place your code here
        });
        self.getDemoComponent = function () {
            return widget;
        };

        self.getViewComponent = function () {
            return form.view;
        };

        form.btnNext.onActionPerformed = function (event) {
            index += 1;
            if (index >= fieldsList.length) {
                index = 0;
            }
            widget.field = fieldsList[index];
        };
        form.btnPrevious.onActionPerformed = function (event) {
            index -= 1;
            if (index <= 0) {
                index = fieldsList.length - 1;
            }
            widget.field = fieldsList[index];
        };
    }
    return module_constructor;
});