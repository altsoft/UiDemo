/**
 * 
 * @author user
 */
function CommonProperties(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var aFontSelectionDialog;
    var onComponentResize;

    var componentSize = {'width': 0,
        'height': 0};

    form.mdlWidth.data = componentSize;
    form.mdlHeight.data = componentSize;
    form.mdlWidth.field = 'width';
    form.mdlHeight.field = 'height';


    form.mdlPopup.displayField = "name";
    form.mdlPopup.displayList = demoMenuList;


    var cursors = [{'name': P.Cursor.DEFAULT},
        {'name': P.Cursor.CROSSHAIR},
        {'name': 'help'},
        {'name': P.Cursor.MOVE},
        {'name': 'pointer'},
        {'name': 'progress'},
        {'name': P.Cursor.TEXT},
        {'name': P.Cursor.WAIT},
        {'name': P.Cursor.N_RESIZE},
        {'name': P.Cursor.NE_RESIZE},
        {'name': P.Cursor.E_RESIZE},
        {'name': P.Cursor.SE_RESIZE},
        {'name': P.Cursor.S_RESIZE},
        {'name': P.Cursor.SW_RESIZE},
        {'name': P.Cursor.W_RESIZE},
        {'name': P.Cursor.NW_RESIZE}];

    form.mdlCursor.displayField = "name";
    form.mdlCursor.displayList = cursors;

    self.show = function () {
        form.show();
    };

    self.setDemoComponent = function (aComponent) {
        demoComponent = aComponent;
        initWidget();
    };

    function initWidget() {
        form.modelForeground.text = demoComponent.foreground ? '' + demoComponent.foreground : '';
        form.modelBackground.text = demoComponent.background ? '' + demoComponent.background : '';
        if (demoComponent.font) {
            form.modelFont.text = '' + demoComponent.font;
        }
        form.chVisible.selected = demoComponent.visible;
        form.txtToltip.text = demoComponent.toolTipText;
        form.chEnabled.selected = demoComponent.enabled;
        form.chFocusable.selected = demoComponent.focusable;
        form.chOpaque.selected = demoComponent.opaque;
        componentSize.width = demoComponent.width;
        componentSize.height = demoComponent.height;
//        form.mdlHeight.value = componentSize.height;

        if (demoComponent.componentPopupMenu) {
            for (var menu in demoMenuList) {
                if (demoMenuList[menu].menu === demoComponent.componentPopupMenu) {
                    form.mdlPopup.value = demoMenuList[menu];
                    break;
                }
            }
        } else {
            form.mdlPopup.value = null;
        }

    }

    self.showOnPanel = function (aPanel) {
        initWidget();
        aPanel.add(form.view);
    };

    form.modelForeground.onSelect = function (event) {
        if (demoComponent.foreground) {
            var previousColor = demoComponent.foreground;
        } else {
            var previousColor = '#526e4f';
        }
        P.selectColor(function (result) {
            demoComponent.foreground = new P.Color(result);
            form.modelForeground.text = result;
        }, previousColor);
    };

    form.modelBackground.onSelect = function (event) {
        if (demoComponent.background) {
            var previousColor = demoComponent.background;
        } else {
            var previousColor = '#bff1bc';
        }

        P.selectColor(function (result) {
            demoComponent.background = new P.Color(result);
            form.modelBackground.text = result;
        }, previousColor);

    };

    form.modelBackground.onValueChange = function (event) {
        if (form.modelBackground.text) {
            demoComponent.background = new P.Color(form.modelBackground.text);
            form.chOpaque.selected = true;
        } else {
            demoComponent.background = null;
        }
    };

    form.modelForeground.onValueChange = function (event) {
        if (form.modelBackground.text) {
            demoComponent.foreground = new P.Color(form.modelForeground.text);
        } else {
            demoComponent.foreground = null;
        }
    };

    form.modelFont.onSelect = function (event) {
        P.require("FontSelectionDialog", function () {
            aFontSelectionDialog = new FontSelectionDialog(demoComponent);
            aFontSelectionDialog.showModal(demoComponent, function (aFont) {
                form.modelFont.text = '' + aFont;
            });
        }, function (e) {
            P.Logger.severe(e);
        });
    };

    form.txtToltip.onKeyTyped = function (event) {
        demoComponent.toolTipText = form.txtToltip.text;
    };

    form.txtToltip.onActionPerformed = function (event) {
        demoComponent.toolTipText = form.txtToltip.text;
    };

    form.chVisible.onValueChange = function (event) {
        if (event.source.selected) {
            demoComponent.visible = true;
        } else {
            demoComponent.visible = false;
        }
    };

    form.chEnabled.onValueChange = function (event) {
        if (event.source.selected) {
            demoComponent.enabled = true;
        } else {
            demoComponent.enabled = false;
        }
    };

    form.chFocusable.onValueChange = function (event) {
        if (event.source.selected) {
            demoComponent.focusable = true;
        } else {
            demoComponent.focusable = false;
        }
    };

    form.chOpaque.onValueChange = function (event) {
        if (demoComponent instanceof P.Label) {
            if (event.source.selected) {
                demoComponent.opaque = true;
            } else {
                demoComponent.opaque = false;
            }
        }
    };

    form.ffBorder.onValueChange = function (event) {
        if (P.agent == P.HTML5) {
            demoComponent.element.style.border = form.ffBorder.value;
        }
    };

    form.mdlWidth.onValueChange = function (event) {
        demoComponent.width = componentSize.width;
    };

    form.mdlHeight.onValueChange = function (event) {
        demoComponent.height = componentSize.height;
        if (onComponentResize) {
            if (componentSize.height) {
                onComponentResize(componentSize.height);
            }
        }
    };

    self.setOnComponentResize = function (aCallback) {
        onComponentResize = aCallback;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };

    form.mdlPopup.onValueChange = function (event) {
        if (form.mdlPopup.value) {
            demoComponent.componentPopupMenu = form.mdlPopup.value.menu;
        } else {
            demoComponent.componentPopupMenu = null;
        }
    };

    form.mdlCursor.onValueChange = function (event) {
        if (form.mdlCursor.value) {
            demoComponent.cursor = form.mdlCursor.value.name;
        } else {
            demoComponent.cursor = null;
        }
    };

    form.mdlCursor.onSelect = function (event) {
        var fileFilter = ".png,.ico,.gif,.jpg";
        P.selectFile(function (aFile) {
            var loading;
            if (loading == null) {
                if (aFile != null) {
                    loading = P.Resource.upload(aFile, aFile.name,
                            function (aUrl) {
                                //We have uploaded only one file, but the system
                                //return's us a array of urls
                                loading = null;
                                P.Icon.load(aUrl[0], function (uploadedFile) {
                                    demoComponent.cursor = 'url(' + uploadedFile.b + '), auto';
                                    var fileCursor = {'name': demoComponent.cursor};
                                    form.mdlCursor.value = fileCursor;
                                }, function (e) {
                                    P.Logger.info(e);
                                });
                            },
                            function (aEvent) {
                                P.Logger.severe(aEvent);
                            },
                            function (aError) {
                                loading = null;
                                alert("Uploading is aborted with message: " + aError);
                            }
                    );
                } else
                    alert("Select a file please...");
            } else
                alert("Wait please while current upload ends!");
        }, fileFilter);
    };



}
