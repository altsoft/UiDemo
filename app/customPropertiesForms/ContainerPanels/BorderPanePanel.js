/**
 * 
 * @author user
 */
function BorderPanePanel() {
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

    var internalContainer = new P.BorderPane();
    internalContainer.width = 800;
    internalContainer.height = 400;
    if (P.agent == P.HTML5) {
        internalContainer.element.style.border = "solid";
    }
    var addPanel;
    var subject;

    self.getDemoComponent = function () {
        return internalContainer;
    };

    self.getViewComponent = function () {
        return internalContainer;
    };

    self.show = function () {
        form.show();
    };

    function getPosition(aElement) {
        subject = aElement;
    }

    function deleteElement(aElement) {
        internalContainer.remove(aElement);
    }

    var placeElement = function (aElement, counter) {
        try {
            aElement.toolTipText = "num " + counter + " id:" + internalContainer.count;
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

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);

    };

    model.requery(function () {
    });

    form.ffHGap.onActionPerformed = function (event) {
        internalContainer.hgap = form.ffHGap.value;
    };

    form.ffVGap.onActionPerformed = function (event) {
        internalContainer.vgap = form.ffVGap.value;
    };

}
