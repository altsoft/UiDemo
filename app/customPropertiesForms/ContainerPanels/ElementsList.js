/**
 * 
 * @author user
 */
function ElementsList() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    // TODO : place your code here

    model.requery(function () {
        // TODO : place your code here
    });

    function preparations() {

    }

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

}
