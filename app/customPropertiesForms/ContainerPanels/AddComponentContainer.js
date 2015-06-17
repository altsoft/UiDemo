/**
 * 
 * @author user
 */
function AddComponentContainer(aModifyContainer, aInfoCallback, aModifyCallback, aDeleteCallback, aPlaceElement) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var cModifiers = aModifyContainer;
    var infoCallback = aInfoCallback;
    var modifyCallback = aModifyCallback;
    var placeElement = aPlaceElement;
    var deleteCallback = aDeleteCallback;
    var colorsArray = [P.Color.BLUE, P.Color.GRAY, P.Color.GREEN,
        P.Color.MAGENTA, P.Color.ORANGE, P.Color.PINK, P.Color.RED, P.Color.WHITE, P.Color.YELLOW];
    
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
        var colorIndex = Math.floor(Math.random() * colorsArray.length);
        newPnl.background = new P.Color(colorsArray[colorIndex]);
        var label = new P.Label();
        newPnl.add(label);
        newPnl.onMouseClicked = function (event) {
            form.ffWidth.value = newPnl.width;
            form.ffHeight.value = newPnl.height;
            infoCallback(newPnl);
//            if (cModifiers.isModify()) {
//                newPnl.height = form.ffHeight.value;
//                newPnl.width = form.ffWidth.value;
//                modifyCallback(newPnl);
//                return;
//            }
//            if (cModifiers.isDelete()) {
//                deleteCallback(newPnl);
//                return;
//            }
        };
        placeElement(newPnl, counter);
        label.text = "Click me!";
        counter += 1;
    };
}
