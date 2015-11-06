/**
 * 
 * @author user
 * @constructor
 */
function DemosList() {
//    var self = this;
    function createDemo(aName, aParent, aCustomForm, aCommonForm, aIcon, aHint, aCreation, aDependencies) {
        var demo = {};
        demo.name = aName;
        demo.customForm = aCustomForm;
        demo.hint = aHint;
        demo.commonForm = aCommonForm;
        demo.parent = aParent;
        aParent.children.push(demo);
        demo.creationCode = aCreation;
        P.Icon.load(aIcon, function (data) {
            demo.icon = data;
        });
        demo.dependencies = aDependencies;
        return demo;
    }

    var demos = [];
    var standardWidgets = {};
    standardWidgets.children = [];
    standardWidgets.name = "Standard Widgets";
    standardWidgets.information = "This is standard widgets";
    demos.push(standardWidgets);
    demos.push(createDemo("Label"
            , standardWidgets
            , "LabelView"
            , "CommonProperties"
            , 'icons/standard/label_16.png'
            , "Label is a widget with a short piece of text, images or text with an image."
            , "/**\n"
            + "* var label = new P.Label(text, icon, iconTextGap);\n"
            + "*/\n"
            + "var label = new P.Label('Label');\n"
            + "label.text = 'new Text in a label';"
            , "PopupMenuCustom"));
    demos.push(createDemo("Button"
            , standardWidgets
            , "ButtonView"
            , "CommonProperties"
            , 'icons/standard/button_16.png'
            , "Button is a simple button, which responds to the click action."
            , "/**\n"
            + "* var btn = new P.Button(text, icon, iconTextGap, actionPerformed);\n"
            + "*/\n"
            + "var btn = new P.Button('Click me'); \n"
            + "btn1.text = 'Click me'; \n"
            + "btn1.onActionPerformed = function() { \n"
            + "     alert('Clicked!'); \n"
            + "}\n"
            ,"PopupMenuCustom" ));
    demos.push(createDemo("Toggle button"
            , standardWidgets
            , "ToggleButtonView"
            , "CommonProperties"
            , 'icons/standard/toggle_button_16.png'
            , "ToggleButton is a button with two states: selected and not selected."
            , "/**\n"
            + "* var btn1 = new P.ToggleButton(text, icon, selected, iconTextGap, actionPerformed);\n"
            + "*/\n"
            + "var btn = new ToggleButton(text, icon, iconTextGap, selected, actionPerformed);\n"
            + "btn1.text = 'Turn me on!';\n"
            + "btn1.onActionPerformed = function() {\n"
            + "   if(btn.selected)\n"
            + "        btn1.text = 'Turn me off!';\n"
            + "   else \n"
            + "        btn1.text = 'Turn me on!';\n"
            + "}\n"
            ,["ButtonGroupView","PopupMenuCustom"]));
    demos.push(createDemo("Check box"
            , standardWidgets
            , "CheckBoxView"
            , "CommonProperties"
            , 'icons/standard/check_box_16.png'
            , "CheckBox is a component with two states: selected/not selected."
            , "/**\n"
            + "* var cb = new P.CheckBox(text, selected, actionPerformed);\n"
            + "*/\n"
            + "cb1.text = 'Check box 1';\n"
            + "cb1.selected = true;\n"
            + "cb1.onValueChange = function(evt) {\n"
            + "    alert('Value of check box 1 changed!');\n"
            + "}\n"
            ,["ButtonGroupView","PopupMenuCustom"]));
    demos.push(createDemo("Radio button"
            , standardWidgets
            , "RadioButtonView"
            , "CommonProperties"
            , 'icons/standard/radio_button_16.png'
            , "RadioButton is a component with two states: selected/not selected. Widgets of this type can be joined into groups."
            , "/**\n"
            + "* var rb1 = new P.RadioButton(text, selected, actionPerformed);\n"
            + "*/\n"
            + "rb1.text = 'Radio button 1';\n"
            + "rb1.selected = true;\n"
            + "rb1.onActionPerformed = function(evt) {\n"
            + "    rb1.selected && alert('Radio button 1 selected!');\n"
            + "}\n"
            ,["ButtonGroupView","PopupMenuCustom"]));
    demos.push(createDemo("Button group"
            , standardWidgets
            , "ButtonGroupView"
            , "CommonProperties"
            , 'icons/standard/button_group_16.png'
            , "ButtonGroup is a special kind of a widget. "
            , "/**\n"
            + "* var buttonGroup = new P.ButtonGroup();\n"
            + "*/\n"
            + "var buttonGroup = new P.ButtonGroup();\n"
            + "var rbA = new P.RadioButton('A', true);\n"
            + "var rbB = new P.RadioButton('B', false);\n"
            + "rbA.buttonGroup = buttonGroup;\n"
            + "rbB.buttonGroup = buttonGroup;\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Text field"
            , standardWidgets
            , "TextFieldView"
            , "CommonProperties"
            , 'icons/standard/text_field_16.png'
            , "TextField is a simple component, which allows you to edit single line of text."
            , "/**\n"
            + "* var tf1 = new P.TextField(text);\n"
            + "*/\n"
            + "var tf1 = new P.TextField(text);\n"
            + "tf1.emptyText = 'Enter your name...';\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Slider"
            , standardWidgets
            , "SliderView"
            , "CommonProperties"
            , 'icons/standard/slider_16.png'
            , "Slider is a component, which allows you to visually select a value by moving the slider lever within the specified interval."
            , "/**\n"
            + "* var sl = new P.Slider(min, max, value);\n"
            + "*/\n"
            + "var sl1 = new P.Slider();\n"
            + "sl1.minimum = 0;\n"
            + "sl1.maximum = 100;\n"
            + "sl1.value = 50;\n"
            + "s1l.onActionPerformed = function(evt) {\n"
            + "    P.Logger.info('Slider moved.');\n"
            + "}\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Progress bar"
            , standardWidgets
            , "ProgressBarView"
            , "CommonProperties"
            , 'icons/standard/progress_bar_16.png'
            , "ProgressBar is a component, which visually shows the progress of some task."
            , "/**\n"
            + "* var pb = new P.ProgressBar(min, max);\n"
            + "*/\n"
            + "var pb1 = new P.ProgressBar();\n"
            + "pb1.minimum = 0;\n"
            + "pb1.maximum = 100;\n"
            + "pb1.value = 20;\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Formatted field"
            , standardWidgets
            , "FormattedFieldView"
            , "CommonProperties"
            , 'icons/standard/formatted_field_16.png'
            , "FormattedField is a component, which allows you to edit value of some specific type as the text."
            , "/**\n"
            + "* var ff = new P.FormattedField();\n"
            + "*/\n"
            + "var ff = new P.FormattedField();\n"
            + "ff.valueType = Date;\n"
            + "ff.format = 'dd.MM.yyyy HH:mm:ss';\n"
            + "ff.value = new Date();\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Password field"
            , standardWidgets
            , "PasswordFieldView"
            , "CommonProperties"
            , 'icons/standard/password_field_16.png'
            , "PasswordField is a simple input component, it displays placeholders instead of actual characters."
            , "/**\n"
            + "* var pf = new P.PasswordField(text);\n"
            + "*/\n"
            + "var pf = new P.PasswordField();\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Text area"
            , standardWidgets
            , "TextAreaView"
            , "CommonProperties"
            , 'icons/standard/text_area_16.png'
            , "TextArea is the text component for editing and displaying multistring text."
            , "/**\n"
            + "* var textArea = new P.TextArea(text);\n"
            + "*/\n"
            + "var textArea = new P.TextArea();\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Html area"
            , standardWidgets
            , "HtmlAreaView"
            , "CommonProperties"
            , 'icons/standard/editor_pane_16.png'
            , "HtmlArea is a component for editing and displaying HTML documents."
            , "/**\n"
            + "* var textArea = new P.HtmlArea(text);\n"
            + "*/\n"
            + "var htmlArea = new P.HtmlArea();\n"
            + "htmlArea.text = '<p>Sample text</p>';\n"
            + "\n"
            ,"PopupMenuCustom"));
    var modelWidgets = {};
    modelWidgets.name = "Model Widgets";
    modelWidgets.children = [];
    modelWidgets.information = "This is model widgets";
    demos.push(modelWidgets);
    demos.push(createDemo("Model check"
            , modelWidgets
            , "ModelCheckCustom"
            , "CommonProperties"
            , 'icons/model/check.png'
            , "ModelCheck is a scalar model widget representing a check box, the state of which is linked to an entity's field."
            , "/**\n"
            + "* var modelCheck = new P.ModelCheckBox();\n"
            + "*/\n"
            + "var modelCheck = new P.ModelCheckBox(); \n"
            + "modelCheck.data = model.entityA.cursor;\n"
            + "modelCheck.field = 'fieldA';\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Model combo"
            , modelWidgets
            , "ModelComboCustom"
            , "CommonProperties"
            , 'icons/model/combo.png'
            , "ModelCombo is a scalar model widget representing a combo box that is bound to some data model field."
            , "/**\n"
            + "* var modelCombo = new P.ModelCombo();\n"
            + "*/\n"
            + "//Specify value field as a model parameter:\n"
            + "modelCombo.data = model.pets;\n"
            + "modelCombo.field = 'cursor.owner';\n"
            + "//Lookup fields:\n"
            + "modelCombo.displayList = model.owners;\n"
            + "modelCombo.displayField = 'ownerName';\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Model date"
            , modelWidgets
            , "ModelDateCustom"
            , "CommonProperties"
            , 'icons/model/date.png'
            , "ModelDate is a scalar model widget representing a date and bound to some date or timestamp field in the model."
            , "/**\n"
            + "* var modelDate = new P.ModelDate();\n"
            + "*/\n"
            + "modelDate.data = model.pets;\n"
            + "modelDate.field = 'cursor.dateOfBirth';\n"
            + "modelDate.format = 'dd.MM.yyyy';\n"
            + "modelDate.datePicker = true;\n"
            + "modelDate.timePicker = false;\n"
            + "modelDate.editable = true;\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Model spin"
            , modelWidgets
            , "ModelSpinCustom"
            , "CommonProperties"
            , 'icons/model/spin.png'
            , "ModelSpin is a scalar model widget, the state of which is linked to a field of a data model entity of number type."
            , "/**\n"
            + "* var modelSpin = new P.ModelSpin();\n"
            + "*/\n"
            + "modelSpin.data = model.entityC;\n"
            + "modelSpin.field = 'cursor.count';\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Model formatted field"
            , modelWidgets
            , "ModelTextCustom"
            , "CommonProperties"
            , 'icons/model/label.png'
            , "ModelFormattedField is a scalar model widget, the state of which is linked to a field of the data model string or number type."
            , "/**\n"
            + "* var mff = new P.ModelFormattedField();\n"
            + "*/\n"
            + "mff.data = model.entityA;\n"
            + "mff.field = 'cursor.timeOfDeath';\n"
            + "mff.format = 'dd.MM.yyyy HH:mm:ss';\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Model text area"
            , modelWidgets
            , "ModelTextAreaCustom"
            , "CommonProperties"
            , 'icons/model/text.png'
            , "ModelTextArea is a scalar model widget, the state of which is linked to a field of the data model of string or number type."
            , "/**\n"
            + "* var mta = new ModelTextArea();\n"
            + "*/\n"
            + "mta.field = model.entityB.schema.textField;\n"
            + "\n"
            ,"PopupMenuCustom"));
    var containers = {};
    containers.name = "Containers";
    containers.children = [];
    containers.information = "This is containers";
    demos.push(containers);
    demos.push(createDemo("Anchors pane"
            , containers
            , "AnchorsPanePanel"
            , "CommonProperties"
            , 'icons/containers/AbsoluteLayout.gif'
            , "AnchorsPane is a container with the anchors layout."
            , "/**\n"
            + "* var pane = new P.AnchorsPane();\n"
            + "*/\n"
            + "var pane = new P.AnchorsPane();\n"
            + "var comp = new P.Button('Sample');\n"
            + "pane.add(comp, new P.Anchors(10, 120, 0, 10, 30, 0));\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Border pane"
            , containers
            , "BorderPanePanel"
            , "CommonProperties"
            , 'icons/containers/borderLayout.gif'
            , "BorderPane is a container with the border layout."
            , "/**\n"
            + "* var pane = new P.BorderPane(hgap, vgap);\n"
            + "*/\n"
            + "var pane = new P.BorderPane();\n"
            + "var topComp = new P.Button('Top');\n"
            + "pane.add(topComp, P.VerticalPosition.TOP);\n"
            + "var bottomComp = new P.Button('Bottom');\n"
            + "pane.add(bottomComp, P.VerticalalPosition.BOTTOM);\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("VBox pane"
            , containers
            , "VBoxPanePanel"
            , "CommonProperties"
            , 'icons/containers/boxLayout.gif'
            , "BoxPane is a container with the vertical or horizontal box layout."
            , "/**\n"
            + "* var pane = new P.BoxPane(orientation, hgap, vgap);\n"
            + "*/\n"
            + "// vertical box with 20 pixels vertical gap \n"
            + "var pane = new P.BoxPane(P.Orientation.VERTICAL, 0, 20);\n"
            + "var comp = new P.Button('Sample');\n"
            + "pane.add(comp);\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("HBox pane"
            , containers
            , "HBoxPanePanel"
            , "CommonProperties"
            , 'icons/containers/boxLayout.gif'
            , "BoxPane is a container with the vertical or horizontal box layout."
            , "/**\n"
            + "* var pane = new P.BoxPane(orientation, hgap, vgap);\n"
            + "*/\n"
            + "// horizontal box with 20 pixels horizontal gap \n"
            + "var pane = new P.BoxPane(P.Orientation.HORIZONTAL, 20, 0);\n"
            + "var comp = new P.Button('Sample');\n"
            + "pane.add(comp);\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Grid pane"
            , containers
            , "GridPanePanel"
            , "CommonProperties"
            , 'icons/containers/gridLayout.gif'
            , "GridPane is a container with the grid layout. It is intended for static UI designs."
            , "/**\n"
            + "* var pane = new GridPane(rows, cols, hgap, vgap);\n"
            + "*/\n"
            + "var pane = new P.GridPane(3, 1);\n"
            + "var comp1 = new P.Button('1');\n"
            + "var comp2 = new P.Button('2');\n"
            + "var comp3 = new P.Button('3');\n"
            + "pane.add(comp1, 0, 0);\n"
            + "pane.add(comp2, 1, 0);\n"
            + "pane.add(comp3, 2, 0);\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Flow pane"
            , containers
            , "FlowPanePanel"
            , "CommonProperties"
            , 'icons/containers/flowLayout.gif'
            , "FlowPane is a container with the flow layout. "
            , "/**\n"
            + "* var pane = new P.FlowPane(hgap, vgap);\n"
            + "*/\n"
            + "var pane = new P.FlowPane();\n"
            + "var comp = new P.Button('Sample');\n"
            + "pane.add(comp);\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Desktop pane"
            , containers
            , "DesktopPanePanel"
            , "CommonProperties"
            , 'icons/containers/desktop_pane_16.png'
            , "DesktopPane is used to create a multi-document interface."
            , "/**\n"
            + "* var pane = new P.DesktopPane();\n"
            + "*/\n"
            + "function InnerForm(){\n"
            + "    var form = P.loadForm(this.constructor.name);\n"
            + "    this.onDesktop = function(aDesktop){\n"
            + "        form.showInternalFrame(aDesktop);\n"
            + "    };\n"
            + "}\n"
            + "\n"
            + "var desktop = new P.DesktopPane();\n"
            + "var formModule = new InnerForm();\n"
            + "formModule.onDesktop(desktop);\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Card pane"
            , containers
            , "CardPanePanel"
            , "CommonProperties"
            , 'icons/containers/cardLayout.gif'
            , "CardPane is a container with the card layout."
            , "/**\n"
            + "* var pane = new P.CardPane(hgap, vgap);\n"
            + "*/\n"
            + "var pane = new P.CardPane();\n"
            + "var compA = new P.Button('SampleA');\n"
            + "pane.add(compA, 'A');\n"
            + "var compB = new P.Button('SampleB');\n"
            + "pane.add(compB, 'B');\n"
            + "var compC = new P.Button('SampleC');\n"
            + "pane.add(compC, 'C');\n"
            + "pane.show('B');//Shows the SampleB button\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Tabbed pane"
            , containers
            , "TabbedPanePanel"
            , "CommonProperties"
            , 'icons/containers/tabbed_pane_16.png'
            , "TabbedPane container allows the user to switch between a group of widgets by clicking tabs with titles and icons."
            , "/**\n"
            + "* var pane = new P.TabbedPane();\n"
            + "* pane.add(widget, text, icon);\n"
            + "**/\n"
            + "var pane = new P.TabbedPane();\n"
            + "var tab1 = new P.AnchorsPane();\n"
            + "var tab2 = new P.AnchorsPane();\n"
            + "pane.add(tab1, 'Tab 1');\n"
            + "pane.add(tab2, 'Tab 2');\n"
            + "\n"
            ,"PopupMenuCustom"));
    demos.push(createDemo("Toolbar"
            , containers
            , "ToolbarPanel"
            , "CommonProperties"
            , 'icons/containers/tool_bar_16.png'
            , "ToolBar is a container used to display widgets, which are responsible for the most common user actions"
            , "/**\n"
            + "* var toolbar = new P.ToolBar();\n"
            + "*/\n"
            + "var toolbar = new P.ToolBar();\n"
            + "var b1 = new P.Button();\n"
            + "pane.add(b1);\n"
            + "P.Icon.load('1.png', function(aLoaded){\n"
            + "    b1.icon = aLoaded;\n"
            + "});\n"
            + "var b2 = new P.Button();\n"
            + "pane.add(b2);\n"
            + "P.Icon.load('2.png', function(aLoaded){\n"
            + "    b2.icon = aLoaded;\n"
            + "});\n"
            + "\n"
            ,"PopupMenuCustom"));

    var menus = {};
    menus.name = "Menus";
    menus.children = [];
    menus.information = "Menus widgets provide a convinient way to let the user choose one of several options.";
    demos.push(menus);

    demos.push(createDemo("Menu"
            , menus
            , "MenuCustom"
            , "MenuCommonProperties"
            , 'icons/menu/menu_bar_16.png'
            , "MenuBar widget is a form’s main menu bar, into which individual menus can be added."
            , "/**\n"
            + "* var menuBar = new P.MenuBar();\n"
            + "* var menu = new P.Menu(text); \n"
            + "* var menuItem = new P.MenuItem(text, icon, actionPerformed);\n"
            + "* var checkMenuItem = new CheckMenuItem(text, selected, actionPerformed);\n"
            + "* var radioMenuItem = new P.RadioMenuItem(text, selected, actionPerformed);\n"
            + "* var separator = new P.MenuSeparator();\n"
            + "*/\n"
            + "var menuBar = new P.MenuBar();\n"
            + "var menu = new P.Menu(text);\n"
            + "menuBar.add(menu);\n"
            + "var item = new P.MenuItem('Sample');\n"
            + "item.onActionPerformed = function(evt) {\n"
            + "   alert('Sample selected.')\n"
            + "};\n"
            + "menu.add(item);\n"
            + "\n"));

    demos.push(createDemo("Popup menu"
            , menus
            , "PopupMenuCustom"
            , "MenuCommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "PopupMenu is an options selection window, which can be assigned to any widget."
            , "/**\n"
            + " * var popup = new P.PopupMenu();\n"
            + " * var label = new P.Label('Sample'); \n"
            + " * var menuItem = new P.MenuItem(text, icon, actionPerformed);\n"
            + " * var checkMenuItem = new CheckMenuItem(text, selected, actionPerformed);\n"
            + " * var radioMenuItem = new P.RadioMenuItem(text, selected, actionPerformed);\n"
            + " * var separator = new P.MenuSeparator();\n"
            + " */\n"
            + "var popup = new P.PopupMenu();\n"
            + "var label = new P.Label('Sample');\n"
            + "var item = new P.MenuItem('Sample');\n"
            + "item.onActionPerformed = function(evt) {\n"
            + "   alert('Sample selected.')\n"
            + "};\n"
            + "menu.add(item);\n"
            + "\n"));

//

    var modelGrid = {};
    modelGrid.name = "Model Grid";
    modelGrid.children = [];
    modelGrid.information = "Model grid is a powerful widget to display and enter data, which is presented in a tabular form and as a tree.";
    demos.push(modelGrid);

//gridBasic
    demos.push(createDemo("Simple Grid"
            , modelGrid
            , "SimpleGrid"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Drag columns to change theirs position. Drag a column's right border to change its width."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//var gridTree

    demos.push(createDemo("Tree Grid"
            , modelGrid
            , "TreeGrid"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Model grid can be used as a TreeGrid."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//gridMultiSort
    demos.push(createDemo("Multi Sort"
            , modelGrid
            , "MultiSort"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "It is possible to sort grid's rows by multiple columns at a time."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));


//gridMultiHeader;
    demos.push(createDemo("Multi Header"
            , modelGrid
            , "MultiHeader"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "It is possible to construct multi columns header in any ModelGrid widget."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

// gridDND
    demos.push(createDemo("Rows Dragging"
            , modelGrid
            , "RowsDND"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Grid rows are allowed to be dragged."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//gridFrozenRows
    demos.push(createDemo("Frozen Rows"
            , modelGrid
            , "FrozenRows"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Some grid rows may be frozen. Frozen rows are not scrollable"
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//
//gridFrozenColumns;
    demos.push(createDemo("Frozen Columns"
            , modelGrid
            , "FrozenColumns"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Some grid columns may be frozen. Frozen columns are not scrollable"
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//gridRowsSelection
    demos.push(createDemo("Rows Selection"
            , modelGrid
            , "RowsSelection"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Some service columns are provided with ModelGrid."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//
//gridEditingInline 
    demos.push(createDemo("Inline Editing"
            , modelGrid
            , "EditingInline"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Grid cells are allowed to be edited in place."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//
//gridEditingPopup
    demos.push(createDemo("Popup Editing"
            , modelGrid
            , "EditingPopup"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Grid cells may be edited with popup editor as well as inline."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//
//gridDetails
    demos.push(createDemo("Details View"
            , modelGrid
            , "Details"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Platypus.js ORM provides detail collections, which may be viewed in a ModelGrid."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//gridFilters
    demos.push(createDemo("Filtering Data"
            , modelGrid
            , "Filters"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "ModelGrid's data can be easily filtered, riddled or sorted in developer preferred manner."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//gridTreeView
    demos.push(createDemo("Tree View"
            , modelGrid
            , "TreeView"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Tree view on top of a ModelGrid."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//
//gridListView 
    demos.push(createDemo("List View"
            , modelGrid
            , "ListView"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Simple list on top of a ModelGrid."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//
//gridOrmBinding
    demos.push(createDemo("ORM Binding"
            , modelGrid
            , "OrmBinding"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Cross browser Platypus.js binding may be used with grid and Platypus.js model's data."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//gridOOBinding 
    demos.push(createDemo("O.o Binding"
            , modelGrid
            , "OOBinding"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "If browser supports Object.observe(), than plain JavaScript array may be bound with ModelGrid."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));

//gridToExcel
    demos.push(createDemo("Export to Excel"
            , modelGrid
            , "ToExcel"
            , "CommonProperties"
            , 'icons/menu/popup_menu_16.png'
            , "Platypus.js has Reports subsystem, which provides a way to generate Excel documents."
            , "/**\n"
            + " * See customizer's source code please.\n"
            + " */\n"
            + "\n"));


//    self.getMenu = function () {
        return demos;
//    };
}
