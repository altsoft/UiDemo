/**
 * 
 * @author jskonst
 */
function test() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    form.formattedField.value = 12345678;
    P.Logger.info(form.formattedField.format);
    form.formattedField.format = "(###)#-#-#-##-#";
    self.show = function () {
        form.show();
//        form.formattedField.format;


    };

    model.requery(/*function(){}*/);

    form.button.onActionPerformed = function (event) {
        model.tempData.push({});
    };

}
