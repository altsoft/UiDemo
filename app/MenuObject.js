/**
 * 
 * @author user
 * @constructor
 */
function MenuObject() {
    var self = this, model = P.loadModel(this.constructor.name);

    // TODO : place constructor code here

    self.execute = function () {
        // TODO : place application code here
    };

    self.parentField;
    self.childrenField = [];
    self.name;

    var action;
    var widget;
    var displayWidget;
    var displayForm;
    var customForm;
    var commonForm;
    var hint = "";
    var sourceCodeExample;
    self.setCommonForm = function (aCommonForms) {
        commonForm = aCommonForms;
    };

    self.getCommonForm = function () {
        return commonForm;
    };

    self.setCustomForm = function (aCustomForms) {
        customForm = aCustomForms;
    };

    self.getCustomForm = function () {
        return customForm;
    };

    self.getWidget = function () {
        return widget;
    };

    self.setWidget = function (aWidget) {
        widget = aWidget;
        displayWidget = aWidget;
    };

    self.setDisplayForm = function (aDisplayForm) {
        displayForm = aDisplayForm;
        displayWidget = displayForm.getFormView();
        widget = aDisplayForm.getWidget();
    };

    self.getDisplayForm = function () {
        return displayWidget;
    };

    self.setHint = function (aHint) {
        hint = aHint;
    };

    self.getHint = function () {
        return hint;
    };
    
    self.setSourceCodeExample = function (aSourceCode) {
        sourceCodeExample = aSourceCode;
    };

    self.getSourceCodeExample = function () {
        return sourceCodeExample;
    };
    

}
