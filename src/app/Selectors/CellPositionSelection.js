/**
 * 
 * @author user
 */
define('CellPositionSelection', ['forms', 'ui'], function (Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var onSucsess;
        var grid;
        self.show = function () {
            form.show();
        };

        var cellPos = {
            'row': 0,
            'col': 0
        };

        form.mdlRow.data = cellPos;
        form.mdlColl.data = cellPos;
        form.mdlRow.field = 'row';
        form.mdlColl.field = 'col';

        self.showModal = function (aGrid, aOnSucsess) {
            onSucsess = aOnSucsess;
            grid = aGrid;
            form.showModal();
        };

        form.btnCancel.onActionPerformed = function (event) {
            form.close();
        };
        form.btnOk.onActionPerformed = function (event) {
            onSucsess(cellPos);
            form.close();
        };

        form.mdlRow.onValueChange = function (event) {
            if (cellPos.row < 0) {
                cellPos.row = 0;
            }
            if (cellPos.row >= grid.rows) {
                cellPos.row = grid.rows - 1;
            }
        };
        form.mdlColl.onValueChange = function (event) {
            if (cellPos.col < 0) {
                cellPos.col = 0;
            }
            if (cellPos.col >= grid.colls) {
                cellPos.col = grid.colls - 1;
            }
        };

    }
    return module_constructor;
});