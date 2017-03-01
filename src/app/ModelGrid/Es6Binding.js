/**
 * 
 * @author mg
 */
define(['orm', 'forms', 'forms/anchors-pane', 'forms/model-grid',
    'forms/service-grid-column', 'forms/model-grid-column', 'forms/model-date', 'forms/model-check-box'],
        function (Orm, Forms, AnchorsPane, ModelGrid,
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
                widget.height = 510;

                function initGrid() {
                    var grid = new ModelGrid();
                    grid.deletable = grid.insertable = false;

                    var colService = new ServiceGridColumn();
                    var colName = new ModelGridColumn();
                    colName.title = "Pet's name";
                    colName.minWidth = 107;
                    colName.field = 'pet';
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

                var grid1 = initGrid();
                var grid2 = initGrid();
                widget.add(grid1, {left: 0, top: 0, width: 500, height: 245});
                widget.add(grid2, {left: 0, top: 260, width: 500, height: 245});
                var bindingHandler = {set: function changed(obj, prop, value) {
                        obj[prop] = value;
                        if (prop === 'pet' || prop === 'fromdate' || prop === 'todate' || prop === 'ispaid') {
                            grid1.changed(obj);
                            grid2.changed(obj);
                            // In case of adding items to data, you should call grid.added(item or an array of added items)
                            // In case of removing items to data, you should call grid.removed(item or an array of removed items)
                        }
                    }};

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    var gridData = [
                        new Proxy({pet: 'Jerry', fromdate: new Date(), todate: new Date(), ispaid: true}, bindingHandler),
                        new Proxy({pet: 'Tom', fromdate: new Date(), todate: new Date(), ispaid: false}, bindingHandler),
                        new Proxy({pet: 'Drujok', fromdate: new Date(), todate: new Date(), ispaid: false}, bindingHandler),
                        new Proxy({pet: 'Mailo', fromdate: new Date(), todate: new Date(), ispaid: false}, bindingHandler),
                        new Proxy({pet: 'Pick', fromdate: new Date(), todate: new Date(), ispaid: true}, bindingHandler),
                        new Proxy({pet: 'Vaska', fromdate: new Date(), todate: new Date(), ispaid: true}, bindingHandler)
                    ];
                    grid1.data = grid2.data = gridData;
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

                model.requery(function () {
                });

            }
            return module_constructor;
        });