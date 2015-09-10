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
    var fontSize = {'size': 14};
    form.mdlSize.data = fontSize;
    form.mdlSize.field = 'size';
    var demoComponent;
    var onSelected;

    var fontObject = {
        'font': null,
        'fontName': null,
        'fontStyle': null,
        'fontStyleText': null,
        'fontSize': null,
        'toString': function () {
            switch (this.fontStyle) {
                case P.FontStyle.NORMAL:
                {
                    fontObject.fontStyleText = 'Normal';
                    break;
                }
                case P.FontStyle.BOLD:
                {
                    fontObject.fontStyleText = 'Bold';
                    break;
                }
                case P.FontStyle.ITALIC:
                {
                    fontObject.fontStyleText = 'Italic';
                    break;
                }
                case P.FontStyle.BOLD_ITALIC:
                {
                    fontObject.fontStyleText = 'Bold Italic';
                    break;
                }
                default :
                {
                    fontObject.fontStyleText = 'Normal';
                    break
                }
            }
            return this.fontName + ' ' + this.fontSize + ' ' + this.fontStyleText;
        }
    };

    function getFont() {
        fontObject.fontStyle = P.FontStyle.NORMAL;
        if (form.tglBold.selected) {
            fontObject.fontStyle = P.FontStyle.BOLD;
        }
        if (form.tglItalic.selected) {
            fontObject.fontStyle = P.FontStyle.ITALIC;
        }
        if (form.tglBold.selected & form.tglItalic.selected) {
            fontObject.fontStyle = P.FontStyle.BOLD_ITALIC;
        }
        fontObject.fontSize = fontSize.size;
        fontObject.fontName = form.modelCombo.value.FontName;
        fontObject.font = new P.Font(form.modelCombo.value.FontName, fontObject.fontStyle, fontSize.size);

        return fontObject;
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
        } else {
            model.requery(function () {
                form.modelCombo.value = model.fonts.cursor;
            });
        }
        if (demoComponent.fontSize) {
            fontSize.size = demoComponent.fontSize;
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
        demoComponent.font = font.font;
        demoComponent.fontObject = model.fonts.cursor;
        demoComponent.fontSize = font.fontSize;
        onSelected(font);
        form.close();
    };
    
    form.mdlSize.onValueChange = function(event) {
        if (fontSize.size <=0){
            fontSize.size = 1;
        }
    };

}
