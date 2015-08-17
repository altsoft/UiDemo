/**
 * 
 * @author user
 */
function GridPanePanel() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;


    var addPanel;
    var subject;

    self.show = function () {
        form.show();
    };

    var rows = form.ffRows.value;
    var colls = form.ffColls.value;
    var gaps = {'vGap': 5,
        'hGap': 5};
    form.mdlHGap.data = gaps;
    form.mdlHGap.field = 'hGap';
    form.mdlVGap.data = gaps;
    form.mdlVGap.field = 'vGap';

    var internalContainer = new P.GridPane(rows, colls, gaps.hGap, gaps.vGap); //1x1
    var demoContainer = internalContainer;
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
        internalContainer.remove(aElement);
    }

    function placeElement(aElement, counter) {
        internalContainer.add(aElement, form.ffRow.value, form.ffColl.value);
        aElement.toolTipText = 'Cell '+ form.ffRow.value + '.' + form.ffColl.value;
    }

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);

    function placePnlElement(color, row, col) {
        var pnlSubject = new P.BorderPane();
        pnlSubject.background = new P.Color(color);
        var label = new P.Label('Cell ' + row + '.' + col);
        label.width = 50;
        label.horizontalAlignment = P.HorizontalPosition.CENTER;
        pnlSubject.add(label);
        pnlSubject.itemname = label.text;
        demoContainer.add(pnlSubject, row, col);
        addPanel.addComponentTolist(pnlSubject);
    }

    placePnlElement('#49a7f0', 0, 0);
    placePnlElement('#67eacc', 0, 1);
    var btn1 = new P.Button('Cell 0.2');
    demoContainer.add(btn1, 0, 2);
    btn1.itemname = btn1.text;
    addPanel.addComponentTolist(btn1);

    placePnlElement('#6fea58', 1, 0);
    var btn2 = new P.Button('Cell 1.1');
    btn2.itemname = btn2.text;
    demoContainer.add(btn2, 1, 1);
    addPanel.addComponentTolist(btn2);
    placePnlElement('#ea6dda', 1, 2);

    var btn3 = new P.Button('Cell 2.0');
    btn3.itemname = btn3.text;
    demoContainer.add(btn3, 2, 0);
    addPanel.addComponentTolist(btn3);
    placePnlElement('#fa9037', 2, 1);
    placePnlElement('#f04949', 2, 2);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

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
}
