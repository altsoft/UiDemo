/**
 * 
 * @author mg
 */
define(['orm', 'forms', 'ui', 'forms/anchors-pane', 'forms/model-combo', 'forms/model-grid',
    'forms/service-grid-column', 'forms/model-grid-column', 'forms/model-date', 'forms/model-check-box', 'forms/button', 'rpc'],
        function (Orm, Forms, Ui, AnchorsPane, ModelCombo, ModelGrid,
                ServiceGridColumn, ModelGridColumn, ModelDate, ModelCheckBox, Button, Rpc, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                model.ownersPets.elementClass = function () {
                    Object.defineProperty(this, 'owner', {
                        get: function () {
                            return model.ownersPets.findByKey(this.owner_id);
                        }
                    });
                    Object.defineProperty(this, 'pets', {
                        get: function () {
                            return model.ownersPets.find({owner_id: this.id});
                        }
                    });
                };

                self.show = function () {
                    form.show();
                };

                var widget = new AnchorsPane();
                widget.width = 750;
                widget.height = 180;

                var ownersPetsGrid = new ModelGrid();
                ownersPetsGrid.editable = ownersPetsGrid.deletable = ownersPetsGrid.insertable = false;

                ownersPetsGrid.addColumnNode(new ServiceGridColumn());
                ownersPetsGrid.childrenField = 'pets';
                ownersPetsGrid.parentField = 'owner';

                var colName = new ModelGridColumn();
                colName.title = "Owner->Pet";
                colName.minWidth = 80;
                colName.field = 'aName';
                ownersPetsGrid.addColumnNode(colName);

                widget.add(ownersPetsGrid, {left: 0, width: 200, top: 0, bottom: 0, height: 170});

                self.showOnPanel = function (aPanel) {
                    aPanel.add(form.view);
                    model.requery(function () {
                        ownersPetsGrid.data = model.ownersPets;
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