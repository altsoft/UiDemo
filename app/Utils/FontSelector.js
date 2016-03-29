/**
 * 
 * @author jskonst
 */

define('FontSelectionDialog', ['forms', 'ui'], function (Forms, Ui, ModuleName) {
    function module_constructor(aDemoComponent) {
        var self = this
                , form = Forms.loadForm(ModuleName);

        self.show = function () {
            form.show();
        };

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
            if (form.tglBold.selected && form.tglItalic.selected)
                style = Ui.FontStyle.BOLD_ITALIC;
            else if (form.tglBold.selected)
                style = Ui.FontStyle.BOLD;
            else if (form.tglItalic.selected)
                style = Ui.FontStyle.ITALIC;
            else
                style = Ui.FontStyle.NORMAL;
            return new Ui.Font(form.mdlFont.value.FontName, style, form.mdlSize.value);
        }

        function presetOnLoad() {
            if (demoComponent.font) {
                form.mdlFont.value = {FontName: demoComponent.font.family};
                form.mdlSize.value = demoComponent.font.size;
                form.tglBold.selected = demoComponent.font.style === Ui.FontStyle.BOLD_ITALIC || demoComponent.font.style === Ui.FontStyle.BOLD;
                form.tglItalic.selected = demoComponent.font.style === Ui.FontStyle.BOLD_ITALIC || demoComponent.font.style === Ui.FontStyle.ITALIC;
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

        form.mdlSize.onValueChange = function (event) {
            if (form.mdlSize.value <= 0) {
                form.mdlSize.value = 1;
            }
        };

    }
    return module_constructor;
});

