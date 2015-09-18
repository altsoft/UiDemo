/**
 * 
 * @author user
 */
function ButtonGroupWidget() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    model.requery(function () {
    });

    self.getDemoComponent = function () {
        return form.view;
    };

    self.getViewComponent = function () {
        return form.view;
    };

//    self.getCombo = function () {
//        return form.mdlItemsList;
//    };

    self.getAllRadioButtons = function(){
        return [form.radioButton, form.radioButton1, form.radioButton2];
    };

    self.getAllToggleButtons = function(){
        return [form.toggleButton, form.toggleButton1, form.toggleButton2];
    };
    
    self.getFirstMenuItems = function(){
        return [form.firstRadioMenuItem,form.firstRadioMenuItem1,form.firstRadioMenuItem2];
    };
    
    self.getSecondMenuItems = function(){
        return [form.secondRadioMenuItem,form.secondRadioMenuItem1,form.secondRadioMenuItem2];
    };
    
    self.show = function () {
        form.show();
    };

    self.getWidget = function () {
        return form.view;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };

}
