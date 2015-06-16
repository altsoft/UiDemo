/**
 * 
 * @author user
 */
function tempScriptData() {
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
           
    form.btnDelete.onActionPerformed = function(event) {
        // TODO add your handling code here
    };
    form.btnAdd.onActionPerformed = function(event) {
        model.scriptData.push({});
    };
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
}
