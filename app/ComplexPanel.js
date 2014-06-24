/**
 * Пока важно передать панели в том порядке,в котором они следуютs
 * @author jskonst
 * @module
 */
function ComplexPanel(aTopPanel, aPanelArray) {
    var self = this, model = this.model;
    var pnlExpandableArray = aPanelArray;
    //при сождании 1-я панель будет развернута, 
    //последующие - расположены под ней
    var margin = 0;
    var foldStyle = true;
    var topPanel = aTopPanel;
    self.FoldingComplex = true;
    self.FoldingSimple = false;
    function prepare() {
        //сперва развернем 1 компонент
        pnlExpandableArray[0].unFold();
        //теперь свернем остальные и разместим их 
        var pos = pnlExpandableArray[0].getHeight();
        for (var i = 1; i < pnlExpandableArray.length; i++) {
            pnlExpandableArray[i].setTop(pos + margin);
            pnlExpandableArray[i].fold();
            pos += pnlExpandableArray[i].getHeight();
        }

        topPanel.height = pnlExpandableArray[pnlExpandableArray.length - 1].getBottom();
//        topPanel.width -=20;
    }
    prepare();

    self.setUnfolded = function(index) {
        var pos = 0;
        for (var i = 0; i < pnlExpandableArray.length; i++) {
            pnlExpandableArray[i].setTop(pos + margin);
            if (i == index) {
                pnlExpandableArray[i].unFold();
            } else {
                if (foldStyle == self.FoldingComplex) {
                    pnlExpandableArray[i].fold();
                }
            }
            pos += pnlExpandableArray[i].getHeight();
        }
        topPanel.height = pnlExpandableArray[pnlExpandableArray.length - 1].getBottom();
    };

    self.setFold = function(index) {
        var pos = 0;
        for (var i = 0; i < pnlExpandableArray.length; i++) {
            pnlExpandableArray[i].setTop(pos + margin);
            if (i == index) {
                pnlExpandableArray[i].fold();
            }
            pos += pnlExpandableArray[i].getHeight();
        }
        topPanel.height = pnlExpandableArray[pnlExpandableArray.length - 1].getBottom();

    };

    self.setFoldingAction = function(aFoldStyle) {
        foldStyle = aFoldStyle;
    };


}
