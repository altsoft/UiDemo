/**
 * 
 * @author user
 */
function BorderPanePanel() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var gaps = {'vGap': 2,
        'hGap': 2};
    form.mdlHGap.data = gaps;
    form.mdlHGap.field = 'hGap';
    form.mdlVGap.data = gaps;
    form.mdlVGap.field = 'vGap';

    var elementsList = [];
    var counter = 1;

    form.mcmbElList.data = elementsList;
    form.mcmbElList.displayField = "itemname";
    form.mcmbElList.displayList = elementsList;
    form.mcmbElList.field = "itemname";

    var componentSize = {'width': 0,
        'height': 0};
    form.mdlWidth.data = componentSize;
    form.mdlWidth.field = 'width';
    form.mdlHeight.data = componentSize;
    form.mdlHeight.field = 'height';

    var colorsArray = [new P.Color('#49a7f0'), new P.Color('#67eacc'), new P.Color('#6fea58'),
        new P.Color('#ea6dda'), new P.Color('#fa9037'), P.Color.PINK,
        new P.Color('#f04949'), new P.Color('#b6b6b6'), new P.Color('#f5e04f')];


    var internalContainer = new P.BorderPane(gaps.hGap, gaps.vGap);
    var demoContainer = internalContainer;
    internalContainer.width = 800;
    internalContainer.height = 400;
    if (P.agent == P.HTML5) {
        internalContainer.element.style.border = "thin solid gray";
        internalContainer.element.style.borderRadius = "5px";
    }

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

    function addComponentTolist(element) {
        elementsList.push(element);
        form.mcmbElList.value = element;
    }

    function placeElement(aElement, counter) {
        var position;
        var frmSelectPosition = new BorderPositionSelection();
        frmSelectPosition.showModal(function (pos) {
            position = pos;
            try {
                aElement.child(0).horizontalAlignment = P.HorizontalPosition.CENTER;
                internalContainer.add(aElement, position);

                if (position === P.VerticalPosition.TOP) {
                    aElement.child(0).text = "TOP";
                }
                if (position === P.HorizontalPosition.LEFT) {
                    aElement.child(0).text = "LEFT";
                }
                if (position === P.VerticalPosition.CENTER) {
                    aElement.child(0).text = "CENTER";
                }
                if (position === P.HorizontalPosition.RIGHT) {
                    aElement.child(0).text = "RIGHT";
                }
                if (position === P.VerticalPosition.BOTTOM) {
                    aElement.child(0).text = "BOTTOM";
                }
                //remove previouse
                for (var i in elementsList) {
                    if (elementsList[i].itemname === aElement.child(0).text) {
                        deleteElement(elementsList[i]);
                        elementsList.splice(i, 1);
                    }
                }
                aElement.toolTipText = aElement.child(0).text;
                aElement.itemname = aElement.toolTipText;
                addComponentTolist(aElement);

            } catch (e) {
                alert(e);
            }
        });
    }



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
        addComponentTolist(pnlSubject);
    }

    placePnlElement('#49a7f0', 'TOP', P.VerticalPosition.TOP);
    placePnlElement('#ea6dda', 'BOTTOM', P.VerticalPosition.BOTTOM);
    placePnlElement('#f5e04f', 'CENTER', P.HorizontalPosition.CENTER);
    placePnlElement('#67eacc', 'LEFT', P.HorizontalPosition.LEFT, 60);
    placePnlElement('#6fea58', 'RIGHT', P.HorizontalPosition.RIGHT, 60);


    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
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

    form.btnAddComponent.onActionPerformed = function (event) {
        var pnlSubject = new P.BorderPane();
        pnlSubject.width = componentSize.width;
        pnlSubject.height = componentSize.height;
        var colorIndex = Math.floor(Math.random() * colorsArray.length);
        pnlSubject.background = new P.Color(colorsArray[colorIndex]);
        var label = new P.Label();
        label.width = 50;
        pnlSubject.add(label);
        pnlSubject.onMousePressed = function (event) {
            componentSize.width = pnlSubject.width;
            componentSize.height = pnlSubject.height;
            form.mcmbElList.value = pnlSubject;
        };
        placeElement(pnlSubject, counter);

        if (!label.text) {
            label.text = "Click to select";
        }
        counter += 1;
    };

    form.btnDelete.onActionPerformed = function (event) {
        deleteElement(form.mcmbElList.value);
        elementsList.splice(elementsList.indexOf(form.mcmbElList.value), 1);
        form.mcmbElList.value = elementsList[0];
    };

    form.mdlHeight.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            form.mcmbElList.value.height = componentSize.height;
        }
    };

    form.mdlWidth.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            form.mcmbElList.value.width = componentSize.width;
        }
    };

    form.mcmbElList.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            if (form.mcmbElList.value.height) {
                componentSize.height = form.mcmbElList.value.height;
            }
            if (form.mcmbElList.value.width) {
                componentSize.width = form.mcmbElList.value.width;
            }
            getPosition(form.mcmbElList.value);
        }
    };


}
