/**
 * 
 * @author jskonst
 */

var global = this;
function MainView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var exPanelStandard;
    var exPanelModel;
    var exPanelContainer;
    var cmplPanel;

    var arr = new GridMenuModule();
    form.modelMenu.data = arr.getMenu();
    form.modelMenu.column.field = "name";
    form.modelMenu.parentField = 'parentField';
    form.modelMenu.childrenField = 'childrenField';
    form.pnlPlayground.background = new P.Color(P.Color.GREEN);
    
    form.modelMenu.onItemSelected = function(event) {
        form.modelMenu.onMouseClicked();
    };

    
    form.modelMenu.onMouseClicked = function (event) {
        form.panel.clear();
        form.pnlPlayground.clear(); //Clean demo components place
        form.pnlCustom.clear();

        var widget = form.modelMenu.selected[0].getWidget();
        var customForm = form.modelMenu.selected[0].getCustomForm();
        var commonForm = form.modelMenu.selected[0].getCommonForm();
        var hint = form.modelMenu.selected[0].getHint();
        form.lblTips.text = hint;
        if (customForm) {
            P.require(customForm, function () {
                var custom = new global[customForm](widget);
                custom.showOnPanel(form.pnlCustom);
            });
        }
        if (commonForm) {
            P.require(commonForm, function () {
                widget.opaque = true;
                var common = new global[commonForm](widget);
                common.showOnPanel(form.panel);
            });
        }
        
        var demoPane = form.modelMenu.selected[0].getDisplayForm();

//        if (customForm) {
//            customForm.showOnPanel(form.pnlCustom);
//        }

        var hMargin = 10;
        var vMargin = 10;

        form.pnlPlayground.add(demoPane, new P.Anchors(hMargin, null, hMargin, vMargin, null, vMargin));
//        if (demoPane) {
////            form.pnlPlayground
//            demoPane.showOnPanel(form.pnlPlayground);
//        }

    };
    
    
    self.show = function () {
        form.show();
        P.invokeLater(function () {
            form.maximize();
        });
        form.panel.clear();
    };


}
