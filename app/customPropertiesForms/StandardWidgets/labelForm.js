/**
 * 
 * @author jskonst
 */
function labelForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var horizontalText = new HorizontalTextPosition(demoComponent);
    var horizontalAlign = new HorizontalAlignment(demoComponent);
    var verticalText = new VerticalTextPosition(demoComponent);
    var verticalAlign = new VerticalAlignment(demoComponent);
    function preparations() {
        
        form.txtText.text = demoComponent.text;
        form.txtIconTextGap.text = demoComponent.iconTextGap;
        form.btnIcon.icon = demoComponent.icon;
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
        horizontalText.showOnPanel(aPanel);
        horizontalAlign.showOnPanel(aPanel);
        verticalText.showOnPanel(aPanel);
        verticalAlign.showOnPanel(aPanel);
    };

    form.txtText.onActionPerformed = function () {
        demoComponent.text = form.txtText.text;
    };

    form.txtIconTextGap.onValueChange = function (event) {
        P.Logger.info("here");
        demoComponent.iconTextGap = Number(form.txtIconTextGap);
    };

    form.txtIconTextGap.onActionPerformed = function(event) {
        P.Logger.info("here");
        
    };
    
    form.txtIconTextGap.onChange= function(event) {
        P.Logger.info("here");
        
    };


    var uploadEnded = function(file){
        form.btnIcon.icon = file;
        demoComponent.icon = file;
    };
    
    form.btnIcon.onActionPerformed = function (event) {
        var uploading =new uploadingModule(uploadEnded,".png,.ico,.gif,.jpg");
        uploading.execute();
    };


}
