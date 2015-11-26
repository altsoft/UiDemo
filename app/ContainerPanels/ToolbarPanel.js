/**
 * 
 * @author user
 */
function ToolbarPanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var internalContainer = new P.ToolBar();
    internalContainer.width = 752;
    internalContainer.height = 40;

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

    function placeElement(aElement, counter) {
        aElement.height = internalContainer.height;
        internalContainer.add(aElement);
        aElement.toolTipText = "Sample " + counter; //+ " id:" + internalContainer.count;
    }

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);
    var b1 = new P.Button('One');
    internalContainer.add(b1);
    b1.height = 50;
    b1.width = 50;
    b1.itemname = b1.text;
    addPanel.addComponentTolist(b1);
    var b2 = new P.Button('Two');
    internalContainer.add(b2);
    b2.height = 50;
    b2.width = 50;
    b2.itemname = b2.text;
    addPanel.addComponentTolist(b2);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
