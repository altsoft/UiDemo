/**
 * 
 * @author user
 */
function GridPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;

    var externalContainer = aPlaygroundPanel;
    var internalContainer;
    var cModifiers;
    var addPanel;
    self.show = function () {
        form.show();
    };

    function setContainer() {
        var rows = form.ffRows.value;
        var colls = form.ffColls.value;
        var hGap = form.ffHGap.value;
        var vGap = form.ffVGap.value;
        internalContainer = new P.GridPane(rows, colls, hGap, vGap); //1x1
        internalContainer.background = new P.Color(P.Color.RED);
    }

    function preparations() {
        setContainer();
    }

    model.requery(function () {
        // TODO : place your code here
    });

    var infoCallBack = function (aElement) {

    };

    var modifyCallback = function (aElement) {

    };

    var deleteCallback = function (aElement) {
        internalContainer.remove(aElement);
    };

    var placeElement = function (aElement, counter) {
        internalContainer.add(aElement, form.ffRow.value, form.ffColl.value);
        aElement.toolTipText = "num " + counter + " id:" + internalContainer.count;
    };
    preparations();
    cModifiers = new ContainersModificator(internalContainer, externalContainer);
    addPanel = new AddComponentContainer(cModifiers, infoCallBack, modifyCallback, deleteCallback, placeElement);
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
        cModifiers.showOnPanel(aPanel);

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
