/**
 * 
 * @author user
 * @constructor
 */
function DemoItem() {
    var self = this, model = P.loadModel(this.constructor.name);


    self.execute = function () {
        // TODO : place application code here
    };

    self.parentField;
    self.childrenField = [];
    self.name;

    var widget;
    var displayWidget;
    var displayForm;
    var customForm;
    var commonForm;
    var hint = "";
    var information="";
    var sourceCodeExample="";

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

    self.setHint = function (aHint) {
        hint = aHint;
    };

    self.getHint = function () {
        return hint;
    };
    
     self.setInformation = function (aInfo) {
        information = aInfo;
    };

    self.getInformation = function () {
        return information;
    };
    
    self.setSourceCodeExample = function (aSourceCode) {
        sourceCodeExample = aSourceCode;
    };

    self.getSourceCodeExample = function () {
        return sourceCodeExample;
    };
    

}
