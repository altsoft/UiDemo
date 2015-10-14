/**
 * 
 * @author user
 */
function ModelDateView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var widget;

    form.panel.clear();
    widget = new P.ModelDate();
    widget.data = model.qAllVisits;
    widget.field = 'cursor.fromdate';
    widget.valueType = Date;
    widget.format = 'HH:mm:ss z MMMM dd yyyys'
    form.panel.add(widget);

    self.show = function () {
        form.show();
    };
    // TODO : place your code here

    model.requery(function () {
        // TODO : place your code here
    });

    self.getDemoComponent = function () {
        return widget;
    };

    self.getViewComponent = function () {
        return form.view;
    };


}
