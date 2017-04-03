/**
 * 
 * @author user
 */

define('MenuCustom', ['forms', 'ui', 'forms/menu', 'forms/menu-item',
    'forms/menu-separator', 'forms/check-menu-item', 'forms/radio-menu-item', 'forms/button-group', 'MenuView'],
        function (Forms, Ui, Menu, MenuItem, MenuSeparator, CheckMenuItem, RadioMenuItem,
                ButtonGroup, MenuView, ModuleName) {
            var instance;
            function module_constructor() {
                var self = this
                        , form = Forms.loadForm(ModuleName);

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
                self.getMenus = function () {
                    return menuList;
                };
                form.mdlMenus.displayField = "name";
                form.mdlMenus.displayList = menuList;

                form.mdlItem.displayField = "name";
//    form.mdlItem.field = "menu";

                var menu = new Menu("Demo");
                menuBar.add(menu);
                var element = {name: 'Menu: Demo menu 1', menu: menu, childlist: []};
                menuList.push(element);
                allItemsList.push(element);
                form.mdlMenus.value = element;
                mdlItemsList.value = element;

                var item = new MenuItem('MenuItem 1');
                item.displayName = 'MenuItem 1';
                addItem(item);

                var subMenu = new Menu('Sub menu 1');
                subMenu.text = 'Sub menu';
                subMenu.add(new MenuItem("Sub item 1"));
                subMenu.add(new MenuItem("Sub item 2"));
                subMenu.add(new MenuItem("Sub item 3"));
                addItem(subMenu);

                item = new MenuSeparator()
                item.displayName = 'MenuSeparator';
                addItem(item);
                item = new CheckMenuItem('CheckMenuItem');
                item.displayName = 'CheckMenuItem';
                addItem(item);
                item = new RadioMenuItem('RadioMenuItem');
                item.displayName = 'RadioMenuItem';
                addItem(item);

                menu = new Menu("Demo 2");
                menuBar.add(menu);
                element = {name: 'Menu: Demo menu 2', menu: menu, childlist: []};
                menuList.push(element);
                allItemsList.push(element);
                form.mdlMenus.value = element;
                mdlItemsList.value = element;
                item = new MenuItem('MenuItem');
                item.displayName = 'MenuItem';
                addItem(item);
                item = new MenuSeparator()
                item.displayName = 'MenuSeparator';
                addItem(item);
                item = new CheckMenuItem('CheckMenuItem');
                item.displayName = 'CheckMenuItem';
                addItem(item);
                var btnGroup = new ButtonGroup();
                item = new RadioMenuItem('RadioMenuItem');
                item.displayName = 'RadioMenuItem';
                addItem(item);
                btnGroup.add(item);
                item = new RadioMenuItem('RadioMenuItem');
                item.displayName = 'RadioMenuItem';
                btnGroup.add(item);
                addItem(item);
                item = new RadioMenuItem('RadioMenuItem');
                item.displayName = 'RadioMenuItem';
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

                form.btnAddCheck.onActionPerformed = function (event) {
                    var item = new CheckMenuItem(form.txtText.text);
                    item.displayName = 'CheckMenuItem ' + form.txtText.text;
                    addItem(item);
                };

                form.btnAddMenu.onActionPerformed = function (event) {
                    var menu = new Menu(form.txtText.text);
                    menuBar.add(menu);
                    var element = {name: 'Menu: ' + form.txtText.text, menu: menu, childlist: []};
                    menuList.push(element);
                    allItemsList.push(element);
                    form.mdlMenus.displayList = null;
                    form.mdlMenus.displayList = menuList;
                    form.mdlMenus.value = element;
                    mdlItemsList.displayList = null;
                    mdlItemsList.displayList = allItemsList;
                    mdlItemsList.value = element;
                };

                function addItem(item) {
                    form.mdlMenus.value.menu.add(item);
                    var element = {name: item.displayName, menu: item};
                    form.mdlMenus.value.childlist.push(element);
                    form.mdlMenus.displayList = null;
                    form.mdlMenus.displayList = menuList;
                    allItemsList.push(element);
                    mdlItemsList.displayList = null;
                    mdlItemsList.displayList = allItemsList;
                    mdlItemsList.value = element;
                    form.mdlItem.displayList = null;
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
                    var item = new MenuItem(form.txtText.text);
                    item.displayName = 'MenuItem: ' + form.txtText.text;
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
                        mdlItemsList.displayList = null;
                        mdlItemsList.displayList = allItemsList;
                        mdlItemsList.value = allItemsList[0];
                        form.mdlItem.value = form.mdlMenus.value.childlist[0];
                        menuList.splice(menuList.indexOf(form.mdlMenus.value), 1);
                        form.mdlMenus.displayList = null;
                        form.mdlMenus.displayList = menuList;
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
                        mdlItemsList.displayList = null;
                        mdlItemsList.displayList = allItemsList;
                        mdlItemsList.value = allItemsList[0];
                        form.mdlMenus.value.childlist.splice(form.mdlMenus.value.childlist.indexOf(form.mdlItem.value), 1);
                        form.mdlItem.value = form.mdlMenus.value.childlist[0];
                    }
                };
                form.btnAddRadio.onActionPerformed = function (event) {
                    var item = new RadioMenuItem(form.txtText.text);
                    item.displayName = 'RadioMenuItem: ' + form.txtText.text;
                    addItem(item);
                };

                form.btnAddSeparator.onActionPerformed = function (event) {
                    var item = new MenuSeparator();
                    item.displayName = 'MenuSeparator: ' + form.txtText.text;
                    addItem(item);
                };

                mdlItemsList.onValueChange = function (event) {
                    if (commonView) {
                        commonView.setDemoComponent(mdlItemsList.value.menu);
                    }
                };
            }
            return function getSingletone() {
                return (instance = (instance || new module_constructor()));
            };
        });