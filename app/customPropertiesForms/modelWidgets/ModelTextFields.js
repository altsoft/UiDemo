/**
 * 
 * @author user
 */
function ModelTextFields() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    var widget;
    var fieldsList = ["cursor.firstname", "cursor.lastname", "cursor.address", "cursor.city", "cursor.telephone","cursor.telephone","cursor.email" ];
    var index = 0;
//    form.modelGrid.insertColumnNode();
    self.show = function () {
        form.show();
//        self.placeModelTextArea();
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
    
    self.placeModelTextArea = function () {
        form.panel.clear();
        widget = new P.ModelTextArea();
        widget.data = model.qAllOwners;
        widget.field = fieldsList[index];
        form.panel.add(widget);
    }
    
    self.placeModelTextFieldSimple = function () {
        form.panel.clear();
        widget = new P.ModelFormattedField();
        widget.data = model.qAllOwners;
        widget.field = "cursor.firstname";
        form.panel.add(widget);
    }
    
    self.placeModelTextFieldFormatted = function () {
        form.panel.clear();
        widget = new P.ModelFormattedField();
        widget.data = model.qAllOwners;
        widget.field = fieldsList[index];
        form.panel.add(widget);
    }
    
    
//    form.button.onActionPerformed = function(event) {
//        form.modelGrid.data = model.qAllOwners;
//        var col1 = new P.ModelGridColumn();
////        form.modelGrid.ad
//        P.Logger.info("Hello");
//    };
    
    form.btnNext.onActionPerformed = function(event) {
        index +=1;
        if (index >= fieldsList.length){
            index = 0;
        }
        widget.field = fieldsList[index];
    };
    form.btnPrevious.onActionPerformed = function(event) {
        index -=1;
        if (index <= 0){
            index = fieldsList.length - 1;
        }
        widget.field = fieldsList[index];
    };
}
