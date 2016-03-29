/**
 * 
 * @author jskonst
 */
define('MainView', ['orm', 'forms', 'ui', 'environment', 'forms/label', 'invoke', 'logger', 'DemosList'],
        function (Orm, Forms, Ui, Env, Label, Invoke, Logger, demosList, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);
                var lbLoad = new Label();
                lbLoad.width = 200;
                lbLoad.height = 200;
                var hMargin = 10;
                var vMargin = 10;
                var tabTitleHeight = 50;
                // TODO 1 
                Ui.Icon.load('icons/loading5.gif', function (data) {
                    lbLoad.icon = data;
                    lbLoad.text = null;
                });

                var demos = new demosList();
                form.grdDemos.data = demos;
                form.grdDemos.column.field = "name";
                form.grdDemos.parentField = 'parent';
                form.grdDemos.childrenField = 'children';
                form.pnlDemoViews.show('pnlTextInfo');
                form.grdDemos.headerVisible = false;
                form.grdDemos.showHorizontalLines = false;
                form.grdDemos.showVerticalLines = false;
                form.grdDemos.showOddRowsInOtherColor = false;
                if (Env.agent === Env.HTML5) {
                    form.lblViewSource.cursor = 'pointer';
                    form.lblCustomSource.cursor = 'pointer';
                }

                form.grdDemos.column.onRender = function (event) {
                    if (event.object.icon) {
                        if (event.object.loadedIcon)
                            event.cell.icon = event.object.loadedIcon;
                        else {
                            Ui.Icon.load(event.object.icon, function (aLoaded) {
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
                            Invoke.later(function () {
                                aIconsConsumer(icnExpanded, icnCollapsed);
                            });
                        } else {
                            Ui.Icon.load('icons/expanded.png', function (data) {
                                icnExpanded = data;
                                if (icnExpanded && icnCollapsed) {
                                    aIconsConsumer(icnExpanded, icnCollapsed);
                                }
                            });
                            Ui.Icon.load('icons/collapsed.png', function (data) {
                                icnCollapsed = data;
                                if (icnExpanded && icnCollapsed) {
                                    aIconsConsumer(icnExpanded, icnCollapsed);
                                }
                            });
                        }
                    };
                }());
                function onTabChanged() {
//                     SyntaxHighlighter.highlight();
                    switch (form.tpSections.selectedIndex) {
                        case 0:
                        {
                            Invoke.later(function () {
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
                var widget;
                var demoForm;
                var w = Math.round(form.pnlPlayground.width / 2 - 100);
                form.pnlPlayground.add(lbLoad, {left: w,
                    width: 200,
                    right: w,
                    top: hMargin,
                    height: 200,
                    bottom: hMargin});
                lbLoad.visible = false;
                form.grdDemos.onMouseClicked = function (event) {
                    if (event.clickCount === 1) {
                        form.grdDemos.toggle(form.grdDemos.selected[0]);
                    }
                };
                form.grdDemos.onItemSelected = function (event) {
                    var widget;
                    var demoForm;
                    var w = Math.round(form.pnlPlayground.width / 2 - 100);
                    form.pnlPlayground.clear(); //Clean demo components place
                    form.pnlPlayground.height = lbLoad.height + 2 * hMargin;
                    form.pnlPlayground.add(lbLoad, {left: w,
                        width: 200,
                        right: w,
                        top: hMargin,
                        height: 200,
                        bottom: hMargin});
                    if (form.grdDemos.selected[0].creationCode) {
//                         form.pnlCreation.element.innerHTML = '<pre class="brush: js">' + form.grdDemos.selected[0].creationCode + '</pre>';
                        form.pnlCreation.element.innerHTML = '<pre><code class="javascript">' + form.grdDemos.selected[0].creationCode + '</code></pre>';
                        hljs.highlightBlock(form.pnlCreation.element);
                        Invoke.later(function () {
                            form.tpSections.height = form.pnlCreation.element.children[0].offsetHeight + tabTitleHeight;
                        });
                    }

                    //In case of parent or child - chow different card on cardpane
                    if (form.grdDemos.selected[0].parent) {
                        form.pnlDemoViews.show('pnlDemonstration');
                        var hint = form.grdDemos.selected[0].hint;
                        form.lblShortInfo.text = hint;
                    } else {
                        form.pnlDemoViews.show('pnlTextInfo');
                        form.lblInfo.text = form.grdDemos.selected[0].information;
                    }

                    if (form.grdDemos.selected[0].parent) {
                        require([form.grdDemos.selected[0].customForm,
                            form.grdDemos.selected[0].commonForm],
                                function (aCustom, aCommon) {

                                    var custom;
                                    var common;
                                    if (form.grdDemos.selected[0].createdCustomForm && form.grdDemos.selected[0].createdViewForm) {
                                        custom = form.grdDemos.selected[0].createdCustomForm; //form of custom proprties
                                        common = form.grdDemos.selected[0].createdViewForm; //form of commom properties
                                    } else {
                                        form.grdDemos.selected[0].createdCustomForm = new aCustom(); //form of custom proprties
                                        form.grdDemos.selected[0].createdViewForm = new aCommon(); //form of commom properties
                                        custom = form.grdDemos.selected[0].createdCustomForm; //form of custom proprties
                                        common = form.grdDemos.selected[0].createdViewForm; //form of commom properties
                                    }
                                    widget = custom.getDemoComponent();
                                    demoForm = custom.getViewComponent();
                                    common.setDemoComponent(widget);

                                    custom.unfolded = false;
                                    form.pnlCustomProperties.clear();
                                    custom.showOnPanel(form.pnlCustomProperties);
                                    form.pnlPlayground.clear(); //Clean demo components place
//                                     form.pnlCustomSource.element.innerHTML = '<pre class="brush: js">' + custom.constructor.toString() + '</pre>';
                                    form.pnlCustomSource.element.innerHTML = '<pre><code class="javascript">' + custom.constructor.toString() + '</code></pre>';
                                    hljs.highlightBlock(form.pnlCustomSource.element);

                                    form.pnlPlayground.add(demoForm, {left: hMargin,
                                        width: demoForm.width,
                                        right: hMargin,
                                        top: vMargin,
                                        height: demoForm.height,
                                        bottom: null}
                                    );
                                    form.pnlPlayground.height = demoForm.height + vMargin * 2;

                                    //SyntaxHighlighter.highlight();
//                                     hljs.highlightBlock(block);

                                    form.pnlViewProperties.clear();
                                    common.unfolded = false;
//                                     form.pnlViewSourceCode.element.innerHTML = '<pre class="brush: js">' + common.constructor.toString() + '</pre>';
                                    form.pnlViewSourceCode.element.innerHTML = '<pre><code class="javascript">' + common.constructor.toString() + '</code></pre>';
                                     hljs.highlightBlock(form.pnlViewSourceCode.element);
                                     
                                    common.setOnComponentResize(onComponentResize);
                                    common.showOnPanel(form.pnlViewProperties);

                                    //hljs.initHighlightingOnLoad();

//                                    custom.setCommonView(common);
                                    onTabChanged();
                                },function(){
                                    Logger.info("Something");             
                                }
                                );
                    }

                };
                self.show = function () {
                    if (Env.agent === Env.HTML5) {
                        form.view.showOn(document.getElementById('Main'));
                        Invoke.later(function () {
                            form.grdDemos.select(demos[0]);
                            var loadingProgress = document.getElementById('LoadingProgress');
                            loadingProgress.parentNode.removeChild(loadingProgress);
                        });
                    } else {
                        form.show();
                        Invoke.later(function () {
                            form.maximize();
                        });
                    }
                };
                form.tpSections.onItemSelected = function (event) {
                    onTabChanged();
                };
                function collapsedCallback(form, icnExpanded, icnCollapsed) {
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
                }

                form.lblCustomSource.onMouseClicked = function (event) {
                    ensureExpandedCollapsedIcons(
//                            collapsedCallback
                            function (icnExpanded, icnCollapsed) {
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
                            }
                    );
                };
                form.lblViewSource.onMouseClicked = function (event) {
                    ensureExpandedCollapsedIcons(
//                            collapsedCallback
                            function (icnExpanded, icnCollapsed) {
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
                            }
                    );
                };
            }
            return module_constructor;
        });