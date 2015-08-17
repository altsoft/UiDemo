/**
 * 
 * @author user
 */
function AnchorsPanePanel() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;

    var internalContainer = new P.AnchorsPane();
    internalContainer.width = 800;
    internalContainer.height = 400;
    if (P.agent == P.HTML5) {
        internalContainer.element.style.border = "thin solid gray";
        internalContainer.element.style.borderRadius = "5px";
    }
    
    var addPanel;
    var subject;

    self.getDemoComponent = function () {
        return internalContainer;
    };

    self.getViewComponent = function () {
        return internalContainer;
    };

    self.show = function () {
        form.show();
    };

    model.requery(function () {
    });

    function getPosition(aElement) {
        subject = aElement;
        form.ffLeft.value = aElement.left;
        form.ffTop.value = aElement.top;
        form.ffBottom.value = aElement.bottom;
        form.ffRight.value = aElement.right;
    }

    function deleteElement(aElement) {
        internalContainer.remove(aElement);
    }

    function setDragDrop(aElement){
            aElement.onMousePressed = function (event) {
            var leftOffset = event.x;
            var topOffset = event.y;

            internalContainer.onMouseMoved = function (event) {
                aElement.left = event.x - leftOffset;
                aElement.top = event.y - topOffset;
                getPosition(aElement);
            };

            internalContainer.onMouseReleased = function (event) {
                aElement.left = event.x - leftOffset;
                aElement.top = event.y - topOffset;
                getPosition(aElement);
                internalContainer.onMouseMoved = null;
                aElement.onMouseReleased = null;
            };

            aElement.onMouseReleased = function () {
                internalContainer.onMouseMoved = null;
                aElement.onMouseReleased = null;
            };
        };
    }

    function placeElement(aElement, counter) {
        subject = aElement;
        form.ffLeft.text = 0;
        form.ffRight.text = 0;
        form.ffTop.text = 0;
        form.ffBottom.text = 0;

        internalContainer.add(aElement
                , new P.Anchors(form.ffLeft.value,
                        aElement.width,
                        form.ffRight.value,
                        form.ffTop.value,
                        aElement.height,
                        form.ffBottom.value));
        aElement.toolTipText = "num " + counter + " id:" + internalContainer.count;
        aElement.child(0).text = "Drag&Drop me!"
        setDragDrop(aElement);

    }

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);
    var comp = new P.Button('Sample');
    comp.height = 30;
    comp.width = 120;
    internalContainer.add(comp, new P.Anchors(10, comp.width, 0, 10, comp.height, 0));
    comp.itemname = 'Sample';
    setDragDrop(comp);
    addPanel.addComponentTolist(comp);
    
    
    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
        addPanel.showOnPanel(aPanel);
    };

    form.ffTop.onValueChange = function (event) {
        if (subject) {
            subject.top = form.ffTop.value;
        }
    };

    form.ffBottom.onValueChange = function (event) {
        if (subject) {
            subject.bottom = form.ffBottom.value;
        }
    };

    form.ffRight.onValueChange = function (event) {
        if (subject) {
            subject.right = form.ffRight.value;
        }
    };

    form.ffLeft.onValueChange = function (event) {
        if (subject) {
            subject.left = form.ffLeft.value;
        }
    };

    self.getFormHeight = function () {
        return form.view.height;
    };
}
