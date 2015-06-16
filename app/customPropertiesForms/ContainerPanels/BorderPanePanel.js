/**
 * 
 * @author user
 */
function BorderPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var btnGrpPos = new P.ButtonGroup();
    btnGrpPos.add(form.rbTop);
    btnGrpPos.add(form.rbLeft);
    btnGrpPos.add(form.rbCenter);
    btnGrpPos.add(form.rbRight);
    btnGrpPos.add(form.rbBottom);
    form.rbCenter.selected = true;

    var externalContainer = aPlaygroundPanel;
    var internalContainer;
    var cModifiers;
    var addPanel;
    self.show = function () {
        form.show();
    };

    function preparations() {
        internalContainer = new P.BorderPane();
        internalContainer.background = new P.Color(P.Color.RED);
    }

    var infoCallBack = function (aElement) {
//        form.ffLeft.value = aElement.left;
//        form.ffTop.value = aElement.top;
    };

    var modifyCallback = function (aElement) {
//        aElement.left = form.ffLeft.value;
//        aElement.top = form.ffTop.value;
    };

    var deleteCallback = function (aElement) {
        internalContainer.remove(aElement);
    };

    var placeElement = function (aElement, counter) {
        try {
            if (form.rbTop.selected) {
                internalContainer.add(aElement, P.VerticalPosition.TOP);
                aElement.child(0).text = "TOP " + " id:" + internalContainer.count;
                return;
            }
            if (form.rbLeft.selected) {
                internalContainer.add(aElement, P.HorizontalPosition.LEFT);
                aElement.child(0).text = "LEFT " + " id:" + internalContainer.count;
                return;
            }
            if (form.rbCenter.selected) {
                internalContainer.add(aElement, P.HorizontalPosition.CENTER);
                aElement.child(0).text = "CENTER " + " id:" + internalContainer.count;
                return;
            }
            if (form.rbRight.selected) {
                internalContainer.add(aElement, P.HorizontalPosition.RIGHT);
                aElement.child(0).text = "RIGHT " + " id:" + internalContainer.count;
                return;
            }
            if (form.rbBottom.selected) {
                internalContainer.add(aElement, P.VerticalPosition.BOTTOM);
                aElement.child(0).text = "BOTTOM " + " id:" + internalContainer.count;
                return;
            }
        } catch (e) {
            alert(e);
        }


    };
    preparations();
    cModifiers = new ContainersModificator(internalContainer, externalContainer);
    addPanel = new AddComponentContainer(cModifiers, infoCallBack, modifyCallback, deleteCallback, placeElement);
    
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
        cModifiers.showOnPanel(aPanel);

    };

    model.requery(function () {
    });


//    form.btnAddComponent.onActionPerformed = function (event) {
//        var newPnl = new P.BoxPane();
////        newPnl.width = form.ffWidth.value;
////        newPnl.height = form.ffHeight.value;
//        internalContainer.hgap = Number(form.ffHGap.text);
//        internalContainer.vgap = Number(form.ffVGap.text);
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
//
//                return;
//            }
//            if (cModifiers.isDelete()) {
//                internalContainer.remove(newPnl);
//                return;
//            }
//        };
//
//
//
//    };

    form.ffHGap.onActionPerformed = function(event) {
        internalContainer.hgap = form.ffHGap.value;
    };

    form.ffVGap.onActionPerformed = function(event) {
        internalContainer.vgap = form.ffVGap.value;
    };

}
