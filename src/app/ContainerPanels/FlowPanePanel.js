/**
 * 
 * @author user
 */
define('FlowPanePanel', ['forms', 'ui', 'forms/border-pane', 'forms/scroll-pane',
    'forms/flow-pane', 'environment', 'forms/button','AddComponentContainer'],
        function (Forms, Ui, BorderPane, ScrollPane, FlowPane, Env, Button,AddComponentContainer, ModuleName) {
            function module_constructor(aPlaygroundPanel) {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var counter = 1;
                var internalContainer = new BorderPane();
                var scrollContainer = new ScrollPane();
                scrollContainer.verticalScrollBarPolicy = Ui.ScrollBarPolicy.AUTO;
                scrollContainer.horizontalScrollBarPolicy = Ui.ScrollBarPolicy.NEVER;

                var gaps = {'vGap': 5,
                    'hGap': 5};
                form.mdlHGap.data = gaps;
                form.mdlHGap.field = 'hGap';
                form.mdlVGap.data = gaps;
                form.mdlVGap.field = 'vGap';

                var demoContainer = new FlowPane(gaps.hGap, gaps.vGap);
                internalContainer.width = 800;
                internalContainer.height = 400;

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

                function getPosition(aElement) {
                    subject = aElement;
                }

                function deleteElement(aElement) {
                    demoContainer.remove(aElement);
                }

                function placeElement(aElement, counter) {
                    aElement.height = Math.floor(Math.random() * (100 - 20)) + 20;
                    demoContainer.add(aElement);
                    aElement.toolTipText = "Sample " + counter; // + " id:" + demoContainer.count;
                }

                addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);
                var comp = new Button('Sample');
                comp.height = 30;
                comp.width = 120;
                comp.itemname = comp.text;
                demoContainer.add(comp);
                addPanel.addComponentTolist(comp);

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    addPanel.showOnPanel(aPanel);
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

                form.mdlHGap.onValueChange = function (event) {
                    demoContainer.hgap = gaps.hGap;
                };

                form.mdlVGap.onValueChange = function (event) {
                    demoContainer.vgap = gaps.vGap;
                };
            }
            return module_constructor;
        });