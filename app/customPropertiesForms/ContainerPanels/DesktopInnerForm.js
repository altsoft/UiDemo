/* global P */

/**
 * 
 * @author user
 * {global P}
 */
function DesktopInnerForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    self.onWindowClosed;
    self.show = function () {
        form.show();
    };

    self.onDesktop = function (aDesktop) {
        form.showInternalFrame(aDesktop);
    };

    self.close = function () {
        form.close();
        
    };
    
    form.onWindowClosed = function(event) {
        self.onWindowClosed();
    };

    model.requery(function () {
    });

}
