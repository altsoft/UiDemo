/**
 * Allows to edit the owner, add and edit his/her pets and pets visit to the hotel. 
 * @author vv
 * @name OwnerView
 */
function OwnerView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var callback;
    self.show = function () {
        form.show();
    };

    self.showModal = function (aCallback, aID) {
        callback = aCallback;
        if (aID) {
            model.ownerQuery.params.ownerID = aID;
            model.petsQuery.params.owner_id = aID;
            model.visitsQuery.params.ownerID = aID;
            model.requery();
        } else {
            model.ownerQuery.push({});
        }
        form.showModal();
    };


//var DEFAULT_PET_TYPE = 2;// Dog
//
///**
// * Save button's click event handler.
// * @param evt Event object
// */
//function btnSaveActionPerformed(evt) {//GEN-FIRST:event_btnSaveActionPerformed
//    if (model.modified) {
//        var message = validate();
//        if (!message) {
//            model.save(function() {
//                close(owner.OWNERS_ID);
//            });
//        } else {
//            alert(message);
//        }
//    } else {
//        close();
//    }
//}//GEN-LAST:event_btnSaveActionPerformed
//
///**
// * Cancel button's click event handler.
// * @param evt Event object
// */
//function btnCancelActionPerformed(evt) {//GEN-FIRST:event_btnCancelActionPerformed
//    close();
//}//GEN-LAST:event_btnCancelActionPerformed
//
///**
// * Data model's OnRequired event handler.
// * @param evt Event object
// */
//function owner_OnRequeried(evt) {//GEN-FIRST:event_owner_OnRequeried
//    if (!ownerID) {
//        owner.insert();
//    }
//}//GEN-LAST:event_owner_OnRequeried
//
///**
// * Add pet button's click event handler.
// * @param evt Event object
// */
//function btnAddPetActionPerformed(evt) {//GEN-FIRST:event_btnAddPetActionPerformed
//    pets.insert(
//            pets.md.OWNER, owner.OWNERS_ID,
//            pets.md.TYPE, DEFAULT_PET_TYPE
//            );
//}//GEN-LAST:event_btnAddPetActionPerformed
//
///**
// * Delete pet button's click event handler. Deletes selected pet.
// * @param evt Event object
// */
//function btnDeletePetActionPerformed(evt) {//GEN-FIRST:event_btnDeletePetActionPerformed
//    if (confirm('Delete pet?')) {
//        pets.deleteRow();
//    }
//}//GEN-LAST:event_btnDeletePetActionPerformed
//
///**
// * Add visit button's click event handler.
// * @param evt Event object
// */
//function btnAddVisitActionPerformed(evt) {//GEN-FIRST:event_btnAddVisitActionPerformed
//    if (pets.PETS_ID)
//        visits.insert();//(visits.md.PET, pets.PETS_ID);
//    else
//        alert("Select a pet please.");
//}//GEN-LAST:event_btnAddVisitActionPerformed
//
///**
// * Delete visit button's click event handler.
// * @param evt Event object
// */
//function btnDeleteVisitActionPerformed(evt) {//GEN-FIRST:event_btnDeleteVisitActionPerformed
//    if (confirm('Delete visit?')) {
//        visits.deleteRow();
//    }
//}//GEN-LAST:event_btnDeleteVisitActionPerformed
//
///**
// * Pet's entity cursor movement event handler.
// * @param evt Event object
// */
//function petsWillScroll(evt) {//GEN-FIRST:event_petsWillScroll
//    Logger.info('Pets scroll event.');
//    var message = validateVisits();
//    if (message) {
//        alert(message);
//        return false;
//    }
//    return true;
//}//GEN-LAST:event_petsWillScroll
//

    /**
     * Validates the view.
     * @return Validation error message or empty String if form is valid
     */
    function validate() {
        var message = validateOwner();
        message += validatePets();
        message += validateVisits();
        return message;
    }

    /**
     * Validates owner's properties.
     * @return Validation error message or empty String if form is valid
     */
    function validateOwner() {
        var message = "";
        if (!form.edFirstName.value) {
            message += "First name is required.\n";
        }
        if (!form.edLastName.value) {
            message += "Last name is required.\n";
        }
        if (!form.edAddress.value) {
            message += "Address is required.\n";
        }
        if (!form.edCity.value) {
            message += "City is required.\n";
        }
        if (!form.edPhone.value) {
            message += "Phone number is required.\n";
        }
        if (!form.edEmale.value) {
            message += "E-Mail is required.\n";
        }
        return message;
    }
//
    /**
     * Validates pets entity.
     * @return Validation error message or empty String if form is valid
     */
    function validatePets() {
        var message = "";
        model.petsQuery.forEach(function (pet) {
            if (!pet.name) {
                message += "Pet's name is required.\n";
            }
            if (!pet.birthdate) {
                message += "Pet's birthdate is required.\n";
            }
            if (!pet.type_id) {
                message += "Pet's type is required.\n";
            }
        });
        return message;
    }

    /**
     * Validates visits entity.
     * @return Validation error message or empty String if form is valid
     */
    function validateVisits() {
        var message = "";
        form.grdVisits.data.forEach(function (visit) {
            if (!visit.FROMDATE) {
                message += "Visit from date is required.\n";
            }
            if (!visit.TODATE) {
                message += "Visit to date is required.\n";
            }
            if (visit.FROMDATE >= visit.TODATE) {
                message += "Visit 'from' date must be before 'to' date.\n";
            }
        });
        return message;
    }

    var deleteVisits = function () {
        for (var i in form.grdVisits.selected) {
            model.visitsQuery.splice(model.visitsQuery.indexOf(form.grdVisits.selected[i]), 1);
        }
        //model.save();
    };


    form.btnAddPet.onActionPerformed = function (event) {
        model.petsQuery.push({});
    };

    form.btnDeletePet.onActionPerformed = function (event) {
        if (confirm("Delete selected pets?")) {
            for (var i in form.grdPets.selected) {
                model.petsQuery.splice(model.petsQuery.indexOf(form.grdPets.selected[i]), 1);
            }
            model.save();
        }
    };

    form.btnAddVisit.onActionPerformed = function (event) {
        model.visitsQuery.push({});
        model.visitsQuery.cursor.FROMDATE = new Date();
    };

    form.btnDeleteVisit.onActionPerformed = function (event) {
        if (confirm("Delete selected visits?")) {
            for (var i in form.grdVisits.selected) {
                model.visitsQuery.splice(model.visitsQuery.indexOf(form.grdVisits.selected[i]), 1);
            }
            model.save();
        }
    };
    form.btnCancel.onActionPerformed = function (event) {
        form.close();
    };
    form.btnSave.onActionPerformed = function (event) {
        if (model.modified) {
            var message = validate();
            if (!message) {
                model.save(function () {
                    callback();
                }, function () {
                    P.Logger.Info("Failed on save");
                });
                form.close();
            } else {
                alert(message);
            }
        } else {
            form.close();
        }

    };

}