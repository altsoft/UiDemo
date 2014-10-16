/**
 * 
 * @author jskonst
 */
function FontSelectionDialog() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    function getFont() {

//        demoComponent.font = new P.Font("Times New Roman", P.FontStyle.BOLD, 14);
        var fontStyle = P.FontStyle.NORMAL;
        if (form.tglBold.selected) {
            fontStyle = P.FontStyle.BOLD;
        }
        if (form.tglItalic.selected) {
            fontStyle = P.FontStyle.ITALIC;
        }
        if (form.tglBold.selected & form.tglItalic.selected) {
            fontStyle = P.FontStyle.BOLD_ITALIC;
        }
        var size = Number(form.tfSize.text);

        return new P.Font(model.params.FontName, fontStyle, size);
    }

    function presetOnLoad() {
        if (model.params.isBold) {
            form.tglBold.selected = true;
        }
        if (model.params.isItalic) {
            form.tglItalic.selected = true;
        }
        
    }

    self.show = function() {
        presetOnLoad();
        form.show();
    };

    self.showModal = function(aCallback) {
        presetOnLoad();
        form.showModal(aCallback);
        model.requery();
//          demoComponent.font = new P.Font("Times New Roman", P.FontStyle.BOLD, 14);
    };



    form.btnCancel.onActionPerformed = function(event) {
        form.close();
    };

    form.btnOk.onActionPerformed = function(event) {
        form.close(getFont());
    };
}
