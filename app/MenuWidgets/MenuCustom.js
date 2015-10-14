/**
 * 
 * @author user
 */
function MenuCustom() {
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
    var menuView = new MenuView(allItemsList);
    self.getDemoComponent = function () {
        return menuView.getDemoComponent();
    };

    var menuBar = self.getDemoComponent();
    var mdlItemsList = menuView.getCombo();
    
    mdlItemsList.displayList = allItemsList;
    mdlItemsList.displayField = 'name';

    var menuList = [];

    form.mdlMenus.displayField = "name";
    form.mdlMenus.displayList = menuList;

    form.mdlItem.displayField = "name";
//    form.mdlItem.field = "menu";

    var menu = new P.Menu("Demo");
    menuBar.add(menu);
    var element = {name: 'Menu_Demo menu 1', menu: menu, childlist: []};
    menuList.push(element);
    allItemsList.push(element);
    form.mdlMenus.value = element;
    mdlItemsList.value = element;

    var item = new P.MenuItem('MenuItem_DemoMenu 1');
    item.displayName = 'MenuItem_DemoMenu 1';
    addItem(item);
    
    var subMenu = new P.MenuItem('Submenu_1');
    subMenu.displayName = 'Submenu_1';
    addItem(subMenu);
    
    item = new P.MenuSeparator()
    item.displayName = 'MenuSeparator_DemoMenu';
    addItem(item);
    item = new P.CheckMenuItem('CheckMenuItem_DemoMenu');
    item.displayName = 'CheckMenuItem_DemoMenu';
    addItem(item);
    item = new P.RadioMenuItem('RadioMenuItem_DemoMenu');
    item.displayName = 'RadioMenuItem_DemoMenu';
    addItem(item);

    menu = new P.Menu("Demo 2");
    menuBar.add(menu);
    element = {name: 'Menu_Demo menu 2', menu: menu, childlist: []};
    menuList.push(element);
    allItemsList.push(element);
    form.mdlMenus.value = element;
    mdlItemsList.value = element;
    item = new P.MenuItem('MenuItem_DemoMenu 2');
    item.displayName = 'MenuItem_DemoMenu 2';
    addItem(item);
    item = new P.MenuSeparator()
    item.displayName = 'MenuSeparator_DemoMenu';
    addItem(item);
    item = new P.CheckMenuItem('CheckMenuItem_DemoMenu');
    item.displayName = 'CheckMenuItem_DemoMenu';
    addItem(item);
    var btnGroup = new P.ButtonGroup();
    item = new P.RadioMenuItem('RadioMenuItem_DemoMenu');
    item.displayName = 'RadioMenuItem_DemoMenu_1';
    addItem(item);
    btnGroup.add(item);
    item = new P.RadioMenuItem('RadioMenuItem_DemoMenu');
    item.displayName = 'RadioMenuItem_DemoMenu_2';
    btnGroup.add(item);
    addItem(item);
    item = new P.RadioMenuItem('RadioMenuItem_DemoMenu');
    item.displayName = 'RadioMenuItem_DemoMenu_3';
    btnGroup.add(item);
    addItem(item);
    
    function btnsAvaliability(isEnable) {
        form.btnAddItem.enabled = isEnable;
        form.btnAddRadio.enabled = isEnable;
        form.btnAddCheck.enabled = isEnable;
        form.btnAddSeparator.enabled = isEnable;
    }

    if (menuList.length === 0) {
        btnsAvaliability(false);
    }

    self.getViewComponent = function () {
        return menuView.getViewComponent();
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    model.requery(function () {
        // TODO : place your code here
    });

    self.getFormHeight = function () {
        return form.view.height;
    };

    form.btnAddCheck.onActionPerformed = function (event) {
        var item = new P.CheckMenuItem(form.txtText.text);
        item.displayName = 'CheckMenuItem_' + form.txtText.text;
        addItem(item);
    };

    form.btnAddMenu.onActionPerformed = function (event) {
        var menu = new P.Menu(form.txtText.text);
        menuBar.add(menu);
        var element = {name: 'Menu_' + form.txtText.text, menu: menu, childlist: []};
        menuList.push(element);
        allItemsList.push(element);
        form.mdlMenus.value = element;
        mdlItemsList.value = element;
    };

    function addItem(item) {
        form.mdlMenus.value.menu.add(item);
        var element = {name: item.displayName, menu: item};
        form.mdlMenus.value.childlist.push(element);
        allItemsList.push(element);
        mdlItemsList.value = element;
//        form.mdlItem.data = form.mdlMenus.value.childlist;
        form.mdlItem.displayList = form.mdlMenus.value.childlist;
        form.mdlItem.value = element;
        item.onActionPerformed = function (event) {
            var item = event.source;
            for (var menu in menuList) {
                for (var itm in menuList[menu].childlist) {
                    if (menuList[menu].childlist[itm].menu === item) {
                        form.mdlMenus.value = menuList[menu];
                        form.mdlItem.value = menuList[menu].childlist[itm];
                    }
                }
            }
        }
    }

    form.btnAddItem.onActionPerformed = function (event) {
        var item = new P.MenuItem(form.txtText.text);
        item.displayName = 'MenuItem_' + form.txtText.text;
        addItem(item);
    };

    form.mdlMenus.onValueChange = function (event) {
        if (menuList.length === 0) {
            btnsAvaliability(false);
        } else {
            btnsAvaliability(true);
        }
        if (form.mdlMenus.value) {
//            form.mdlItem.data = form.mdlMenus.value.childlist;
            form.mdlItem.displayList = form.mdlMenus.value.childlist;
            form.mdlItem.value = form.mdlMenus.value.childlist[0];
        }
    };

    form.btnDelMenu.onActionPerformed = function (event) {
        if (menuList.length != 0) {
            menuBar.remove(form.mdlMenus.value.menu);
            for (var item in form.mdlMenus.value.childlist) {
                allItemsList.splice(allItemsList.indexOf(form.mdlMenus.value.childlist[item]), 1)
                form.mdlMenus.value.childlist.splice(item, 1);
            }
            form.mdlMenus.value.childlist = [];
            allItemsList.splice(allItemsList.indexOf(form.mdlMenus.value), 1);
            mdlItemsList.value = allItemsList[0];
            form.mdlItem.value = form.mdlMenus.value.childlist[0];
            menuList.splice(menuList.indexOf(form.mdlMenus.value), 1);
            form.mdlMenus.value = menuList[0];
            if (form.mdlMenus.value) {
                form.mdlItem.value = form.mdlMenus.value.childlist[0];
            }
        }
    };

    form.btnDelItem.onActionPerformed = function (event) {
        if (form.mdlItem.value) {
            form.mdlMenus.value.menu.remove(form.mdlItem.value.menu);
            allItemsList.splice(allItemsList.indexOf(form.mdlItem.value), 1);
            mdlItemsList.value = allItemsList[0];
            form.mdlMenus.value.childlist.splice(form.mdlMenus.value.childlist.indexOf(form.mdlItem.value), 1);
            form.mdlItem.value = form.mdlMenus.value.childlist[0];
        }
    };
    form.btnAddRadio.onActionPerformed = function (event) {
        var item = new P.RadioMenuItem(form.txtText.text);
        item.displayName = 'RadioMenuItem_' + form.txtText.text;
        addItem(item);
    };

    form.btnAddSeparator.onActionPerformed = function (event) {
        var item = new P.MenuSeparator();
        item.displayName = 'MenuSeparator_' + form.txtText.text;
        addItem(item);
    };

    mdlItemsList.onValueChange = function (event) {
        if (commonView) {
            commonView.setDemoComponent(mdlItemsList.value.menu);
        }
    };
}
