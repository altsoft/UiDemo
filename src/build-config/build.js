({
    appDir: "../app"
    , baseUrl: "."
    , dir: "../../uiCompressed/app"
    , paths: {
        //Platypus.js API is allready minimized so we need to exclude it from the build.
        environment: "empty:"
        , orm: "empty:"
        , logger: "empty:"
        , ui: "empty:"
        , rpc: "empty:"
        , invoke: "empty:"
        , boxing: "empty:"
        , resource: "empty:"
        , forms: "empty:"
        // Menu, StandardWidgets,ModelWidgets,Containers,Grid and Utils
        // are listed here because they are using three arguments define().
        // So we need to tell optimizer where this modules reside. 

        //Menu
        , PopupMenuCustom: "MenuWidgets/PopupMenuCustom"
        , PopupMenuView: "MenuWidgets/PopupMenuView"
        , MenuView: "MenuWidgets/MenuView"
        , MenuCustom: "MenuWidgets/MenuCustom"
        , MenuCommonProperties: "MenuWidgets/MenuCommonProperties"
                //Standard
        , LabelView: "StandardWidgets/LabelView"
        , ButtonGroupWidget: "StandardWidgets/ButtonGroupWidget"
        , ButtonView: 'StandardWidgets/ButtonView'
        , ButtonGroupView: 'StandardWidgets/ButtonGroupView'
        , CheckBoxView: 'StandardWidgets/CheckBoxView'
        , DropDownButtonView: 'StandardWidgets/DropDownButtonView'
        , FormattedFieldView: 'StandardWidgets/FormattedFieldView'
        , HtmlAreaView: 'StandardWidgets/HtmlAreaView'
        , PasswordFieldView: 'StandardWidgets/PasswordFieldView'
        , ProgressBarView: 'StandardWidgets/ProgressBarView'
        , RadioButtonView: 'StandardWidgets/RadioButtonView'
        , SliderView: 'StandardWidgets/SliderView'
        , TextAreaView: 'StandardWidgets/TextAreaView'
        , TextFieldView: 'StandardWidgets/TextFieldView'
        , ToggleButtonView: 'StandardWidgets/ToggleButtonView'
        //ModelWidgets
        , ModelCheckCustom: 'ModelWidgets/ModelCheckCustom'
        , ModelCheckView: 'ModelWidgets/ModelCheckView'
        , ModelComboCustom: 'ModelWidgets/ModelComboCustom'
        , ModelComboView: 'ModelWidgets/ModelComboView'
        , ModelDateCustom: 'ModelWidgets/ModelDateCustom'
        , ModelDateView: 'ModelWidgets/ModelDateView'
        , ModelSpinCustom: 'ModelWidgets/ModelSpinCustom'
        , ModelSpinView: 'ModelWidgets/ModelSpinView'
        , ModelTextAreaCustom: 'ModelWidgets/ModelTextAreaCustom'
        , ModelTextAreaView: 'ModelWidgets/ModelTextAreaView'
        , ModelTextCustom: 'ModelWidgets/ModelTextCustom'
        , ModelTextView: 'ModelWidgets/ModelTextView'
        //Containers
        , AddComponentContainer: 'ContainerPanels/AddComponentContainer'
        , BorderPositionSelection: 'ContainerPanels/BorderPositionSelection'
        , DesktopInnerForm: 'ContainerPanels/DesktopInnerForm'
        , AddDesktopContainer: 'ContainerPanels/AddDesktopContainer'
        , AnchorsPanePanel: 'ContainerPanels/AnchorsPanePanel'
        , BorderPanePanel: 'ContainerPanels/BorderPanePanel'
        , CardPanePanel: 'ContainerPanels/CardPanePanel'
        , DesktopPanePanel: 'ContainerPanels/DesktopPanePanel'
        , FlowPanePanel: 'ContainerPanels/FlowPanePanel'
        , GridPanePanel: 'ContainerPanels/GridPanePanel'
        , HBoxPanePanel: 'ContainerPanels/HBoxPanePanel'
        , SplitPanePanel: 'ContainerPanels/SplitPanePanel'
        , TabbedPanePanel: 'ContainerPanels/TabbedPanePanel'
        , ToolbarPanel: 'ContainerPanels/ToolbarPanel'
        , VBoxPanePanel: 'ContainerPanels/VBoxPanePanel'
        //Grid
        , SimpleGrid: 'ModelGrid/SimpleGrid'
        , TreeGrid: 'ModelGrid/TreeGrid'
        , MultiSort: 'ModelGrid/MultiSort'
        , MultiHeader: 'ModelGrid/MultiHeader'
        , RowsDND: 'ModelGrid/RowsDND'
        , FrozenRows: 'ModelGrid/FrozenRows'
        , FrozenColumns: 'ModelGrid/FrozenColumns'
        , RowsSelection: 'ModelGrid/RowsSelection'
        , EditingInline: 'ModelGrid/EditingInline'
        , EditingPopup: 'ModelGrid/EditingPopup'
        , PetSelector: 'Selectors/PetSelector'
        , Details: 'ModelGrid/Details'
        , Filters: 'ModelGrid/Filters'
        , TreeView: 'ModelGrid/TreeView'
        , ListView: 'ModelGrid/ListView'
        , OrmBinding: 'ModelGrid/OrmBinding'
        , Es6Binding: 'ModelGrid/Es6Binding'
        , ToExcel: 'ModelGrid/ToExcel'
        //Utils
        , CommonProperties: 'Utils/CommonProperties'
        , FontSelectionDialog: 'Utils/FontSelector'
    }
    , findNestedDependencies: false
    , preserveLicenseComments: false
    , modules: [
        {
            name: "StandardWidgets/Modules"
            , exclude: ['PopupMenuView', 'PopupMenuCustom']
        }
        , {
            name: "ModelWidgets/Modules"
            , exclude: ['PopupMenuView', 'PopupMenuCustom']
        },
        {
            name: "ContainerPanels/Modules"
            , exclude: ['Utils/Pallete', 'PopupMenuView', 'PopupMenuCustom']
        }
        , {
            name: "MenuWidgets/Modules"
        }, {
            name: "ModelGrid/Modules"
        },
        {
            name: "Utils/Modules"
            , exclude: ['PopupMenuView', 'PopupMenuCustom']
        },
        {
            name: "MainView"
        }
    ]
});
