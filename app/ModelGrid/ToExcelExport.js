/**
 * 
 * @author mg
 * @public
 */
define('ToExcelExport', ['orm', 'template'], function (Orm, loadTemplate, ModuleName) {
    return function () {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , template = loadTemplate(ModuleName, model);
        
        self.execute = function (onSuccess, onFailure) {            
            model.requery(function () {
                var report = template.generateReport();
                onSuccess(report);
            }, onFailure);            
        };
    };
});
