/**
 * 
 * @author user
 */
define('ToolbarPanel', ['forms', 'ui','forms/tool-bar','forms/button','AddComponentContainer'], 
function (Forms, Ui,ToolBar,Button,AddComponentContainer, ModuleName) {
    function module_constructor(aPlaygroundPanel) {
        var self = this
                , form = Forms.loadForm(ModuleName);

        var counter = 1;
        var internalContainer = new ToolBar();
        internalContainer.width = 752;
        internalContainer.height = 40;

        self.getDemoComponent = function () {
            return internalContainer;
        };

        self.getViewComponent = function () {
            return internalContainer;
        };

        var addPanel;
        var subject;

        self.show = function () {
            form.show();
        };

        function getPosition(aElement) {
            subject = aElement;
        }

        function deleteElement(aElement) {
            internalContainer.remove(aElement);
        }

        function placeElement(aElement, counter) {
            internalContainer.add(aElement);
            aElement.toolTipText = "Sample " + counter; //+ " id:" + internalContainer.count;
        }

        addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);
        var b1 = new Button('One');
        internalContainer.add(b1);
        b1.height = 50;
        b1.width = 100;
        b1.itemname = b1.text;
        addPanel.addComponentTolist(b1);
        var b2 = new Button('Two');
        internalContainer.add(b2);
        b2.height = 50;
        b2.width = 100;
        b2.itemname = b2.text;
        addPanel.addComponentTolist(b2);

        self.showOnPanel = function (aPanel) {
            addPanel.showOnPanel(aPanel);
        };

    }
    return module_constructor;
});