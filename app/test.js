/**
 * 
 * @author jskonst
 */
function test() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    model.requery(/*function(){}*/);
  
    form.button.onActionPerformed = function(event) {
        model.push();
    };
    form.button1.onActionPerformed = function(event) {
        model.insert();
    };
}
