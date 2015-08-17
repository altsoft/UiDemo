/**
 * 
 * @author user
 */
function TabbedPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var internalContainer = new P.TabbedPane();
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

    var addPanel;
    var subject;

    self.show = function () {
        form.show();
    };

    function getPosition(aElement) {
        internalContainer.children().forEach(function (item, i, arr) {
            if (item === aElement) {
                internalContainer.selectedIndex = i;
            }
        });
        subject = aElement;
    }

    function deleteElement(aElement) {
        internalContainer.remove(aElement);
    }

    var placeElement = function (aElement, counter) {
        internalContainer.add(aElement, form.txtTabName.text);
        aElement.toolTipText = "num " + counter + " id:" + internalContainer.count + form.txtTabName.text;
    };

    addPanel = new AddCardContainer(getPosition, deleteElement, placeElement);
    var pnlSubject = new P.BorderPane();
    pnlSubject.background = new P.Color('#49a7f0');
    var label = new P.Label('Tab 1');
    label.width = 50;
    pnlSubject.add(label);
    pnlSubject.itemname = label.text;
    pnlSubject.toolTipText = label.text;
    internalContainer.add(pnlSubject,label.text);
    addPanel.addComponentTolist(pnlSubject);
     
    pnlSubject = new P.BorderPane();
    pnlSubject.background =new P.Color('#67eacc');
    label = new P.Label('Tab 2');
    pnlSubject.add(label);
    pnlSubject.itemname = label.text;
    pnlSubject.toolTipText = label.text;
    internalContainer.add(pnlSubject,label.text);
    addPanel.addComponentTolist(pnlSubject);
     
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
