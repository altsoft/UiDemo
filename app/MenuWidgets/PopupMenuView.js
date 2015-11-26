/**
 * 
 * @author user
 */
function PopupMenuView(allItemsList) {
    var self = this
            , form = P.loadForm(this.constructor.name);
    var widget = new P.Label('Right click to call popup menu');
    form.panel.add(widget);

    self.getDemoComponent = function () {
        return widget;
    };

    self.getViewComponent = function () {
        return form.view;
    };

    self.getCombo = function () {
        return form.mdlItemsList;
    };

    self.show = function () {
        form.show();
    };

    self.getWidget = function () {
        return widget;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
