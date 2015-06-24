/**
 * 
 * @author user
 */
function HorizontalTextPosition(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var buttonGroup = new P.ButtonGroup();
    buttonGroup.add(form.tglHLeft);
    buttonGroup.add(form.tglHCenter);
    buttonGroup.add(form.tglHRight);
    
    function preparations() {
        switch (demoComponent.horizontalTextPosition) {
            case P.HorizontalPosition.LEFT:
            {
                form.tglHLeft.selected = true;

                break;
            }
            case P.HorizontalPosition.RIGHT:
            {
                form.tglHRight.selected = true;
                break;
            }
            case P.HorizontalPosition.CENTER:
            {
                form.tglHCenter.selected = true;
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
    
     form.tglHLeft.onActionPerformed = function (event) {
        demoComponent.horizontalTextPosition = P.HorizontalPosition.LEFT;

    };
    form.tglHCenter.onActionPerformed = function (event) {
        demoComponent.horizontalTextPosition = P.HorizontalPosition.CENTER;

    };
    form.tglHRight.onActionPerformed = function (event) {
        demoComponent.horizontalTextPosition = P.HorizontalPosition.RIGHT;
    };
    
}
