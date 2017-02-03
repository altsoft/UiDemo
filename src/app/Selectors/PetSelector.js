/**
 * 
 * @author mg
 *
 */
define('PetSelector', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    return function () {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        form.btnClose.onActionPerformed = function (evt) {
            form.close();
        };

        form.btnSelect.onActionPerformed = function (evt) {
            form.close(model.qAllPets.cursor);
        };

        form.gridPets.onMouseClicked = function (evt) {
            if (evt.clickCount > 1) {
                form.close(model.qAllPets.cursor);
            }
        };

        self.select = function (aOnSelect) {
            form.showModal(function (aClosedWith) {// this callback accepts a form.close's call argument.
                aOnSelect(aClosedWith);
            });
        };

        model.requery(function () {
            form.btnSelect.enabled = true;
        });

    };
});
