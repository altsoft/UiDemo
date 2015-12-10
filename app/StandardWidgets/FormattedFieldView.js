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
            format: 'HH:mm:ss z MMMM.dd.yyyy',
            value: new Date()
        }, {
            name: 'Time',
            valueType: Date,
            format: 'HH:mm:ss z',
            value: new Date() //'13:22:17',
        }, {
            name: 'RegExped string',
            valueType: RegExp,
            format: '\\d*\\.?\\d*',
            value: '1234.567'
        }, {
            name: 'Custom (Percent)',
            valueType: 'Percent',
            format: '',
            value: 0.25
        }, {
            name: 'Custom (Currency)',
            valueType: 'Currency',
            format: '',
            value: 1500.25
        }, {
            name: 'Custom (Array)',
            valueType: 'Array',
            format: '',
            value: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }, {
            name: 'Custom (E-mail)',
            valueType: 'Email',
            format: '',
            value: 'test@test.com'
        }
    ];

    function initWidget() {
        form.txtFormat.text = formattedField.format;
//        form.mcmbValueType.data = valueTypes;
        form.mcmbValueType.displayField = 'name';
        form.mcmbValueType.displayList = valueTypes;
//        form.mcmbValueType.field = 'valueType';
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
        if (Array.isArray(event.source.value))
            form.ffValue.text = '[object Array] | length: ' + event.source.value.length;
        else if (event.source.value !== null)
            form.ffValue.text = '' + event.source.value;
        else
            form.ffValue.text = '';
    };

    form.txtEmptyText.onActionPerformed = function (event) {
        formattedField.emptyText = form.txtEmptyText.text;
    };


    function onParsePercent(event) {
        var text = event.source.text;
        text = text.replace("%", "");
        var value = +text;
        if (isNaN(value)) {
            event.source.background = P.Color.PINK;
            return null;
        } else {
            event.source.background = null;
            return value / 100;
        }
    }

    function onFormatPercent(event) {
        var value = event.source.value;
        if (value !== null) {
            value *= 100;
            value = Math.round(value * 1e+10) / 1e+10;
            return value + ' %';
        } else {
            return '';
        }
    }

    function onParseCurrency(event) {
        var text = event.source.text;
        text = text.replace("$", "");
        var value = +text;
        if (isNaN(value)) {
            event.source.background = P.Color.PINK;
            return null;
        } else {
            event.source.background = null;
            return value;
        }
    }

    function onFormatCurrency(event) {
        if (event.source.value !== null) {
            var value = event.source.value;
            value = Math.round(value * 100) / 100;
            return value + " $";
        } else {
            return '';
        }
    }

    function onParseArray(event) {
        var value = event.source.text;
        value = value.replace(/\s/gi, '');
        value = value.split(',');
        if (value) {
            event.source.background = null;
            return value;
        } else {
            event.source.background = P.Color.PINK;
            return null;
        }
    }

    function onFormatArray(event) {
        return event.source.value !== null ? event.source.value.join(', ') : '';
    }

    function onParseEmail(event) {
        var value = event.source.text;
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value)) {
            event.source.background = null;
            event.source.toolTipText = "";
            return value;
        } else {
            event.source.background = P.Color.PINK;
            event.source.toolTipText = "Enter valid E-mail adress";
            return null;
        }
    }
    function onFormatEmail(event) {
        return event.source.value !== null ? event.source.value : event.source.text;
    }

    form.mcmbValueType.onValueChange = function (event) {
        formattedField.background = null;

        if (form.mcmbValueType.value.valueType === 'Percent') {
            formattedField.onParse = onParsePercent;
            formattedField.onFormat = onFormatPercent;
        } else if (form.mcmbValueType.value.valueType === 'Currency') {
            formattedField.onParse = onParseCurrency;
            formattedField.onFormat = onFormatCurrency;
        } else if (form.mcmbValueType.value.valueType === 'Array') {
            formattedField.onParse = onParseArray;
            formattedField.onFormat = onFormatArray;
        } else if (form.mcmbValueType.value.valueType === 'Email') {
            formattedField.onParse = onParseEmail;
            formattedField.onFormat = onFormatEmail;
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
