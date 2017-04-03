/**
 * 
 * @author user
 */
define('PopupMenuCustom', ['forms', 'ui', 'forms/popup-menu', 'forms/menu-item',
    'forms/menu-separator', 'forms/check-menu-item', 'forms/radio-menu-item', 'forms/button-group', 'PopupMenuView'],
        function (Forms, Ui, PopupMenu, MenuItem, MenuSeparator, CheckMenuItem, RadioMenuItem, ButtonGroup, PopupMenuView, ModuleName) {
            var instance;
            function module_constructor(allItemsList) {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                self.show = function () {
                    form.show();
                };

                var commonView;
                self.setCommonView = function (view) {
                    commonView = view;
                };
                var demoMenuList = [];
                var allItemsList = [];
                var menuView = new PopupMenuView(allItemsList);
                self.getDemoComponent = function () {
                    return menuView.getDemoComponent();
                };
                self.getMenus = function () {
                    return demoMenuList;
                };
                var demoPane = self.getDemoComponent();
                var mdlItemsList = menuView.getCombo();
                mdlItemsList.displayList = allItemsList;
                mdlItemsList.displayField = 'name';

                form.mdlMenus.displayField = "name";
                form.mdlMenus.displayList = demoMenuList;
                form.mdlItem.displayField = "name";

                function btnsAvaliability(isEnable) {
                    form.btnAddItem.enabled = isEnable;
                    form.btnAddRadio.enabled = isEnable;
                    form.btnAddCheck.enabled = isEnable;
                    form.btnAddSeparator.enabled = isEnable;
                }

                var menu = new PopupMenu();
                var element = {name: 'Popup menu 1', menu: menu, childlist: []};
                demoMenuList.push(element);
                allItemsList.push(element);
                form.mdlMenus.value = element;
                mdlItemsList.value = element;
                var item = new MenuItem('PopupItem');
                item.displayName = 'PopupItem';
                addItem(item);
                item = new MenuSeparator();
                item.displayName = 'PopupSeparator';
                addItem(item);
                item = new CheckMenuItem('CheckMenuItem');
                item.displayName = 'PopupCheckItem';
                addItem(item);
                item = new RadioMenuItem('RadioMenuItem');
                item.displayName = 'PopupRadioItem';
                addItem(item);

                menu = new PopupMenu();
                demoPane.componentPopupMenu = menu;
                element = {name: 'Popup menu 2', menu: menu, childlist: []};
                demoMenuList.push(element);
                allItemsList.push(element);
                form.mdlMenus.value = element;
                mdlItemsList.value = element;
                item = new MenuItem('MenuItem');
                item.displayName = 'PopupItem';
                addItem(item);
                item = new MenuSeparator();
                item.displayName = 'PopupSeparator';
                addItem(item);
                item = new CheckMenuItem('CheckMenuItem');
                item.displayName = 'PopupCheckItem';
                addItem(item);
                var btnGroup = new ButtonGroup();
                item = new RadioMenuItem('RadioMenuItem');
                item.displayName = 'PopupRadioItem';
                addItem(item);
                btnGroup.add(item);
                item = new RadioMenuItem('RadioMenuItem');
                item.displayName = 'PopupRadioItem';
                btnGroup.add(item);
                addItem(item);
                item = new RadioMenuItem('RadioMenuItem');
                item.displayName = 'PopupRadioItem';
                btnGroup.add(item);
                addItem(item);

                if (demoMenuList.length === 0) {
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
                    item.displayName = 'CheckMenuItem: ' + form.txtText.text;
                    addItem(item);
                };

                form.btnAddMenu.onActionPerformed = function (event) {
                    var menu = new PopupMenu();
                    demoPane.componentPopupMenu = menu;
                    var element = {name: 'PopupMenu: ' + form.txtText.text, menu: menu, childlist: []};
                    demoMenuList.push(element);
                    allItemsList.push(element);
                    form.mdlMenus.value = element;
                    mdlItemsList.value = element;
                };

                function addItem(item) {
                    form.mdlMenus.value.menu.add(item);
                    var element = {name: item.displayName, menu: item};
                    form.mdlMenus.value.childlist.push(element);
                    allItemsList.push(element);
                    mdlItemsList.displayList = null;
                    mdlItemsList.displayList = allItemsList;
                    mdlItemsList.value = element;
                    form.mdlItem.displayList = null;
                    form.mdlItem.displayList = form.mdlMenus.value.childlist;
                    form.mdlItem.value = element;
                    item.onActionPerformed = function (event) {
                        var item = event.source;
                        for (var menu in demoMenuList) {
                            for (var itm in demoMenuList[menu].childlist) {
                                if (demoMenuList[menu].childlist[itm].menu === item) {
                                    form.mdlMenus.value = demoMenuList[menu];
                                    form.mdlItem.value = demoMenuList[menu].childlist[itm];
                                }
                            }
                        }
                    };
                }

                form.btnAddItem.onActionPerformed = function (event) {
                    var item = new MenuItem(form.txtText.text);
                    item.displayName = 'MenuItem: ' + form.txtText.text;
                    addItem(item);
                };

                form.mdlMenus.onValueChange = function (event) {
                    if (demoMenuList.length === 0) {
                        btnsAvaliability(false);
                    } else {
                        btnsAvaliability(true);
                    }
                    if (form.mdlMenus.value) {
                        form.mdlItem.displayList = form.mdlMenus.value.childlist;
                        form.mdlItem.value = form.mdlMenus.value.childlist[0];
                        demoPane.componentPopupMenu = form.mdlMenus.value.menu;
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
                        form.mdlItem.displayList = null;
                        form.mdlItem.displayList = form.mdlMenus.value.childlist;
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
                    if (commonView && mdlItemsList.value) {
                        commonView.setDemoComponent(mdlItemsList.value.menu);
                    }
                };
            }

            return function getSingletone() {
                return (instance = (instance || new module_constructor()));
            };
        });