/**
 * 
 * @author jskonst
 */

function DemonstrationContainer() {
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

    self.show = function () {
            form.show();
    };
    
    self.showOnPanel = function (aPanel) {
        //initWidget();
        aPanel.add(form.view);
    };

}
