/* global P */

/**
 * 
 * @author user
 * {global P}
 */
function BorderPositionSelection() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var onSucsess;
    var grid;
    
    var btnGrpPos = new P.ButtonGroup();
    btnGrpPos.add(form.rbTop);
    btnGrpPos.add(form.rbLeft);
    btnGrpPos.add(form.rbCenter);
    btnGrpPos.add(form.rbRight);
    btnGrpPos.add(form.rbBottom);
    
    form.rbCenter.selected = true;

    self.show = function () {
        form.show();
    };

    model.requery(function () {
        // TODO : place your code here
    });

    self.showModal = function (aOnSucsess) {
        onSucsess = aOnSucsess;
        form.showModal();
    };

    form.btnCancel.onActionPerformed = function (event) {
        form.close();
    };
    form.btnOk.onActionPerformed = function (event) {
        var position;
        if (form.rbTop.selected) {
            position = P.VerticalPosition.TOP
        }
        if (form.rbLeft.selected) {
            position = P.HorizontalPosition.LEFT
        }
        if (form.rbCenter.selected) {
            position = P.VerticalPosition.CENTER
        }
        if (form.rbRight.selected) {
            position = P.HorizontalPosition.RIGHT
        }
        if (form.rbBottom.selected) {
            position = P.VerticalPosition.BOTTOM
        }

        onSucsess(position);
        form.close();
    };


}
