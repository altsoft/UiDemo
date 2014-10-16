/**
 * 
 * @author jskonst
 */
function demoForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var clickNum = 0;
    var exPanelStandard;
    var exPanelModel;
    var exPanelContainer;
    var cmplPanel;
    var demoComponent = null;
    var iconFold;
    var iconUnfold;



    function fold(aItemPanel, aContent) {
        aItemPanel.folded = true;
        aItemPanel.height = aContent.top;
    }
    function foldUnfold(aItemPanel, aContent, aEvent) {
        if (aItemPanel.folded) {
            aItemPanel.folded = false;
            aItemPanel.height = aContent.top + aContent.height;
            aEvent.source.icon = iconFold;
        } else {
            fold(aItemPanel, aContent);
            aEvent.source.icon = iconUnfold;
        }
    }


    self.show = function () {
        form.show();
        (function () {
//            form.maximize();
        }).invokeLater();
        iconFold = P.Icon.load("icons/arrow-090.png");
        iconUnfold = P.Icon.load("icons/arrow-270.png");
        form.pnlStandardWidgets.folded = false;
        form.pnlModelWidgets.folded = false;
        form.pnlContainers.folded = false;
        fold(form.pnlModelWidgets, form.pnlModelContent);
        fold(form.pnlContainers, form.pnlContainersContent);
        form.grpBtnStandart.icon = iconFold;
        form.grpBtnModel.icon = iconUnfold;
        form.grpBtnContainers.icon = iconUnfold;
//        form.tglLabel.selected = true;
//        demoComponent = new P.Label("demo");
//        redrawComponent();

    };

    form.tglLabel.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.Label("demo");
            var custumForm = new textFieldForm();
            redrawComponent(custumForm);
            
        }
    };
    form.tglButton.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.Button("demo");
            redrawComponent();

        }
    };
    form.tglToggleButton.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.ToggleButton("demo");
            redrawComponent();
        }
    };
    form.tglCheckBox.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.CheckBox("demo");
            redrawComponent();
        }
    };
    form.tglRadioButton.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.RadioButton("demo");
            redrawComponent();
        }
    };
    form.tglTextField.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.TextField("demo");
            redrawComponent();
        }
    };
    form.tglSlider.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.Slider(0, 100, 10);
            redrawComponent();
        }
    };
    form.tglProgressBar.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.ProgressBar(0, 100);
            redrawComponent();
        }
    };
    form.tglFormattedField.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.FormattedField("demo");
            redrawComponent();
        }
    };
    form.tglPasswordField.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.PasswordField("demo");
            redrawComponent();
        }
    };
    form.tglTextArea.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.TextArea("demo");
            redrawComponent();
        }
    };
    form.tglHtmlArea.onActionPerformed = function (event) {
        if (event.source.selected) {
            demoComponent = new P.HtmlArea("demo");
            redrawComponent();
        }
    };

    form.tbVisibility.onActionPerformed = function (event) {
        if (event.source.selected) {
            form.tbVisibility.text = "Invisible";
            demoComponent.visible = false;
        } else {
            form.tbVisibility.text = "Visible";
            demoComponent.visible = true;
        }
    };


    function redrawComponent(customForm) {
        form.pnlPlayground.clear();
        var hMargin = 10;
        var componentHeight = 20;
        var top = form.pnlPlayground.height/2 -componentHeight/2;
        form.pnlPlayground.add(demoComponent, new P.Anchors(hMargin, null, hMargin, top, componentHeight, null));
        form.txtToltip.text = demoComponent.toolTipText;
        model.params.Background = demoComponent.background;
        model.params.Foreground = demoComponent.foreground;
//        demoComponent.font = new P.Font("Times New Roman", P.FontStyle.BOLD, 14);
//        model.params.FontText = demoComponent.font.family;
        if (customForm) {
            form.pnlCustom.add(customForm.getView());
        }
    }

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
            form.tglOpaque.text = "Opaque";
            demoComponent.opaque = false;
        } else {
            form.tglOpaque.text = "Solid";
            demoComponent.opaque = true;
        }
    };

    form.popupMenu.onActionPerformed = function (event) {
        console.log("hello")
    };



//

//    form.onWindowOpened = function() {
//
//        borders();
//        self.txtText.text = "test";//self.demoComponent.text;
//        var myIcon = Icon.load("icons/arrow-090.png");
//        self.demoComponent = new Label("text, icon, iconTextGap", myIcon, 50);
//          Logger.info("hello");
////        redrawComponent();
////        componentsList();
////        visibility();
//
//    };    


    form.grpBtnStandart.onActionPerformed = function (event) {
        foldUnfold(form.pnlStandardWidgets, form.pnlStandardContent, event);
    };
    form.grpBtnModel.onActionPerformed = function (event) {
        foldUnfold(form.pnlModelWidgets, form.pnlModelContent, event);
    };
    form.grpBtnContainers.onActionPerformed = function (event) {
        foldUnfold(form.pnlContainers, form.pnlContainersContent, event);
    };

//    form.modelForeground.onSelect = function(event) {
//        
//        P.selectColor(function(result) {
//            demoComponent.foreground = new P.Color(result);
//            model.params.Foreground = result;
//
//        });
//    };

//    form.modelBackground.onSelect = function(event) {
//        console.log(model.params.Background);
//        P.selectColor(function(result) {
//            demoComponent.background = new P.Color(result);
//            model.params.Background = result;
//        });
//        
//    };

//    form.modelFont.onSelect = function(event) {
//        P.require("FontSelectionDialog", function(){
//            var nWindow = new FontSelectionDialog();
//            nWindow.showModal(function(aFont){
//                demoComponent.font = aFont;
//            });
//        }, 
//        function(){
//            alert("Проблема с доступом к модулю");
//        }
//        );
//    };

    form.txtToltip.onKeyTyped = function (event) {
        demoComponent.toolTipText = form.txtToltip.text;
    };
}
