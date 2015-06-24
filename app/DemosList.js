/**
 * 
 * @author user
 * @constructor
 */
function DemosList() {
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
        widget.setCommonForm("CommonProperties");
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

    plainWidget = createPlainWidget("Toggle button", P.ToggleButton, standardWidgets, "ToggleButtonForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Check box", P.CheckBox, standardWidgets, "CheckBoxForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Radio button", P.RadioButton, standardWidgets, "ButtonForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Text field", P.TextField, standardWidgets, "TextFieldForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Slider", P.Slider, standardWidgets, "SliderForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Progress bar", P.ProgressBar, standardWidgets, "ProgressBarForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Formatted field", P.FormattedField, standardWidgets, "FormattedFieldForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Password field", P.PasswordField, standardWidgets, "FormattedFieldForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Text area", P.TextArea, standardWidgets, "TextFieldForm");
    demos.push(plainWidget);

    plainWidget = createPlainWidget("Html area", P.HtmlArea, standardWidgets, "TextFieldForm");
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
        widget.setCommonForm("CommonProperties");
        widget.setDisplayForm(aForm);
        aParent.childrenField.push(widget);
        return widget;
    };

    var modelWidgets = new MenuObject();
    modelWidgets.name = "Model Widgets";
    demos.push(modelWidgets);

    var form = new ModelWidgetsForm();
    form.placeModelCheckBox();
    var modelWidget = createModelWidget("Model check", modelWidgets, "", form);
    demos.push(modelWidget);

    form = new ModelWidgetsForm();
    form.placeModelCombo();
    var modelWidget = createModelWidget("Model combo", modelWidgets, "", form);
    demos.push(modelWidget);

    form = new ModelWidgetsForm();
    form.placeModelDate();
    var modelWidget = createModelWidget("Model date", modelWidgets, "", form);
    demos.push(modelWidget);

    form = new ModelWidgetsForm();
    form.placeModelSpin();
    var modelWidget = createModelWidget("Model spin", modelWidgets, "", form);
    demos.push(modelWidget);
    
    form = new ModelTextFields();
    form.placeModelTextFieldFormatted();
    var modelWidget = createModelWidget("Model formatted field", modelWidgets, "", form);
    demos.push(modelWidget);

    form = new ModelTextFields();
    form.placeModelTextArea();
    var modelWidget = createModelWidget("Model text area", modelWidgets, "", form);
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
    var container = createContainer("Anchors pane",containers,"AnchorsPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("Border pane",containers,"BorderPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("Grid pane",containers,"GridPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("Flow pane",containers,"FlowPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("Card pane",containers,"CardPanePanel",containersForm);
    demos.push(container);
    
    container = createContainer("Box pane",containers,"BoxPanePanel",containersForm);
    demos.push(container);
    
//    container = createContainer("TabbedPane",containers,"TabbedPanePanel",containersForm);
//    demos.push(container);
    
    container = createContainer("Split pane",containers,"SplitPanePanel",containersForm);
    demos.push(container);
    
//    var scrollPane = new MenuObject();
//    var toolBar = new MenuObject();
//    var desktopPane = new MenuObject();

    self.getMenu = function () {
        return demos;
    }


}
