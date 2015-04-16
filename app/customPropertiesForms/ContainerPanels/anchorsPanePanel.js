/**
 * 
 * @author user
 */
function anchorsPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;

    var externalContainer = aPlaygroundPanel;
    
    var internalContainer;
    var cModifiers;
    var addPanel;
    
    function preparations() {
        internalContainer = new P.AnchorsPane();
        internalContainer.background = new P.Color(P.Color.RED);
    }
    preparations();
   
    
    self.show = function () {
        form.show();
    };

    

    model.requery(function () {
        // TODO : place your code here
    });

    var infoCallBack = function (aElement) {
        form.ffLeft.value = aElement.left;
        form.ffTop.value = aElement.top;
        form.ffBottom.value = aElement.bottom;
        form.ffRight.value = aElement.right;
    };

    var modifyCallback = function (aElement) {
        aElement.left = form.ffLeft.value;
        aElement.top = form.ffTop.value;
    };

    var deleteCallback = function (aElement) {
        internalContainer.remove(aElement);
    };

    var placeElement = function (aElement, counter) {
        internalContainer.add(aElement
                , new P.Anchors(form.ffLeft.value,
                        aElement.width,
                        form.ffRight.value,
                        form.ffTop.value,
                        aElement.height,
                        form.ffBottom.value));
        aElement.child(0).text = "num " + counter + " id:" + internalContainer.count;
    };
 cModifiers = new containersModificator(internalContainer, externalContainer);
    addPanel = new addComponentContainer(cModifiers, infoCallBack, modifyCallback, deleteCallback, placeElement);


    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
        cModifiers.showOnPanel(aPanel);
    };


}
