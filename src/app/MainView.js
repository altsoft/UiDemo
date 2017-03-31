/**
 * 
 * @author jskonst
 */
define(['orm', 'forms', 'ui', 'environment', 'forms/label', 'invoke', 'logger', 'Demos', 'resource'],
        function (Orm, Forms, Ui, Env, Label, Invoke, Logger, demos, Resource, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);
                var lbLoad = new Label();
                lbLoad.width = 200;
                lbLoad.height = 200;

                Ui.Icon.load('icons/loading5.gif', function (data) {
                    lbLoad.icon = data;
                    lbLoad.text = null;
                });

                form.pnlPlayground.height = null;
                form.pnlDemonstrationContent.height = null;
                form.pnlCreation.height = null;
                form.pnlCustomize.height = null;
                form.pnlCustomProperties.height = null;
                form.pnlView.height = null;
                form.pnlViewProperties.height = null;

                form.grdDemos.data = demos;
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

                function showDemo(custom, common) {
                    form.pnlCustomProperties.clear();
                    form.pnlViewProperties.clear();
                    form.pnlPlayground.clear(); //Clean demo components place
                    var widget = custom.getDemoComponent();
                    var demoForm = custom.getViewComponent();
                    common.setDemoComponent(widget);
                    common.unfolded = false;
                    custom.unfolded = false;
                    custom.showOnPanel(form.pnlCustomProperties);
                    form.pnlPlayground.add(demoForm);
                    common.showOnPanel(form.pnlViewProperties);
                }

                form.grdDemos.onItemSelected = function (event) {
                    form.pnlPlayground.clear(); //Clean demo components place
                    form.pnlPlayground.add(lbLoad);
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

                    var demo = form.grdDemos.selected[0];
                    if (demo.parent) {
                        require([demo.customForm, demo.commonForm], function (aCustom, aCommon) {
                            function loaded() {
                                form.pnlCreation.element.innerHTML = '<pre><code class="javascript">' + form.grdDemos.selected[0].creationCode + '</code></pre>';
                                hljs.highlightBlock(form.pnlCreation.element);
                                if (!(demo.createdCustomForm && demo.createdViewForm)) {
                                    demo.createdCustomForm = new aCustom(); //form of custom proprties
                                    demo.createdViewForm = new aCommon(); //form of commom properties
                                }
                                if (demo === form.grdDemos.selected[0]) {
                                    showDemo(demo.createdCustomForm, demo.createdViewForm);
                                }
                            }
                            if(demo.creationCode == null){
                                Resource.loadText(demo.customForm + '.js', function(aContent){
                                    demo.creationCode = aContent;
                                    loaded();
                                });
                            } else {
                                loaded();
                            }
                        });
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

            }
            return module_constructor;
        });