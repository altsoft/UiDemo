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
    var demoComponent;
    var onSelected;

    var fonts = [{FontName: "Arial"},
            {FontName: "Comic sans ms"},
            {FontName: "Courier"},
            {FontName: "Helvetica"},
            {FontName: "Lucida console"},
            {FontName: "Monospace"},
            {FontName: "Serif"},
            {FontName: "Tahoma"},
            {FontName: "Times New Roman"},
            {FontName: "Verdana"},
            {FontName: "Webdings"},
            {FontName: "Western"}];

    form.mdlFont.displayField = 'FontName';
    form.mdlFont.displayList = fonts;

    function getFont() {
        var style;
        if(form.tglBold.selected && form.tglItalic.selected)
            style = P.FontStyle.BOLD_ITALIC;
        else if(form.tglBold.selected)
            style = P.FontStyle.BOLD;
        else if(form.tglItalic.selected)
            style = P.FontStyle.ITALIC;
        else
            style = P.FontStyle.NORMAL;
        return new P.Font(form.mdlFont.value.FontName, style, form.mdlSize.value);
    }

    function presetOnLoad() {
        if (demoComponent.font) {
            form.mdlFont.value = {FontName: demoComponent.font.family};
            form.mdlSize.value = demoComponent.font.size;
            form.tglBold.selected = demoComponent.font.style === P.FontStyle.BOLD_ITALIC || demoComponent.font.style === P.FontStyle.BOLD;
            form.tglItalic.selected = demoComponent.font.style === P.FontStyle.BOLD_ITALIC || demoComponent.font.style === P.FontStyle.ITALIC;
        } else {
            form.mdlFont.value = fonts[0];
            form.mdlSize.value = 12;
        }
    }

    self.show = function () {
        form.show();
    };

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
        onSelected(font);
        form.close();
    };
    
    form.mdlSize.onValueChange = function(event) {
        if (fontSize.size <=0){
            fontSize.size = 1;
        }
    };

}
