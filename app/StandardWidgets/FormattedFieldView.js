/**
 * 
 * @author jskonst
 */
function FormattedFieldView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var formattedField = new P.FormattedField("Formatted field");
    formattedField.height = 27;
    formattedField.width = 500;

    self.getDemoComponent = function () {
        return formattedField;
    };

    self.getViewComponent = function () {
        return formattedField;
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
            value: new Date()
        }, {
            name: 'Time',
            valueType: Date,
            format: 'h:mm:ss a z',
            value: new Date() //'1:22:17 PM',
        }, {
            name: 'RegExped string',
            valueType: RegExp,
            format: '\\d{4}.\d{3}',
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
        form.txtFormat.text = formattedField.format;
        form.mcmbValueType.data = valueTypes;
        form.mcmbValueType.displayField = 'name';
        form.mcmbValueType.displayList = valueTypes;
        form.mcmbValueType.field = 'valueType';
        form.txtEmptyText.text = formattedField.emptyText;
        form.mcmbValueType.value = valueTypes[0];
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {
        initWidget();
        aPanel.add(form.view);
    };

    form.txtFormat.onValueChange = function () {
        formattedField.format = form.txtFormat.text;
    };

    formattedField.onValueChange = function (event) {
        //P.Logger.info(formattedField.value);
        form.ffValue.text = formattedField.value;
        //P.Logger.info(form.ffValue.text);
    };

    form.txtEmptyText.onActionPerformed = function (event) {
        formattedField.emptyText = form.txtEmptyText.text;
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
        var value = event.source.text;
        value =  value.replace("$", "");
        value = +value;
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
        formattedField.background = P.Color.WHITE;
        
        if (form.mcmbValueType.value.valueType === 'Percent') {
            formattedField.onParse = onParsePercent;
            formattedField.onFormat = onFormatPercent;
        } else if (form.mcmbValueType.value.valueType === 'Currency') {
            formattedField.onParse = onParseCurrency;
            formattedField.onFormat = onFormatCurrency;
        } else if (form.mcmbValueType.value.valueType === 'Array') {
            formattedField.onParse = onParseArray;
            formattedField.onFormat = onFormatArray;
        } else {
            formattedField.onParse = null;
            formattedField.onFormat = null;
        }
//        formattedField.text = "";
//        formattedField.value = null;
       
        formattedField.valueType = form.mcmbValueType.value.valueType;
        form.txtFormat.text = form.mcmbValueType.value.format;
        formattedField.value = form.mcmbValueType.value.value;
        formattedField.format = form.mcmbValueType.value.format;
    };

    self.getFormHeight = function () {
        return form.view.height;
    };

}
