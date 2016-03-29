/**
 * 
 * @author mg
 */
define('OrmBinding', ['orm', 'forms', 'ui', 'forms/anchors-pane', 'forms/model-combo', 'forms/model-grid',
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
                widget.width = 500;
                widget.height = 400;

                var grid1 = initGrid();
                var grid2 = initGrid();

                function initGrid() {
                    var grid = new ModelGrid();

                    grid.deletable = grid.insertable = false;
                    var colService = new ServiceGridColumn();
                    var colName = new ModelGridColumn();
                    colName.title = "Pet's name";
                    colName.minWidth = 107;
                    colName.field = 'pet';
                    colName.editor = new ModelCombo();
                    colName.editor.displayField = 'name';
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

                    grid.addColumnNode(colService);
                    grid.addColumnNode(colName);
                    grid.addColumnNode(colFromDate);
                    grid.addColumnNode(colToDate);
                    grid.addColumnNode(colIsPaid);

                    return grid;
                }

                widget.add(grid1, {left: 0, top: 0, width: 500, height: 180});
                widget.add(grid2, {left: 0, top: 210, width: 500, height: 180});

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    model.requery(function () {
                        grid1.data = grid2.data = model.qAllVisits;
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