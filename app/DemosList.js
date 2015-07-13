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

    var createPlainWidget = function (aName, aParent, aCustomForm, aHint) {
        var widget = new DemoItem();
        widget.name = aName;
        widget.parentField = aParent;
        widget.setCustomForm(aCustomForm);
        widget.setCommonForm("CommonProperties");
        widget.setHint(aHint);
        aParent.childrenField.push(widget);
        return widget;
    };

    var demos = [];
    var standardWidgets = new DemoItem();
    standardWidgets.name = "Standard Widgets";
    standardWidgets.setInformation("This is standard widgets");
    demos.push(standardWidgets);

    var hint = "Label is a widget with a short piece of text, images or text with an image.";
    var plainWidget = createPlainWidget("Label", standardWidgets, "LabelForm", hint);
    demos.push(plainWidget);

    hint = "Button is a simple button, which responds to the click action.";
    plainWidget = createPlainWidget("Button", standardWidgets, "ButtonForm", hint);
    demos.push(plainWidget);

    hint = "ToggleButton is a button with two states: selected and not selected.";
    plainWidget = createPlainWidget("Toggle button", standardWidgets, "ToggleButtonForm", hint);
    demos.push(plainWidget);

    hint = "CheckBox is a component with two states: selected/not selected.";
    plainWidget = createPlainWidget("Check box", standardWidgets, "CheckBoxForm", hint);
    demos.push(plainWidget);

    hint = "RadioButton is a component with two states: selected/not selected. Widgets of this type can be joined into groups.";
    plainWidget = createPlainWidget("Radio button", standardWidgets, "RadioButtonForm", hint);
    demos.push(plainWidget);

    hint = "TextField is a simple component, which allows you to edit single line of text.";
    plainWidget = createPlainWidget("Text field", standardWidgets, "TextFieldForm", hint);
    demos.push(plainWidget);

    hint = "Slider is a component, which allows you to visually select a value by moving the slider lever within the specified interval.";
    plainWidget = createPlainWidget("Slider", standardWidgets, "SliderForm", hint);
    demos.push(plainWidget);

    hint = "ProgressBar is a component, which visually shows the progress of some task.";
    plainWidget = createPlainWidget("Progress bar", standardWidgets, "ProgressBarForm", hint);
    demos.push(plainWidget);

    hint = "FormattedField is a component, which allows you to edit value of some specific type as the text.";
    plainWidget = createPlainWidget("Formatted field", standardWidgets, "FormattedFieldForm", hint);
    demos.push(plainWidget);

    hint = "PasswordField is a simple input component, it displays placeholders instead of actual characters.";
    plainWidget = createPlainWidget("Password field", standardWidgets, "PasswordFieldForm", hint);
    demos.push(plainWidget);

    hint = "TextArea is the text component for editing and displaying multistring text.";
    plainWidget = createPlainWidget("Text area", standardWidgets, "TextAreaForm", hint);
    demos.push(plainWidget);

    hint = "HtmlArea is a component for editing and displaying HTML documents.";
    plainWidget = createPlainWidget("Html area", standardWidgets, "HtmlAreaForm", hint);
    demos.push(plainWidget);

//    var buttonGroup = new MenuObject();
//    buttonGroup.name = "ButtonGroup";
//    buttonGroup.parentField = standardWidgets;
//    arr.push(buttonGroup);
//    standardWidgets.childrenField.push(buttonGroup);
//


    var modelWidgets = new DemoItem();
    modelWidgets.name = "Model Widgets";
    demos.push(modelWidgets);
    modelWidgets.setInformation("This is model widgets");

    hint = "ModelCheck is a scalar model widget representing a check box, the state of which is linked to an entity's field."
    var modelWidget = createPlainWidget("Model check", modelWidgets, "ModelCheckCustom", hint);
    demos.push(modelWidget);

    hint = "ModelCombo is a scalar model widget representing a combo box that is bound to some data model field.";
    var modelWidget = createPlainWidget("Model combo", modelWidgets, "ModelComboCustom", hint);
    demos.push(modelWidget);

    hint = "ModelDate is a scalar model widget representing a date and bound to some date or timestamp field in the model.";
    var modelWidget = createPlainWidget("Model date", modelWidgets, "ModelDateCustom", hint);
    demos.push(modelWidget);

    hint = "ModelSpin is a scalar model widget, the state of which is linked to a field of a data model entity of number type.";
    var modelWidget = createPlainWidget("Model spin", modelWidgets, "ModelSpinCustom", hint);
    demos.push(modelWidget);

    hint = "ModelFormattedField is a scalar model widget, the state of which is linked to a field of the data model string or number type.";
    var modelWidget = createPlainWidget("Model formatted field", modelWidgets, "ModelTextCustom", hint);
    demos.push(modelWidget);

    hint = "ModelTextArea is a scalar model widget, the state of which is linked to a field of the data model of string or number type.";
    var modelWidget = createPlainWidget("Model text area", modelWidgets, "ModelTextAreaCustom", hint);
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
    var createContainer = function (aName, aParent, aCommon, aHint) {
        var widget = new DemoItem();
        widget.name = aName;
        widget.parentField = aParent;
        widget.setCustomForm(aCommon);
        widget.setHint(aHint);
        aParent.childrenField.push(widget);
        return widget;
    };

    var containers = new DemoItem();
    containers.name = "Containers";
    demos.push(containers);
    containers.setInformation("This is containers");

    hint = "AnchorsPane is a lightweight container with the anchors layout.";
    var container = createContainer("Anchors pane", containers, "AnchorsPanePanel", hint);
    demos.push(container);

    hint = "BorderPane is a lightweight container with the border layout.";
    container = createContainer("Border pane", containers, "BorderPanePanel", hint);
    demos.push(container);

    hint = "BoxPane is a lightweight container with the box layout. ";
    container = createContainer("VBox pane", containers, "VBoxPanePanel", hint);
    demos.push(container);

    hint = "BoxPane is a lightweight container with the box layout. ";
    container = createContainer("HBox pane", containers, "HBoxPanePanel", hint);
    demos.push(container);
 
    container = createContainer("Grid pane", containers, "GridPanePanel", hint);
    demos.push(container);
   /*
     container = createContainer("Flow pane",containers,"FlowPanePanel",containersForm);
     demos.push(container);
     
     container = createContainer("Card pane",containers,"CardPanePanel",containersForm);
     demos.push(container);
     
     
     
     //    container = createContainer("TabbedPane",containers,"TabbedPanePanel",containersForm);
     //    demos.push(container);
     
     container = createContainer("Split pane",containers,"SplitPanePanel",containersForm);
     demos.push(container);
     */
//    var scrollPane = new MenuObject();
//    var toolBar = new MenuObject();
//    var desktopPane = new MenuObject();

    self.getMenu = function () {
        return demos;
    }


}
