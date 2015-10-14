/**
 * 
 * @author user
 */
function GridPanePanel() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var subject;

    self.show = function () {
        form.show();
    };

    var gaps = {'vGap': 5,
        'hGap': 5};

    var grid = {
        'rows': 3,
        'colls': 3
    };

    form.mdlRows.data = grid;
    form.mdlColls.data = grid;
    form.mdlRows.field = 'rows';
    form.mdlColls.field = 'colls';

    form.mdlHGap.data = gaps;
    form.mdlHGap.field = 'hGap';
    form.mdlVGap.data = gaps;
    form.mdlVGap.field = 'vGap';

    var elementsList = [];
    var counter = 1;

    form.mcmbElList.displayField = "itemname";
    form.mcmbElList.displayList = elementsList;

    var componentSize = {'width': 0,
        'height': 0};
    form.mdlWidth.data = componentSize;
    form.mdlWidth.field = 'width';
    form.mdlHeight.data = componentSize;
    form.mdlHeight.field = 'height';

    var colorsArray = [new P.Color('#49a7f0'), new P.Color('#67eacc'), new P.Color('#6fea58'),
        new P.Color('#ea6dda'), new P.Color('#fa9037'), P.Color.PINK,
        new P.Color('#f04949'), new P.Color('#b6b6b6'), new P.Color('#f5e04f')];

    var internalContainer = new P.BorderPane();//1x1
    var demoContainer = new P.GridPane(grid.rows, grid.colls, gaps.hGap, gaps.vGap);

    internalContainer.add(demoContainer);
    internalContainer.width = 800;
    internalContainer.height = 400;

    if (P.agent == P.HTML5) {
        internalContainer.element.style.border = "thin solid gray";
        internalContainer.element.style.borderRadius = "5px";
    }

    model.requery(function () {
    });

    self.getDemoComponent = function () {
        return internalContainer;
    };

    self.getViewComponent = function () {
        return internalContainer;
    };

    function getPosition(aElement) {
        subject = aElement;
    }

    function deleteElement(aElement) {
        demoContainer.remove(aElement);
    }

    function addComponentTolist(element) {
        elementsList.push(element);
        form.mcmbElList.value = element;
    }

    function placePnlElement(color, row, col) {
        var pnlSubject = new P.BorderPane();
        pnlSubject.background = new P.Color(color);
        var label = new P.Label('Cell ' + row + '.' + col);
        pnlSubject.toolTipText = 'Cell ' + row + '.' + col;
        label.width = 50;
        label.horizontalAlignment = P.HorizontalPosition.CENTER;
        pnlSubject.add(label);
        pnlSubject.itemname = label.text;
        demoContainer.add(pnlSubject, row, col);
        addComponentTolist(pnlSubject);
    }

    function placeElement(aElement, counter) {
        var frmSelectGrid = new CellPositionSelection();
        frmSelectGrid.showModal(grid, function (cellPos) {
            aElement.child(0).text = 'Cell ' + cellPos.row + '.' + cellPos.col;
            for (var i in elementsList) {
                if (elementsList[i].itemname === aElement.child(0).text) {
                    deleteElement(elementsList[i]);
                    elementsList.splice(i, 1);
                }
            }
            demoContainer.add(aElement, cellPos.row, cellPos.col);
            aElement.child(0).horizontalAlignment = P.HorizontalPosition.CENTER;
            aElement.toolTipText = aElement.child(0).text;
            aElement.itemname = aElement.toolTipText;
            addComponentTolist(aElement);
        });
    }

    placePnlElement('#49a7f0', 0, 0);
    placePnlElement('#67eacc', 0, 1);
    var btn1 = new P.Button('Cell 0.2');
    demoContainer.add(btn1, 0, 2);
    btn1.itemname = btn1.text;
    addComponentTolist(btn1);

    placePnlElement('#6fea58', 1, 0);
    var btn2 = new P.Button('Cell 1.1');
    btn2.itemname = btn2.text;
    demoContainer.add(btn2, 1, 1);
    addComponentTolist(btn2);
    placePnlElement('#ea6dda', 1, 2);

    var btn3 = new P.Button('Cell 2.0');
    btn3.itemname = btn3.text;
    demoContainer.add(btn3, 2, 0);
    addComponentTolist(btn3);
    placePnlElement('#fa9037', 2, 1);
    placePnlElement('#f04949', 2, 2);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    function setContainer() {
        internalContainer.clear();
        elementsList = [];
        form.mcmbElList.displayList = elementsList;
        demoContainer = new P.GridPane(grid.rows, grid.colls, gaps.hGap, gaps.vGap);
        internalContainer.add(demoContainer);
    }

    form.btnSetGrid.onActionPerformed = function (event) {
        setContainer();
    };

    self.getFormHeight = function () {
        return form.view.height;
    };

    form.mdlHGap.onValueChange = function (event) {
        demoContainer.hgap = gaps.hGap;
    };

    form.mdlVGap.onValueChange = function (event) {
        demoContainer.vgap = gaps.vGap;
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
