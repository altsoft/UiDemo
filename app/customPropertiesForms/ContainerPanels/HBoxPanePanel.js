/**
 * 
 * @author user
 */
function HBoxPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var internalContainer = new P.BorderPane();
    var scrollContainer = new P.ScrollPane();
    var demoContainer = new P.BoxPane(P.Orientation.HORIZONTAL);
    internalContainer.width = 800;
    internalContainer.height = 400;

    var gaps = {'vGap': 0,
        'hGap': 0};
    form.mdlHGap.data = gaps;
    form.mdlHGap.field = 'hGap';
    form.mdlVGap.data = gaps;
    form.mdlVGap.field = 'vGap';

    if (form.chbIsScroll.selected) {
        scrollContainer.add(demoContainer);
        internalContainer.add(scrollContainer);
    } else {
        internalContainer.add(demoContainer);
    }

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
        subject = aElement;
    }

    function deleteElement(aElement) {
        demoContainer.remove(aElement);
    }

    var placeElement = function (aElement, counter) {
        aElement.width = Math.floor(Math.random() * (100 - 20)) + 20;
        demoContainer.add(aElement);
        aElement.toolTipText = "Sample " + counter; // + " id:" + demoContainer.count;
    };

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);
    var comp = new P.Button('Sample');
    comp.height = 30;
    comp.width = 120;
    demoContainer.add(comp);
    comp.itemname = comp.text;
    addPanel.addComponentTolist(comp);


    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

    form.chbIsScroll.onActionPerformed = function (event) {
        internalContainer.clear();
        if (event.source.selected) {
            scrollContainer.add(demoContainer);
            internalContainer.add(scrollContainer);
        } else {
            internalContainer.add(demoContainer);
        }
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
