/**
 * 
 * @author user
 */
function AddCardContainer(aGetPosition, aDelete, aPlaceElement) {
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
        new P.Color('#ea6dda'), new P.Color('#fa9037'), P.Color.PINK,
        new P.Color('#f04949'), new P.Color('#b6b6b6'), new P.Color('#f5e04f')];

    self.show = function () {
        form.show();
    };

    model.requery(function () {
    });

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    self.addComponentTolist = function (element) {
        elementsList.push(element);
        form.mcmbElList.value = element;
    };

    form.btnAddComponent.onActionPerformed = function (event) {
        var pnlSubject = new P.BorderPane();
        var colorIndex = Math.floor(Math.random() * colorsArray.length);
        pnlSubject.background = new P.Color(colorsArray[colorIndex]);
        var label = new P.Label();
        label.width = 50;
        pnlSubject.add(label);
        pnlSubject.onMousePressed = function (event) {
            form.mcmbElList.value = pnlSubject;
        };

        placeElement(pnlSubject, counter);
        if (pnlSubject.toolTipText) {
            pnlSubject.itemname = pnlSubject.toolTipText;
            label.text = pnlSubject.toolTipText;
            counter += 1;
            self.addComponentTolist(pnlSubject);
        }
    };

    form.btnDelete.onActionPerformed = function (event) {
        deleteCallback(form.mcmbElList.value);
        elementsList.splice(elementsList.indexOf(form.mcmbElList.value), 1);
        form.mcmbElList.value = elementsList[0];
    };


    form.mcmbElList.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            getElPosition(form.mcmbElList.value);
        }
    };



}
