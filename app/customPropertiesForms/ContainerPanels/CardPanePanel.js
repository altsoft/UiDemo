/**
 * 
 * @author user
 */
function CardPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    
    var gaps = {'vGap': 5,
        'hGap': 5};
    form.mdlHGap.data = gaps;
    form.mdlHGap.field = 'hGap';
    form.mdlVGap.data = gaps;
    form.mdlVGap.field = 'vGap';
    
    var internalContainer = new P.CardPane(gaps.hGap, gaps.vGap);
    var demoContainer = internalContainer;
    internalContainer.width = 800;
    internalContainer.height = 400;
    
    var cardsList = [];

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

    var addPanel;
    var subject;

    self.show = function () {
        form.show();
    };

    function getPosition(aElement) {
        internalContainer.show(aElement.toolTipText);
    }

    function deleteElement(aElement) {
        internalContainer.remove(aElement);
    }

    function placeElement(aElement, counter) {
        for (var itm in internalContainer.children()) {
            if (internalContainer.child(itm).toolTipText === form.txtCardName.text) {
                alert("Card with same name allready exist");
                return;
            }
        }
        internalContainer.add(aElement, form.txtCardName.text);
        internalContainer.show(form.txtCardName.text);
        aElement.toolTipText = form.txtCardName.text;
    }
    ;

    addPanel = new AddCardContainer(getPosition, deleteElement, placeElement);

    var pnlSubject = new P.BorderPane();
    pnlSubject.background = new P.Color('#49a7f0');
    var label = new P.Label('Sample A');
    label.width = 50;
    pnlSubject.add(label);
    pnlSubject.itemname = 'Sample A';
    pnlSubject.toolTipText = 'Sample A';
    internalContainer.add(pnlSubject,label.text);
    addPanel.addComponentTolist(pnlSubject);
     
    pnlSubject = new P.BorderPane();
    pnlSubject.background =new P.Color('#67eacc');
    label = new P.Label('Sample B');
    pnlSubject.add(label);
    pnlSubject.itemname = 'Sample B';
    pnlSubject.toolTipText = 'Sample B';
    internalContainer.add(pnlSubject,label.text);
     addPanel.addComponentTolist(pnlSubject);
     
    pnlSubject = new P.BorderPane();
    pnlSubject.background = new P.Color('#6fea58');
    label = new P.Label('Sample C');
    pnlSubject.add(label);
    pnlSubject.itemname = 'Sample C';
    pnlSubject.toolTipText = 'Sample C';
    internalContainer.add(pnlSubject,label.text);
    addPanel.addComponentTolist(pnlSubject);
    internalContainer.show('Sample B');

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
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
