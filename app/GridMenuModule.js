/**
 * 
 * @author user
 * @constructor
 */
function GridMenuModule() {
    var self = this, model = P.loadModel(this.constructor.name);

    // TODO : place constructor code here

    self.execute = function () {
        // TODO : place application code here
    };

    var createPlainWidget = function (aName, aType, aParent, aCustomForm, aHint) {
        var widget = new MenuObject();
        widget.name = aName;
        widget.parentField = aParent;
        widget.setWidget(new aType(widget.name));
        widget.setCustomForm(aCustomForm);
        widget.setCommonForm("CommonPanel");
        widget.setHint(aHint);
        aParent.childrenField.push(widget);
        return widget;
    };

    var demos = [];
    var standardWidgets = new MenuObject();
    standardWidgets.name = "Standard Widgets";
    demos.push(standardWidgets);

    var hint = "Label is useful to display text elements";
    var plainWidget = createPlainWidget("Label", P.Label, standardWidgets, "LabelForm", hint);
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Button", P.Button, standardWidgets, "ButtonForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Toggle Button", P.ToggleButton, standardWidgets, "ToggleButtonForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("CheckBox", P.CheckBox, standardWidgets, "CheckBoxForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("RadioButton", P.RadioButton, standardWidgets, "ButtonForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("TextField", P.TextField, standardWidgets, "TextFieldForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Slider", P.Slider, standardWidgets, "SliderForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("ProgressBar", P.ProgressBar, standardWidgets, "ProgressBarForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("FormattedField", P.FormattedField, standardWidgets, "FormattedFieldForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("PasswordField", P.PasswordField, standardWidgets, "FormattedFieldForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("TextArea", P.TextArea, standardWidgets, "TextFieldForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("HtmlArea", P.HtmlArea, standardWidgets, "TextFieldForm");
    demos.push(plainWidget);

//    var buttonGroup = new MenuObject();
//    buttonGroup.name = "ButtonGroup";
//    buttonGroup.parentField = standardWidgets;
//    arr.push(buttonGroup);
//    standardWidgets.childrenField.push(buttonGroup);
//
    var createModelWidget = function (aName, aParent, aCustomForm, aForm) {
        var widget = new MenuObject();
        widget.name = aName;
        widget.parentField = aParent;
//        widget.setCustomForm(aCustomForm);
        widget.setCommonForm("CommonPanel");
        widget.setDisplayForm(aForm);
        aParent.childrenField.push(widget);
        return widget;
    };

    var modelWidgets = new MenuObject();
    modelWidgets.name = "Model Widgets";
    demos.push(modelWidgets);

    var form = new ModelWidgetsForm();
    form.placeModelCheckBox();
    var modelWidget = createModelWidget("ModelCheck", modelWidgets, "", form);
    demos.push(modelWidget);

    form = new ModelWidgetsForm();
    form.placeModelCombo();
    var modelWidget = createModelWidget("ModelCombo", modelWidgets, "", form);
    demos.push(modelWidget);

    form = new ModelWidgetsForm();
    form.placeModelDate();
    var modelWidget = createModelWidget("ModelDate", modelWidgets, "", form);
    demos.push(modelWidget);

    form = new ModelWidgetsForm();
    form.placeModelSpin();
    var modelWidget = createModelWidget("ModelSpin", modelWidgets, "", form);
    demos.push(modelWidget);
    
    form = new ModelTextFields();
    form.placeModelTextFieldFormatted();
    var modelWidget = createModelWidget("ModelFormattedField", modelWidgets, "", form);
    demos.push(modelWidget);

    form = new ModelTextFields();
    form.placeModelTextArea();
    var modelWidget = createModelWidget("ModelTextArea", modelWidgets, "", form);
    demos.push(modelWidget);


//    var modelFormattedField = new MenuObject();
//    modelFormattedField.name = "ModelFormattedField";
//    modelFormattedField.parentField = modelWidgets;
//    arr.push(modelFormattedField);
//    modelWidgets.childrenField.push(modelFormattedField);
//
//    var modelTextArea = new MenuObject();
//    modelTextArea.name = "ModelTextArea";
//    modelTextArea.parentField = modelWidgets;
//    arr.push(modelTextArea);
//    modelWidgets.childrenField.push(modelTextArea);
//
    var createContainer = function (aName, aParent, aCommonForm,aForm) {
        var widget = new MenuObject();
        widget.name = aName;
        widget.parentField = aParent;
        widget.setCommonForm(aCommonForm);
         widget.setDisplayForm(aForm);
        aParent.childrenField.push(widget);
        return widget;
    };
    
    var containers = new MenuObject();
    containers.name = "Containers";
    demos.push(containers);
    
    var containersForm = new ContainersWidget();
    var container = createContainer("AbsolutePane",containers,"AbsolutePanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("AnchorsPane",containers,"AnchorsPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("BorderPane",containers,"BorderPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("GridPane",containers,"GridPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("FlowPane",containers,"FlowPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("CardPane",containers,"CardPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("BoxPane",containers,"BoxPanePanel",containersForm);
    demos.push(container);
    
//    container = createContainer("TabbedPane",containers,"TabbedPanePanel",containersForm);
//    demos.push(container);
    
    container = createContainer("SplitPane",containers,"SplitPanePanel",containersForm);
    demos.push(container);
    
//    var scrollPane = new MenuObject();
//    var toolBar = new MenuObject();
//    var desktopPane = new MenuObject();

    self.getMenu = function () {
        return demos;
    }


}
