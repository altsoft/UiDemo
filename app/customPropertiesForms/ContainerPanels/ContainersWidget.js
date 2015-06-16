/**
 * 
 * @author user
 */
function ContainersWidget() {
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
    
    
    self.getWidget = function () {
        return form.view;
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(aPanel);
    };
    
    self.getFormView = function (){
        return form.view;
    };
    
}
