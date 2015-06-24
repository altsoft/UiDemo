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

    var demosList = new DemosList();
    form.grdDemos.data = demosList.getMenu();
    form.grdDemos.column.field = "name";
    form.grdDemos.parentField = 'parentField';
    form.grdDemos.childrenField = 'childrenField';

    form.pnlPlayground.background = new P.Color(P.Color.GREEN);

    form.grdDemos.onItemSelected = function (event) {
        form.pnlCommon.clear();
        form.pnlPlayground.clear(); //Clean demo components place
        form.pnlCustom.clear();

        var widget = form.grdDemos.selected[0].getWidget();
        var customForm = form.grdDemos.selected[0].getCustomForm();
        var commonForm = form.grdDemos.selected[0].getCommonForm();
        var hint = form.grdDemos.selected[0].getHint();
//        form.lblTips.text = hint;
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
                common.showOnPanel(form.pnlCommon);
            });
        }

        var demoPane = form.grdDemos.selected[0].getDisplayForm();
        var hMargin = 10;
        var vMargin = 10;
        form.pnlPlayground.add(demoPane, new P.Anchors(hMargin, null, hMargin, vMargin, null, vMargin));
    };

    self.show = function () {
        try {
            form.view.showOn(document.getElementById('Main'));
        } catch (ex) {
            form.show();
            P.invokeLater(function () {
                form.maximize();
            });
        }
        form.pnlCommon.clear();
    };


}
