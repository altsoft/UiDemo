/**
 * 
 * @author user
 */
function ButtonGroupView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };
    var commonView;
    self.setCommonView = function (view) {
        commonView = view;
    };

    var allItemsList = [];
    var groupWidget = new ButtonGroupWidget(allItemsList);
    self.getDemoComponent = function () {
        return groupWidget.getDemoComponent();
    };


    var groupList = [];

    form.mdlGroups.data = groupList;
    form.mdlGroups.displayField = "name";
    form.mdlGroups.displayList = groupList;
    form.mdlGroups.field = "group";

    form.mdlGroupItems.displayField = "name";
    form.mdlGroupItems.field = "menu";

    form.grdGroupItems.draggableRows = true;
    form.grdAllItems.draggableRows = true;


    var rbList = groupWidget.getAllRadioButtons();
    var tglList = groupWidget.getAllToggleButtons();
    var firstMenuList = groupWidget.getFirstMenuItems();
    var secondMenuList = groupWidget.getSecondMenuItems();

    var radioGroup = new P.ButtonGroup();
    addButtonGroupToList(radioGroup, 'First Two Radio buttons')
    radioGroup.add(rbList[0]);
    radioGroup.add(rbList[1]);

    var toggleGroup = new P.ButtonGroup();
    addButtonGroupToList(toggleGroup, 'First Two Toggle buttons')
    toggleGroup.add(tglList[0]);
    toggleGroup.add(tglList[1]);

    var firstMenuGroup = new P.ButtonGroup();
    addButtonGroupToList(firstMenuGroup, 'First Two First menu buttons')
    firstMenuGroup.add(firstMenuList[0]);
    firstMenuGroup.add(firstMenuList[1]);

    var secondMenuGroup = new P.ButtonGroup();
    addButtonGroupToList(secondMenuGroup, 'First Two Second menu buttons')
    secondMenuGroup.add(secondMenuList[0]);
    secondMenuGroup.add(secondMenuList[1]);

    var allLastElements = new P.ButtonGroup();
    addButtonGroupToList(allLastElements, 'All last elements')
    allLastElements.add(rbList[2]);
    allLastElements.add(tglList[2]);
    allLastElements.add(firstMenuList[2]);
    allLastElements.add(secondMenuList[2]);


//    var mdlItemsList = groupWidget.getCombo();
//    mdlItemsList.data = allItemsList;
//    mdlItemsList.displayList = allItemsList;
//    mdlItemsList.displayField = 'name';
//    mdlItemsList.field = 'menu';



//    function btnsAvaliability(isEnable) {
//        form.btnAddItem.enabled = isEnable;
//        form.btnAddRadio.enabled = isEnable;
//        form.btnAddCheck.enabled = isEnable;
//        form.btnAddSeparator.enabled = isEnable;
//    }
//
//    if (menuList.length === 0) {
//        btnsAvaliability(false);
//    }

    self.getViewComponent = function () {
        return groupWidget.getViewComponent();
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        form.mdlGroups.value = groupList[0];
    };

    model.requery(function () {
    });

    self.getFormHeight = function () {
        return form.view.height;
    };

