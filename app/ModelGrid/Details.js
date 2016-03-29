/**
 * 
 * @author mg
 */

define('Details', ['orm', 'forms', 'ui', 'forms/anchors-pane', 'forms/model-grid',
    'forms/service-grid-column', 'forms/model-grid-column', 'forms/model-date', 'forms/model-check-box'],
        function (Orm, Forms, Ui, AnchorsPane, ModelGrid, ServiceGridColumn, ModelGridColumn, ModelDate, ModelCheckBox, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {
                    form.show();
                };

                var widget = new AnchorsPane();
                widget.width = 750;
                widget.height = 170;

                var masterGrid = new ModelGrid();
                masterGrid.editable = masterGrid.deletable = masterGrid.insertable = false;

                masterGrid.addColumnNode(new ServiceGridColumn());

                var colName = new ModelGridColumn();
                colName.title = "Pet";
                colName.minWidth = 107;
                colName.field = 'name';
                masterGrid.addColumnNode(colName);

                widget.add(masterGrid, {left: 0, width: 170, top: 0, bottom: 0});

                var detailGrid = new ModelGrid();

                detailGrid.editable = detailGrid.deletable = detailGrid.insertable = false;
                var colFromDate = new ModelGridColumn();
                colFromDate.title = 'From date';
                colFromDate.minWidth = 107;
                colFromDate.field = 'fromdate';
                colFromDate.editor = new ModelDate();
                colFromDate.editor.format = 'dd.MM.yyyy';
                var colToDate = new ModelGridColumn();
                colToDate.title = 'To date';
                colToDate.minWidth = 107;
                colToDate.field = 'todate';
                colToDate.editor = new ModelDate();
                colToDate.editor.format = 'dd.MM.yyyy';
                var colIsPaid = new ModelGridColumn();
                colIsPaid.title = 'Paid';
                colIsPaid.minWidth = 65;
                colIsPaid.field = 'ispaid';
                colIsPaid.editor = new ModelCheckBox();

                detailGrid.addColumnNode(new ServiceGridColumn());
                detailGrid.addColumnNode(colFromDate);
                detailGrid.addColumnNode(colToDate);
                detailGrid.addColumnNode(colIsPaid);

                widget.add(detailGrid, {left: 200, width: 400, top: 0, bottom: 0, height: 120});

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    model.requery(function () {
                        masterGrid.data = model.qAllPets;
                        detailGrid.data = model.qAllPets;
                        detailGrid.field = 'cursor.visits';
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