/**
 * 
 * @author user
 */
function VerticalTextPosition(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var buttonGroup = new P.ButtonGroup();
    buttonGroup.add(form.tglVTop);
    buttonGroup.add(form.tglVCenter);
    buttonGroup.add(form.tglVBottom);

    function preparations() {
        switch (demoComponent.verticalTextPosition) {
            case P.VerticalPosition.TOP:
            {
                form.tglVTop.selected = true;
                break;
            }
            case P.VerticalPosition.CENTER:
            {
                form.tglVCenter.selected = true;
                break;
            }
            case P.VerticalPosition.BOTTOM:
            {
                form.tglVBottom.selected = true;
                break;
            }
        }
    }
    ;


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

    form.tglVTop.onActionPerformed = function (event) {
        demoComponent.verticalTextPosition = P.VerticalPosition.TOP;
    };
    form.tglVCenter.onActionPerformed = function (event) {
        demoComponent.verticalTextPosition = P.VerticalPosition.CENTER;
    };

    form.tglVBottom.onActionPerformed = function (event) {
        demoComponent.verticalTextPosition = P.VerticalPosition.BOTTOM;
    };



}
