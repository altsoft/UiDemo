/**
 * 
 * @author user
 */
function AnchorsPanePanel(aPlaygroundPanel) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var counter = 1;

    var internalContainer = aPlaygroundPanel;
    internalContainer.background = new P.Color(P.Color.RED);
    var addPanel;
    var subject;

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

    addPanel = new AddComponentContainer(getPosition, deleteElement, placeElement);

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
}
