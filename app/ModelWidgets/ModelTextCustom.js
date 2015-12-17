/**
 * 
 * @author user
 */
function ModelTextCustom() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    self.getDemoComponent = function () {
        return mdlText;
    };
    var fieldsList = [{field: 'cursor.firstname', valueType: '', format: 'name'},
        {field: 'cursor.lastname', valueType: '', format: 'name'},
        {field: 'cursor.address', valueType: '', format: 'address'},
        {field: 'cursor.city', valueType: '', format: 'name'},
        {field: 'cursor.telephone', valueType: Number, format: '###########'},
        {field: 'cursor.email', valueType: '', format: 'email'}];

    var mdlText = new P.ModelFormattedField();
    mdlText.data = model.qAllOwners;
    mdlText.field = "cursor.firstname";
    mdlText.height = 30;
    mdlText.width = 300;
    form.txtData.text = 'model.qAllOwners';
    form.mcField.displayList = fieldsList;
    form.mcField.displayField = 'field';

    function onParseName(event) {
        return event.text;
    }

    function onFormatName(event) {
        return event.value !== null ? event.value.charAt(0).toUpperCase() + event.value.slice(1) : "";
    }

    function onParseEmail(event) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (re.test(event.text)) {
            mdlText.background = P.Color.WHITE;
        } else {
            mdlText.background = P.Color.PINK;
        }
        return event.text;
    }

    function onFormatEmail(event) {
        return event.value;
    }
    
    function onParseAddress(event) {
        return event.text;
    }

    function onFormatAddress(event) {
        return event.value !== null ? event.value.charAt(0).toUpperCase() + event.value.slice(1) : "";
    }

    form.mcField.onValueChange = function (event) {
        if (form.mcField.value) {
            mdlText.background = P.Color.WHITE;
            switch (form.mcField.value.format) {
                case 'name':
                {
                    mdlText.onParse = onParseName;
                    mdlText.onFormat = onFormatName;
                    break;
                }
                case 'address':
                {
                    mdlText.onParse = onParseAddress;
                    mdlText.onFormat = onFormatAddress;
                    break;
                }
                case 'email':
                {
                    mdlText.onParse = onParseEmail;
                    mdlText.onFormat = onFormatEmail;
                    break;
                }
                default :
                {
                    mdlText.onParse = null;
                    mdlText.onFormat = null;
                }
            }
            mdlText.valueType = form.mcField.value.valueType;
            mdlText.field = form.mcField.value.field;
            mdlText.format = form.mcField.value.format;
            form.txtFormat.text = form.mcField.value.format;
        }
    };

    form.mcField.value = fieldsList[0];

    self.getViewComponent = function () {
        return mdlText;
    };

    self.showOnPanel = function (aPanel) {
        aPanel.add(form.view);
    };

    model.requery(function () {
        // TODO : place your code here
    });

    self.getFormHeight = function () {
        return form.view.height;
    };
}
