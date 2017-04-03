/**
 * 
 * @author user
 */

define('BorderPanePanel', ['forms', 'ui', 'environment', 'invoke', 'forms/border-pane', 'forms/label', 'BorderPositionSelection', 'Utils/Pallete'],
        function (Forms, Ui, Env, Invoke, BorderPane, Label, BorderPositionSelection, Pallete, ModuleName) {
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

                form.mcmbElList.displayField = "itemname";

                var internalContainer = new BorderPane(gaps.hGap, gaps.vGap);
                var demoContainer = internalContainer;

                internalContainer.width = 800;
                internalContainer.height = 400;

                if (Env.agent == Env.HTML5) {
                    internalContainer.element.style.border = "thin solid #ccc";
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

                var frmSelectPosition = new BorderPositionSelection();
                form.btnAddComponent.onActionPerformed = function (event) {
                    var pnlSubject = new BorderPane();
                    var colorIndex = Math.floor(Math.random() * Pallete.length);
                    pnlSubject.background = new Ui.Color(Pallete[colorIndex]);
                    var label = new Label();
                    label.width = 50;
                    pnlSubject.add(label);

                    pnlSubject.onMousePressed = function (event) {
                        form.mcmbElList.value = pnlSubject;
                    };

                    frmSelectPosition.showModal(function (position) {
                        pnlSubject.child(0).horizontalAlignment = Ui.HorizontalPosition.CENTER;

                        switch (position) {
                            case Ui.VerticalPosition.TOP:
                            {
                                pnlSubject.child(0).text = "TOP"
                                pnlSubject.height = 50;
                                break;
                            }
                            case Ui.HorizontalPosition.LEFT:
                            {
                                pnlSubject.child(0).text = "LEFT"
                                pnlSubject.width = 50;
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
                                pnlSubject.width = 50;
                                break;
                            }
                            case Ui.VerticalPosition.BOTTOM:
                            {
                                pnlSubject.child(0).text = "BOTTOM"
                                pnlSubject.height = 50;
                                break;
                            }
                        }

                        internalContainer.add(pnlSubject, position);
                        pnlSubject.toolTipText = pnlSubject.child(0).text;
                        pnlSubject.itemname = pnlSubject.toolTipText;
                        form.mcmbElList.displayList = demoContainer.children();
                        Invoke.later(function(){
                            form.mcmbElList.value = pnlSubject;
                        });
                    });

                };

                form.btnDelete.onActionPerformed = function (event) {
                    demoContainer.remove(form.mcmbElList.value);
                    var children = demoContainer.children();
                    form.mcmbElList.displayList = children;
                    form.mcmbElList.value = children.length > 0 ? children[0] : null;
                    if (!form.mcmbElList.value) {
                        form.mdlWidth.value = null;
                        form.mdlHeight.value = null;
                    }
                };

                form.mdlHeight.onValueChange = function (event) {
                    var pnlSubject = form.mcmbElList.value;
                    if (pnlSubject && pnlSubject.height !== event.source.value) {
                        pnlSubject.height = event.source.value;
                    }
                };

                form.mdlWidth.onValueChange = function (event) {
                    var pnlSubject = form.mcmbElList.value;
                    if (pnlSubject && pnlSubject.width !== event.source.value) {
                        pnlSubject.width = event.source.value;
                    }
                };

                form.mcmbElList.onValueChange = function (event) {
                    var pnlSubject = form.mcmbElList.value;
                    if (pnlSubject) {
                        form.mdlWidth.value = pnlSubject.width;
                        form.mdlHeight.value = pnlSubject.height;
                    } else {
                        form.mdlWidth.value = null;
                        form.mdlHeight.value = null;
                    }
                    form.mdlWidth.enabled = event.source.value === internalContainer.leftComponent || event.source.value === internalContainer.rightComponent;
                    form.mdlHeight.enabled = event.source.value === internalContainer.topComponent || event.source.value === internalContainer.bottomComponent;
                };

            }
            return module_constructor;
        });
