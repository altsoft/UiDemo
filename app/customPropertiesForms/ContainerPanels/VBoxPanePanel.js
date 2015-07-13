/**
 * 
 * @author user
 */
function VBoxPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var internalContainer = new P.BorderPane();
    var scrollContainer = new P.ScrollPane();
    var demoContainer = new P.BoxPane(P.Orientation.VERTICAL);
    internalContainer.width = 800;
    internalContainer.height = 400;

    if (form.chbIsScroll.selected) {
        scrollContainer.add(demoContainer);
        internalContainer.add(scrollContainer);
    } else {
        internalContainer.add(demoContainer);
    }

    if (P.agent == P.HTML5) {
        internalContainer.element.style.border = "solid";
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
        internalContainer.remove(aElement);
    }

    var placeElement = function (aElement, counter) {
        aElement.height = Math.floor(Math.random() * (100 - 20)) + 20;
        demoContainer.add(aElement);
        aElement.toolTipText = "num " + counter + " id:" + demoContainer.count;
    };

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

    form.ffHGap.onActionPerformed = function (event) {
        internalContainer.hgap = form.ffHGap.value;
    };

    form.ffVGap.onActionPerformed = function (event) {
        internalContainer.vgap = form.ffVGap.value;
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
}
