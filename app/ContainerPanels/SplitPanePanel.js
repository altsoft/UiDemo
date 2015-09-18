/**
 * 
 * @author user
 */
function SplitPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    
    var externalContainer = aPlaygroundPanel;
    var internalContainer;
    var cModifiers;
    var pnl1;
    var pnl2;
    form.radioButton1.selected = true;
    
    self.show = function () {
        form.show();
    };

    function preparations() {
        internalContainer = new P.SplitPane(P.Orientation.VERTICAL);
        pnl1 = new AnchorsPanePanel();
        pnl1.background = new P.Color(P.Color.RED);
        pnl2 = new AnchorsPanePanel();
        pnl2.background = new P.Color(P.Color.GREEN);
        internalContainer.add(pnl1);
        internalContainer.add(pnl2);
        internalContainer.background = new P.Color(P.Color.RED);
    }

    model.requery(function () {
        // TODO : place your code here
    });

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
        externalContainer.add(internalContainer, new P.Anchors(2, null, 2, 2, null, 2));
    };



    form.checkBox.onActionPerformed = function(event) {
        if (form.checkBox.selected){
            internalContainer.oneTouchExpandable = true;
        }else{
            internalContainer.oneTouchExpandable = false;
        }
    };
    form.radioButton.onActionPerformed = function(event) {
        if (form.radioButton.selected){
            internalContainer.orientation = P.Orientation.HORIZONTAL;
        }
    };
    
    form.radioButton1.onActionPerformed = function(event) {
        if (form.radioButton.selected){
            internalContainer.orientation = P.Orientation.VERTICAL;
        }
    };
}
