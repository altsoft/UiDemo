/**
 * 
 * @author user
 */
function VBoxPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var internalContainer = aPlaygroundPanel;
    internalContainer.orientation = P.Orientation.VERTICAL;
    internalContainer.background = new P.Color(P.Color.RED);
    
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
        internalContainer.add(aElement);
        aElement.toolTipText = "num " + counter + " id:" + internalContainer.count;
    };

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

    model.requery(function () {
        // TODO : place your code here
    });

    form.ffHGap.onActionPerformed = function (event) {
        internalContainer.hgap = form.ffHGap.value;
    };

    form.ffVGap.onActionPerformed = function (event) {
        internalContainer.vgap = form.ffVGap.value;
    };


}
