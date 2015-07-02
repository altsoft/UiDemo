/* global P */

/**
 * 
 * @author user
 * {global P}
 */
function tempFF() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    // TODO : place your code here
    
    model.requery(function () {
        // TODO : place your code here
    });
    
    
    form.btnSetFormat.onActionPerformed = function(event) {
        form.formattedField.format = form.txtFormat.text;
        form.formattedField.valueType = form.formattedField1.value;
    };
    
    form.btnGetValue.onActionPerformed = function(event) {
        form.txtResult.text = form.formattedField.value;
    };
}
