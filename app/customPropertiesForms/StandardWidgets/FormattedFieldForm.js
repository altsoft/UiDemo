/**
 * 
 * @author jskonst
 */
function FormattedFieldForm(aDemoComponent) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var demoComponent = aDemoComponent;
    var textForm;

    aDemoComponent.height = 30;
    aDemoComponent.width = 300;

    var valueTypes = [
        {
            name: 'Number',
            valueType: Number,
            format: '#,##0.###',
            value: 1234.567
        }, {
            name: 'Date',
            valueType: Date,
            format: 'h:mm:ss a z EEEE MMMM dd yyyy',
            value: new Date(),
        }, {
            name: 'Time',
            valueType: Date,
            format: 'h:mm:ss a z',
            value: '1:22:17 PM',
        }, {
            name: 'Custom (Percent)',
            valueType: 'Percent',
            format: '',
            value: '1234.567'
        }, {
            name: 'Currency',
            valueType: 4,
            format: '¤#,##0.00,(¤#,##0.00)',
            value: '1234.567'
        }, {
            name: 'Mask',
            valueType: 5,
            format: '###-####',
            value: '123-4567',
        }, {
            name: 'RegExp',
            valueType: RegExp,
            format: '\\d{5}',
            value: '1234.567'
        }, {
            name: 'Custom...',
            valueType: 7,
            format: '',
            value: ''
        }
    ];

    self.setDemoComponent = function (aDemoComponent) {
        demoComponent = aDemoComponent;
    };

    function initWidget() {
        textForm = new TextFieldForm(demoComponent);
        form.txtFormat.text = demoComponent.format;
        form.mcmbValueType.data = valueTypes;
        form.mcmbValueType.displayField = 'name';
        form.mcmbValueType.displayList = valueTypes;
        form.mcmbValueType.field = 'valueType';
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidget();
        textForm.showOnPanel(aPanel);
        aPanel.add(form.view);
    };

    form.txtFormat.onValueChange = function () {
        demoComponent.format = form.txtFormat.text;
    };

//    form.formattedField.onParse = function () {
//        form.formattedField.valueType
//    };
//
//    form.formattedField.onRender = function () {
//
//    };

    function onParsePercent(event) {
        var value = +event.source.text;
        if (isNaN(value)) {
            event.source.background = P.Color.PINK;
            return null;
        } else {
            event.source.background = P.Color.WHITE;
            return value/100;
        }

    }

    function onFormatPercent(event) {
        return event.source.value !== null ? (event.source.value*100) + "%" : "";
    }

    form.mcmbValueType.onValueChange = function (event) {
        if (form.mcmbValueType.value.valueType === 'Percent') {
            demoComponent.onParse = onParsePercent;
            demoComponent.onFormat = onFormatPercent;
        } else {
            demoComponent.onParse = null;
            demoComponent.onFormat = null;
        }

        demoComponent.format = form.mcmbValueType.value.format;
        demoComponent.valueType = form.mcmbValueType.value.valueType;
        form.txtFormat.text = form.mcmbValueType.value.format;
        demoComponent.value = form.mcmbValueType.value.value;



    };

}
