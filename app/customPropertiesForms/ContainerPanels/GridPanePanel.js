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
    var hGap = form.ffHGap.value;
    var vGap = form.ffVGap.value;
    var internalContainer = new P.GridPane(rows, colls, hGap, vGap); //1x1
    internalContainer.width = 800;
    internalContainer.height = 400;
    if (P.agent == P.HTML5) {
        internalContainer.element.style.border = "solid";
    }
    model.requery(function () {
        // TODO : place your code here
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

    var placeElement = function (aElement, counter) {
        internalContainer.add(aElement, form.ffRow.value, form.ffColl.value);
        aElement.toolTipText = "num " + counter + " id:" + internalContainer.count;
    };

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

    form.btnSetGrid.onActionPerformed = function (event) {
        setContainer();
    };

    form.ffHGap.onActionPerformed = function (event) {
        internalContainer.hgap = form.ffHGap.value;
    };

    form.ffVGap.onActionPerformed = function (event) {
        internalContainer.vgap = form.ffVGap.value;
    };


}
