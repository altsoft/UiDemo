/**
 * 
 * @author jskonst
 */
define('temp', ['orm', 'forms', 'ui', 'StandardWidgets'], function (Orm, Forms, Ui, StandardWidgets, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };

        // TODO : place your code here

        model.requery(function () {
            // TODO : place your code here
        });

        form.button.onActionPerformed = function () {
            var stdW = StandardWidgets;
            var lW =  stdW['LabelView'];
            lW.show();
            var lW1 =  stdW['LabelView'];
            //lW1.show();
            
            if (lW===lW1){
                console.log("Yes");
            }
        };

    }
    return module_constructor;
});
