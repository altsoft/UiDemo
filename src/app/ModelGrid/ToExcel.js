/**
 * 
 * @author mg
 */
define(['orm', 'forms', 'ui', 'forms/anchors-pane', 'forms/model-combo', 'forms/model-grid',
    'forms/service-grid-column', 'forms/model-grid-column', 'forms/model-date', 'forms/model-check-box','forms/button','rpc'],
        function (Orm, Forms, Ui, AnchorsPane, ModelCombo, ModelGrid,
                ServiceGridColumn, ModelGridColumn, ModelDate, ModelCheckBox,Button,Rpc, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {
                    form.show();
                };

                var widget = new AnchorsPane();
                widget.width = 500;
                widget.height = 200;

                var grdExport = new ModelGrid();
                grdExport.editable = grdExport.deletable = grdExport.insertable = false;

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

                grdExport.addColumnNode(colService);
                grdExport.addColumnNode(colName);
                grdExport.addColumnNode(colFromDate);
                grdExport.addColumnNode(colToDate);
                grdExport.addColumnNode(colIsPaid);

                var btnReport = new Button('Export...');
                btnReport.onActionPerformed = function (evt) {
                    btnReport.enabled = false;
                    Rpc.requireRemotes('ToExcelExport', function (toExcelExport) {
                        toExcelExport.execute(function (aReport) {
                            aReport.show();
                            btnReport.enabled = true;
                        }, function () {
                            btnReport.enabled = true;
                        });
                    }, function () {
                        btnReport.enabled = true;
                    });
                };

                widget.add(btnReport, {left: 0, width: 100, top: 0, height: 30});
                widget.add(grdExport, {left: 0, width: 500, top: 40, height: 160});

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    model.requery(function () {
                        grdExport.data = model.qAllVisits;
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