/**
 * 
 * @author user
 */
function tempGrid() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    form.modelGrid.parentField = 'ownerRef';
    form.modelGrid.childrenField = 'pets';
    self.show = function () {
        form.show();
    };

    model.requery(function () {
//        var data = [];
//        var hash = {};
//        model.owners.forEach(function (aOwner) {
//            var owner = {name: aOwner.lastname, oid: aOwner.owner_id};
//            hash[aOwner.owner_id] = owner;
//            data.push(owner);
//        });
//        
//        model.pets.forEach(function (aPet) {
//            data.push({name: aPet.name});
//        });
//        
//        data.forEach(function (aItem) {
//            aItem.owner = hash[aItem.oid];
//            data.pets 
//        });
//        
//        form.modelGrid.parentField = 'ownerRef';
//        form.modelGrid.childrenField = 'pets';
//        form.modelGrid.data = data;
    });


    form.btnSave.onActionPerformed = function(event) {
        form.modelGrid.unsort();
    };
}
