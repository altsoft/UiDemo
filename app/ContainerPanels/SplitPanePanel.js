/**
 * 
 * @author user
 */
define('SplitPanePanel', ['forms', 'ui', 'forms/split-pane'],
        function (Forms, Ui, SplitPane, ModuleName) {
            function module_constructor(aPlaygroundPanel) {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var counter = 1;

                var externalContainer = aPlaygroundPanel;
                var internalContainer;
                var cModifiers;
                var pnl1;
                var pnl2;
                form.radioButton1.selected = true;

                self.show = function () {
                    form.show();
                };

                function preparations() {
                    internalContainer = new SplitPane(Ui.Orientation.VERTICAL);
                    pnl1 = new AnchorsPanePanel();
                    pnl1.background = Ui.Color.RED;
                    pnl2 = new AnchorsPanePanel();
                    pnl2.background = Ui.Color.GREEN;
                    internalContainer.add(pnl1);
                    internalContainer.add(pnl2);
                    internalContainer.background = P.Color.RED;
                }


                self.showOnPanel = function (aPanel) {
                    preparations();
                    aPanel.add(form.view);
                    externalContainer.add(internalContainer,
                            {left: 2,
                                width: null,
                                right: 2,
                                top: 2,
                                height: null,
                                bottom: 2});
                };

                form.checkBox.onActionPerformed = function (event) {
                    if (form.checkBox.selected) {
                        internalContainer.oneTouchExpandable = true;
                    } else {
                        internalContainer.oneTouchExpandable = false;
                    }
                };
                form.radioButton.onActionPerformed = function (event) {
                    if (form.radioButton.selected) {
                        internalContainer.orientation = Ui.Orientation.HORIZONTAL;
                    }
                };

                form.radioButton1.onActionPerformed = function (event) {
                    if (form.radioButton.selected) {
                        internalContainer.orientation = Ui.Orientation.VERTICAL;
                    }
                };
            }
            return module_constructor;
        });