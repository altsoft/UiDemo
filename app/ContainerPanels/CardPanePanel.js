/**
 * 
 * @author user
 */
function CardPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var counter = 1;
    var elementsList = [];
    var gaps = {'vGap': 5,
        'hGap': 5};

    form.mdlHGap.data = gaps;
    form.mdlHGap.field = 'hGap';
    form.mdlVGap.data = gaps;
    form.mdlVGap.field = 'vGap';

    form.mcmbElList.displayField = "itemname";
    form.mcmbElList.displayList = elementsList;

    var colorsArray = [new P.Color('#49a7f0'), new P.Color('#67eacc'), new P.Color('#6fea58'),
        new P.Color('#ea6dda'), new P.Color('#fa9037'), P.Color.PINK,
        new P.Color('#f04949'), new P.Color('#b6b6b6'), new P.Color('#f5e04f')];

    var internalContainer = new P.CardPane(gaps.hGap, gaps.vGap);
    var demoContainer = internalContainer;
    internalContainer.width = 800;
    internalContainer.height = 400;

    if (P.agent == P.HTML5) {
        internalContainer.element.style.border = "thin solid gray";
        internalContainer.element.style.borderRadius = "5px";
    }

    self.getDemoComponent = function () {
        return internalContainer;
    };

    self.getViewComponent = function () {
        return internalContainer;
    };
    self.show = function () {
        form.show();
    };

    function addComponentTolist(element) {
        elementsList.push(element);
        form.mcmbElList.value = element;
    }

    function createCard(aColor, aName) {
        var pnlSubject = new P.BorderPane();
        pnlSubject.background = new P.Color(aColor);
        var label = new P.Label(aName);
        label.width = 50;
        pnlSubject.add(label);
        pnlSubject.itemname = aName;
        pnlSubject.toolTipText = aName;
        internalContainer.add(pnlSubject, label.text);
        addComponentTolist(pnlSubject);
    }
    createCard('#49a7f0', 'Sample A');
    createCard('#67eacc', 'Sample B');
    createCard('#6fea58', 'Sample C');

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
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
        var colorIndex = Math.floor(Math.random() * colorsArray.length);
        pnlSubject.background = new P.Color(colorsArray[colorIndex]);
        var label = new P.Label();
        label.width = 200;
        pnlSubject.add(label);
        pnlSubject.onMousePressed = function (event) {
            form.mcmbElList.value = pnlSubject;
        };

        var cardName;
        if (form.txtCardName.text) {
            cardName = form.txtCardName.text;
        } else {
            cardName = "Sample " + counter;
            counter += 1;
        }
        for (var itm in internalContainer.children()) {
            if (internalContainer.child(itm).toolTipText === cardName) {
                alert("Card with same name allready exist");
                return;
            }
        }

        internalContainer.add(pnlSubject, cardName);
        pnlSubject.toolTipText = cardName;
        pnlSubject.itemname = cardName;
        internalContainer.show(cardName);
        label.text = cardName;
        addComponentTolist(pnlSubject);
    };

    form.btnDelete.onActionPerformed = function (event) {
        internalContainer.remove(form.mcmbElList.value);
        elementsList.splice(elementsList.indexOf(form.mcmbElList.value), 1);
        form.mcmbElList.value = elementsList[0];
    };

    form.mcmbElList.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            internalContainer.show(form.mcmbElList.value.toolTipText);
        }
    };

}
