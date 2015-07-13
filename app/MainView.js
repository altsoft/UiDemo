/**
 * 
 * @author jskonst
 */

var global = this;
function MainView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var lbLoad = new P.Label();
    lbLoad.width = 200;
    lbLoad.height = 200;
    P.Icon.load('icons/loading5.gif', function (data) {
        lbLoad.icon = data;
        lbLoad.text = null;
    });

    var demosList = new DemosList();
    form.grdDemos.data = demosList.getMenu();
    form.grdDemos.column.field = "name";
    form.grdDemos.parentField = 'parentField';
    form.grdDemos.childrenField = 'childrenField';
    form.pnlDemoViews.show('pnlTextInfo');

    function showDemo(aCustom, aWidget, aView) {
        var hMargin = 10;
        var vMargin = 10;
        aCustom.showOnPanel(form.pnlCustom);
        form.pnlSource.element.innerHTML = '<pre class="brush: js">' + aCustom.constructor.toString() + '</pre>';
        SyntaxHighlighter.highlight();
        var sCode = document.getElementsByClassName("syntaxhighlighter");
        form.pnlSource.height = sCode[0].offsetHeight;
        form.pnlPlayground.add(aView, new P.Anchors(hMargin, aView.width, hMargin, vMargin, aView.height, null));
        form.pnlPlayground.height = aView.height + vMargin * 2;
        form.pnlPlayground.remove(lbLoad);
    }


    form.grdDemos.onItemSelected = function (event) {
        form.pnlCommon.clear();
        form.pnlPlayground.clear(); //Clean demo components place
        form.pnlCustom.clear();

        var w = Math.round(form.pnlPlayground.width / 2 - 100);
        var h = 10;
        form.pnlPlayground.height = lbLoad.height + 20;
        form.pnlPlayground.add(lbLoad, new P.Anchors(w, 200, w, h, 200, h))


        var componentForm = form.grdDemos.selected[0].getCustomForm(); //form of custom proprties
        var commonForm = form.grdDemos.selected[0].getCommonForm(); //form of commom properties

        var hint = form.grdDemos.selected[0].getHint();
        if (form.grdDemos.selected[0].parentField) {
            form.pnlDemoViews.show('pnlDemonstration');
        } else {
            form.pnlDemoViews.show('pnlTextInfo');
            form.lblInfo.text = form.grdDemos.selected[0].getInformation();
        }

        form.lblShortInfo.text = hint;


        if (form.grdDemos.selected[0].parentField) {
            if (form.grdDemos.selected[0].createdForm) {
                var custom = form.grdDemos.selected[0].createdForm;
                var widget = form.grdDemos.selected[0].widget;
                var demoForm = form.grdDemos.selected[0].demoForm;
                showDemo(custom, widget, demoForm);
                if (form.grdDemos.selected[0].createdCommonForm) {
                    form.grdDemos.selected[0].createdCommonForm.showOnPanel(form.pnlCommon);
                }
            } else {
                P.require(componentForm, function () {
                    var custom = new global[componentForm]();
                    var widget = custom.getDemoComponent();
                    var demoForm = custom.getViewComponent();
                    showDemo(custom, widget, demoForm);
                    form.grdDemos.selected[0].createdForm = custom;
                    form.grdDemos.selected[0].widget = widget;
                    form.grdDemos.selected[0].demoForm = demoForm;
                    if (form.grdDemos.selected[0].createdCommonForm) {
                        form.grdDemos.selected[0].createdCommonForm(form.pnlCommon);
                    } else {
                        if (commonForm) {
                            P.require(commonForm, function () {
                                var common = new global[commonForm](widget);
                                common.showOnPanel(form.pnlCommon);
                                form.grdDemos.selected[0].createdCommonForm = common;
                            });
                        } else {
                            custom.showOnPanel(form.pnlCommon);
                            form.grdDemos.selected[0].createdCommonForm = custom;
                        }
                    }
                   
                });
            }
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
    }
    ;
}
