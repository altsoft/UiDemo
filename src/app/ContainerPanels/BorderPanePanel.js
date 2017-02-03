/**
 * 
 * @author user
 */

define('BorderPanePanel', ['forms', 'ui', 'environment', 'forms/border-pane', 'forms/label', 'BorderPositionSelection', 'Utils/Pallete'],
        function (Forms, Ui, Env, BorderPane, Label, BorderPositionSelection, Pallete, ModuleName) {
            function module_constructor() {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var gaps = {
                    'vGap': 2,
                    'hGap': 2
                };
                form.mdlHGap.data = gaps;
                form.mdlHGap.field = 'hGap';
                form.mdlVGap.data = gaps;
                form.mdlVGap.field = 'vGap';

                var componentSize = {
                    'width': 0,
                    'height': 0
                };
                form.mdlWidth.data = componentSize;
                form.mdlWidth.field = 'width';
                form.mdlHeight.data = componentSize;
                form.mdlHeight.field = 'height';

                form.mcmbElList.displayField = "itemname";

                var internalContainer = new BorderPane(gaps.hGap, gaps.vGap);
                var demoContainer = internalContainer;

                internalContainer.width = 800;
                internalContainer.height = 400;

                if (Env.agent == Env.HTML5) {
                    internalContainer.element.style.border = "thin solid gray";
                    internalContainer.element.style.borderRadius = "5px";
                }

                self.getDemoComponent = function () {
                    return demoContainer;
                };

                self.getViewComponent = function () {
                    return demoContainer;
                };

                self.show = function () {
                    form.show();
                };

                function placePnlElement(aColor, aText, aPosition, aWidth, aHeight) {
                    var pnlSubject = new BorderPane();
                    pnlSubject.background = new Ui.Color(aColor);
                    if (aWidth) {
                        pnlSubject.width = aWidth;
                    }
                    if (aHeight) {
                        pnlSubject.height = aHeight;
                    }
                    var label = new Label(aText);
                    label.width = 50;
                    label.horizontalAlignment = Ui.HorizontalPosition.CENTER;
                    pnlSubject.add(label);
                    pnlSubject.itemname = label.text;
                    demoContainer.add(pnlSubject, aPosition);
                }

                placePnlElement('#2980b9', 'TOP', Ui.VerticalPosition.TOP, null, 50);
                placePnlElement('#9b50ba', 'BOTTOM', Ui.VerticalPosition.BOTTOM, null, 50);
                placePnlElement('#F1C40F', 'CENTER', Ui.HorizontalPosition.CENTER);
                placePnlElement('#19b698', 'LEFT', Ui.HorizontalPosition.LEFT, 60);
                placePnlElement('#26A65B', 'RIGHT', Ui.HorizontalPosition.RIGHT, 60);
                form.mcmbElList.displayList = demoContainer.children();

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                };

                form.mdlHGap.onValueChange = function (event) {
                    demoContainer.hgap = gaps.hGap;
                };

                form.mdlVGap.onValueChange = function (event) {
                    demoContainer.vgap = gaps.vGap;
                };

                self.getFormHeight = function () {
                    return form.view.height;
                };

                form.btnAddComponent.onActionPerformed = function (event) {
                    var pnlSubject = new BorderPane();
                    if (componentSize.width) {
                        pnlSubject.width = componentSize.width;
                    }
                    if (componentSize.height) {
                        pnlSubject.height = componentSize.height;
                    }
                    var colorIndex = Math.floor(Math.random() * Pallete.length);
                    pnlSubject.background = new Ui.Color(Pallete[colorIndex]);
                    var label = new Label();
                    label.width = 50;
                    pnlSubject.add(label);
                    pnlSubject.onMousePressed = function (event) {
                        componentSize.width = pnlSubject.width;
                        componentSize.height = pnlSubject.height;
                        form.mcmbElList.value = pnlSubject;
                    };

                    var position;
                    var frmSelectPosition = new BorderPositionSelection();
                    frmSelectPosition.showModal(function (pos) {
                        position = pos;
                        pnlSubject.child(0).horizontalAlignment = Ui.HorizontalPosition.CENTER;
                        internalContainer.add(pnlSubject, position);

                        switch (position) {
                            case Ui.VerticalPosition.TOP:
                            {
                                pnlSubject.child(0).text = "TOP"
                                break;
                            }
                            case Ui.HorizontalPosition.LEFT:
                            {
                                pnlSubject.child(0).text = "LEFT"
                                break;
                            }
                            case Ui.VerticalPosition.CENTER:
                            {
                                pnlSubject.child(0).text = "CENTER"
                                break;
                            }
                            case Ui.HorizontalPosition.RIGHT:
                            {
                                pnlSubject.child(0).text = "RIGHT"
                                break;
                            }
                            case Ui.VerticalPosition.BOTTOM:
                            {
                                pnlSubject.child(0).text = "BOTTOM"
                                break;
                            }
                        }

                        pnlSubject.toolTipText = pnlSubject.child(0).text;
                        pnlSubject.itemname = pnlSubject.toolTipText;
                        form.mcmbElList.displayList = demoContainer.children();
                        form.mcmbElList.value = pnlSubject;
                    });

                };

                form.btnDelete.onActionPerformed = function (event) {
                    demoContainer.remove(form.mcmbElList.value);
                    form.mcmbElList.displayList = demoContainer.children();
                    form.mcmbElList.value = form.mcmbElList.displayList[0];
                    if (!form.mcmbElList.value) {
                        componentSize.width = 0;
                        componentSize.height = 0;
                    }
                };

                form.mdlHeight.onValueChange = function (event) {
                    if (form.mcmbElList.value) {
                        form.mcmbElList.value.height = componentSize.height;
                    }
                };

                form.mdlWidth.onValueChange = function (event) {
                    if (form.mcmbElList.value) {
                        form.mcmbElList.value.width = componentSize.width;
                    }
                };

                form.mcmbElList.onValueChange = function (event) {
                    if (form.mcmbElList.value) {
                        componentSize.height = form.mcmbElList.value.height;
                        componentSize.width = form.mcmbElList.value.width;
                    }
                };

            }
            return module_constructor;
        });
