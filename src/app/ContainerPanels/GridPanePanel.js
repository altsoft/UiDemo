/**
 * 
 * @author user
 */
define('GridPanePanel', ['forms', 'ui', 'forms/border-pane', 'forms/grid-pane', 'environment', 'forms/label', 'forms/button', 'Utils/Pallete', 'CellPositionSelection'],
        function (Forms, Ui, BorderPane, GridPane, Env, Label, Button, Pallete, CellPositionSelection, ModuleName) {
            function module_constructor() {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var subject;

                self.show = function () {
                    form.show();
                };

                var gaps = {'vGap': 5,
                    'hGap': 5};

                var grid = {
                    'rows': 3,
                    'colls': 3
                };

                form.mdlRows.data = grid;
                form.mdlColls.data = grid;
                form.mdlRows.field = 'rows';
                form.mdlColls.field = 'colls';

                form.mdlHGap.data = gaps;
                form.mdlHGap.field = 'hGap';
                form.mdlVGap.data = gaps;
                form.mdlVGap.field = 'vGap';

                var elementsList = [];
                var counter = 1;

                form.mcmbElList.displayField = "itemname";
                form.mcmbElList.displayList = elementsList;

                var internalContainer = new BorderPane();//1x1
                var demoContainer = new GridPane(grid.rows, grid.colls, gaps.hGap, gaps.vGap);

                internalContainer.add(demoContainer);
                internalContainer.width = 800;
                internalContainer.height = 400;

                if (Env.agent == Env.HTML5) {
                    internalContainer.element.style.border = "thin solid #ccc";
                    internalContainer.element.style.borderRadius = "5px";
                }

                self.getDemoComponent = function () {
                    return internalContainer;
                };

                self.getViewComponent = function () {
                    return internalContainer;
                };

                function updatePosition(aElement) {
                    subject = aElement;
                }

                function deleteElement(aElement) {
                    demoContainer.remove(aElement);
                }

                function addComponentTolist(element) {
                    elementsList.push(element);
                    form.mcmbElList.displayList = null;
                    form.mcmbElList.displayList = elementsList;
                    form.mcmbElList.value = element;
                }

                function placeBtnElement(aRow, aCol) {
                    var btn = new Button('Cell ' + aRow + '.' + aCol);
                    demoContainer.add(btn, aRow, aCol);
                    btn.itemname = btn.text;
                    addComponentTolist(btn);
                    btn.onActionPerformed = function (event) {
                        form.mcmbElList.value = btn;
                    };
                }
                
                function placePnlElement(color, row, col) {
                    var pnlSubject = new BorderPane();
                    pnlSubject.background = new Ui.Color(color);
                    var label = new Label('Cell ' + row + '.' + col);
                    pnlSubject.toolTipText = 'Cell ' + row + '.' + col;
                    label.width = 50;
                    label.horizontalAlignment = Ui.HorizontalPosition.CENTER;
                    pnlSubject.add(label);
                    pnlSubject.itemname = label.text;
                    label.onMousePressed = function (event) {
                        form.mcmbElList.value = pnlSubject;
                    };
                    pnlSubject.onMousePressed = function (event) {
                        form.mcmbElList.value = pnlSubject;
                    };
                    demoContainer.add(pnlSubject, row, col);
                    addComponentTolist(pnlSubject);
                }

                function placeElement(aElement, counter) {
                    var frmSelectGrid = new CellPositionSelection();
                    frmSelectGrid.showModal(grid, function (cellPos) {
                        aElement.child(0).text = 'Cell ' + cellPos.row + '.' + cellPos.col;
                        for (var i in elementsList) {
                            if (elementsList[i].itemname === aElement.child(0).text) {
                                deleteElement(elementsList[i]);
                                elementsList.splice(i, 1);
                            }
                        }
                        demoContainer.add(aElement, cellPos.row, cellPos.col);
                        aElement.child(0).horizontalAlignment = Ui.HorizontalPosition.CENTER;
                        aElement.toolTipText = aElement.child(0).text;
                        aElement.itemname = aElement.toolTipText;
                        addComponentTolist(aElement);
                    });
                }

                placePnlElement('#2980b9', 0, 0);
                placePnlElement('#1dd2af', 0, 1);
                placeBtnElement(0, 2);

                placePnlElement('#40d47e', 1, 0);
                placeBtnElement(1, 1);
                placePnlElement('#9b50ba', 1, 2);

                placeBtnElement(2, 0);
                placePnlElement('#D35400', 2, 1);
                placePnlElement('#E74C3C', 2, 2);

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                };

                function resetContainer() {
                    internalContainer.clear();
                    elementsList = [];
                    form.mcmbElList.displayList = elementsList;
                    demoContainer = new GridPane(grid.rows, grid.colls, gaps.hGap, gaps.vGap);
                    internalContainer.add(demoContainer);
                }

                form.btnSetGrid.onActionPerformed = function (event) {
                    resetContainer();
                };

                form.mdlHGap.onValueChange = function (event) {
                    demoContainer.hgap = gaps.hGap;
                };

                form.mdlVGap.onValueChange = function (event) {
                    demoContainer.vgap = gaps.vGap;
                };

                form.btnAddComponent.onActionPerformed = function (event) {
                    var pnlSubject = new BorderPane();
                    var colorIndex = Math.floor(Math.random() * Pallete.length);
                    pnlSubject.background = new Ui.Color(Pallete[colorIndex]);
                    var label = new Label();
                    label.width = 50;
                    pnlSubject.add(label);
                    label.onMousePressed = function (event) {
                        form.mcmbElList.value = pnlSubject;
                    };
                    pnlSubject.onMousePressed = function (event) {
                        form.mcmbElList.value = pnlSubject;
                    };
                    placeElement(pnlSubject, counter);
                    counter += 1;
                };

                form.btnDelete.onActionPerformed = function (event) {
                    deleteElement(form.mcmbElList.value);
                    elementsList.splice(elementsList.indexOf(form.mcmbElList.value), 1);
                    form.mcmbElList.value = elementsList.length > 0 ? elementsList[0] : null;
                };

                form.mcmbElList.onValueChange = function (event) {
                    if (form.mcmbElList.value) {
                        updatePosition(form.mcmbElList.value);
                    }
                };

            }
            return module_constructor;
        });