/**
 * 
 * @author jskonst
 */
/* global P */
/* global SyntaxHighlighter */

var global = this;
var demoMenuList = [];
var buttonGroups = [];
var colorsArray = [new P.Color('#49a7f0'), new P.Color('#67eacc'), new P.Color('#6fea58'),
    new P.Color('#ea6dda'), new P.Color('#fa9037'), P.Color.PINK,
    new P.Color('#f04949'), new P.Color('#b6b6b6'), new P.Color('#f5e04f')];

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

    var demos = demosList();
    form.grdDemos.data = demos;
    form.grdDemos.column.field = "name";
    form.grdDemos.parentField = 'parent';
    form.grdDemos.childrenField = 'children';
    form.pnlDemoViews.show('pnlTextInfo');
    form.grdDemos.headerVisible = false;
    form.grdDemos.showHorizontalLines = false;
    form.grdDemos.showVerticalLines = false;
    form.grdDemos.showOddRowsInOtherColor = false;

    if (P.agent === P.HTML5) {
        form.lblViewSource.cursor = 'pointer';
        form.lblCustomSource.cursor = 'pointer';
    }
    form.grdDemos.column.onRender = function (event) {
        if (event.object.icon) {
            if (event.object.loadedIcon)
                event.cell.icon = event.object.loadedIcon;
            else {
                P.Icon.load(event.object.icon, function (aLoaded) {
                    event.cell.icon = aLoaded;
                    event.object.loadedIcon = aLoaded;
                });
            }
        }
    };

    var ensureExpandedCollapsedIcons = (function () {
        var icnExpanded;
        var icnCollapsed;
        return function (aIconsConsumer) {
            if (icnExpanded && icnCollapsed) {
                P.invokeLater(function () {
                    aIconsConsumer(icnExpanded, icnCollapsed);
                });
            } else {
                P.Icon.load('icons/expanded.png', function (data) {
                    icnExpanded = data;
                    if (icnExpanded && icnCollapsed) {
                        aIconsConsumer(icnExpanded, icnCollapsed);
                    }
                });
                P.Icon.load('icons/collapsed.png', function (data) {
                    icnCollapsed = data;
                    if (icnExpanded && icnCollapsed) {
                        aIconsConsumer(icnExpanded, icnCollapsed);
                    }
                });
            }
        };
    }());

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
                ensureExpandedCollapsedIcons(function (icnExpanded, icnCollapsed) {
                    var selectedItem = form.grdDemos.selected[0];
                    if (!selectedItem.createdCustomForm || selectedItem.createdCustomForm.unfolded) {
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
                ensureExpandedCollapsedIcons(function (icnExpanded, icnCollapsed) {
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
        if (height) {
            form.pnlPlayground.height = height + hMargin * 2;
        }
    };

    form.grdDemos.onItemSelected = function (event) {
        var widget;
        var demoForm;
        var w = Math.round(form.pnlPlayground.width / 2 - 100);
        form.pnlPlayground.clear(); //Clean demo components place
         form.pnlPlayground.height = lbLoad.height + 2 * hMargin;
        form.pnlPlayground.add(lbLoad, new P.Anchors(w, 200, w, hMargin, 200, hMargin));
       
            
            
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

        var modules = [];
        if (form.grdDemos.selected[0].dependencies) {
            modules.push(customForm);
            if (Array.isArray(form.grdDemos.selected[0].dependencies)) {
                Array.prototype.push.apply(modules, form.grdDemos.selected[0].dependencies);
            } else {
                modules.push(form.grdDemos.selected[0].dependencies);
            }
        } else {
            modules = customForm;
        }

        if (form.grdDemos.selected[0].parent) {

            P.require(modules, function () {
               
                if (form.grdDemos.selected[0].dependencies) {
                    var dependencies = [];
                    if (!Array.isArray(form.grdDemos.selected[0].dependencies)) {
                        dependencies.push(form.grdDemos.selected[0].dependencies);
                    } else {
                        dependencies = form.grdDemos.selected[0].dependencies;
                    }
                    dependencies.forEach(function (item, i, arr) {
                        if (!global[item].created) {
                            global[item].created = new global[item]();
                        }
                    });
                }
                if (!global[customForm].created) {
                    global[customForm].created = new global[customForm]();
                }
                var custom = global[customForm].created;
//                P.Logger.info(customForm);
//                if (form.grdDemos.selected[0].createdCustomForm) {
//                    widget = form.grdDemos.selected[0].widget;
//                    demoForm = form.grdDemos.selected[0].demoForm;
//                } else {
                widget = custom.getDemoComponent();
                demoForm = custom.getViewComponent();
                custom.unfolded = false;
                form.grdDemos.selected[0].createdCustomForm = custom;
//                }
                form.pnlCustomProperties.clear();
                custom.showOnPanel(form.pnlCustomProperties);
                try {
                    form.pnlPlayground.clear(); //Clean demo components place
                    form.pnlCustomSource.element.innerHTML = '<pre class="brush: js">' + custom.constructor.toString() + '</pre>';
                    form.pnlPlayground.add(demoForm, new P.Anchors(hMargin, demoForm.width, hMargin, vMargin, demoForm.height, null));
                    form.pnlPlayground.height = demoForm.height + vMargin * 2;
                } catch (ex) {
                    P.Logger.warning(ex);
                    P.Logger.warning("Here again");
                }

                form.grdDemos.selected[0].widget = widget;
                form.grdDemos.selected[0].demoForm = demoForm;
                SyntaxHighlighter.highlight();
                P.require(viewForm, function () {

                    if (form.grdDemos.selected[0].createdViewForm) {
                        var view = form.grdDemos.selected[0].createdViewForm;
                    } else {
                        var view = new global[viewForm](widget);
                        view.unfolded = false;
                        form.pnlViewSourceCode.element.innerHTML = '<pre class="brush: js">' + view.constructor.toString() + '</pre>';
                        view.setOnComponentResize(onComponentResize);
                        form.grdDemos.selected[0].createdViewForm = view;
                    }
                    form.pnlViewProperties.clear();
                    view.showOnPanel(form.pnlViewProperties);
                    if (custom.setCommonView) {
                        custom.setCommonView(view);
                    }
                    onTabChanged();
                });

            }, function () {
                form.pnlPlayground.clear(); //Clean demo components place
                P.Logger.warning('Something bad havejust happend');
            });
        }

    };

    self.show = function () {
        if (P.agent === P.HTML5) {
            form.view.showOn(document.getElementById('Main'));
            P.invokeLater(function () {
                form.grdDemos.select(demos[0]);
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
        ensureExpandedCollapsedIcons(function (icnExpanded, icnCollapsed) {
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
        });
    };

    form.lblViewSource.onMouseClicked = function (event) {
        ensureExpandedCollapsedIcons(function (icnExpanded, icnCollapsed) {
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
        });
    };
}
