/**
 * 
 * @author user
 */
function cardPanePanel(aPlaygroundPanel) {
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
        internalContainer.add(aElement);
        aElement.child(0).text = "num " + counter + " id:" + internalContainer.count;
    };


    function preparations() {
        internalContainer = new P.CardPane(form.ffHGap.value, form.ffVGap.value);
        internalContainer.background = new P.Color(P.Color.RED);
    }
    preparations();
    cModifiers = new containersModificator(internalContainer, externalContainer);
    addPanel = new addComponentContainer(cModifiers, infoCallBack, modifyCallback, deleteCallback, placeElement);

    self.showOnPanel = function (aPanel) {

        aPanel.add(form.view);

        addPanel.showOnPanel(aPanel);
        cModifiers.showOnPanel(aPanel);
    };

    model.requery(function () {
        // TODO : place your code here
    });

    form.button.onActionPerformed = function (event) {
        internalContainer.hgap = Number(form.ffHGap.text);
        internalContainer.vgap = Number(form.ffVGap.text);
    };
    
    form.btnAddCard.onActionPerformed = function(event) {
        
    };
    form.btnShowCard.onActionPerformed = function(event) {
        internalContainer.show(form.txtCardName.text);
    };
}
