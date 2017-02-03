/**
 * 
 * @author user
 */
define('AddDesktopContainer', ['forms', 'ui', 'Utils/Pallete','DesktopInnerForm'], 
function (Forms, Ui, Pallete, DesktopInnerForm, ModuleName) {
    function module_constructor(aGetPosition, aDelete, aPlaceElement) {
        var self = this
                , form = Forms.loadForm(ModuleName);

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
            var colorIndex = Math.floor(Math.random() * Pallete.length);
            frmSubject.background = new Ui.Color(Pallete[colorIndex]);
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
    return module_constructor;
});
