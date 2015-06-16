/**
 * 
 * @author user
 */
function temp() {
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



    form.panel1.onMousePressed = function (event) {
        var leftOffset = event.x;
        var topOffset = event.y;
        form.panel.onMouseMoved = function (event) {
            form.panel1.left = event.x - leftOffset;
            form.panel1.top = event.y - topOffset;
        };
        form.panel1.onMouseReleased = function () {
            form.panel.onMouseMoved = null;
            form.panel1.onMouseReleased = null;
        };
    };


}
