/**
 * 
 * @author user
 */
function testAdd() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    self.getView = function () {
        return form.view;
    };
    
    model.requery(/*function(){}*/);
    
    // TODO : place your code here
}
