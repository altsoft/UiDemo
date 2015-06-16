/**
 * 
 * @author user
 */
function ModelWidgetsForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var widget;

    self.show = function () {
        form.show();
    };
    // TODO : place your code here

    model.requery(function () {
        // TODO : place your code here
    });

    self.getWidget = function () {
        return widget;
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(aPanel);
    };
    
    self.getFormView = function (){
        return form.view;
    };

    self.placeModelCheckBox = function () {
        form.panel.clear();
        widget = new P.ModelCheckBox();
        widget.data = model.qAllVisits;
        widget.field = "cursor.ispaid";
        widget.text = "ispaid";
        form.panel.add(widget);
    }

    self.placeModelSpin = function () {
        form.panel.clear();
        widget = new P.ModelSpin();
        widget.data = model.qAllVisits;
        widget.field = "cursor.cost";
        widget.emptyText = "Enter cost...";
        form.panel.add(widget);
    }

    self.placeModelDate = function () {
        form.panel.clear();
        widget = new P.ModelDate();
        widget.data = model.qAllVisits;
        widget.field = "cursor.fromdate";
        form.panel.add(widget);
    }

    self.placeModelCombo = function () {
        form.panel.clear();
        widget = new P.ModelCombo();
        widget.data = model.qAllVisits;
        widget.displayField = "name";
        widget.displayList = model.qAllPets;
        widget.emptyText = "Choose a pet...";
        widget.field = "cursor.pet";
        form.panel.add(widget);
    }

}
