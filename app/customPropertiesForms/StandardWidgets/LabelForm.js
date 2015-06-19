/**
 * 
 * @author jskonst
 */
function LabelForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var horizontalText;
    var horizontalAlign;
    var verticalText;
    var verticalAlign;
    
    self.setDemoComponent = function(aDemoComponent){
        demoComponent = aDemoComponent;
    };
    
    function preparations() {
        horizontalText = new HorizontalTextPosition(demoComponent);
        horizontalAlign = new HorizontalAlignment(demoComponent);
        verticalText = new VerticalTextPosition(demoComponent);
        verticalAlign = new VerticalAlignment(demoComponent);
        
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
        demoComponent.iconTextGap = form.txtIconTextGap.value;
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
