/* global P */

/**
 * 
 * @author mg
 * {global P}
 */
function FrozenRows() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    var widget = new P.BorderPane();
    widget.length = 10;
    widget.width = 10;

    self.getDemoComponent = function () {
        return widget;
    };

    self.getViewComponent = function () {
        return widget;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
    // TODO : place your code here

    model.requery(function () {
        // TODO : place your code here
    });

}
