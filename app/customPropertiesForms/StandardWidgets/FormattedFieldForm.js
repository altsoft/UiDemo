/**
 * 
 * @author jskonst
 */
function FormattedFieldForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var demoComponent = new P.FormattedField("Formatted field");
    demoComponent.height = 27;
    demoComponent.width = 500;

    self.getDemoComponent = function () {
        return demoComponent;
    };

    self.getViewComponent = function () {
        return demoComponent;
    };

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
            name: 'RegExp',
            valueType: RegExp,
            format: '\\d{5}',
            value: '1234.567'
        }, {
            name: 'Custom (Percent)',
            valueType: 'Percent',
            format: '',
            value: 1234.567
        }, {
            name: 'Custom (Currency)',
            valueType: 'Currency',
            format: '',
            value: 1234.567
        }, {
            name: 'Custom (Array)',
            valueType: 'Array',
            format: '',
            value: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
    ];

    function initWidget() {
        form.txtFormat.text = demoComponent.format;
        form.mcmbValueType.data = valueTypes;
        form.mcmbValueType.displayField = 'name';
        form.mcmbValueType.displayList = valueTypes;
        form.mcmbValueType.field = 'valueType';
        form.txtEmptyText.text = demoComponent.emptyText;
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidget();
        aPanel.add(form.view);
    };

    form.txtFormat.onValueChange = function () {
        demoComponent.format = form.txtFormat.text;
    };

    demoComponent.onValueChange = function (event) {
        form.ffValue.value = demoComponent.value;
    };

    form.txtEmptyText.onActionPerformed = function (event) {
        demoComponent.emptyText = form.txtEmptyText.text;
    };


    function onParsePercent(event) {
        var value = +event.source.text;
        if (isNaN(value)) {
            event.source.background = P.Color.PINK;
            return null;
        } else {
            event.source.background = P.Color.WHITE;
            return value / 100;
        }
    }

    function onFormatPercent(event) {
        return event.source.value !== null ? (event.source.value * 100) + "%" : "";
    }

    function onParseCurrency(event) {
        var value = +event.source.text;
        if (isNaN(value)) {
            event.source.background = P.Color.PINK;
            return null;
        } else {
            event.source.background = P.Color.WHITE;
            return value;
        }
    }

    function onFormatCurrency(event) {
        return event.source.value !== null ? event.source.value + " $" : "";
    }

    function onParseArray(event) {
        var value = event.source.text;
        value = value.replace(" ", "");
        value = value.split(",");
        if (value) {
            event.source.background = P.Color.WHITE;
            return value;
        } else {
            event.source.background = P.Color.PINK;
            return null;
        }
    }

    function onFormatArray(event) {
        return event.source.value !== null ? event.source.value.toString() : "";
    }

    form.mcmbValueType.onValueChange = function (event) {
        if (form.mcmbValueType.value.valueType === 'Percent') {
            demoComponent.onParse = onParsePercent;
            demoComponent.onFormat = onFormatPercent;
        } else if (form.mcmbValueType.value.valueType === 'Currency') {
            demoComponent.onParse = onParseCurrency;
            demoComponent.onFormat = onFormatCurrency;
        } else if (form.mcmbValueType.value.valueType === 'Array') {
            demoComponent.onParse = onParseArray;
            demoComponent.onFormat = onFormatArray;
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
