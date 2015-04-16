/**
 * 
 * @author user
 */
function splitPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    
    var externalContainer = aPlaygroundPanel;
    var internalContainer;
    var cModifiers;
    self.show = function () {
        form.show();
    };

    function preparations() {
        internalContainer = new P.AnchorsPane();
        internalContainer.background = new P.Color(P.Color.RED);
    }

    model.requery(function () {
        // TODO : place your code here
    });

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
        cModifiers = new containersModificator(internalContainer, externalContainer);
        cModifiers.showOnPanel(aPanel);
        
    };




    form.btnAddComponent.onActionPerformed = function (event) {
        var newPnl = new P.BoxPane();
        newPnl.width = form.ffWidth.value;
        newPnl.height = form.ffHeight.value;

        var redColor = Math.round(Math.random() * 255);
        var greenColor = Math.round(Math.random() * 255);
        var blueColor = Math.round(Math.random() * 255);
        newPnl.background = new P.Color(redColor, greenColor, blueColor);
        var label = new P.Label();
        newPnl.add(label);
        newPnl.onMouseClicked = function (event) {
            if (cModifiers.isInformation()) {

                return;
            }
            if (cModifiers.isModify()) {
                newPnl.height = form.ffHeight.value;
                newPnl.width = form.ffWidth.value;
                newPnl.left = form.ffLeft.value;
                newPnl.top = form.ffTop.value;

                return;
            }
            if (cModifiers.isDelete()) {
                internalContainer.remove(newPnl);
                return;
            }
        };
        internalContainer.add(newPnl
        , new P.Anchors(form.ffLeft.value,
                form.ffWidth.value,
                form.ffRight.value,
                form.ffTop.value,
                form.ffHeight.value,
                form.ffBottom.value));

        label.text = "num " + counter + " id:" + internalContainer.count;
        counter += 1;
    };


}
