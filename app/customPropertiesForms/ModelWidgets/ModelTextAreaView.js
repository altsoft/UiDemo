/**
 * 
 * @author user
 */
function ModelTextAreaView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var widget;
    
    form.panel.clear();
    widget = new P.ModelTextArea();
    widget.data = model.qAllOwners;
    widget.field = 'cursor.firstname';
    form.panel.add(widget);
    
    self.show = function () {
        form.show();
    };

    model.requery(function () {
    });
    
    self.getDemoComponent = function () {
        return widget;
    };

    self.getViewComponent = function () {
        return form.view;
    };

}
