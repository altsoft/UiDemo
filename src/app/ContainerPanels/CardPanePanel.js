/**
 * 
 * @author user
 */
define('CardPanePanel', ['forms', 'ui', 'forms/card-pane', 'environment', 'forms/border-pane', 'forms/label', 'Utils/Pallete'],
        function (Forms, Ui, CardPane, Env, BorderPane, Label, Pallete, ModuleName) {
            function module_constructor(aPlaygroundPanel) {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var counter = 1;
                var elementsList = [];
                var gaps = {'vGap': 5,
                    'hGap': 5};

                form.mdlHGap.data = gaps;
                form.mdlHGap.field = 'hGap';
                form.mdlVGap.data = gaps;
                form.mdlVGap.field = 'vGap';

                form.mcmbElList.displayField = "itemname";
                form.mcmbElList.displayList = elementsList;

                var internalContainer = new CardPane(gaps.hGap, gaps.vGap);
                var demoContainer = internalContainer;
                internalContainer.width = 800;
                internalContainer.height = 400;

                if (Env.agent === Env.HTML5) {
                    internalContainer.element.style.border = "thin solid #ccc";
                    internalContainer.element.style.borderRadius = "5px";
                }

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
                    form.mcmbElList.displayList = null;
                    form.mcmbElList.displayList = elementsList;
                    form.mcmbElList.value = element;
                }

                function createCard(aColor, aName) {
                    var pnlSubject = new BorderPane();
                    pnlSubject.background = new Ui.Color(aColor);
                    var label = new Label(aName);
                    label.width = 50;
                    pnlSubject.add(label);
                    pnlSubject.itemname = aName;
                    pnlSubject.toolTipText = aName;
                    internalContainer.add(pnlSubject, label.text);
                    addComponentTolist(pnlSubject);
                    form.mcmbElList.displayList = null;
                    form.mcmbElList.displayList = elementsList;
                }
                createCard('#49a7f0', 'Sample A');
                createCard('#67eacc', 'Sample B');
                createCard('#6fea58', 'Sample C');
                form.mcmbElList.value = internalContainer.children()[0];

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
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
                    label.width = 200;
                    pnlSubject.add(label);
                    pnlSubject.onMousePressed = function (event) {
                        form.mcmbElList.value = pnlSubject;
                    };

                    var cardName;
                    if (form.txtCardName.text) {
                        cardName = form.txtCardName.text;
                    } else {
                        cardName = "Sample " + counter;
                        counter += 1;
                    }
                    for (var itm in internalContainer.children()) {
                        if (internalContainer.child(itm).toolTipText === cardName) {
                            alert("Card with same name already exist");
                            return;
                        }
                    }
                    internalContainer.add(pnlSubject, cardName);
                    pnlSubject.toolTipText = cardName;
                    pnlSubject.itemname = cardName;
                    internalContainer.show(cardName);
                    label.text = cardName;
                    addComponentTolist(pnlSubject);
                };

                form.btnDelete.onActionPerformed = function (event) {
                    internalContainer.remove(form.mcmbElList.value);
                    var pos = elementsList.indexOf(form.mcmbElList.value);
                    elementsList.splice(pos, 1);
                    form.mcmbElList.displayList = null;
                    form.mcmbElList.displayList = elementsList;
                    if (elementsList.length > 0) {
                        form.mcmbElList.value = elementsList[pos < elementsList.length ? pos : pos - 1];
                    } else
                        form.mcmbElList.value = null;
                };

                form.mcmbElList.onValueChange = function (event) {
                    if (form.mcmbElList.value) {
                        internalContainer.show(form.mcmbElList.value.toolTipText);
                    }
                };

            }
            return module_constructor;
        });
