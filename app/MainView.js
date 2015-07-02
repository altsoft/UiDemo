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
    form.pnlDemoViews.show('pnlTextInfo');

    form.grdDemos.onItemSelected = function (event) {
        form.pnlCommon.clear();
        form.pnlPlayground.clear(); //Clean demo components place
        form.pnlCustom.clear();

        var widget = form.grdDemos.selected[0].getWidget(); //widget to play with
        var customForm = form.grdDemos.selected[0].getCustomForm(); //form of custom proprties
        var commonForm = form.grdDemos.selected[0].getCommonForm(); //form of commom properties
        var hint = form.grdDemos.selected[0].getHint();


        if (form.grdDemos.selected[0].parentField) {
            form.pnlDemoViews.show('pnlDemonstration');
        } else {
            form.pnlDemoViews.show('pnlTextInfo');
            form.lblInfo.text = form.grdDemos.selected[0].getInformation();
        }

        form.lblShortInfo.text = hint;

        if (customForm) {
            P.require(customForm, function () {
                var custom = new global[customForm](widget);
                custom.showOnPanel(form.pnlCustom);
            });
        } else {

        }
        if (commonForm) {
            P.require(commonForm, function () {
//                widget.opaque = true;
                var common = new global[commonForm](widget);
                common.showOnPanel(form.pnlCommon);
            });
        }

        var hMargin = 10;
        var vMargin = 10;
        if (widget) {
            form.pnlPlayground.add(widget, new P.Anchors(hMargin, null, hMargin, vMargin, null, vMargin));
        }
    };

    self.show = function () {
        try {
            form.view.showOn(document.getElementById('Main'));
            P.invokeLater(function () {
                form.grdDemos.select(demosList.getMenu()[0]);
            });
        } catch (ex) {
            form.show();
            P.invokeLater(function () {
                form.maximize();
            });
        }
//        form.pnlCommon.clear();
    };


}
