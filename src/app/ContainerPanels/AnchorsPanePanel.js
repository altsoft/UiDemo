/**
 * 
 * @author user
 */

define('AnchorsPanePanel', ['forms', 'ui', 'forms/anchors-pane', 'environment', 'forms/button','AddComponentContainer'],
        function (Forms, Ui, AnchorsPane, Env, Button, AddComponentContainer, ModuleName) {
            function module_constructor() {
                var self = this
                        , form = Forms.loadForm(ModuleName);
                var counter = 1;

                var internalContainer = new AnchorsPane();
                internalContainer.width = 800;
                internalContainer.height = 400;

                var position = {'left': 0,
                    'right': 0,
                    'top': 0,
                    'bottom': 0};

                form.mdlTop.data = position;
                form.mdlBottom.data = position;
                form.mdlLeft.data = position;
                form.mdlRight.data = position;

                form.mdlTop.field = 'top';
                form.mdlBottom.field = 'bottom';
                form.mdlLeft.field = 'left';
                form.mdlRight.field = 'right';


                if (Env.agent === Env.HTML5) {
                    internalContainer.element.style.border = "thin solid #ccc";
                    internalContainer.element.style.borderRadius = "5px";
                }

                var addPanel;
                var subject;

                self.getDemoComponent = function () {
                    return internalContainer;
                };

                self.getViewComponent = function () {
                    return internalContainer;
                };

                self.show = function () {
                    form.show();
                };

                function getPosition(aElement) {
                    subject = aElement;
                    position.left = aElement.left;
                    position.top = aElement.top;
                    position.bottom = aElement.bottom;
                    position.right = aElement.right;
                }

                function deleteElement(aElement) {
                    internalContainer.remove(aElement);
                }

                function setDragDrop(aElement) {
                    aElement.onMousePressed = function (event) {
                        var leftOffset = event.x;
                        var topOffset = event.y;

                        internalContainer.onMouseMoved = function (event) {
                            //event.stopPropagation();
                            aElement.left = event.x - leftOffset;
                            aElement.top = event.y - topOffset;
                            getPosition(aElement);
                        };

                        internalContainer.onMouseReleased = function (event) {
                            //event.stopPropagation();
                            aElement.left = event.x - leftOffset;
                            aElement.top = event.y - topOffset;
                            getPosition(aElement);
                            internalContainer.onMouseMoved = null;
                            internalContainer.onMouseReleased = null;
                            aElement.onMouseReleased = null;
                        };

                        aElement.onMouseReleased = function () {
                            //event.stopPropagation();
                            internalContainer.onMouseMoved = null;
                            aElement.onMouseReleased = null;
                            internalContainer.onMouseReleased = null;
                        };
                    };
                }

                function placeElement(aElement, counter) {
                    subject = aElement;
                    position.left = 0;
                    position.right = 0;
                    position.top = 0;
                    position.bottom = 0;

                    internalContainer.add(aElement
                            , {left: position.left,
                                width: aElement.width,
                                right: position.right,
                                top: position.top,
                                height: aElement.height,
                                bottom: position.bottom});
                    aElement.toolTipText = "Sample " + counter; //+ " id:" + internalContainer.count;
                    aElement.child(0).text = "Drag&Drop me!"
                    setDragDrop(aElement);

                }

                addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);
                var comp = new Button('Sample');
                comp.height = 30;
                comp.width = 120;
                internalContainer.add(comp,
                        {left: 10,
                            width: comp.width,
                            right: 0,
                            top: 10,
                            height: comp.height,
                            bottom: 0});
                comp.itemname = 'Sample';
                setDragDrop(comp);
                addPanel.addComponentTolist(comp);
                position.left = 10;
                position.top = 10;


                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    addPanel.showOnPanel(aPanel);
                };

                form.mdlTop.onValueChange = function (event) {
                    if (subject) {
                        subject.top = position.top;
                    }
                };

                form.mdlBottom.onValueChange = function (event) {
                    if (subject) {
                        subject.bottom = position.bottom;
                    }
                };

                form.mdlRight.onValueChange = function (event) {
                    if (subject) {
                        subject.right = position.right;
                    }
                };

                form.mdlLeft.onValueChange = function (event) {
                    if (subject) {
                        subject.left = position.left;
                    }
                };

                self.getFormHeight = function () {
                    return form.view.height;
                };
            }
            return module_constructor;
        });