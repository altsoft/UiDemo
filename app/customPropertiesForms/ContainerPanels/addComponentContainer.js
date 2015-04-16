/**
 * 
 * @author user
 */
function addComponentContainer(aModifyContainer, aInfoCallback, aModifyCallback,aDeleteCallback, aPlaceElement) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    
    var cModifiers = aModifyContainer;
    var infoCallback = aInfoCallback;
    var modifyCallback = aModifyCallback;
    var placeElement = aPlaceElement;
    var deleteCallback = aDeleteCallback;
    self.show = function () {
        form.show();
    };

    function preparations() {
        
    }

    model.requery(function () {
        // TODO : place your code here
    });

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
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
                form.ffWidth.value = newPnl.width;
                form.ffHeight.value = newPnl.height;
                infoCallback(newPnl);
                return;
            }
            if (cModifiers.isModify()) {
                newPnl.height = form.ffHeight.value;
                newPnl.width = form.ffWidth.value;
                modifyCallback(newPnl);
                return;
            }
            if (cModifiers.isDelete()) {
                deleteCallback(newPnl);
                return;
            }
        };
        placeElement(newPnl,counter);
//        label.text = "num " + counter + " id:" + internalContainer.count;
        counter += 1;
    };


}
