/**
 * 
 * @author jskonst
 */
function FontSelectionDialog(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    form.minimizable = false;
    form.maximizable = false;
    form.resizable = false;
    var size = [{'size':0}];
    form.mdlSize.data = size;
    form.mdlSize.field = 'size';
    var demoComponent;
    var onSelected;


    function getFont() {
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
        var size = size.size;
        return new P.Font(model.fonts.cursor.FontName, fontStyle, size);
    }

    function presetOnLoad() {
        if (demoComponent.isBold) {
            form.tglBold.selected = true;
        }
        if (demoComponent.isItalic) {
            form.tglItalic.selected = true;
        }
        if (demoComponent.fontObject) {
            model.fonts.cursor = demoComponent.fontObject;
        }
        if (demoComponent.fontSize) {
            size.size = demoComponent.fontSize;
        }
    }

    self.show = function () {
        form.show();
    };

    model.requery(function () {

    });

    self.showModal = function (aDemoComponent, aOnSelected) {
        demoComponent = aDemoComponent;
        onSelected = aOnSelected;
        presetOnLoad();
        form.showModal();
        
    };

    form.btnCancel.onActionPerformed = function (event) {
        form.close();
    };

    form.btnOk.onActionPerformed = function (event) {
        var font = getFont();
        demoComponent.font = font;
        demoComponent.fontObject = model.fonts.cursor;
        demoComponent.fontSize = size.size;
        onSelected(font);
        form.close();
    };
}
