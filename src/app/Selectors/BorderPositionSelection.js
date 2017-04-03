/**
 * 
 * @author user
 * 
 */
define('BorderPositionSelection', ['forms', 'ui','forms/button-group'],
        function (Forms, Ui, ButtonGroup, ModuleName) {
            function module_constructor() {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                var onSucsess;

                var btnGrpPos = new ButtonGroup();
                btnGrpPos.add(form.rbTop);
                btnGrpPos.add(form.rbLeft);
                btnGrpPos.add(form.rbCenter);
                btnGrpPos.add(form.rbRight);
                btnGrpPos.add(form.rbBottom);

                form.rbCenter.selected = true;

                self.show = function () {
                    form.show();
                };

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
                        position = Ui.VerticalPosition.TOP;
                    }
                    if (form.rbLeft.selected) {
                        position = Ui.HorizontalPosition.LEFT;
                    }
                    if (form.rbCenter.selected) {
                        position = Ui.VerticalPosition.CENTER;
                    }
                    if (form.rbRight.selected) {
                        position = Ui.HorizontalPosition.RIGHT;
                    }
                    if (form.rbBottom.selected) {
                        position = Ui.VerticalPosition.BOTTOM;
                    }
                    onSucsess(position);
                    form.close();
                };
            }
            return module_constructor;
        });