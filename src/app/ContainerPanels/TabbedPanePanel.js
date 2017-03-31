/**
 * 
 * @author user
 */
define('TabbedPanePanel', ['forms', 'ui', 'forms/tabbed-pane', 'environment', 'forms/border-pane', 'forms/label', 'Utils/Pallete'],
        function (Forms, Ui, TabbedPane, Env, BorderPane, Label, Pallete, ModuleName) {
            function module_constructor(aPlaygroundPanel) {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var counter = 1;
                var elementsList = [];

                form.mcmbElList.displayField = "itemname";
                form.mcmbElList.displayList = elementsList;

                var internalContainer = new TabbedPane();
                var demoContainer = internalContainer;
                internalContainer.width = 800;
                internalContainer.height = 400;

                self.getDemoComponent = function () {
                    return internalContainer;
                };

                self.getViewComponent = function () {
                    return internalContainer;
                };
                self.show = function () {
                    form.show();
                };

                function addComponentTolist(element) {
                    elementsList.push(element);
                    form.mcmbElList.value = element;
                }

                function createDemoTab(aColor, aName) {
                    var pnlSubject = new BorderPane();
                    pnlSubject.background = new Ui.Color(aColor);
                    var label = new Label(aName);
                    label.width = 50;
                    pnlSubject.add(label);
                    pnlSubject.itemname = aName;
                    pnlSubject.toolTipText = aName;
                    internalContainer.add(pnlSubject, label.text);
                    addComponentTolist(pnlSubject);
                }
                createDemoTab('#49a7f0', 'Tab 1');
                counter += 1;
                createDemoTab('#67eacc', 'Tab 2');
                counter += 1;
                createDemoTab('#6fea58', 'Tab 3');
                counter += 1;
                form.mcmbElList.value = internalContainer.children()[0];

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                };

                form.btnAddComponent.onActionPerformed = function (event) {
                    var pnlSubject = new BorderPane();
                    var colorIndex = Math.floor(Math.random() * Pallete.length);
                    pnlSubject.background = new Ui.Color(Pallete[colorIndex]);
                    var label = new Label();
                    label.width = 200;
                    pnlSubject.add(label);
                    pnlSubject.onMousePressed = function (event) {
                        form.mcmbElList.value = pnlSubject;
                    };

                    var tabName;
                    if (form.txtTabName.text) {
                        tabName = form.txtTabName.text;
                    } else {
                        tabName = "Tab " + counter;
                        counter += 1;
                    }
                    internalContainer.add(pnlSubject, tabName);
                    pnlSubject.toolTipText = tabName;
                    pnlSubject.itemname = tabName;
                    internalContainer.selectedIndex = internalContainer.children().length - 1;
                    label.text = tabName;
                    addComponentTolist(pnlSubject);
                };

                form.btnDelete.onActionPerformed = function (event) {
                    internalContainer.remove(form.mcmbElList.value);
                    elementsList.splice(elementsList.indexOf(form.mcmbElList.value), 1);
                    form.mcmbElList.value = elementsList[0];
                };

                form.mcmbElList.onValueChange = function (event) {
                    if (form.mcmbElList.value) {
                        internalContainer.children().forEach(function (item, i, arr) {
                            if (item === form.mcmbElList.value) {
                                internalContainer.selectedIndex = i;
                            }
                        });
                    }
                };

            }
            return module_constructor;
        });