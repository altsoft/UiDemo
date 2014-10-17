/**
 * 
 * @author jskonst
 */
function textFieldForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };
    // TODO : place your code here
    self.getView = function(){
      return form.view;  
    };
    
}
