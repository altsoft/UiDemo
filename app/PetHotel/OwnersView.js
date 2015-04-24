/**
 * 
 * @author user
 */
function OwnersView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
        var searchText = "%%";
        model.ownersQuery.params.lastNamePattern = searchText;
        model.ownersQuery.requery();
    };
    
    
    form.btnSearch.onActionPerformed = function(event) {
        var searchText = "%" + form.txtSearch.text + "%";
        model.ownersQuery.params.lastNamePattern = searchText;
        model.ownersQuery.requery();
    };
    
    var refresh = function(){
        model.requery();
    };
    
    form.modelGrid.onMouseClicked = function(event) {
        if (event.clickCount>1){
           var ownerView = new OwnerView();
           ownerView.showModal(refresh,model.ownersQuery.cursor.OWNERS_ID);
        }
    };

    
    form.btnAdd.onActionPerformed = function(event) {
       var ownerView = new OwnerView();
       ownerView.showModal(refresh);
    };
    
    var deleteRows = function(){
        for (var i in form.modelGrid.selected){
            model.ownersQuery.splice(model.ownersQuery.indexOf(form.modelGrid.selected[i]),1);
        }
        //model.save();
    };
    
    form.btnDelete.onActionPerformed = function(event) {
        var confDelete = new DeleteConfirm();
        confDelete.showModal(deleteRows);
    };
    
    form.btnReport.onActionPerformed = function(event) {
//        var oReport = new OwnersReport();
//        oReport.execute();
    };
}