//    function addItem(item) {
//        form.mdlMenus.value.menu.add(item);
//        var element = {name: item.displayName, menu: item};
//        form.mdlMenus.value.childlist.push(element);
//        allItemsList.push(element);
//        mdlItemsList.value = element;
//        form.mdlItem.data = form.mdlMenus.value.childlist;
//        form.mdlItem.displayList = form.mdlMenus.value.childlist;
//        form.mdlItem.value = element;
//        item.onActionPerformed = function (event) {
//            var item = event.source;
//            for (var menu in menuList) {
//                for (var itm in menuList[menu].childlist) {
//                    if (menuList[menu].childlist[itm].menu === item) {
//                        form.mdlMenus.value = menuList[menu];
//                        form.mdlItem.value = menuList[menu].childlist[itm];
//                    }
//                }
//            }
//        }
//    }
//
    form.mdlGroups.onValueChange = function (event) {
        if (form.mdlGroups.value) {
            form.mdlGroupItems.data = form.mdlGroups.value.group.children();
            form.mdlGroupItems.displayList = form.mdlGroups.value.group.children();
            form.mdlGroupItems.value = form.mdlGroups.value.group.children()[0];
            form.grdGroupItems.data = form.mdlGroups.value.group.children();
            form.grdGroupItems.items.field = 'name';
            
//            form.grdGroupItems.items.
            
        } else {
            form.mdlGroupItems.data = null;
            form.mdlGroupItems.value = null;
            form.mdlGroupItems.displayList = null;
            
            form.grdGroupItems.data = null;
            form.grdGroupItems.items.field = null;
        }
    };
//
//    form.btnDelMenu.onActionPerformed = function (event) {
//        if (menuList.length != 0) {
//            menuBar.remove(form.mdlMenus.value.menu);
//            for (var item in form.mdlMenus.value.childlist) {
//                allItemsList.splice(allItemsList.indexOf(form.mdlMenus.value.childlist[item]), 1)
//                form.mdlMenus.value.childlist.splice(item, 1);
//            }
//            form.mdlMenus.value.childlist = [];
//            allItemsList.splice(allItemsList.indexOf(form.mdlMenus.value), 1);
//            mdlItemsList.value = allItemsList[0];
//            form.mdlItem.value = form.mdlMenus.value.childlist[0];
//            menuList.splice(menuList.indexOf(form.mdlMenus.value), 1);
//            form.mdlMenus.value = menuList[0];
//            if (form.mdlMenus.value) {
//                form.mdlItem.value = form.mdlMenus.value.childlist[0];
//            }
//        }
//    };
//
//    form.btnDelItem.onActionPerformed = function (event) {
//        if (form.mdlItem.value) {
//            form.mdlMenus.value.menu.remove(form.mdlItem.value.menu);
//            allItemsList.splice(allItemsList.indexOf(form.mdlItem.value), 1);
//            mdlItemsList.value = allItemsList[0];
//            form.mdlMenus.value.childlist.splice(form.mdlMenus.value.childlist.indexOf(form.mdlItem.value), 1);
//            form.mdlItem.value = form.mdlMenus.value.childlist[0];
//        }
//    };
//    form.btnAddRadio.onActionPerformed = function (event) {
//        var item = new P.RadioMenuItem(form.txtText.text);
//        item.displayName = 'RadioMenuItem_' + form.txtText.text;
//        addItem(item);
//    };
//
//    form.btnAddSeparator.onActionPerformed = function (event) {
//        var item = new P.MenuSeparator();
//        item.displayName = 'MenuSeparator_' + form.txtText.text;
//        addItem(item);
//    };
//
//    mdlItemsList.onValueChange = function (event) {
//        if (commonView) {
//            commonView.setDemoComponent(mdlItemsList.value.menu);
//        }
//    };

    function addButtonGroupToList(btnGroup, aText) {
        var element = {name: 'Group_' + aText, group: btnGroup};
        groupList.push(element);
//        allItemsList.push(element);
        form.mdlGroups.value = element;
//        mdlItemsList.value = element;
        return btnGroup;
    }

    form.btnAddGroup.onActionPerformed = function (event) {
        var btnGroup = new P.ButtonGroup();
        addButtonGroup(form.txtGrpDisplayName.text);
    };
    form.btnDelGroup.onActionPerformed = function (event) {
        if (groupList.length != 0) {
            form.mdlGroups.value.group.children().forEach(function (item, i, arr) {
                item.buttonGroup = null;
            });
            groupList.splice(groupList.indexOf(form.mdlGroups.value), 1);

            form.mdlGroups.value = groupList[0];
        }
    };
}
