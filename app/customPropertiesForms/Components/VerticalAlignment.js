/**
 * 
 * @author user
 */
function VerticalAlignment(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    var demoComponent = aDemoComponent;
    var buttonGroup = new P.ButtonGroup();
    buttonGroup.add(form.tglVTopAlign);
    buttonGroup.add(form.tglVCenterAlign);
    buttonGroup.add(form.tglVBottomAlign);

function preparations() {
        switch (demoComponent.verticalAlignment) {
            case P.VerticalPosition.TOP:
            {
                form.tglVTopAlign.selected = true;
                break;
            }
            case P.VerticalPosition.CENTER:
            {
                form.tglVCenterAlign.selected = true;
                break;
            }
             case P.VerticalPosition.BOTTOM:
            {
                form.tglVBottomAlign.selected = true;
                break;
            }
        }
    };

    self.show = function () {
        form.show();
    };

    // TODO : place your code here

    model.requery(function () {
        // TODO : place your code here
    });

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

    form.tglVTopAlign.onActionPerformed = function (event) {
        demoComponent.verticalAlignment = P.VerticalPosition.TOP;
    };

    form.tglVCenterAlign.onActionPerformed = function (event) {
        demoComponent.verticalAlignment = P.VerticalPosition.CENTER;
    };

    form.tglVBottomAlign.onActionPerformed = function (event) {
        demoComponent.verticalAlignment = P.VerticalPosition.BOTTOM;
    };
}
