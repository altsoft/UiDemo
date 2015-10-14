/**
 * 
 * @author jskonst
 */
function ButtonView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var button = new P.Button("Button");
    button.height = 27;
    button.width = 100;
    var lblForm;
    self.showOnPanel = function (aPanel) {
        lblForm = new LabelView(button);
        lblForm.showOnPanel(aPanel);
    };

    self.getDemoComponent = function () {
        return button;
    };

    self.getViewComponent = function () {
        return button;
    };
    
    self.getFormHeight = function () {
        var commonHeight = lblForm.getFormHeight()
        if (commonHeight>form.view.height){
            return commonHeight;
        }else{
            return form.view.height;
        }
    };
}
