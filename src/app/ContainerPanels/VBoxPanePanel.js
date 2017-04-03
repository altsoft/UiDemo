/**
 * 
 * @author user
 */
define('VBoxPanePanel', ['forms', 'ui', 'forms/border-pane', 'forms/scroll-pane',
    'forms/box-pane', 'environment', 'forms/button','AddComponentContainer'],
        function (Forms, Ui, BorderPane, ScrollPane, BoxPane, Env, Button,AddComponentContainer, ModuleName) {
            function module_constructor(aPlaygroundPanel) {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var counter = 1;
                var internalContainer = new BorderPane();
                var scrollContainer = new ScrollPane();
                var demoContainer = new BoxPane(Ui.Orientation.VERTICAL);
                internalContainer.width = 800;
                internalContainer.height = 400;

                form.mdlVGap.value = 0;

                if (form.chbIsScroll.selected) {
                    scrollContainer.add(demoContainer);
                    internalContainer.add(scrollContainer);
                } else {
                    internalContainer.add(demoContainer);
                }

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

                var addPanel;
                var subject;

                self.show = function () {
                    form.show();
                };

                function updatePosition(aElement) {
                    subject = aElement;
                }

                function deleteElement(aElement) {
                    demoContainer.remove(aElement);
                }

                function placeElement(aElement, counter) {
                    aElement.height = Math.floor(Math.random() * (100 - 20)) + 20;
                    demoContainer.add(aElement);
                    aElement.toolTipText = "Sample " + counter;// + " id:" + demoContainer.count;
                }

                addPanel = new AddComponentContainer(updatePosition, deleteElement, placeElement);
                var comp = new Button('Sample');
                comp.height = 30;
                demoContainer.add(comp);
                comp.itemname = comp.text;
                addPanel.addComponentTolist(comp);


                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    addPanel.showOnPanel(aPanel);
                };

                form.mdlVGap.onValueChange = function (event) {
                    demoContainer.vgap = event.source.value;
                };

                form.chbIsScroll.onActionPerformed = function (event) {
                    internalContainer.clear();
                    if (event.source.selected) {
                        scrollContainer.add(demoContainer);
                        internalContainer.add(scrollContainer);
                    } else {
                        internalContainer.add(demoContainer);
                    }
                };

            }
            return module_constructor;
        });