/**
 * 
 * @author user
 */
function CommonPanel(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    self.show = function () {
        form.show();
    };

    self.setDemoComponent = function (aComponent) {
        demoComponent = aComponent;
    };

    function preparations() {
        form.modelForeground.text = demoComponent.foreground;
        form.modelBackground.text = demoComponent.background;
        form.chVisible.selected = demoComponent.visible;
        form.txtToltip.text = demoComponent.toolTipText;
        form.chEnabled.selected = demoComponent.selected;
        form.chFocusable.selected = demoComponent.focusable;
    }

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

    model.requery(function () {
        // TODO : place your code here
    });

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
}
