/**
 * 
 * @author user
 */
function DeleteConfirm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var callback;
    
    self.show = function () {
        form.show();
    };
    
    self.showModal = function (aCallback){
        callback = aCallback;
        form.showModal();
    };
    
    model.requery(function () {
        // TODO : place your code here
    });
    
    form.btnOk.onActionPerformed = function(event) {
        callback();
        form.close();
    };
    
    form.btnCancel.onActionPerformed = function(event) {
        form.close();
    };
}
