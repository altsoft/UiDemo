/**
 * 
 * @author user
 */
function ModelSpinCustom() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var demoComponent = new ModelSpinView();

    self.getDemoComponent = function () {
        return demoComponent.getDemoComponent();
    };
    
    self.getViewComponent = function () {
        return demoComponent.getViewComponent();
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    model.requery(function () {
        // TODO : place your code here
    });

}
