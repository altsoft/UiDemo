/**
 * 
 * @author user
 */
define('DesktopPanePanel', ['forms', 'ui', 'forms/desktop-pane', 'environment','DesktopInnerForm','AddDesktopContainer'],
        function (Forms, Ui, DesktopPane, Env, DesktopInnerForm, AddDesktopContainer, ModuleName) {
            function module_constructor() {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var counter = 1;

                var internalContainer = new DesktopPane();
                internalContainer.width = 800;
                internalContainer.height = 400;
                if (Env.agent == Env.HTML5) {
                    internalContainer.element.style.border = "thin solid #ccc";
                    internalContainer.element.style.borderRadius = "5px";
                    internalContainer.element.style.background = "#345";
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
                }

                function deleteElement(aElement) {
                    aElement.close();
                }

                function placeElement(aElement, counter) {
                    subject = aElement;
                    aElement.onDesktop(internalContainer);
                    aElement.toolTipText = "Demo form " + counter; // + " id:" + internalContainer.count;
                    aElement.setTitle(aElement.toolTipText);
                }

                addPanel = new AddDesktopContainer(getPosition, deleteElement, placeElement);
                var formModule = new DesktopInnerForm();
                formModule.onDesktop(internalContainer);
                formModule.itemname = 'Demo form';
                formModule.setTitle(formModule.itemname);
                addPanel.addComponentTolist(formModule);


                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    addPanel.showOnPanel(aPanel);
                };

                self.getFormHeight = function () {
                    return form.view.height;
                };

                form.btnMinimize.onActionPerformed = function (event) {
                    internalContainer.minimizeAll();
                };

                form.btnRestore.onActionPerformed = function (event) {
                    internalContainer.restoreAll();
                };

                form.btnMaximize.onActionPerformed = function (event) {
                    internalContainer.maximizeAll();
                };

                form.btnCloseAll.onActionPerformed = function (event) {
                    internalContainer.closeAll();
                };
            }
            return module_constructor;
        });