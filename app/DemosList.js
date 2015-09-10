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
    var creation =
            "\
/*\n\
 * var label = new P.Label(text, icon, iconTextGap);\n\
 */\n\
var label = new P.Label('Label')\n\
label.text = 'new Text in a label'";
    var label = createPlainWidget("Label", standardWidgets, "LabelView", hint);
    label.creationCode = creation;
    P.Icon.load('icons/standard/label_16.png', function (data) {
        label.icon = data;
    });
    demos.push(label);

    creation =
            "\
/*\n\
 * var btn = new P.Button(text, icon, iconTextGap, actionPerformed);\n\
 */\n\
var btn = new P.Button('Click me'); \n\
btn1.text = 'Click me'; \n\
btn1.onActionPerformed = function() { \n\
  alert('Clicked!'); \n\
}\n"
    hint = "Button is a simple button, which responds to the click action.";
    var button = createPlainWidget("Button", standardWidgets, "ButtonView", hint);
    button.creationCode = creation;
    P.Icon.load('icons/standard/button_16.png', function (data) {
        button.icon = data;
    });
    demos.push(button);

    creation =
            "\
/*\n\
 * var btn1 = new P.ToggleButton(text, icon, selected, iconTextGap, actionPerformed);\n\
 */\n\
var btn = new ToggleButton(text, icon, iconTextGap, selected, actionPerformed);\n\
btn1.text = 'Turn me on!';\n\
btn1.onActionPerformed = function() {\n\
    if(btn.selected)\n\
        btn1.text = 'Turn me off!';\n\
    else \n\
        btn1.text = 'Turn me on!';\n\
}\n";
    hint = "ToggleButton is a button with two states: selected and not selected.";
    var tglBtn = createPlainWidget("Toggle button", standardWidgets, "ToggleButtonView", hint);
    tglBtn.creationCode = creation;
    P.Icon.load('icons/standard/toggle_button_16.png', function (data) {
        tglBtn.icon = data;
    });
    demos.push(tglBtn);

    creation =
            "\
/*\n\
 * var cb = new P.CheckBox(text, selected, actionPerformed);\n\
 */\n\
cb1.text = 'Check box 1';\n\
cb1.selected = true;\n\
cb1.onValueChange = function(evt) {\n\
  alert('Value of check box 1 changed!');\n\
}\n";
    hint = "CheckBox is a component with two states: selected/not selected.";
    var chkBox = createPlainWidget("Check box", standardWidgets, "CheckBoxView", hint);
    chkBox.creationCode = creation;
    P.Icon.load('icons/standard/check_box_16.png', function (data) {
        chkBox.icon = data;
    });
    demos.push(chkBox);

    creation =
            "\
/*\n\
 * var rb1 = new P.RadioButton(text, selected, actionPerformed);\n\
 */\n\
rb1.text = 'Radio button 1';\n\
rb1.selected = true;\n\
rb1.onActionPerformed = function(evt) {\n\
    rb1.selected && alert('Radio button 1 selected!');\n\
}\n";
    hint = "RadioButton is a component with two states: selected/not selected. Widgets of this type can be joined into groups.";
    var radioButton = createPlainWidget("Radio button", standardWidgets, "RadioButtonView", hint);
    radioButton.creationCode = creation;
    P.Icon.load('icons/standard/radio_button_16.png', function (data) {
        radioButton.icon = data;
    });
    demos.push(radioButton);

