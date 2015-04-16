/**
 * 
 * @author user
 */
function commonPanel(demoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    function preparations() {
//        var demoComponent = new Label();
        form.modelForeground.text = demoComponent.foreground;
        form.modelBackground.text = demoComponent.background;
        form.tbVisibility.selected = !demoComponent.visible;
        
        form.txtToltip.text = demoComponent.toolTipText;
        form.tglEnabled.selected = demoComponent.selected;
        form.tglFocusable.selected = demoComponent.focusable;
//        form.tglOpaque.selected = !demoComponent.opaque;
    }

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

    model.requery(function () {
        // TODO : place your code here
    });

    form.tbVisibility.onActionPerformed = function (event) {
        if (event.source.selected) {
            form.tbVisibility.text = "Invisible";
            demoComponent.visible = false;
        } else {
            form.tbVisibility.text = "Visible";
            demoComponent.visible = true;
        }
    };


    form.tglEnabled.onActionPerformed = function (event) {
        if (event.source.selected) {
            form.tglEnabled.text = "Disabled";
            demoComponent.enabled = false;
        } else {
            form.tglEnabled.text = "Enabled";
            demoComponent.enabled = true;
        }
    };

    form.tglFocusable.onActionPerformed = function (event) {
        if (event.source.selected) {
            form.tglFocusable.text = "UnFocusable";
            demoComponent.focusable = false;
        } else {
            form.tglFocusable.text = "Focusable";
            demoComponent.focusable = true;
        }
    };

    form.tglOpaque.onActionPerformed = function (event) {
        if (event.source.selected) {
            form.tglOpaque.text = "Transparent";
            demoComponent.opaque = false;
        } else {
            form.tglOpaque.text = "Opaque";
            demoComponent.opaque = true;
        }
    };

    form.modelForeground.onSelect = function (event) {

        P.selectColor(function (result) {
            demoComponent.foreground = new P.Color(result);
            form.modelForeground.text = result;
        });
    };

    form.modelBackground.onSelect = function (event) {
        P.selectColor(function (result) {
            demoComponent.background = new P.Color(result);
            form.modelBackground.text = result;
        });

    };

    form.modelBackground.onActionPerformed = function (event) {
        demoComponent.background = new P.Color(form.modelBackground.text);
    };

    form.modelForeground.onActionPerformed = function (event) {
        demoComponent.foreground = new P.Color(form.modelForeground.text);
    };


    form.modelFont.onSelect = function (event) {
        P.require("FontSelectionDialog", function () {
            var nWindow = new FontSelectionDialog(demoComponent);
            nWindow.showModal(function (aFont) {
                demoComponent.font = aFont;
            });
        },
                function () {
                    alert("Проблема с доступом к модулю");
                }
        );
    };

    form.txtToltip.onKeyTyped = function (event) {
        demoComponent.toolTipText = form.txtToltip.text;
    };

    form.txtToltip.onActionPerformed = function (event) {
        demoComponent.toolTipText = form.txtToltip.text;
    };

    var uploadEnded = function (file) {
        form.btnCursor.icon = file;
    };

    form.btnCursor.onActionPerformed = function (event) {
        var uploading = new uploadingModule(uploadEnded, ".png,.ico,.gif,.jpg");
        uploading.execute();
    };
}
