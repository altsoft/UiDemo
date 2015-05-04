/**
 * 
 * @author user
 */
function absolutePanePanel(aPlaygroundPanel) {
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

    function preparations() {
        internalContainer = new P.AbsolutePane();
        internalContainer.background = new P.Color(P.Color.RED);
    }

    model.requery(function () {
        // TODO : place your code here
    });

    var infoCallBack = function (aElement) {
        form.ffLeft.value = aElement.left;
        form.ffTop.value = aElement.top
    };

    var modifyCallback = function (aElement) {
        aElement.left = form.ffLeft.value;
        aElement.top = form.ffTop.value;
    };

    var deleteCallback = function (aElement) {
        internalContainer.remove(aElement);
    };

    var placeElement = function (aElement, counter) {
        internalContainer.add(aElement, {
            left: form.ffLeft.value,
            width: aElement.width,
            top: form.ffTop.value,
            height: aElement.height
        });
        aElement.child(0).text = "num " + counter + " id:" + internalContainer.count;
    };
    preparations();
    cModifiers = new containersModificator(internalContainer, externalContainer);
    addPanel = new addComponentContainer(cModifiers, infoCallBack, modifyCallback, deleteCallback, placeElement);
    
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
        cModifiers.showOnPanel(aPanel);

    };


}