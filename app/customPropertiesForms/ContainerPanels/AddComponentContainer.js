/**
 * 
 * @author user
 */
function AddComponentContainer(aGetPosition, aDelete, aPlaceElement) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var getElPosition = aGetPosition;
    var placeElement = aPlaceElement;
    var deleteCallback = aDelete;
    var elementsList = [];

    form.mcmbElList.data = elementsList;
    form.mcmbElList.displayField = "itemname";
    form.mcmbElList.displayList = elementsList;
    form.mcmbElList.field = "itemname"; //propertyPath

    var colorsArray = [new P.Color('#49a7f0'), new P.Color('#67eacc'), new P.Color('#6fea58'),
        new P.Color('#ea6dda'),new P.Color('#fa9037'), P.Color.PINK, 
        new P.Color('#f04949'),new P.Color('#b6b6b6'), new P.Color('#f5e04f')];

    self.show = function () {
        form.show();
    };

    model.requery(function () {
    });

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };
    
    
    
    form.btnAddComponent.onActionPerformed = function (event) {
        var pnlSubject = new P.BorderPane();
        pnlSubject.width = form.ffWidth.value;
        pnlSubject.height = form.ffHeight.value;
        var colorIndex = Math.floor(Math.random() * colorsArray.length);
        pnlSubject.background = new P.Color(colorsArray[colorIndex]);
        var label = new P.Label();
        label.width = 50;
        pnlSubject.add(label);
        pnlSubject.onMousePressed = function (event) {
            form.ffWidth.value = pnlSubject.width;
            form.ffHeight.value = pnlSubject.height;
            form.mcmbElList.value = pnlSubject;
        };
        placeElement(pnlSubject, counter);
        pnlSubject.itemname = pnlSubject.toolTipText;
        elementsList.push(pnlSubject);
        form.mcmbElList.value = pnlSubject;
        label.text = "Click me!";
        counter += 1;
    };
    
    form.btnDelete.onActionPerformed = function (event) {
        deleteCallback(form.mcmbElList.value);
        elementsList.splice(elementsList.indexOf(form.mcmbElList.value), 1);
        form.mcmbElList.value = elementsList[0];
    };

    form.ffHeight.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            form.mcmbElList.value.height = form.ffHeight.value;
        }
    };
    
    form.ffWidth.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            form.mcmbElList.value.width = form.ffWidth.value;
        }
    };

    form.mcmbElList.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            form.ffHeight.value = form.mcmbElList.value.height;
            form.ffWidth.value = form.mcmbElList.value.width;
            getElPosition(form.mcmbElList.value);
//            getElement(form.modelCombo.value);
        }
    };



}