creation =
            "\
/*\n\
 * var buttonGroup = new P.ButtonGroup();\n\
 */\n\
var buttonGroup = new P.ButtonGroup();\n\
var rbA = new P.RadioButton('A', true);\n\
var rbB = new P.RadioButton('B', false);\n\
rbA.buttonGroup = buttonGroup;\n\
rbB.buttonGroup = buttonGroup;\n\
\n";
    hint = "ButtonGroup is a special kind of a widget. ";
    var buttonGroup = createPlainWidget("Button group", standardWidgets, "ButtonGroupView", hint);
    buttonGroup.creationCode = creation;
    P.Icon.load('icons/standard/button_group_16.png', function (data) {
        buttonGroup.icon = data;
    });
    demos.push(buttonGroup);

    creation =
            "\
/*\n\
 * var tf1 = new P.TextField(text);\n\
 */\n\
var tf1 = new P.TextField(text);\n\
tf1.emptyText = 'Enter your name...';\n\
\n";
    hint = "TextField is a simple component, which allows you to edit single line of text.";
    var txtField = createPlainWidget("Text field", standardWidgets, "TextFieldView", hint);
    txtField.creationCode = creation;
    P.Icon.load('icons/standard/text_field_16.png', function (data) {
        txtField.icon = data;
    });
    demos.push(txtField);

    creation =
            "\
/*\n\
 * var sl = new P.Slider(min, max, value);\n\
 */\n\
var sl1 = new P.Slider();\n\
sl1.minimum = 0;\n\
sl1.maximum = 100;\n\
sl1.value = 50;\n\
s1l.onActionPerformed = function(evt) {\n\
  P.Logger.info('Slider moved.');\n\
}\n";
    hint = "Slider is a component, which allows you to visually select a value by moving the slider lever within the specified interval.";
    var slider = createPlainWidget("Slider", standardWidgets, "SliderView", hint);
    slider.creationCode = creation;
    P.Icon.load('icons/standard/slider_16.png', function (data) {
        slider.icon = data;
    });
    demos.push(slider);

    creation =
            "\
/*\n\
 * var pb = new P.ProgressBar(min, max);\n\
 */\n\
var pb1 = new P.ProgressBar();\n\
pb1.minimum = 0;\n\
pb1.maximum = 100;\n\
pb1.value = 20;\n\
\n";
    hint = "ProgressBar is a component, which visually shows the progress of some task.";
    var progressBar = createPlainWidget("Progress bar", standardWidgets, "ProgressBarView", hint);
    progressBar.creationCode = creation;
    P.Icon.load('icons/standard/progress_bar_16.png', function (data) {
        progressBar.icon = data;
    });
    demos.push(progressBar);

    creation =
            "\
/*\n\
 * var ff = new P.FormattedField();\n\
 */\n\
var ff = new P.FormattedField();\n\
ff.valueType = Date;\n\
ff.format = 'dd.MM.yyyy HH:mm:ss';\n\
ff.value = new Date();\n\
\n";
    hint = "FormattedField is a component, which allows you to edit value of some specific type as the text.";
    var formattedField = createPlainWidget("Formatted field", standardWidgets, "FormattedFieldView", hint);
    formattedField.creationCode = creation;
    P.Icon.load('icons/standard/formatted_field_16.png', function (data) {
        formattedField.icon = data;
    });
    demos.push(formattedField);

    creation =
            "\
/*\n\
 * var pf = new P.PasswordField(text);\n\
 */\n\
var pf = new P.PasswordField();\n\
\n";
    hint = "PasswordField is a simple input component, it displays placeholders instead of actual characters.";
    var passwordField = createPlainWidget("Password field", standardWidgets, "PasswordFieldView", hint);
    passwordField.creationCode = creation;
    P.Icon.load('icons/standard/password_field_16.png', function (data) {
        passwordField.icon = data;
    });
    demos.push(passwordField);

    creation =
            "\
/*\n\
 * var textArea = new P.TextArea(text);\n\
 */\n\
var textArea = new P.TextArea();\n\
\n";
    hint = "TextArea is the text component for editing and displaying multistring text.";
    var textArea = createPlainWidget("Text area", standardWidgets, "TextAreaView", hint);
    textArea.creationCode = creation;
    P.Icon.load('icons/standard/text_area_16.png', function (data) {
        textArea.icon = data;
    });
    demos.push(textArea);

    creation =
            "\
/*\n\
 * var textArea = new P.HtmlArea(text);\n\
 */\n\
var htmlArea = new P.HtmlArea();\n\
htmlArea.text = '<p>Sample text</p>';\n\
\n";
    hint = "HtmlArea is a component for editing and displaying HTML documents.";
    var htmlArea = createPlainWidget("Html area", standardWidgets, "HtmlAreaView", hint);
    htmlArea.creationCode = creation;
    demos.push(htmlArea);
    P.Icon.load('icons/standard/editor_pane_16.png', function (data) {
        htmlArea.icon = data;
    });

    

    var modelWidgets = new DemoItem();
    modelWidgets.name = "Model Widgets";
    demos.push(modelWidgets);
    modelWidgets.setInformation("This is model widgets");

    creation =
            "\
/*\n\
 * var modelCheck = new P.ModelCheckBox();\n\
 */\n\
var modelCheck = new P.ModelCheckBox(); \n\
modelCheck.data = model.entityA.cursor;\n\
modelCheck.field = 'fieldA';\n\
\n";
    hint = "ModelCheck is a scalar model widget representing a check box, the state of which is linked to an entity's field."
    var modelCheck = createPlainWidget("Model check", modelWidgets, "ModelCheckCustom", hint);
    modelCheck.creationCode = creation;
    P.Icon.load('icons/model/check.png', function (data) {
        modelCheck.icon = data;
    });
    demos.push(modelCheck);

    creation =
            "\
/*\n\
 * var modelCombo = new P.ModelCombo();\n\
 */\n\
//Specify value field as a model parameter:\n\
modelCombo.data = model.pets;\n\
modelCombo.field = 'cursor.owner';\n\
//Lookup fields:\n\
modelCombo.displayList = model.owners;\n\
modelCombo.displayField = 'ownerName';\n\
\n";
    hint = "ModelCombo is a scalar model widget representing a combo box that is bound to some data model field.";
    var modelCombo = createPlainWidget("Model combo", modelWidgets, "ModelComboCustom", hint);
    modelCombo.creationCode = creation;
    P.Icon.load('icons/model/combo.png', function (data) {
        modelCombo.icon = data;
    });
    demos.push(modelCombo);

    creation =
            "\
/*\n\
 * var modelDate = new P.ModelDate();\n\
 */\n\
modelDate.data = model.pets;\n\
modelDate.field = 'cursor.dateOfBirth';\n\
modelDate.format = 'dd.MM.yyyy';\n\
modelDate.datePicker = true;\n\
modelDate.timePicker = false;\n\
modelDate.editable = true;\n\
\n";
    hint = "ModelDate is a scalar model widget representing a date and bound to some date or timestamp field in the model.";
    var modelDate = createPlainWidget("Model date", modelWidgets, "ModelDateCustom", hint);
    modelDate.creationCode = creation;
    P.Icon.load('icons/model/date.png', function (data) {
        modelDate.icon = data;
    });
    demos.push(modelDate);

    creation =
            "\
/*\n\
 * var modelSpin = new P.ModelSpin();\n\
 */\n\
modelSpin.data = model.entityC;\n\
modelSpin.field = 'cursor.count';\n\
\n";
    hint = "ModelSpin is a scalar model widget, the state of which is linked to a field of a data model entity of number type.";
    var modelSpin = createPlainWidget("Model spin", modelWidgets, "ModelSpinCustom", hint);
    modelSpin.creationCode = creation;
    P.Icon.load('icons/model/spin.png', function (data) {
        modelSpin.icon = data;
    });
    demos.push(modelSpin);

    creation =
            "\
/*\n\
 * var mff = new P.ModelFormattedField();\n\
 */\n\
mff.data = model.entityA;\n\
mff.field = 'cursor.timeOfDeath';\n\
mff.format = 'dd.MM.yyyy HH:mm:ss';\n\
\n";
    hint = "ModelFormattedField is a scalar model widget, the state of which is linked to a field of the data model string or number type.";
    var modelFormatted = createPlainWidget("Model formatted field", modelWidgets, "ModelTextCustom", hint);
    modelFormatted.creationCode = creation;
    P.Icon.load('icons/model/label.png', function (data) {
        modelFormatted.icon = data;
    });
    demos.push(modelFormatted);

    creation =
            "\
/*\n\
 * var mta = new ModelTextArea();\n\
 */\n\
mta.field = model.entityB.schema.textField;\n\
\n";
    hint = "ModelTextArea is a scalar model widget, the state of which is linked to a field of the data model of string or number type.";
    var modelTextArea = createPlainWidget("Model text area", modelWidgets, "ModelTextAreaCustom", hint);
    modelTextArea.creationCode = creation;
    P.Icon.load('icons/model/text.png', function (data) {
        modelTextArea.icon = data;
    });
    demos.push(modelTextArea);


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
    var createContainer = function (aName, aParent, aCustomForm, aHint, aCommonForm) {
        var widget = new DemoItem();
        widget.name = aName;
        widget.parentField = aParent;
        widget.setCustomForm(aCustomForm);
        if (!aCommonForm) {
            aCommonForm = 'CommonProperties';
        }
        widget.setCommonForm(aCommonForm);
        widget.setHint(aHint);
        aParent.childrenField.push(widget);
        return widget;
    };

    var containers = new DemoItem();
    containers.name = "Containers";
    demos.push(containers);
    containers.setInformation("This is containers");

    creation =
            "\
/*\n\
 * var pane = new P.AnchorsPane();\n\
 */\n\
var pane = new P.AnchorsPane();\n\
var comp = new P.Button('Sample');\n\
pane.add(comp, new P.Anchors(10, 120, 0, 10, 30, 0));\n\
\n";
    hint = "AnchorsPane is a container with the anchors layout.";
    var anchorsPane = createContainer("Anchors pane", containers, "AnchorsPanePanel", hint);
    anchorsPane.creationCode = creation;
    P.Icon.load('icons/containers/AbsoluteLayout.gif', function (data) {
        anchorsPane.icon = data;
    });
    demos.push(anchorsPane);


    creation =
            "\
/*\n\
 * var pane = new P.BorderPane(hgap, vgap);\n\
 */\n\
var pane = new P.BorderPane();\n\
var topComp = new P.Button('Top');\n\
pane.add(topComp, P.VerticalPosition.TOP);\n\
var bottomComp = new P.Button('Bottom');\n\
pane.add(bottomComp, P.VerticalalPosition.BOTTOM);\n\
\n";
    hint = "BorderPane is a container with the border layout.";
    var borderPane = createContainer("Border pane", containers, "BorderPanePanel", hint);
    borderPane.creationCode = creation;
    P.Icon.load('icons/containers/borderLayout.gif', function (data) {
        borderPane.icon = data;
    });
    demos.push(borderPane);


    creation =
            "\
/*\n\
 * var pane = new P.BoxPane(orientation, hgap, vgap);\n\
 */\n\
// vertical box with 20 pixels vertical gap \n\
var pane = new P.BoxPane(P.Orientation.VERTICAL, 0, 20);\n\
var comp = new P.Button('Sample');\n\
pane.add(comp);\n\
\n";
    hint = "BoxPane is a container with the vertical or horizontal box layout.";
    var vBoxPane = createContainer("VBox pane", containers, "VBoxPanePanel", hint);
    vBoxPane.creationCode = creation;
    P.Icon.load('icons/containers/boxLayout.gif', function (data) {
        vBoxPane.icon = data;
    });
    demos.push(vBoxPane);


    creation =
            "\
/*\n\
 * var pane = new P.BoxPane(orientation, hgap, vgap);\n\
 */\n\
// horizontal box with 20 pixels horizontal gap \n\
var pane = new P.BoxPane(P.Orientation.HORIZONTAL, 20, 0);\n\
var comp = new P.Button('Sample');\n\
pane.add(comp);\n\
\n";
    hint = "BoxPane is a container with the vertical or horizontal box layout.";
    var hBoxPane = createContainer("HBox pane", containers, "HBoxPanePanel", hint);
    hBoxPane.creationCode = creation;
    P.Icon.load('icons/containers/boxLayout.gif', function (data) {
        hBoxPane.icon = data;
    });
    demos.push(hBoxPane);


    creation =
            "\
/*\n\
 * var pane = new GridPane(rows, cols, hgap, vgap);\n\
 */\n\
var pane = new P.GridPane(3, 1);\n\
var comp1 = new P.Button('1');\n\
var comp2 = new P.Button('2');\n\
var comp3 = new P.Button('3');\n\
pane.add(comp1, 0, 0);\n\
pane.add(comp2, 1, 0);\n\
pane.add(comp3, 2, 0);\n\
\n";
    hint = "GridPane is a container with the grid layout. It is intended for static UI designs.";
    var gridPane = createContainer("Grid pane", containers, "GridPanePanel", hint);
    gridPane.creationCode = creation;
    P.Icon.load('icons/containers/gridLayout.gif', function (data) {
        gridPane.icon = data;
    });
    demos.push(gridPane);

    creation =
            "\
/*\n\
 * var pane = new P.FlowPane(hgap, vgap);\n\
 */\n\
var pane = new P.FlowPane();\n\
var comp = new P.Button('Sample');\n\
pane.add(comp);\n\
\n";
    hint = "FlowPane is a container with the flow layout. ";
    var flowPane = createContainer("Flow pane", containers, "FlowPanePanel", hint);
    flowPane.creationCode = creation;
    P.Icon.load('icons/containers/flowLayout.gif', function (data) {
        flowPane.icon = data;
    });
    demos.push(flowPane);


    creation =
            "\
/*\n\
 * var pane = new P.DesktopPane();\n\
 */\n\
function InnerForm(){\n\
    var form = P.loadForm(this.constructor.name);\n\
    this.onDesktop = function(aDesktop){\n\
        form.showInternalFrame(aDesktop);\n\
    };\n\
}\n\
\n\
var desktop = new P.DesktopPane();\n\
var formModule = new InnerForm();\n\
formModule.onDesktop(desktop);\n\
\n";
    hint = "DesktopPane is used to create a multi-document interface.";
    var desktopPane = createContainer("Desktop pane", containers, "DesktopPanePanel", hint);
    desktopPane.creationCode = creation;
    P.Icon.load('icons/containers/desktop_pane_16.png', function (data) {
        desktopPane.icon = data;
    });
    demos.push(desktopPane);

    creation =
            "\
/*\n\
 * var pane = new P.CardPane(hgap, vgap);\n\
 */\n\
var pane = new P.CardPane();\n\
var compA = new P.Button('SampleA');\n\
pane.add(compA, 'A');\n\
var compB = new P.Button('SampleB');\n\
pane.add(compB, 'B');\n\
var compC = new P.Button('SampleC');\n\
pane.add(compC, 'C');\n\
pane.show('B');//Shows the SampleB button\n\
\n";
    hint = "CardPane is a container with the card layout.";
    var cardLayout = createContainer("Card pane", containers, "CardPanePanel", hint);
    cardLayout.creationCode = creation;
    P.Icon.load('icons/containers/cardLayout.gif', function (data) {
        cardLayout.icon = data;
    });
    demos.push(cardLayout);


    creation =
            "\
/*\n\
 * var pane = new P.TabbedPane();\n\
 * pane.add(widget, text, icon);\n\
 */\n\
var pane = new P.TabbedPane();\n\
var tab1 = new P.AnchorsPane();\n\
var tab2 = new P.AnchorsPane();\n\
pane.add(tab1, 'Tab 1');\n\
pane.add(tab2, 'Tab 2');\n\
\n";
    hint = "TabbedPane container allows the user to switch between a group of widgets by clicking tabs with titles and icons.";
    var tabbedPane = createContainer("Tabbed pane", containers, "TabbedPanePanel", hint);
    tabbedPane.creationCode = creation;
    P.Icon.load('icons/containers/tabbed_pane_16.png', function (data) {
        tabbedPane.icon = data;
    });
    demos.push(tabbedPane);

    creation =
            "\
/*\n\
 * var toolbar = new P.ToolBar();\n\
 */\n\
var toolbar = new P.ToolBar();\n\
var b1 = new P.Button();\n\
pane.add(b1);\n\
P.Icon.load('1.png', function(aLoaded){\n\
    b1.icon = aLoaded;\n\
});\n\
var b2 = new P.Button();\n\
pane.add(b2);\n\
P.Icon.load('2.png', function(aLoaded){\n\
    b2.icon = aLoaded;\n\
});\n\
\n";
    hint = "ToolBar is a container used to display widgets, which are responsible for the most common user actions";
    var toolBar = createContainer("Toolbar", containers, "ToolbarPanel", hint);
    toolBar.creationCode = creation;
    P.Icon.load('icons/containers/tool_bar_16.png', function (data) {
        toolBar.icon = data;
    });
    demos.push(toolBar);
    /*    
     //    container = createContainer("TabbedPane",containers,"TabbedPanePanel",containersForm);
     //    demos.push(container);
     
     container = createContainer("Split pane",containers,"SplitPanePanel",containersForm);
     demos.push(container);
     */
