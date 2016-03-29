/**
 * 
 * @author user
 */


define('MenuCommonProperties', ['forms', 'ui', 'logger'], function (Forms, Ui, Logger, ModuleName) {
    function module_constructor(aDemoComponent) {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var demoComponent = aDemoComponent;
        var aFontSelectionDialog;
        var onComponentResize;

        self.show = function () {
            form.show();
        };

        self.setDemoComponent = function (aComponent) {
            demoComponent = aComponent;
            initWidget();
        };

        function initWidget() {
            form.modelForeground.text = demoComponent.foreground;
            form.modelBackground.text = demoComponent.background;
            if (demoComponent.font) {
                form.modelFont.text = demoComponent.font.family;
            }
            form.chVisible.selected = demoComponent.visible;
            form.txtToltip.text = demoComponent.toolTipText;
            form.chEnabled.selected = demoComponent.selected;
            form.chFocusable.selected = demoComponent.focusable;
            form.chOpaque.selected = demoComponent.opaque;

        }

        self.showOnPanel = function (aPanel) {
            initWidget();
            aPanel.add(form.view);
        };

        form.modelForeground.onSelect = function (event) {
            if (demoComponent.foreground) {
                var previousColor = demoComponent.foreground;
            } else {
                var previousColor = Ui.Color.WHITE;
            }
            P.selectColor(function (result) {
                demoComponent.foreground = new Ui.Color(result);
                form.modelForeground.text = result;
            }, previousColor);
        };

        form.modelBackground.onSelect = function (event) {
            if (demoComponent.background) {
                var previousColor = demoComponent.background;
            } else {
                var previousColor = Ui.Color.WHITE;
            }

            P.selectColor(function (result) {
                demoComponent.background = new Ui.Color(result);
                form.modelBackground.text = result;
            }, previousColor);

        };

        form.modelBackground.onActionPerformed = function (event) {
            demoComponent.background = new Ui.Color(form.modelBackground.text);
        };

        form.modelForeground.onActionPerformed = function (event) {
            demoComponent.foreground = new Ui.Color(form.modelForeground.text);
        };

        form.modelFont.onSelect = function (event) {
            if (!aFontSelectionDialog) {
                P.require("FontSelectionDialog", function () {
                    aFontSelectionDialog = new FontSelectionDialog(demoComponent);
                    aFontSelectionDialog.showModal(demoComponent, function (aFont) {
                        form.modelFont.text = aFont.family;
                    });
                },
                        function () {
                            alert("Module access problem");
                        }
                );
            } else {
                aFontSelectionDialog.showModal(demoComponent, function (aFont) {
                    form.modelFont.text = aFont.family;
                });
            }
        };

        form.txtToltip.onKeyTyped = function (event) {
            demoComponent.toolTipText = form.txtToltip.text;
        };

        form.txtToltip.onActionPerformed = function (event) {
            demoComponent.toolTipText = form.txtToltip.text;
        };

        form.btnCursor.onActionPerformed = function (event) {
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
                                        form.btnCursor.icon = uploadedFile;
                                        demoComponent.cursor = uploadedFile;
                                    }, function (e) {
                                        Logger.info(e);
                                    });
                                },
                                function (aEvent) {
                                    Logger.severe(aEvent);
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

        form.chVisible.onActionPerformed = function (event) {
            if (event.source.selected) {
                demoComponent.visible = true;
            } else {
                demoComponent.visible = false;
            }
        };

        form.chEnabled.onActionPerformed = function (event) {
            if (event.source.selected) {
                demoComponent.enabled = false;
            } else {
                demoComponent.enabled = true;
            }
        };

        form.chFocusable.onActionPerformed = function (event) {
            if (event.source.selected) {
                demoComponent.focusable = true;
            } else {
                demoComponent.focusable = false;
            }
        };

        form.chOpaque.onActionPerformed = function (event) {
            if (event.source.selected) {
                demoComponent.opaque = true;
            } else {
                demoComponent.opaque = false;
            }
        };

        self.setOnComponentResize = function (aCallback) {
            onComponentResize = aCallback;
        };

        self.getFormHeight = function () {
            return form.view.height;
        };

    }
    return module_constructor;
});
