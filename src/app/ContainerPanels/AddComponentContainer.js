/**
 * 
 * @author user
 */
define('AddComponentContainer', ['forms', 'ui', 'invoke', 'forms/border-pane', 'forms/label','Utils/Pallete'],
        function (Forms, Ui, Invoke, BorderPane, Label,Pallete, ModuleName) {
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
                    Invoke.later(function(){
                        form.mdlWidth.value = form.mcmbElList.value.width;
                        form.mdlHeight.value = form.mcmbElList.value.height;
                        form.mdlHeight.onValueChange = function (event) {
                            if (form.mcmbElList.value) {
                                form.mcmbElList.value.height = event.source.value;
                            }
                        };

                        form.mdlWidth.onValueChange = function (event) {
                            if (form.mcmbElList.value) {
                                form.mcmbElList.value.width = event.source.value;
                            }
                        };
                    });
                };

                self.addComponentTolist = function (element) {
                    elementsList.push(element);
                    form.mcmbElList.displayList = null;
                    form.mcmbElList.displayList = elementsList;
                    form.mcmbElList.value = element;
                };

                form.btnAddComponent.onActionPerformed = function (event) {
                    var pnlSubject = new BorderPane();
                    pnlSubject.width = form.mdlWidth.value;
                    pnlSubject.height = form.mdlHeight.value;
                    var colorIndex = Math.floor(Math.random() * Pallete.length);
                    pnlSubject.background = new Ui.Color(Pallete[colorIndex]);
                    var label = new Label();
                    label.width = 100;
                    pnlSubject.add(label);
                    pnlSubject.onMousePressed = function (event) {
                        form.mcmbElList.value = pnlSubject;
                        form.mdlWidth.value = pnlSubject.width;
                        form.mdlHeight.value = pnlSubject.height;
                    };
                    placeElement(pnlSubject, counter);
                    pnlSubject.itemname = pnlSubject.toolTipText;
                    if (pnlSubject.itemname) {
                        self.addComponentTolist(pnlSubject);
                        if (!label.text) {
                            label.text = "Click to select";
                        }
                        counter += 1;
                    }
                };

                self.delete = function (event) {
                    deleteCallback(form.mcmbElList.value);
                    var pos = elementsList.indexOf(form.mcmbElList.value);
                    elementsList.splice(pos, 1);
                    form.mcmbElList.displayList = null;
                    form.mcmbElList.displayList = elementsList;
                    if(elementsList.length > 0){
                        form.mcmbElList.value = elementsList[pos < elementsList.length ? pos : pos - 1];
                    } else
                        form.mcmbElList.value = null;
                };

                self.deleteAll = function (event) {
                    elementsList = [];
                    form.mcmbElList.displayList = null;
                    form.mcmbElList.displayList = elementsList;
                };

                form.btnDelete.onActionPerformed = self.delete;

                form.mcmbElList.onValueChange = function (event) {
                    if (form.mcmbElList.value) {
                        if (form.mcmbElList.value.height) {
                            form.mdlHeight.value = form.mcmbElList.value.height;
                        }
                        if (form.mcmbElList.value.width) {
                            form.mdlWidth.value = form.mcmbElList.value.width;
                        }
                        getElPosition(form.mcmbElList.value);
                    }
                };

            }
            return module_constructor;
        });