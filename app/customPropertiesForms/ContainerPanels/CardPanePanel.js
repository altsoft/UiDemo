/**
 * 
 * @author user
 */
function CardPanePanel(aPlaygroundPanel) {
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

    var infoCallBack = function (aElement) {

    };

    var modifyCallback = function (aElement) {

    };

    var deleteCallback = function (aElement) {
        internalContainer.remove(aElement);
    };

    var placeElement = function (aElement, counter) {
        internalContainer.add(aElement,form.txtCardName.text);
        aElement.toolTipText = "num " + counter + " id:" + internalContainer.count + " name: " + form.txtCardName.text;
    };

    function preparations() {
        internalContainer = new P.CardPane(form.ffHGap.value, form.ffVGap.value);
        internalContainer.background = new P.Color(P.Color.RED);
    }
    preparations();
    cModifiers = new ContainersModificator(internalContainer, externalContainer);
    addPanel = new AddComponentContainer(cModifiers, infoCallBack, modifyCallback, deleteCallback, placeElement);

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
        cModifiers.showOnPanel(aPanel);
    };

    model.requery(function () {
        // TODO : place your code here
    });
    
    form.ffHGap.onActionPerformed = function(event) {
        internalContainer.hgap = form.ffHGap.value;
    };

    form.ffVGap.onActionPerformed = function(event) {
        internalContainer.vgap = form.ffVGap.value;
    };
    
    form.btnShowCard.onActionPerformed = function(event) {
        internalContainer.show(form.txtCardName.text);
    };
}
