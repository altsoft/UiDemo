/**
 * важное замечание, дочерние элементы должны быть
 * добавлены в определенном порядке
 * @author jskonst
 * @module
 */
function ExpandedPanel(aPanel) {
    var pnlExpandable = aPanel;
    var self = this, model = P.loadModel(this.constructor.name);
    var folded = false;
    var unfoldSize;
    var foldSize;
    var margin = 12;
    var unfoldSize = pnlExpandable.height;
    var items = pnlExpandable.count;
    var child = pnlExpandable.child(0);
    var iconFold;
    var iconUnfold;
    
    if (child) {
        foldSize = child.height + margin;
    } else {
        foldSize = 0;
    }

    self.setFoldedSize = function(aSize) {
        foldSize = aSize;
    };

    self.setUnFoldedSize = function(aSize) {
        unfoldSize = aSize;
    };

    self.fold = function(aCallback) {
        folded = true;
        var child = pnlExpandable.child(0);
        
        if (child){
            child.icon = iconUnfold;
        }
        pnlExpandable.height = foldSize;
        if (aCallback) {
            aCallback();
        }
    };

    self.unFold = function(aCallback) {
        folded = false;
        var child = pnlExpandable.child(0);
        
        if (child){
            child.icon = iconFold;
        }
        child = pnlExpandable.child(items - 1);
        if (child) {
            unfoldSize = child.height + child.top ;
        } else {
            unfoldSize = 0;
        }
        pnlExpandable.height = unfoldSize;
        if (aCallback) {
            aCallback();
        }
    };

    self.isFolded = function() {
        return folded;
    };

    self.setTop = function(aPos) {
        pnlExpandable.top = aPos+margin;
    };
    
    self.getTop = function() {
        return pnlExpandable.top;
    };

    self.getBottom = function() {
        return pnlExpandable.top + pnlExpandable.height;
    };

    self.getHeight = function() {
        //возвращаем действиетельный размер
        return pnlExpandable.height;
    };

    self.setIconsFoldedUnfolded = function(aIconFold,aIconUnfold){
        iconFold = aIconFold;
        iconUnfold = aIconUnfold;
    };
}
