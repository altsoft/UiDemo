/**
 * 
 * @author user
 */

define('AnchorsPanePanel', ['forms', 'ui', 'forms/anchors-pane', 'environment', 'invoke', 'forms/button', 'AddComponentContainer'],
        function (Forms, Ui, AnchorsPane, Env, Invoke, Button, AddComponentContainer, ModuleName) {
            function module_constructor() {
                var self = this
                        , form = Forms.loadForm(ModuleName);
                var counter = 1;

                var internalContainer = new AnchorsPane();
                internalContainer.width = 800;
                internalContainer.height = 400;

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

                function updatePosition(aElement) {
                    subject = aElement;
                    form.mdlTop.value = aElement.top;
                    form.mdlBottom.value = aElement.bottom;
                    form.mdlLeft.value = aElement.left;
                    form.mdlRight.value = aElement.right;
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
                            updatePosition(aElement);
                        };

                        internalContainer.onMouseReleased = function (event) {
                            //event.stopPropagation();
                            aElement.left = event.x - leftOffset;
                            aElement.top = event.y - topOffset;
                            updatePosition(aElement);
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
                    updatePosition(aElement);
                    internalContainer.add(aElement);
                    /*
                     , {
                     left: position.left,
                     width: aElement.width,
                     right: position.right,
                     top: position.top,
                     height: aElement.height,
                     bottom: position.bottom
                     });
                     */
                    aElement.toolTipText = "Sample " + counter; //+ " id:" + internalContainer.count;
                    aElement.child(0).text = "Drag & Drop me!"
                    setDragDrop(aElement);

                }

                addPanel = new AddComponentContainer(updatePosition, deleteElement, placeElement);
                var comp = new Button('Sample');
                comp.height = 30;
                comp.width = 120;
                internalContainer.add(comp,
                        {
                            left: 10,
                            width: comp.width,
                            top: 10,
                            height: comp.height,
                        });
                comp.itemname = 'Sample';
                setDragDrop(comp);
                addPanel.addComponentTolist(comp);
                Invoke.later(function(){
                    updatePosition(comp);
                });


                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    addPanel.showOnPanel(aPanel);
                };

                form.mdlTop.onValueChange = function (event) {
                    if (subject) {
                        subject.top = event.source.value;
                    }
                };

                form.mdlBottom.onValueChange = function (event) {
                    if (subject) {
                        subject.bottom = event.source.value;
                    }
                };

                form.mdlRight.onValueChange = function (event) {
                    if (subject) {
                        subject.right = event.source.value;
                    }
                };

                form.mdlLeft.onValueChange = function (event) {
                    if (subject) {
                        subject.left = event.source.value;
                    }
                };

            }
            return module_constructor;
        });