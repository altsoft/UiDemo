/**
 * 
 * @author jskonst
 */

var global = this;
var demoMenuList = [];
var buttonGroups = [];
function MainView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var lbLoad = new P.Label();
    lbLoad.width = 200;
    lbLoad.height = 200;

    var hMargin = 10;
    var vMargin = 10;
    var tabTitleHeight = 50;
    P.Icon.load('icons/loading5.gif', function (data) {
        lbLoad.icon = data;
        lbLoad.text = null;
    });

    var icnExpanded;
    P.Icon.load('icons/expanded.png', function (data) {
        icnExpanded = data;
    });

    var icnCollapsed;
    P.Icon.load('icons/collapsed.png', function (data) {
        icnCollapsed = data;
    });

    var icnFolder;
    P.Icon.load('icons/folder.png', function (data) {
        icnFolder = data;
    });

    var icnFolderOpen;
    P.Icon.load('icons/open.png', function (data) {
        icnFolderOpen = data;
    });

    var demosList = new DemosList();
    form.grdDemos.data = demosList.getMenu();
    form.grdDemos.column.field = "name";
    form.grdDemos.parentField = 'parent';
    form.grdDemos.childrenField = 'children';
    form.pnlDemoViews.show('pnlTextInfo');
    form.grdDemos.headerVisible = false;
    form.grdDemos.showHorizontalLines = false;
    form.grdDemos.showVerticalLines = false;
    form.grdDemos.showOddRowsInOtherColor = false;

    if (P.agent == P.HTML5) {
        form.lblViewSource.cursor = 'pointer';
        form.lblCustomSource.cursor = 'pointer';
    }
    form.grdDemos.column.onRender = function (event) {
        if (event.object.icon) {
            event.cell.icon = event.object.icon;
        } else {
            event.cell.icon = icnFolder;
        }
    };

    form.grdDemos.onMouseClicked = function (event) {
        if (event.clickCount > 1) {

        }
    };

    function showDemo(aCustom, aWidget, aView) {
        aCustom.showOnPanel(form.pnlCustomProperties);
        form.pnlCustomSource.element.innerHTML = '<pre class="brush: js">' + aCustom.constructor.toString() + '</pre>';
        form.pnlPlayground.add(aView, new P.Anchors(hMargin, aView.width, hMargin, vMargin, aView.height, null));
        form.pnlPlayground.height = aView.height + vMargin * 2;
        form.pnlPlayground.remove(lbLoad);
    }

    function onTabChanged() {
        SyntaxHighlighter.highlight();
        switch (form.tpSections.selectedIndex) {
            case 0:
            {
                P.invokeLater(function () {
                    form.tpSections.height = form.pnlCreation.element.children[0].offsetHeight + tabTitleHeight;
                });
                break;
            }
            case 1:
            {
                P.invokeLater(function () {
                    if (form.grdDemos.selected[0].createdCustomForm.unfolded) {
                        form.lblCustomSource.icon = icnExpanded;
                        form.pnlCustomSource.height = form.pnlCustomSource.element.children[0].offsetHeight;
                    } else {
                        form.lblCustomSource.icon = icnCollapsed;
                        form.pnlCustomSource.height = 0;
                    }
                    form.pnlCustomProperties.height = form.grdDemos.selected[0].createdCustomForm.getFormHeight();
                    form.pnlCustomize.height = form.pnlCustomProperties.height + form.lblCustomSource.height + form.pnlCustomSource.height;
                    form.tpSections.height = form.pnlCustomize.height + tabTitleHeight;
                });
                break;
            }
            case 2:
            {
                P.invokeLater(function () {
                    if (form.grdDemos.selected[0].createdViewForm.unfolded) {
                        form.pnlViewSourceCode.height = form.pnlViewSourceCode.element.children[0].offsetHeight;
                        form.lblViewSource.icon = icnExpanded;
                    } else {
                        form.lblViewSource.icon = icnCollapsed;
                        form.pnlViewSourceCode.height = 0;
                    }
                    form.pnlViewProperties.height = form.grdDemos.selected[0].createdViewForm.getFormHeight();
                    form.pnlView.height = form.pnlViewProperties.height + form.lblViewSource.height + form.pnlViewSourceCode.height;
                    form.tpSections.height = form.pnlView.height + tabTitleHeight;
                });
                break;
            }
        }
    }

    var onComponentResize = function (height) {
        form.pnlPlayground.height = form.grdDemos.selected[0].demoForm.height + hMargin * 2;
    };

    form.grdDemos.onItemSelected = function (event) {
        form.pnlViewProperties.clear();
        form.pnlPlayground.clear(); //Clean demo components place
        form.pnlCustomProperties.clear();

        var w = Math.round(form.pnlPlayground.width / 2 - 100);

        form.pnlPlayground.height = lbLoad.height + 2 * hMargin;
        form.pnlPlayground.add(lbLoad, new P.Anchors(w, 200, w, hMargin, 200, hMargin))
        form.pnlCreation.clear();

        if (form.grdDemos.selected[0].creationCode) {
            form.pnlCreation.element.innerHTML = '<pre class="brush: js">' + form.grdDemos.selected[0].creationCode + '</pre>';
            P.invokeLater(function () {
                form.tpSections.height = form.pnlCreation.element.children[0].offsetHeight + tabTitleHeight;
            });
        }

        var customForm = form.grdDemos.selected[0].customForm; //form of custom proprties
        var viewForm = form.grdDemos.selected[0].commonForm; //form of commom properties

        var hint = form.grdDemos.selected[0].hint;
        if (form.grdDemos.selected[0].parent) {
            form.pnlDemoViews.show('pnlDemonstration');
        } else {
            form.pnlDemoViews.show('pnlTextInfo');
            form.lblInfo.text = form.grdDemos.selected[0].information;
        }

        form.lblShortInfo.text = hint;
        if (form.grdDemos.selected[0].parent) {
            P.require(customForm, function () {
                var custom = new global[customForm]();
                var widget = custom.getDemoComponent();
                var demoForm = custom.getViewComponent();
                showDemo(custom, widget, demoForm);

                form.grdDemos.selected[0].createdCustomForm = custom;
                form.grdDemos.selected[0].createdCustomForm.unfolded = false;
                form.grdDemos.selected[0].widget = widget;
                form.grdDemos.selected[0].demoForm = demoForm;
                SyntaxHighlighter.highlight();
                P.require(viewForm, function () {
                    var view = new global[viewForm](widget);
                    view.setOnComponentResize(onComponentResize);
                    view.showOnPanel(form.pnlViewProperties);
                    form.grdDemos.selected[0].createdViewForm = view;
                    form.grdDemos.selected[0].createdViewForm.unfolded = false;
                    form.pnlViewSourceCode.element.innerHTML = '<pre class="brush: js">' + view.constructor.toString() + '</pre>';
                    SyntaxHighlighter.highlight();
                    if (custom.setCommonView) {
                        custom.setCommonView(view);
                    }
                    onTabChanged();
                });

            });

        }
    };
    
    self.show = function () {
        if (P.agent == P.HTML5) {
            form.view.showOn(document.getElementById('Main'));
            P.invokeLater(function () {
                form.grdDemos.select(demosList.getMenu()[0]);
                var loadingProgress = document.getElementById('LoadingProgress');
                loadingProgress.remove();
            });

        } else {
            form.show();
            P.invokeLater(function () {
                form.maximize();
            });
        }
    };

    form.tpSections.onItemSelected = function (event) {
        onTabChanged();
    };

    form.lblCustomSource.onMouseClicked = function (event) {
        if (form.grdDemos.selected[0].createdCustomForm.unfolded) {
            form.lblCustomSource.icon = icnCollapsed;
            form.pnlCustomSource.height = 0;
            form.grdDemos.selected[0].createdCustomForm.unfolded = false;
        } else {
            form.lblCustomSource.icon = icnExpanded;
            form.pnlCustomSource.height = form.pnlCustomSource.element.children[0].offsetHeight;
            form.grdDemos.selected[0].createdCustomForm.unfolded = true;
        }
        form.pnlCustomize.height = form.pnlCustomProperties.height + form.lblCustomSource.height + form.pnlCustomSource.height;
        form.tpSections.height = form.pnlCustomize.height + tabTitleHeight;
    };

    form.lblViewSource.onMouseClicked = function (event) {
        if (form.grdDemos.selected[0].createdViewForm.unfolded) {
            form.lblViewSource.icon = icnCollapsed;
            form.pnlViewSourceCode.height = 0;
            form.grdDemos.selected[0].createdViewForm.unfolded = false;
        } else {
            form.lblViewSource.icon = icnExpanded;
            form.pnlViewSourceCode.height = form.pnlViewSourceCode.element.children[0].offsetHeight;
            form.grdDemos.selected[0].createdViewForm.unfolded = true;
        }
        form.pnlView.height = form.pnlViewProperties.height + form.lblViewSource.height + form.pnlViewSourceCode.height;
        form.tpSections.height = form.pnlView.height + tabTitleHeight;
    };
}
