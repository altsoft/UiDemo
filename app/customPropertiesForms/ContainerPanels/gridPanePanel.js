/**
 * 
 * @author user
 */
function gridPanePanel(aPlaygroundPanel) {
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

    function setContainer() {
        var rows = form.ffRows.value;
        var colls = form.ffColls.value;
        var hGap = form.ffHGap.value;
        var vGap = form.ffVGap.value;
        internalContainer = new P.GridPane(rows, colls, hGap, vGap); //1x1
        internalContainer.background = new P.Color(P.Color.RED);
    }

    function preparations() {
        setContainer();
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
        internalContainer.add(aElement, form.ffRow.value, form.ffColl.value);
        aElement.child(0).text = "num " + counter + " id:" + internalContainer.count;
    };
    preparations();
    cModifiers = new containersModificator(internalContainer, externalContainer);
    addPanel = new addComponentContainer(cModifiers, infoCallBack, modifyCallback, deleteCallback, placeElement);
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
        cModifiers.showOnPanel(aPanel);

    };




//    form.btnAddComponent.onActionPerformed = function (event) {
//        var newPnl = new P.BoxPane();
////        newPnl.width = form.ffWidth.value;
////        newPnl.height = form.ffHeight.value;
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
////                newPnl.height = form.ffHeight.value;
////                newPnl.width = form.ffWidth.value;
////                newPnl.left = form.ffLeft.value;
////                newPnl.top = form.ffTop.value;
//
//                return;
//            }
//            if (cModifiers.isDelete()) {
//                internalContainer.remove(newPnl);
//                return;
//            }
//        };
//        internalContainer.add(newPnl,0,0);
//
//        label.text = "num " + counter + " id:" + internalContainer.count;
//        counter += 1;
//    };


    form.btnSetGrid.onActionPerformed = function (event) {
        setContainer();
    };
    form.button.onActionPerformed = function (event) {
        internalContainer.hgap = Number(form.ffHGap.text);
        internalContainer.vgap = Number(form.ffVGap.text);
    };
}
