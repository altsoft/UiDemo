/**
 * 
 * @author user
 * @constructor
 */
function DemoItem_() {
    var self = this, model = P.loadModel(this.constructor.name);


    self.execute = function () {
        // TODO : place application code here
    };

    self.parentField;
    self.childrenField = [];
    self.name;

    var widget;
    
    var customForm;
    var commonForm;
    var widget;
    
    var hint = "";
    var information="";


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
    
    self.setWidgetForm = function (aCustomForms) {
        widget = aCustomForms;
    };

    self.getWidgetForm = function () {
        return widget;
    };
    
//    self.getWidget = function () {
//        return widget;
//    };
//
//    self.setWidget = function (aWidget) {
//        widget = aWidget;
//        displayWidget = aWidget;
//    };

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
    
}
