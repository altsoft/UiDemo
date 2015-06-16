/**
 * 
 * @author user
 */
function FlowPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;

    var externalContainer = aPlaygroundPanel;
    var internalContainer;
    var cModifiers;
    var addPanel;
    self.show = function () {
        form.show();
    };

    function preparations() {
        internalContainer = new P.FlowPane();
        internalContainer.background = new P.Color(P.Color.RED);
    }

    model.requery(function () {
        // TODO : place your code here
    });

    var infoCallBack = function (aElement) {

    };

    var modifyCallback = function (aElement) {

    };

    var deleteCallback = function (aElement) {
        internalContainer.remove(aElement);
    };

    var placeElement = function (aElement, counter) {
        internalContainer.add(aElement);
        aElement.child(0).text = "num " + counter + " id:" + internalContainer.count;
    };
    preparations();
    cModifiers = new ContainersModificator(internalContainer, externalContainer);
    addPanel = new AddComponentContainer(cModifiers, infoCallBack, modifyCallback, deleteCallback, placeElement);
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
        cModifiers.showOnPanel(aPanel);

    };


//    form.btnAddComponent.onActionPerformed = function (event) {
//        var newPnl = new P.BoxPane();
//        newPnl.width = form.ffWidth.value;
//        newPnl.height = form.ffHeight.value;
//
//        var redColor = Math.round(Math.random() * 255);
//        var greenColor = Math.round(Math.random() * 255);
//        var blueColor = Math.round(Math.random() * 255);
//        newPnl.background = new P.Color(redColor, greenColor, blueColor);
//        var label = new P.Label();
//        newPnl.add(label);
//        newPnl.onMouseClicked = function (event) {
//            if (cModifiers.isInformation()) {
//
//                return;
//            }
//            if (cModifiers.isModify()) {
//                newPnl.height = form.ffHeight.value;
//                newPnl.width = form.ffWidth.value;
//                newPnl.left = form.ffLeft.value;
//                newPnl.top = form.ffTop.value;
//
//                return;
//            }
//            if (cModifiers.isDelete()) {
//                internalContainer.remove(newPnl);
//                return;
//            }
//        };
//        internalContainer.add(newPnl
//        , new P.Anchors(form.ffLeft.value,
//                form.ffWidth.value,
//                form.ffRight.value,
//                form.ffTop.value,
//                form.ffHeight.value,
//                form.ffBottom.value));
//
//        label.text = "num " + counter + " id:" + internalContainer.count;
//        counter += 1;
//    };
    
    form.ffHGap.onActionPerformed = function(event) {
        internalContainer.hgap = form.ffHGap.value;
    };

    form.ffVGap.onActionPerformed = function(event) {
        internalContainer.vgap = form.ffVGap.value;
    };

}
