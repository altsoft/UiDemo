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
    self.show = function() {
        form.show();
        (function() {
            form.maximize();
        }).invokeLater();
        var iconFold= P.Icon.load("icons/arrow-090.png");
        var iconUnfold= P.Icon.load("icons/arrow-270.png");
        exPanelStandard = new ExpandedPanel(form.pnlStandardWidgets);
        exPanelStandard.setIconsFoldedUnfolded(iconFold,iconUnfold);
        exPanelModel = new ExpandedPanel(form.pnlModelWidgets);
        exPanelModel.setIconsFoldedUnfolded(iconFold,iconUnfold);
        exPanelContainer = new ExpandedPanel(form.pnlContainers);
        exPanelContainer.setIconsFoldedUnfolded(iconFold,iconUnfold);
        cmplPanel = new ComplexPanel(form.pnlTopFoldingPanel,[exPanelStandard,exPanelModel,exPanelContainer]);    
        cmplPanel.setFoldingAction(cmplPanel.FoldingComplex);
        
    };

//    function componentsList() {
//        var rbButtonGroup = new ButtonGroup();
//        rbButtonGroup.add(self.rbLabel);
//        rbButtonGroup.add(self.rbButton);
//        rbButtonGroup.add(self.rbToggleButton);
//        self.rbLabel.onActionPerformed = function(event) {
//            self.demoComponent = new Label("demo");
//            redrawComponent();
//        };
//        self.rbButton.onActionPerformed = function(event) {
//            self.demoComponent = new Button("demo");
//            redrawComponent();
//        };
//    }
//
//    self.btnLabel.onActionPerformed = function(event) {
//        self.demoComponent = new Label("demo");
//        redrawComponent();
//    };
//    self.btnButton.onActionPerformed = function(event) {
//        self.demoComponent = new Button("demo");
//        redrawComponent();
//    };
//    self.btnToggleButton.onActionPerformed = function(event) {
//        self.demoComponent = new ToggleButton("demo");
//        redrawComponent();
//    };
//    self.btnCheckBox.onActionPerformed = function(event) {
//        self.demoComponent = new CheckBox("demo");
//        redrawComponent();
//    };
//    self.btnRadioButton.onActionPerformed = function(event) {
//        self.demoComponent = new RadioButton("demo");
//        redrawComponent();
//    };
//    self.btnTextField.onActionPerformed = function(event) {
//        self.demoComponent = new TextField("demo");
//        redrawComponent();
//    };
//    self.btnSlider.onActionPerformed = function(event) {
//        self.demoComponent = new Slider(0, 100, 10);
//        redrawComponent();
//    };
//    self.btnProgressBar.onActionPerformed = function(event) {
//        self.demoComponent = new ProgressBar(0, 100);
//        redrawComponent();
//    };
//    self.btnFormattedField.onActionPerformed = function(event) {
//        self.demoComponent = new FormattedField("demo");
//        redrawComponent();
//    };
//    self.btnPasswordField.onActionPerformed = function(event) {
//        self.demoComponent = new PasswordField("demo");
//        redrawComponent();
//    };
//    self.btnTextArea.onActionPerformed = function(event) {
//        self.demoComponent = new TextArea("demo");
//        redrawComponent();
//    };
//    self.btnHtmlArea.onActionPerformed = function(event) {
//        self.demoComponent = new HtmlArea("demo");
//        redrawComponent();
//    };
//
//    self.tbVisibility.onActionPerformed = function(event) {
//        if (self.tbVisibility.selected) {
//            self.tbVisibility.text = "Invisible";
//            self.demoComponent.visible = false;
//        } else {
//            self.tbVisibility.text = "Visible";
//            self.demoComponent.visible = true;
//        }
//    };


//    function redrawComponent() {
//        self.pnlDemo.clear();
//        self.pnlDemo.add(self.demoComponent, new Anchors(10, null, 10, 10, null, 20));
//        self.txtText.text = self.demoComponent.text;
//    }
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
    form.grpBtnStandart.onActionPerformed = function(event) {
        cmplPanel.setUnfolded(0);
        
    };
    form.grpBtnModel.onActionPerformed = function(event) {
        cmplPanel.setUnfolded(1);
         
//        form.grpBtnModel.icon = myIcon;
    };
    form.grpBtnContainers.onActionPerformed = function(event) {
        cmplPanel.setUnfolded(2);
        
//        console.log("Folding 3");
//        if (clickNum % 2 == 0) {
//            exPanelContainer.fold();
//        } else {
//            exPanelContainer.unFold();
//        }
//        clickNum += 1;
//        P.Logger.info(clickNum);
    };
}