//    var scrollPane = new MenuObject();
//    var toolBar = new MenuObject();
//    var desktopPane = new MenuObject();

    var menus = new DemoItem();
    menus.name = "Menus";
    demos.push(menus);
    menus.setInformation("Menus widgets provide a convinient way to let the user choose one of several options.");

    creation =
            "\
/*\n\
 * var menuBar = new P.MenuBar();\n\
 * var menu = new P.Menu(text); \n\
 * var menuItem = new P.MenuItem(text, icon, actionPerformed);\n\
 * var checkMenuItem = new CheckMenuItem(text, selected, actionPerformed);\n\
 * var radioMenuItem = new P.RadioMenuItem(text, selected, actionPerformed);\n\
 * var separator = new P.MenuSeparator();\n\
 */\n\
var menuBar = new P.MenuBar();\n\
var menu = new P.Menu(text);\n\
menuBar.add(menu);\n\
var item = new P.MenuItem('Sample');\n\
item.onActionPerformed = function(evt) {\n\
   alert('Sample selected.')\n\
};\n\
menu.add(item);\n\
\n";
    hint = "MenuBar widget is a form’s main menu bar, into which individual menus can be added.";
    var menu = createContainer("Menu", menus, "MenuCustom", hint, "MenuCommonProperties");
    menu.creationCode = creation;
    P.Icon.load('icons/menu/menu_bar_16.png', function (data) {
        menu.icon = data;
    });
    demos.push(menu);

    creation =
            "\
/*\n\
 * var popup = new P.PopupMenu();\n\
 * var label = new P.Label('Sample'); \n\
 * var menuItem = new P.MenuItem(text, icon, actionPerformed);\n\
 * var checkMenuItem = new CheckMenuItem(text, selected, actionPerformed);\n\
 * var radioMenuItem = new P.RadioMenuItem(text, selected, actionPerformed);\n\
 * var separator = new P.MenuSeparator();\n\
 */\n\
var popup = new P.PopupMenu();\n\
var label = new P.Label('Sample');\n\
var item = new P.MenuItem('Sample');\n\
item.onActionPerformed = function(evt) {\n\
   alert('Sample selected.')\n\
};\n\
menu.add(item);\n\
\n";
    hint = "PopupMenu is an options selection window, which can be assigned to any widget.";
    var popupMenu = createContainer("Popup menu", menus, "PopupMenuCustom", hint, "MenuCommonProperties");
    popupMenu.creationCode = creation;
    P.Icon.load('icons/menu/popup_menu_16.png', function (data) {
        popupMenu.icon = data;
    });
    demos.push(popupMenu);

    self.getMenu = function () {
        return demos;
    }


}
