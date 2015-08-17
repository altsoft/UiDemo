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

    var gaps = {'vGap': 2,
        'hGap': 2};
    form.mdlHGap.data = gaps;
    form.mdlHGap.field = 'hGap';
    form.mdlVGap.data = gaps;
    form.mdlVGap.field = 'vGap';

    var internalContainer = new P.BorderPane(gaps.hGap, gaps.vGap);
    var demoContainer = internalContainer;
    internalContainer.width = 800;
    internalContainer.height = 400;
    if (P.agent == P.HTML5) {
        internalContainer.element.style.border = "thin solid gray";
        internalContainer.element.style.borderRadius = "5px";
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

    function placeElement(aElement, counter) {
        try {
            aElement.child(0).horizontalAlignment = P.HorizontalPosition.CENTER;
            if (form.rbTop.selected) {
                internalContainer.add(aElement, P.VerticalPosition.TOP);
                aElement.child(0).text = "TOP";
                aElement.toolTipText = aElement.child(0).text;
                return;
            }
            if (form.rbLeft.selected) {
                internalContainer.add(aElement, P.HorizontalPosition.LEFT);
                aElement.child(0).text = "LEFT";
                aElement.toolTipText = aElement.child(0).text;
                return;
            }
            if (form.rbCenter.selected) {
                internalContainer.add(aElement, P.HorizontalPosition.CENTER);
                aElement.child(0).text = "CENTER";
                aElement.toolTipText = aElement.child(0).text;
                return;
            }
            if (form.rbRight.selected) {
                internalContainer.add(aElement, P.HorizontalPosition.RIGHT);
                aElement.child(0).text = "RIGHT";
                aElement.toolTipText = aElement.child(0).text;
                return;
            }
            if (form.rbBottom.selected) {
                internalContainer.add(aElement, P.VerticalPosition.BOTTOM);
                aElement.child(0).text = "BOTTOM";
                aElement.toolTipText = aElement.child(0).text;
                return;
            }
        } catch (e) {
            alert(e);
        }

    }

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);

    function placePnlElement(aColor, aText, aPosition, aWidth) {
        var pnlSubject = new P.BorderPane();
        pnlSubject.background = new P.Color(aColor);
        if (aWidth) {
            pnlSubject.width = aWidth;
        }
        var label = new P.Label(aText);
        label.width = 50;
        label.horizontalAlignment = P.HorizontalPosition.CENTER;
        pnlSubject.add(label);
        pnlSubject.itemname = label.text;
        internalContainer.add(pnlSubject, aPosition);
        addPanel.addComponentTolist(pnlSubject);
    }
    
    placePnlElement('#49a7f0', 'TOP', P.VerticalPosition.TOP);
    placePnlElement('#ea6dda', 'BOTTOM', P.VerticalPosition.BOTTOM);
    placePnlElement('#f5e04f', 'CENTER', P.HorizontalPosition.CENTER);
    placePnlElement('#67eacc', 'LEFT', P.HorizontalPosition.LEFT,60);
    placePnlElement('#6fea58', 'RIGHT', P.HorizontalPosition.RIGHT,60);
    

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

    model.requery(function () {
    });

    form.mdlHGap.onValueChange = function (event) {
        demoContainer.hgap = gaps.hGap;
    };

    form.mdlVGap.onValueChange = function (event) {
        demoContainer.vgap = gaps.vGap;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
