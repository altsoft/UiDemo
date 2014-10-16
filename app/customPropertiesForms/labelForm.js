/**
 * 
 * @author jskonst
 */
function labelForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };
    
    self.getView = function(){
      return form.view;  
    };
}
