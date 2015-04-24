/**
 * 
 * @author user
 */
function OwnersReport() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , template = P.loadTemplate(this.constructor.name, model);
    
    // TODO : place constructor code here
    model.ownersQuery.params ="%%";
    model.requery();
    self.execute = function (onSuccess, onFailure) {
        
        model.requery(function () {
            // TODO : place data processing code here
            var report = template.generateReport();
            report.show();
            // report.show(); | report.print(); | var savedTo = report.save(saveTo ?);
            onSuccess(report);
        }, onFailure);
        
    };
}
