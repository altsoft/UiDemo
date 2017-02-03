/**
 * 
 * @author mg
 */
define('FrozenColumns', ['orm', 'forms', 'ui', 'forms/border-pane', 'forms/model-combo', 'forms/model-grid',
    'forms/service-grid-column', 'forms/model-grid-column', 'forms/model-date', 'forms/model-check-box'],
        function (Orm, Forms, Ui, BorderPane, ModelCombo, ModelGrid, ServiceGridColumn, ModelGridColumn, ModelDate, ModelCheckBox, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {
                    form.show();
                };

                var widget = new BorderPane();
                widget.width = 500;
                widget.height = 150;

                var grid = new ModelGrid();
                grid.editable = grid.deletable = grid.insertable = false;

                var colService = new ServiceGridColumn();
                var colName = new ModelGridColumn();
                colName.title = "Pet's name";
                colName.minWidth = 107;
                colName.field = 'pet';
                colName.editor = new ModelCombo();
                colName.editor.displayField = 'name';
                colName.editor.displayList = model.qAllPets;
                var colFromDate = new ModelGridColumn();
                colFromDate.title = 'From date';
                colFromDate.minWidth = 150;
                colFromDate.field = 'fromdate';
                colFromDate.editor = new ModelDate();
                colFromDate.editor.format = 'dd.MM.yyyy';
                var colToDate = new ModelGridColumn();
                colToDate.title = 'To date';
                colToDate.minWidth = 150;
                colToDate.field = 'todate';
                colToDate.editor = new ModelDate();
                colToDate.editor.format = 'dd.MM.yyyy';
                var colIsPaid = new ModelGridColumn();
                colIsPaid.title = 'Paid';
                colIsPaid.minWidth = 150;
                colIsPaid.field = 'ispaid';
                colIsPaid.editor = new ModelCheckBox();

                grid.addColumnNode(colService);
                grid.addColumnNode(colName);
                grid.addColumnNode(colFromDate);
                grid.addColumnNode(colToDate);
                grid.addColumnNode(colIsPaid);
                grid.frozenColumns = 2;

                widget.add(grid);

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    model.requery(function () {
                        grid.data = model.qAllVisits;
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