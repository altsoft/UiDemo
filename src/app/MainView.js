/**
 * 
 * @author jskonst
 */
define(['orm', 'forms', 'ui', 'environment', 'forms/label', 'invoke', 'logger', 'Demos'],
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

                Ui.Icon.load('icons/loading5.gif', function (data) {
                    lbLoad.icon = data;
                    lbLoad.text = null;
                });

                form.pnlDemonstrationContent.height = null;
                
                form.grdDemos.data = demosList;
                form.grdDemos.column.field = "name";
                form.grdDemos.parentField = 'parent';
                form.grdDemos.childrenField = 'children';
                form.pnlDemoViews.show('pnlTextInfo');
                form.grdDemos.headerVisible = false;
                form.grdDemos.showHorizontalLines = false;
                form.grdDemos.showVerticalLines = false;
                form.grdDemos.showOddRowsInOtherColor = false;

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

                form.grdDemos.onMouseClicked = function (event) {
                    if (event.clickCount === 1) {
                        form.grdDemos.toggle(form.grdDemos.selected[0]);
                    }
                };

                function onTabChanged() {
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
                            form.pnlCustomProperties.height = form.grdDemos.selected[0].createdCustomForm.getFormHeight();
                            form.pnlCustomize.height = form.pnlCustomProperties.height;
                            form.tpSections.height = form.pnlCustomize.height + tabTitleHeight;
                            break;
                        }
                        case 2:
                        {
                            form.pnlViewProperties.height = form.grdDemos.selected[0].createdViewForm.getFormHeight();
                            form.pnlView.height = form.pnlViewProperties.height;
                            form.tpSections.height = form.pnlView.height + tabTitleHeight;
                            break;
                        }
                    }
                }

                var onComponentResize = function (height) {
                    if (height) {
                        form.pnlPlayground.height = height + hMargin * 2;
                    }
                };

                function showDemo(custom, common) {
                    form.pnlCustomProperties.clear();
                    form.pnlViewProperties.clear();
                    form.pnlPlayground.clear(); //Clean demo components place
                    var widget = custom.getDemoComponent();
                    var demoForm = custom.getViewComponent();
                    common.setDemoComponent(widget);
                    custom.unfolded = false;
                    common.unfolded = false;
                    custom.showOnPanel(form.pnlCustomProperties);
                    form.pnlPlayground.add(demoForm, {left: hMargin,
                        width: demoForm.width,
                        right: hMargin,
                        top: vMargin,
                        height: demoForm.height,
                        bottom: null}
                    );

                    form.pnlPlayground.height = demoForm.height + vMargin * 2;
                    common.setOnComponentResize(onComponentResize);
                    common.showOnPanel(form.pnlViewProperties);
                    onTabChanged();
                }

                form.grdDemos.onItemSelected = function (event) {
                    var w = Math.round(form.pnlPlayground.width / 2 - 100);
                    form.pnlPlayground.clear(); //Clean demo components place
                    form.pnlPlayground.height = lbLoad.height + 2 * hMargin;
                    form.pnlPlayground.add(lbLoad, {left: w,
                        width: 200,
                        right: w,
                        top: hMargin,
                        height: 200,
                        bottom: hMargin});
                    lbLoad.visible = true;
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

                        if (form.grdDemos.selected[0].creationCode) {
                            form.pnlCreation.element.innerHTML = '<pre><code class="javascript">' + form.grdDemos.selected[0].creationCode + '</code></pre>';
                            hljs.highlightBlock(form.pnlCreation.element);
                            Invoke.later(function () {
                                form.tpSections.height = form.pnlCreation.element.children[0].offsetHeight + tabTitleHeight;
                            });
                        }

                        var demo = form.grdDemos.selected[0];
                        require([form.grdDemos.selected[0].customForm,
                            form.grdDemos.selected[0].commonForm]
                                , function (aCustom, aCommon) {
                                    if (!(demo.createdCustomForm && demo.createdViewForm)) {
                                        demo.createdCustomForm = new aCustom(); //form of custom proprties
                                        demo.createdViewForm = new aCommon(); //form of commom properties
                                    }
                                    if (demo === form.grdDemos.selected[0]) {
                                        showDemo(demo.createdCustomForm, demo.createdViewForm);
                                    }
                                });
                    }
                };

                self.show = function () {
                    if (Env.agent === Env.HTML5) {
                        form.view.showOn(document.getElementById('Main'));
                        Invoke.later(function () {
                            form.grdDemos.select(demosList[0]);
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
            }
            return module_constructor;
        });