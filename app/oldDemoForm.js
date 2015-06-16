/**
 * 
 * @author jskonst
 */
function oldDemoForm() {
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
    var demoContainer = {};


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
        P.invokeLater(function () {
            form.maximize();
        });
        if (P.agent !== P.HTML5) {
            iconFold = P.Icon.load('icons/arrow-090.png');
            form.grpBtnStandart.icon = iconFold;
            iconUnfold = P.Icon.load('icons/arrow-270.png');
        } else {
            P.Icon.load('icons/arrow-090.png', function (loadedIcon) {
                iconFold = loadedIcon;
                form.grpBtnStandart.icon = iconFold;
            }, function (e) {
                P.Logger.info(e);
            });
            P.Icon.load('icons/arrow-270.png', function (loadedIcon) {
                iconUnfold = loadedIcon;
                form.grpBtnModel.icon = iconUnfold;
                form.grpBtnContainers.icon = iconUnfold;
            }, function (e) {
                P.Logger.info(e);
            });
        }

        form.pnlStandardWidgets.folded = false;
        form.pnlModelWidgets.folded = false;
        form.pnlContainers.folded = false;
        fold(form.pnlModelWidgets, form.pnlModelContent);
        fold(form.pnlContainers, form.pnlContainersContent);


        form.grpBtnContainers.icon = iconUnfold;

        form.panel.clear();

    };

    function componentCreation(componentName, element) {
        if (!demoContainer[componentName]) {
            demoContainer[componentName] = element;
        }
        demoComponent = demoContainer[componentName];
        var customForm = new labelForm(demoComponent);
        redrawComponent(customForm);
    }

    form.tglLabel.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("label", new P.Label("demo"));
        }
    };
    form.tglButton.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("button", new P.Button("demo"));
        }
    };
    form.tglToggleButton.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("toggleButton", new P.ToggleButton("demo"));
        }
    };
    form.tglCheckBox.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("checkBox", new P.CheckBox("demo"));
        }
    };
    form.tglRadioButton.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("radioButton", new P.RadioButton("demo"));
        }
    };
    form.tglTextField.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("textField", new P.TextField("demo"));
        }
    };
    form.tglSlider.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("slider", new P.Slider(0, 100, 10));
        }
    };
    form.tglProgressBar.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("progressBar", new P.ProgressBar(0, 100));
        }
    };
    form.tglFormattedField.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("formattedField", new P.FormattedField("demo"));
        }
    };
    form.tglPasswordField.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("passwordField", new P.PasswordField("demo"));
        }
    };
    form.tglTextArea.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("textArea", new P.TextArea("demo"));
        }
    };
    form.tglHtmlArea.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("htmlArea", new P.HtmlArea("demo"));
        }
    };

    function redrawComponent(customForm) {
        form.panel.clear();
        form.pnlPlayground.clear(); //Clean demo components place
        form.pnlCustom.clear(); // cleaning custom place
        var commonPnl = new commonPanel(demoComponent);
        commonPnl.showOnPanel(form.panel);

        demoComponent.opaque = true;
        var hMargin = 10;
        var vMargin = 10;
//        var componentHeight = 100;
//        var top = form.pnlPlayground.height/2 -componentHeight/2;
        form.pnlPlayground.add(demoComponent, new P.Anchors(hMargin, null, hMargin, vMargin, null, vMargin));
//        demoComponent.toolTipText = form.txtToltip.text;
//        model.params.Foreground = demoComponent.foreground;
        demoComponent.font = new P.Font("Times New Roman", P.FontStyle.BOLD, 14);
//        model.params.FontText = 
        if (customForm) {
            customForm.showOnPanel(form.pnlCustom);
        }
    }

    form.grpBtnStandart.onActionPerformed = function (event) {
        foldUnfold(form.pnlStandardWidgets, form.pnlStandardContent, event);
    };
    form.grpBtnModel.onActionPerformed = function (event) {
        foldUnfold(form.pnlModelWidgets, form.pnlModelContent, event);
    };
    form.grpBtnContainers.onActionPerformed = function (event) {
        foldUnfold(form.pnlContainers, form.pnlContainersContent, event);
    };





    form.tglBoxPane.onActionPerformed = function (event) {
        if (event.source.selected) {
            form.panel.clear();
            var pane = new P.BoxPane(P.Orientation.VERTICAL);
            form.pnlPlayground.add(pane, new P.Anchors(2, null, 2, 2, null, 2));

            var containersPnl = new containersPanel(pane);
            containersPnl.showOnPanel(form.panel);
//            if (!demoContainer.htmlArea) {
//                demoContainer.htmlArea = new P.HtmlArea("demo");
//            }
//             demoComponent = demoContainer.htmlArea;
//            var customForm = new textFieldForm(demoComponent);
//            redrawComponent(customForm);
        }
    };


    function panelCreation(componentName, element) {
        form.pnlPlayground.clear();
        form.pnlCustom.clear();
        form.panel.clear();
        if (!demoContainer[componentName]) {
            demoContainer[componentName] = element;
        }
        demoComponent = demoContainer[componentName];
        demoComponent.showOnPanel(form.panel);

    }

    form.tglAnchorsPane.onActionPerformed = function (event) {
        if (event.source.selected) {
            panelCreation("AnchorsPanePanel", new anchorsPanePanel(form.pnlPlayground));
        }
    };


    form.tglBoxPane.onActionPerformed = function (event) {
        if (event.source.selected) {
            panelCreation("BoxPanePanel", new boxPanePanel(form.pnlPlayground));
        }
    };

    form.tglBorderPane.onActionPerformed = function (event) {
        if (event.source.selected) {
            panelCreation("BorderPanePanel", new borderPanePanel(form.pnlPlayground));
        }
    };

    form.tglAbsolutePane.onActionPerformed = function (event) {
        if (event.source.selected) {
            panelCreation("AbsolutePanePanel", new absolutePanePanel(form.pnlPlayground));
        }
    };

    form.tglGridPane.onActionPerformed = function (event) {
        if (event.source.selected) {
            panelCreation("GridPanePanel", new gridPanePanel(form.pnlPlayground));
        }
    };

    form.tglFlowPane.onActionPerformed = function (event) {
        if (event.source.selected) {
            panelCreation("FlowPanePanel", new flowPanePanel(form.pnlPlayground));
        }
    };


    form.tglCardPane.onActionPerformed = function (event) {
        if (event.source.selected) {
            panelCreation("CardPanePanel", new cardPanePanel(form.pnlPlayground));
        }
    };

    form.tglModelCheck.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("modelCheck", new P.ModelCheckBox("demo"));
        }
    };
    

    form.tglModelCombo.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("modelCombo", new P.ModelCombo());
        }
    };
    
    form.tglModelDate.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("modelDate", new P.ModelDate());
        }
    };
    
    form.tglModelGrid.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("modelGrid", new P.ModelGrid());
        }
    };
    
    form.tglModelSpin.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("modelSpin", new P.ModelSpin());
        }
    };

    form.tglModelTextArea.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("modelTextArea", new P.ModelTextArea());
        }
    };

    form.tglModelFormattedField.onActionPerformed = function (event) {
        if (event.source.selected) {
            componentCreation("modelFormattedField", new P.ModelFormattedField());
        }
    };




}
