/**
 * 
 * @author jskonst
 */
function labelForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;

    function preparations() {
        form.txtText.text = demoComponent.text;
        form.txtIconTextGap.text = demoComponent.iconTextGap;
        iconFold = P.Icon.load("icons/arrow-090.png");
        demoComponent.icon = iconFold;
    }

    self.show = function () {
        preparations();
        form.show();
    };

    self.getView = function () {
        preparations();
        return form.view;
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
    
    form.tglHLeftAlign.onActionPerformed = function (event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.LEFT;
    };
    form.tglHRightAlign.onActionPerformed = function (event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.RIGHT;
    };

    form.tglHCenterAlign.onActionPerformed = function(event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.CENTER;
    };
    form.txtText.onActionPerformed = function() {
        demoComponent.text = form.txtText.text ;
    };
    
    
    form.tglVTop.onActionPerformed = function(event) {
       demoComponent.verticalTextPosition = P.VerticalPosition.TOP;
    };
    form.tglVCenter.onActionPerformed = function(event) {
       demoComponent.verticalTextPosition = P.VerticalPosition.CENTER;
    };
    
    form.tglVBottom.onActionPerformed = function(event) {
       demoComponent.verticalTextPosition = P.VerticalPosition.BOTTOM;
    };
    
    form.tglVTopAlign.onActionPerformed = function(event) {
       demoComponent.verticalAlignment = P.VerticalPosition.TOP;
    };
    
    form.tglVCenterAlign.onActionPerformed = function(event) {
         demoComponent.verticalAlignment = P.VerticalPosition.CENTER;
    };
    
    form.tglVBottomAlign.onActionPerformed = function(event) {
       demoComponent.verticalAlignment = P.VerticalPosition.BOTTOM;
    };
    
    form.txtIconTextGap.onActionPerformed = function(event) {
        demoComponent.iconTextGap = Number(form.txtIconTextGap);
    };

}
