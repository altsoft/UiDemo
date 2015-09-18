/**
 * 
 * @author jskonst
 */
function LabelView(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    if (aDemoComponent) {
        var demoComponent = aDemoComponent;
    } else {
        var demoComponent = new P.Label("Label");
        demoComponent.height = 27;
        demoComponent.width = 100;
    }
    var iconGap = {'value': 0};
    form.mdlGap.data = iconGap;
    form.mdlGap.field = 'value';
    var horizontalText;
    var verticalText;
    var verticalAlign;

    var bgrpHAlign = new P.ButtonGroup();
    bgrpHAlign.add(form.tglHLeftAlign);
    bgrpHAlign.add(form.tglHCenterAlign);
    bgrpHAlign.add(form.tglHRightAlign);

    var brgpHText = new P.ButtonGroup();
    brgpHText.add(form.tglHLeft);
    brgpHText.add(form.tglHCenter);
    brgpHText.add(form.tglHRight);

    var brgpVAlign = new P.ButtonGroup();
    brgpVAlign.add(form.tglVTopAlign);
    brgpVAlign.add(form.tglVCenterAlign);
    brgpVAlign.add(form.tglVBottomAlign);

    var brgpVText = new P.ButtonGroup();
    brgpVText.add(form.tglVTop);
    brgpVText.add(form.tglVCenter);
    brgpVText.add(form.tglVBottom);

    self.getDemoComponent = function () {
        return demoComponent;
    };

    self.getViewComponent = function () {
        return demoComponent;
    };

    function changeAvaliability(enable) {
        form.tglHLeft.enabled = enable;
        form.tglHCenter.enabled = enable;
        form.tglHRight.enabled = enable;
        form.tglVTop.enabled = enable;
        form.tglVCenter.enabled = enable;
        form.tglVBottom.enabled = enable;
        form.mdlGap.enabled = enable;
    }

    function changeHint(enable) {
        if (enable) {
            form.tglHLeft.toolTipText = "";
            form.tglHCenter.toolTipText = "";
            form.tglHRight.toolTipText = "";
            form.tglVTop.toolTipText = "";
            form.tglVCenter.toolTipText = "";
            form.tglVBottom.toolTipText = "";
            form.mdlGap.toolTipText = "";
        } else {
            form.tglHLeft.toolTipText = "Select icon to enable this element";
            form.tglHCenter.toolTipText = "Select icon to enable this element";
            form.tglHRight.toolTipText = "Select icon to enable this element";
            form.tglVTop.toolTipText = "Select icon to enable this element";
            form.tglVCenter.toolTipText = "Select icon to enable this element";
            form.tglVBottom.toolTipText = "Select icon to enable this element";
            form.mdlGap.toolTipText = "Select icon to enable this element";
        }
    }

    function initComponents() {
        form.txtText.text = demoComponent.text;
        iconGap.value = demoComponent.iconTextGap;
        form.btnIcon.icon = demoComponent.icon;
        if (demoComponent.icon) {
            changeAvaliability(true);
            changeHint(true);
        } else {
            changeAvaliability(false);
            changeHint(false);
        }
        switch (demoComponent.horizontalAlignment) {
            case P.HorizontalPosition.LEFT:
            {
                form.tglHLeftAlign.selected = true;
                break;
            }
            case P.HorizontalPosition.RIGHT:
            {
                form.tglHRightAlign.selected = true;
                break;
            }
            case P.HorizontalPosition.CENTER:
            {
                form.tglHCenterAlign.selected = true;
                break;
            }
        }

        switch (demoComponent.horizontalTextPosition) {
            case P.HorizontalPosition.LEFT:
            {
                form.tglHLeft.selected = true;
                break;
            }
            case P.HorizontalPosition.RIGHT:
            {
                form.tglHRight.selected = true;
                break;
            }
            case P.HorizontalPosition.CENTER:
            {
                form.tglHCenter.selected = true;
                break;
            }
        }

        switch (demoComponent.verticalAlignment) {
            case P.VerticalPosition.TOP:
            {
                form.tglVTopAlign.selected = true;
                break;
            }
            case P.VerticalPosition.CENTER:
            {
                form.tglVCenterAlign.selected = true;
                break;
            }
            case P.VerticalPosition.BOTTOM:
            {
                form.tglVBottomAlign.selected = true;
                break;
            }
        }
        switch (demoComponent.verticalTextPosition) {
            case P.VerticalPosition.TOP:
            {
                form.tglVTop.selected = true;
                break;
            }
            case P.VerticalPosition.CENTER:
            {
                form.tglVCenter.selected = true;
                break;
            }
            case P.VerticalPosition.BOTTOM:
            {
                form.tglVBottom.selected = true;
                break;
            }
        }
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initComponents();
        aPanel.add(form.view);
    };

    form.txtText.onActionPerformed = function () {
        demoComponent.text = form.txtText.text;
    };

    form.mdlGap.onValueChange = function (event) {
        demoComponent.iconTextGap = iconGap.value;
    };


    form.btnIcon.onActionPerformed = function (event) {
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
                                    form.btnIcon.icon = uploadedFile;
                                    demoComponent.icon = uploadedFile;
                                    changeAvaliability(true);
                                    changeHint(true);
                                }, function (e) {
                                    P.Logger.info(e);
                                });
                            },
                            function (aEvent) {
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


    form.tglHLeftAlign.onActionPerformed = function (event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.LEFT;
    };

    form.tglHRightAlign.onActionPerformed = function (event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.RIGHT;
    };

    form.tglHCenterAlign.onActionPerformed = function (event) {
        demoComponent.horizontalAlignment = P.HorizontalPosition.CENTER;
    };

    form.tglHLeft.onActionPerformed = function (event) {
        demoComponent.horizontalTextPosition = P.HorizontalPosition.LEFT;
    };

    form.tglHCenter.onActionPerformed = function (event) {
        demoComponent.horizontalTextPosition = P.HorizontalPosition.CENTER;

    };
    form.tglHRight.onActionPerformed = function (event) {
        demoComponent.horizontalTextPosition = P.HorizontalPosition.RIGHT;
    };

    form.tglVTopAlign.onActionPerformed = function (event) {
        demoComponent.verticalAlignment = P.VerticalPosition.TOP;
    };

    form.tglVCenterAlign.onActionPerformed = function (event) {
        demoComponent.verticalAlignment = P.VerticalPosition.CENTER;
    };

    form.tglVBottomAlign.onActionPerformed = function (event) {
        demoComponent.verticalAlignment = P.VerticalPosition.BOTTOM;
    };

    form.tglVTop.onActionPerformed = function (event) {
        demoComponent.verticalTextPosition = P.VerticalPosition.TOP;
    };

    form.tglVCenter.onActionPerformed = function (event) {
        demoComponent.verticalTextPosition = P.VerticalPosition.CENTER;
    };

    form.tglVBottom.onActionPerformed = function (event) {
        demoComponent.verticalTextPosition = P.VerticalPosition.BOTTOM;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
