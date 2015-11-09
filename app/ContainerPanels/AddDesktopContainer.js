/**
 * 
 * @author user
 */
function AddDesktopContainer(aGetPosition, aDelete, aPlaceElement) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;
    var getElPosition = aGetPosition;
    var placeElement = aPlaceElement;
    var deleteCallback = aDelete;
    var elementsList = [];

    form.mcmbElList.displayField = "itemname";
    form.mcmbElList.displayList = elementsList;

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
        element.onWindowClosed = function (event) {
            //form.mcmbElList.value
            elementsList.splice(elementsList.indexOf(element), 1);
            form.mcmbElList.value = elementsList[0];
        };
    };

    form.btnAddComponent.onActionPerformed = function (event) {
        var frmSubject = new DesktopInnerForm();
        var colorIndex = Math.floor(Math.random() * colorsArray.length);
        frmSubject.background = new P.Color(colorsArray[colorIndex]);
        placeElement(frmSubject, counter);
        frmSubject.itemname = frmSubject.toolTipText;
        self.addComponentTolist(frmSubject)
        counter += 1;
    };

    form.btnDelete.onActionPerformed = function (event) {
        if (elementsList.length > 0) {
            deleteCallback(form.mcmbElList.value);
        }
    };

    form.mcmbElList.onValueChange = function (event) {
        if (form.mcmbElList.value) {
            getElPosition(form.mcmbElList.value);
        }
    };

}
