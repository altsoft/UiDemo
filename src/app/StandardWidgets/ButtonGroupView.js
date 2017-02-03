/**
 * 
 * @author user
 */

define('ButtonGroupView', ['forms', 'ui', 'environment', 'forms/button-group','ButtonGroupWidget'], 
function (Forms, Ui, Env, ButtonGroup,ButtonGroupWidget, ModuleName) {
        var instance;
    function module_constructor() {
        var self = this
                , form = Forms.loadForm(ModuleName);

        self.show = function () {
            form.show();
        };
        var buttonGroups = [];
        var commonView;
        self.setCommonView = function (view) {
            commonView = view;
        };

        self.getButtonGroups = function () {
            return buttonGroups;
        }

        var allItemsList = [];
        var groupWidget = new ButtonGroupWidget(allItemsList);
        self.getDemoComponent = function () {
            return groupWidget.getDemoComponent();
        };

        if (Ui.agent == Env.HTML5) {
            form.grdFreeItems.element.style.border = "thin solid LightGray";
            form.grdFreeItems.element.style.borderRadius = "5px";
            form.grdGroupItems.element.style.border = "thin solid LightGray";
            form.grdGroupItems.element.style.borderRadius = "5px";
        }
        var freeItemsList = [];

        form.mdlGroups.displayField = "name";
        form.mdlGroups.displayList = buttonGroups;

        form.grdGroupItems.draggableRows = true;
        form.grdFreeItems.draggableRows = true;

        form.grdFreeItems.data = freeItemsList;
        form.grdFreeItems.items.field = 'name';


        var rbList = groupWidget.getAllRadioButtons();
        var tglList = groupWidget.getAllToggleButtons();
        var firstMenuList = groupWidget.getFirstMenuItems();
        var secondMenuList = groupWidget.getSecondMenuItems();

        var radioGroup = new ButtonGroup();
        addButtonGroupToList(radioGroup, 'First Two Radio buttons');
        rbList[0].buttonGroup = radioGroup;
        rbList[1].buttonGroup = radioGroup;

        var toggleGroup = new ButtonGroup();
        addButtonGroupToList(toggleGroup, 'First Two Toggle buttons');
        toggleGroup.add(tglList[0]);
        toggleGroup.add(tglList[1]);

        var firstMenuGroup = new ButtonGroup();
        addButtonGroupToList(firstMenuGroup, 'First Two First menu buttons');
        firstMenuGroup.add(firstMenuList[0]);
        firstMenuGroup.add(firstMenuList[1]);

        var secondMenuGroup = new ButtonGroup();
        addButtonGroupToList(secondMenuGroup, 'First Two Second menu buttons');
        secondMenuGroup.add(secondMenuList[0]);
        secondMenuGroup.add(secondMenuList[1]);

        var allLastElements = new ButtonGroup();
        addButtonGroupToList(allLastElements, 'All last elements');
        allLastElements.add(rbList[2]);
        allLastElements.add(tglList[2]);
        allLastElements.add(firstMenuList[2]);
        allLastElements.add(secondMenuList[2]);

        self.getViewComponent = function () {
            return groupWidget.getViewComponent();
        };

        self.showOnPanel = function (aPanel) {
            aPanel.add(form.view);

            form.mdlGroups.value = buttonGroups[0];
            form.grdGroupItems.data = form.mdlGroups.value.group.children();
        };

        self.getFormHeight = function () {
            return form.view.height;
        };

        form.mdlGroups.onValueChange = function (event) {
            if (form.mdlGroups.value) {
                form.grdGroupItems.data = form.mdlGroups.value.group.children();
                form.grdGroupItems.items.field = 'name';
            } else {
                form.grdGroupItems.data = null;
                form.grdGroupItems.items.field = null;
            }
        };

        function addButtonGroupToList(btnGroup, aText) {
            var element = {name: 'Group_' + aText, group: btnGroup};
            buttonGroups.push(element);
            form.mdlGroups.value = element;
            return btnGroup;
        }

        form.btnAddGroup.onActionPerformed = function (event) {
            var btnGroup = new ButtonGroup();
            addButtonGroupToList(btnGroup, form.txtGrpDisplayName.text);
        };

        form.btnDelGroup.onActionPerformed = function (event) {
            if (buttonGroups.length !== 0) {
                form.mdlGroups.value.group.children().forEach(function (item, i, arr) {
                    item.buttonGroup = null;
                });
                buttonGroups.splice(buttonGroups.indexOf(form.mdlGroups.value), 1);
                form.mdlGroups.value = buttonGroups[0];
            }
        };

        form.grdFreeItems.element.ondragenter = function (event) {
            event.preventDefault();
            for (var i = 0; i < event.dataTransfer.types.length; ++i) {
                if (event.dataTransfer.types[i] !== 'text/modelgrid-row') {
                    event.dataTransfer.dropEffect = "none";
                }
            }
            var dragged = (event.dataTransfer.getData("text/modelgrid-row"));
            if (dragged) {
                dragged = JSON.parse(dragged);
                if (dragged.gridName === form.grdFreeItems.name) {
                    event.dataTransfer.dropEffect = "none";
                }
            }
        };
        form.grdFreeItems.element.ondragover = form.grdFreeItems.element.ondragenter;

        form.grdGroupItems.element.ondragenter = function (event) {
            event.preventDefault();
            for (var i = 0; i < event.dataTransfer.types.length; ++i) {
                if (event.dataTransfer.types[i] !== 'text/modelgrid-row') {
                    event.dataTransfer.dropEffect = "none";
                }
            }
            var dragged = (event.dataTransfer.getData("text/modelgrid-row"));
            if (dragged) {
                dragged = JSON.parse(dragged);
                if (dragged.gridName === form.grdGroupItems.name) {
                    event.dataTransfer.dropEffect = "none";
                }
            }
        };
        form.grdGroupItems.element.ondragover = form.grdGroupItems.element.ondragenter;

        form.grdFreeItems.element.ondrop = function (event) {
            event.preventDefault();
            var dragged = JSON.parse(event.dataTransfer.getData("text/modelgrid-row"));
            if (dragged.gridName === form.grdFreeItems.name) {
                return;
            }
            freeItemsList.push(form.grdGroupItems.data[dragged.dataIndex]);
            form.grdGroupItems.data[dragged.dataIndex].buttonGroup = null;
            form.grdGroupItems.data = form.mdlGroups.value.group.children();
        };

        form.grdGroupItems.element.ondrop = function (event) {
            event.preventDefault();
            var dragged = JSON.parse(event.dataTransfer.getData("text/modelgrid-row"));
            if (dragged.gridName === form.grdGroupItems.name) {
                return;
            }
            form.grdFreeItems.data[dragged.dataIndex].buttonGroup = form.mdlGroups.value.group;
            freeItemsList.splice(dragged.dataIndex, 1);
            form.grdGroupItems.data = form.mdlGroups.value.group.children();
        };
   }
     
    return function getSingletone(){
        return (instance = (instance||new module_constructor()));
            };
});
