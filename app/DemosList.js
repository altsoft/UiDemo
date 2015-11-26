/**
 * 
 * @author user
 * @constructor
 */ 
function demosList() {
    var standardWidgets = {
        name: "Standard Widgets",
        children: [],
        information: "This is standard widgets"
    };
    var modelWidgets = {
        name: 'Model Widgets',
        children: [],
        information: "This is model widgets"};
    var containers = {
        name: "Containers",
        children: [],
        information: "This is containers"
    };
    var menus = {
        name: "Menus",
        children: [],
        information: "Menus widgets provide a convinient way to let the user choose one of several options."
    };
    var modelGrid = {
        name: "Model Grid",
        children: [],
        information: "Model grid is a powerful widget to display and enter data, which is presented in a tabular form and as a tree."
    };

    var demos = [
        standardWidgets,
        {name: 'Label'
            , parent: standardWidgets
            , customForm: "LabelView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/label_16.png'
            , hint: "Label is a widget with a short piece of text, images or text with an image."
            , creationCode: "/**\n"
                    + "* var label = new P.Label(text, icon, iconTextGap);\n"
                    + "*/\n"
                    + "var label = new P.Label('Label');\n"
                    + "label.text = 'new Text in a label';"
            , dependencies: 'PopupMenuCustom'},
        {name: 'Button'
            , parent: standardWidgets
            , customForm: "ButtonView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/button_16.png'
            , hint: "Button is a simple button, which responds to the click action."
            , creationCode: "/**\n"
                    + "* var btn = new P.Button(text, icon, iconTextGap, actionPerformed);\n"
                    + "*/\n"
                    + "var btn = new P.Button('Click me'); \n"
                    + "btn.text = 'Click me'; \n"
                    + "btn.onActionPerformed = function() { \n"
                    + "    alert('Clicked!'); \n"
                    + "}\n"
            , dependencies: 'PopupMenuCustom'},
        {name: 'Toggle button'
            , parent: standardWidgets
            , customForm: "ToggleButtonView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/toggle_button_16.png'
            , hint: "ToggleButton is a button with two states: selected and not selected."
            , creationCode: "/**\n"
                    + "* var btn = new P.ToggleButton(text, icon, selected, iconTextGap, actionPerformed);\n"
                    + "*/\n"
                    + "var btn = new ToggleButton(text, icon, iconTextGap, selected, actionPerformed);\n"
                    + "btn.text = 'Turn me on!';\n"
                    + "btn.onActionPerformed = function() {\n"
                    + "   if(btn.selected)\n"
                    + "        btn.text = 'Turn me off!';\n"
                    + "   else \n"
                    + "        btn.text = 'Turn me on!';\n"
                    + "}\n"
            , dependencies: ["ButtonGroupView", "PopupMenuCustom"]},
        {name: 'Drop down button'
            , parent: standardWidgets
            , customForm: "DropDownButtonView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/drop_down_button_16.png'
            , hint: "DropDownButton is a button with two popup menu."
            , creationCode: "/**\n"
                    + "* var btn = new P.DropDownButton(text, icon, iconTextGap, actionPerformed);\n"
                    + "*/\n"
                    + "var btn = new DropDownButton(text, icon, iconTextGap, actionPerformed);\n"
                    + "btn.text = 'Click my right side';\n"
                    + "btn.onActionPerformed = function() {\n"
                    + "   P.Logger.info('Drop down click');\n"
                    + "};\n"
            , dependencies: 'PopupMenuCustom'},
        {name: 'Check box'
            , parent: standardWidgets
            , customForm: "CheckBoxView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/check_box_16.png'
            , hint: "CheckBox is a component with two states: selected/not selected."
            , creationCode: "/**\n"
                    + "* var cb = new P.CheckBox(text, selected, actionPerformed);\n"
                    + "*/\n"
                    + "cb1.text = 'Check box 1';\n"
                    + "cb1.selected = true;\n"
                    + "cb1.onValueChange = function(evt) {\n"
                    + "    alert('Value of check box 1 changed!');\n"
                    + "}\n"
            , dependencies: ["ButtonGroupView", "PopupMenuCustom"]},
        {name: 'Radio button'
            , parent: standardWidgets
            , customForm: "RadioButtonView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/radio_button_16.png'
            , hint: "RadioButton is a component with two states: selected/not selected. Widgets of this type can be joined into groups."
            , creationCode: "/**\n"
                    + "* var rb1 = new P.RadioButton(text, selected, actionPerformed);\n"
                    + "*/\n"
                    + "rb1.text = 'Radio button 1';\n"
                    + "rb1.selected = true;\n"
                    + "rb1.onActionPerformed = function(evt) {\n"
                    + "    rb1.selected && alert('Radio button 1 selected!');\n"
                    + "}\n"
            , dependencies: ["ButtonGroupView", "PopupMenuCustom"]},
        {name: 'Button group'
            , parent: standardWidgets
            , customForm: "ButtonGroupView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/button_group_16.png'
            , hint: "ButtonGroup is a special kind of a widget. "
            , creationCode: "/**\n"
                    + "* var buttonGroup = new P.ButtonGroup();\n"
                    + "*/\n"
                    + "var buttonGroup = new P.ButtonGroup();\n"
                    + "var rbA = new P.RadioButton('A', true);\n"
                    + "var rbB = new P.RadioButton('B', false);\n"
                    + "rbA.buttonGroup = buttonGroup;\n"
                    + "rbB.buttonGroup = buttonGroup;\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Text field'
            , parent: standardWidgets
            , customForm: "TextFieldView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/text_field_16.png'
            , hint: "TextField is a simple component, which allows you to edit single line of text."
            , creationCode: "/**\n"
                    + "* var tf1 = new P.TextField(text);\n"
                    + "*/\n"
                    + "var tf1 = new P.TextField(text);\n"
                    + "tf1.emptyText = 'Enter your name...';\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Slider'
            , parent: standardWidgets
            , customForm: "SliderView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/slider_16.png'
            , hint: "Slider is a component, which allows you to visually select a value by moving the slider lever within the specified interval."
            , creationCode: "/**\n"
                    + "* var sl = new P.Slider(min, max, value);\n"
                    + "*/\n"
                    + "var sl1 = new P.Slider();\n"
                    + "sl1.minimum = 0;\n"
                    + "sl1.maximum = 100;\n"
                    + "sl1.value = 50;\n"
                    + "s1l.onActionPerformed = function(evt) {\n"
                    + "    P.Logger.info('Slider moved.');\n"
                    + "}\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Progress bar'
            , parent: standardWidgets
            , customForm: "ProgressBarView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/progress_bar_16.png'
            , hint: "ProgressBar is a component, which visually shows the progress of some task."
            , creationCode: "/**\n"
                    + "* var pb = new P.ProgressBar(min, max);\n"
                    + "*/\n"
                    + "var pb1 = new P.ProgressBar();\n"
                    + "pb1.minimum = 0;\n"
                    + "pb1.maximum = 100;\n"
                    + "pb1.value = 20;\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Formatted field'
            , parent: standardWidgets
            , customForm: "FormattedFieldView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/formatted_field_16.png'
            , hint: "FormattedField is a component, which allows you to edit value of some specific type as the text."
            , creationCode: "/**\n"
                    + "* var ff = new P.FormattedField();\n"
                    + "*/\n"
                    + "var ff = new P.FormattedField();\n"
                    + "ff.valueType = Date;\n"
                    + "ff.format = 'dd.MM.yyyy HH:mm:ss';\n"
                    + "ff.value = new Date();\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Password field'
            , parent: standardWidgets
            , customForm: "PasswordFieldView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/password_field_16.png'
            , hint: "PasswordField is a simple input component, it displays placeholders instead of actual characters."
            , creationCode: "/**\n"
                    + "* var pf = new P.PasswordField(text);\n"
                    + "*/\n"
                    + "var pf = new P.PasswordField();\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Text area'
            , parent: standardWidgets
            , customForm: "TextAreaView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/text_area_16.png'
            , hint: "TextArea is the text component for editing and displaying multistring text."
            , creationCode: "/**\n"
                    + "* var textArea = new P.TextArea(text);\n"
                    + "*/\n"
                    + "var textArea = new P.TextArea();\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Html area'
            , parent: standardWidgets
            , customForm: "HtmlAreaView"
            , commonForm: "CommonProperties"
            , icon: 'icons/standard/editor_pane_16.png'
            , hint: "HtmlArea is a component for editing and displaying HTML documents."
            , creationCode: "/**\n"
                    + "* var textArea = new P.HtmlArea(text);\n"
                    + "*/\n"
                    + "var htmlArea = new P.HtmlArea();\n"
                    + "htmlArea.text = '<p>Sample text</p>';\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        modelWidgets,
        {name: 'Model check'
            , parent: modelWidgets
            , customForm: "ModelCheckCustom"
            , commonForm: "CommonProperties"
            , icon: 'icons/model/check.png'
            , hint: "ModelCheck is a scalar model widget representing a check box, the state of which is linked to an entity's field."
            , creationCode: "/**\n"
                    + "* var modelCheck = new P.ModelCheckBox();\n"
                    + "*/\n"
                    + "var modelCheck = new P.ModelCheckBox(); \n"
                    + "modelCheck.data = model.entityA.cursor;\n"
                    + "modelCheck.field = 'fieldA';\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Model combo'
            , parent: modelWidgets
            , customForm: "ModelComboCustom"
            , commonForm: "CommonProperties"
            , icon: 'icons/model/combo.png'
            , hint: "ModelCombo is a scalar model widget representing a combo box that is bound to some data model field."
            , creationCode: "/**\n"
                    + "* var modelCombo = new P.ModelCombo();\n"
                    + "*/\n"
                    + "//Specify value field as a model parameter:\n"
                    + "modelCombo.data = model.pets;\n"
                    + "modelCombo.field = 'cursor.owner';\n"
                    + "//Lookup fields:\n"
                    + "modelCombo.displayList = model.owners;\n"
                    + "modelCombo.displayField = 'ownerName';\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Model date'
            , parent: modelWidgets
            , customForm: "ModelDateCustom"
            , commonForm: "CommonProperties"
            , icon: 'icons/model/date.png'
            , hint: "ModelDate is a scalar model widget representing a date and bound to some date or timestamp field in the model."
            , creationCode: "/**\n"
                    + "* var modelDate = new P.ModelDate();\n"
                    + "*/\n"
                    + "modelDate.data = model.pets;\n"
                    + "modelDate.field = 'cursor.dateOfBirth';\n"
                    + "modelDate.format = 'dd.MM.yyyy';\n"
                    + "modelDate.datePicker = true;\n"
                    + "modelDate.timePicker = false;\n"
                    + "modelDate.editable = true;\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Model spin'
            , parent: modelWidgets
            , customForm: "ModelSpinCustom"
            , commonForm: "CommonProperties"
            , icon: 'icons/model/spin.png'
            , hint: "ModelSpin is a scalar model widget, the state of which is linked to a field of a data model entity of number type."
            , creationCode: "/**\n"
                    + "* var modelSpin = new P.ModelSpin();\n"
                    + "*/\n"
                    + "modelSpin.data = model.entityC;\n"
                    + "modelSpin.field = 'cursor.count';\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Model formatted field'
            , parent: modelWidgets
            , customForm: "ModelTextCustom"
            , commonForm: "CommonProperties"
            , icon: 'icons/model/label.png'
            , hint: "ModelFormattedField is a scalar model widget, the state of which is linked to a field of the data model string or number type."
            , creationCode: "/**\n"
                    + "* var mff = new P.ModelFormattedField();\n"
                    + "*/\n"
                    + "mff.data = model.entityA;\n"
                    + "mff.field = 'cursor.timeOfDeath';\n"
                    + "mff.format = 'dd.MM.yyyy HH:mm:ss';\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Model text area'
            , parent: modelWidgets
            , customForm: "ModelTextAreaCustom"
            , commonForm: "CommonProperties"
            , icon: 'icons/model/text.png'
            , hint: "ModelTextArea is a scalar model widget, the state of which is linked to a field of the data model of string or number type."
            , creationCode: "/**\n"
                    + "* var mta = new ModelTextArea();\n"
                    + "*/\n"
                    + "mta.field = model.entityB.schema.textField;\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        containers,
        {name: 'Anchors pane'
            , parent: containers
            , customForm: "AnchorsPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/AbsoluteLayout.gif'
            , hint: "AnchorsPane is a container with the anchors layout."
            , creationCode: "/**\n"
                    + "* var pane = new P.AnchorsPane();\n"
                    + "*/\n"
                    + "var pane = new P.AnchorsPane();\n"
                    + "var comp = new P.Button('Sample');\n"
                    + "pane.add(comp, new P.Anchors(10, 120, 0, 10, 30, 0));\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Border pane'
            , parent: containers
            , customForm: "BorderPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/borderLayout.gif'
            , hint: "BorderPane is a container with the border layout."
            , creationCode: "/**\n"
                    + "* var pane = new P.BorderPane(hgap, vgap);\n"
                    + "*/\n"
                    + "var pane = new P.BorderPane();\n"
                    + "var topComp = new P.Button('Top');\n"
                    + "pane.add(topComp, P.VerticalPosition.TOP);\n"
                    + "var bottomComp = new P.Button('Bottom');\n"
                    + "pane.add(bottomComp, P.VerticalalPosition.BOTTOM);\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'VBox pane'
            , parent: containers
            , customForm: "VBoxPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/boxLayout.gif'
            , hint: "BoxPane is a container with the vertical or horizontal box layout."
            , creationCode: "/**\n"
                    + "* var pane = new P.BoxPane(orientation, hgap, vgap);\n"
                    + "*/\n"
                    + "// vertical box with 20 pixels vertical gap \n"
                    + "var pane = new P.BoxPane(P.Orientation.VERTICAL, 0, 20);\n"
                    + "var comp = new P.Button('Sample');\n"
                    + "pane.add(comp);\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'HBox pane'
            , parent: containers
            , customForm: "HBoxPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/boxLayout.gif'
            , hint: "BoxPane is a container with the vertical or horizontal box layout."
            , creationCode: "/**\n"
                    + "* var pane = new P.BoxPane(orientation, hgap, vgap);\n"
                    + "*/\n"
                    + "// horizontal box with 20 pixels horizontal gap \n"
                    + "var pane = new P.BoxPane(P.Orientation.HORIZONTAL, 20, 0);\n"
                    + "var comp = new P.Button('Sample');\n"
                    + "pane.add(comp);\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Grid pane'
            , parent: containers
            , customForm: "GridPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/gridLayout.gif'
            , hint: "GridPane is a container with the grid layout. It is intended for static UI designs."
            , creationCode: "/**\n"
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
            , dependencies: "PopupMenuCustom"},
        {name: 'Flow pane'
            , parent: containers
            , customForm: "FlowPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/flowLayout.gif'
            , hint: "FlowPane is a container with the flow layout. "
            , creationCode: "/**\n"
                    + "* var pane = new P.FlowPane(hgap, vgap);\n"
                    + "*/\n"
                    + "var pane = new P.FlowPane();\n"
                    + "var comp = new P.Button('Sample');\n"
                    + "pane.add(comp);\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Desktop pane'
            , parent: containers
            , customForm: "DesktopPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/desktop_pane_16.png'
            , hint: "DesktopPane is used to create a multi-document interface."
            , creationCode: "/**\n"
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
            , dependencies: "PopupMenuCustom"},
        {name: 'Card pane'
            , parent: containers
            , customForm: "CardPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/cardLayout.gif'
            , hint: "CardPane is a container with the card layout."
            , creationCode: "/**\n"
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
            , dependencies: "PopupMenuCustom"},
        {name: 'Tabbed pane'
            , parent: containers
            , customForm: "TabbedPanePanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/tabbed_pane_16.png'
            , hint: "TabbedPane container allows the user to switch between a group of widgets by clicking tabs with titles and icons."
            , creationCode: "/**\n"
                    + "* var pane = new P.TabbedPane();\n"
                    + "* pane.add(widget, text, icon);\n"
                    + "**/\n"
                    + "var pane = new P.TabbedPane();\n"
                    + "var tab1 = new P.AnchorsPane();\n"
                    + "var tab2 = new P.AnchorsPane();\n"
                    + "pane.add(tab1, 'Tab 1');\n"
                    + "pane.add(tab2, 'Tab 2');\n"
                    + "\n"
            , dependencies: "PopupMenuCustom"},
        {name: 'Toolbar'
            , parent: containers
            , customForm: "ToolbarPanel"
            , commonForm: "CommonProperties"
            , icon: 'icons/containers/tool_bar_16.png'
            , hint: "ToolBar is a container used to display widgets, which are responsible for the most common user actions"
            , creationCode: "/**\n"
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
            , dependencies: "PopupMenuCustom"},
        menus,
        {name: 'Menu'
            , parent: menus
            , customForm: "MenuCustom"
            , commonForm: "MenuCommonProperties"
            , icon: 'icons/menu/menu_bar_16.png'
            , hint: "MenuBar widget is a form’s main menu bar, into which individual menus can be added."
            , creationCode: "/**\n"
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
                    + "\n"},
        {name: 'Popup menu'
            , parent: menus
            , customForm: "PopupMenuCustom"
            , commonForm: "MenuCommonProperties"
            , icon: 'icons/menu/popup_menu_16.png'
            , hint: "PopupMenu is an options selection window, which can be assigned to any widget."
            , creationCode: "/**\n"
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
                    + "\n"},
//

        modelGrid,
//gridBasic
        {name: 'Simple Grid'
            , parent: modelGrid
            , customForm: "SimpleGrid"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Drag columns to change theirs position. Drag a column's right border to change its width."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridTree
        {name: 'Tree Grid'
            , parent: modelGrid
            , customForm: "TreeGrid"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Model grid can be used as a TreeGrid."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridMultiSort
        {name: 'Multi Sort'
            , parent: modelGrid
            , customForm: "MultiSort"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "It is possible to sort grid's rows by multiple columns at a time."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridMultiHeader;
        {name: 'Multi Header'
            , parent: modelGrid
            , customForm: "MultiHeader"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "It is possible to construct multi columns header in any ModelGrid widget."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
// gridDND
        {name: 'Rows Dragging'
            , parent: modelGrid
            , customForm: "RowsDND"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Grid rows are allowed to be dragged."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridFrozenRows
        {name: 'Frozen Rows'
            , parent: modelGrid
            , customForm: "FrozenRows"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Some grid rows may be frozen. Frozen rows are not scrollable"
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//
//gridFrozenColumns;
        {name: 'rozen Columns'
            , parent: modelGrid
            , customForm: "FrozenColumns"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Some grid columns may be frozen. Frozen columns are not scrollable"
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridRowsSelection
        {name: 'Rows Selection'
            , parent: modelGrid
            , customForm: "RowsSelection"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Some service columns are provided with ModelGrid."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridEditingInline 
        {name: 'Inline Editing'
            , parent: modelGrid
            , customForm: "EditingInline"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Grid cells are allowed to be edited in place."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridEditingPopup
        {name: 'Popup Editing'
            , parent: modelGrid
            , customForm: "EditingPopup"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Grid cells may be edited with popup editor as well as inline."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridDetails
        {name: 'Details View'
            , parent: modelGrid
            , customForm: "Details"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Platypus.js ORM provides detail collections, which may be viewed in a ModelGrid."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridFilters
        {name: 'Filtering Data'
            , parent: modelGrid
            , customForm: "Filters"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "ModelGrid's data can be easily filtered, riddled or sorted in developer preferred manner."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridTreeView
        {name: 'Tree View'
            , parent: modelGrid
            , customForm: "TreeView"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Tree view on top of a ModelGrid."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridListView 
        {name: 'List View'
            , parent: modelGrid
            , customForm: "ListView"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Simple list on top of a ModelGrid."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//
//gridOrmBinding
        {name: 'ORM Binding'
            , parent: modelGrid
            , customForm: "OrmBinding"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Cross browser Platypus.js binding may be used with grid and Platypus.js model's data."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridOOBinding 
        {name: 'O.o Binding'
            , parent: modelGrid
            , customForm: "OOBinding"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "If browser supports Object.observe(), than plain JavaScript array may be bound with ModelGrid."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"},
//gridToExcel 
        {name: 'Export to Excel'
            , parent: modelGrid
            , customForm: "ToExcel"
            , commonForm: "CommonProperties"
            , icon: null
            , hint: "Platypus.js has Reports subsystem, which provides a way to generate Excel documents."
            , creationCode: "/**\n"
                    + " * See customizer's source code please.\n"
                    + " */\n"
                    + "\n"}
    ];

    demos.forEach(function (aDemo) {
        if (aDemo.parent){
            aDemo.parent.children.push(aDemo);
        }
    });
    return demos;
}
