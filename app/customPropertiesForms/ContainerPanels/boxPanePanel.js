/**
 * 
 * @author user
 */
function boxPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var externalContainer = aPlaygroundPanel;
    var internalContainer;
    var cModifiers;
    var addPanel;
    var btnGrpPos = new P.ButtonGroup();
    btnGrpPos.add(form.rbHorizontal);
    btnGrpPos.add(form.rbVertical);
    form.rbVertical.selected = true;

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

    var placeElement = function (aElement,counter) {
        internalContainer.add(aElement);
        aElement.child(0).text = "num " + counter + " id:" + internalContainer.count;
    };


    function preparations() {
        internalContainer = new P.BoxPane(P.Orientation.VERTICAL);
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

    form.rbHorizontal.onActionPerformed = function (event) {
        if (event.source.selected) {
            internalContainer.clear();
            internalContainer = new P.BoxPane(P.Orientation.HORIZONTAL);
            cModifiers.deleteScroll();
            cModifiers.addScroll();
        }
    };
    form.rbVertical.onActionPerformed = function (event) {
        if (event.source.selected) {
            internalContainer.clear();
            internalContainer = new P.BoxPane(P.Orientation.VERTICAL);
            cModifiers.deleteScroll();
            cModifiers.addScroll();
        }
    };
    form.button.onActionPerformed = function(event) {
        internalContainer.hgap = Number(form.ffHGap.text);
        internalContainer.vgap = Number(form.ffVGap.text);
    };
}
