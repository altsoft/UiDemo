/**
 * 
 * @author mg
 */
define('ListView', ['orm', 'forms', 'ui', 'forms/anchors-pane', 'forms/model-combo', 'forms/model-grid',
    'forms/service-grid-column', 'forms/model-grid-column', 'forms/model-date', 'forms/model-check-box'],
        function (Orm, Forms, Ui, AnchorsPane, ModelCombo, ModelGrid,
                ServiceGridColumn, ModelGridColumn, ModelDate, ModelCheckBox, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {
                    form.show();
                };

                var widget = new AnchorsPane();
                widget.width = 750;
                widget.height = 120;

                var listVew = new ModelGrid();
                listVew.editable = listVew.deletable = listVew.insertable = false;
                listVew.headerVisible = false;
                listVew.showHorizontalLines = false;
                listVew.showVerticalLines = false;
                listVew.showOddRowsInOtherColor = false;

                var colName = new ModelGridColumn();
                colName.title = "Pet";
                colName.minWidth = 107;
                colName.field = 'name';
                listVew.addColumnNode(colName);

                widget.add(listVew, {left: 0, width: 150, top: 0, bottom: 0, height: 120});

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    model.requery(function () {
                        listVew.data = model.qAllPets;
                    });
                };

                self.getDemoComponent = function () {
                    return widget;
                };

                self.getViewComponent = function () {
                    return widget;
                };

                self.getFormHeight = function () {
                    return form.view.height;
                };
                // TODO : place your code here

                model.requery(function () {
                    // TODO : place your code here
                });

            }
            return module_constructor;
        });