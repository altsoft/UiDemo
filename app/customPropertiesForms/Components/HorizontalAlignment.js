/**
 * 
 * @author user
 */
function HorizontalAlignment(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var buttonGroup = new P.ButtonGroup();
    buttonGroup.add(form.tglHLeftAlign);
    buttonGroup.add(form.tglHCenterAlign);
    buttonGroup.add(form.tglHRightAlign);

    function preparations() {
        switch (demoComponent.horizontalAlignment) {
            case P.HorizontalPosition.LEFT:
            {
                form.tglHLeftAlign.selected = true;

                break;
            }
            case P.HorizontalPosition.RIGHT:
            {
                form.tglHRightAlign.selected = true;
                break;
            }
            case P.HorizontalPosition.CENTER:
            {
                form.tglHCenterAlign.selected = true;
                break;
            }
        }
    };

    self.show = function () {
        form.show();
    };

    model.requery(function () {
    });

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

    form.tglHLeftAlign.onActionPerformed = function (event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.LEFT;
    };
    form.tglHRightAlign.onActionPerformed = function (event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.RIGHT;
    };

    form.tglHCenterAlign.onActionPerformed = function (event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.CENTER;
    };


}
