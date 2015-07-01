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
    var valueTypes = [];

    function fillValueTypes() {
        var aType = new Object();
        aType.name = "Number";
        aType.value = 0;
"#,##0.###"

        valueTypes.push(aType);

        aType = new Object();
        aType.name = "Date";
        aType.value = 1;
"EEEE, MMMM d, yyyy"
        valueTypes.push(aType);

        aType = new Object();
        aType.name = "Time";
        aType.value = 2;
        "h:mm:ss a z"
        
        valueTypes.push(aType);

        aType = new Object();
        aType.name = "Percent";
        aType.value = 3;
        "#,##0%"
        valueTypes.push(aType);

        aType = new Object();
        aType.name = "Currency";
        aType.value = 4;
        "¤¤#,##0.00;(¤¤#,##0.00)"
        
        valueTypes.push(aType);

        aType = new Object();
        aType.name = "Mask";
        aType.value = 5;
        "###-####"
        valueTypes.push(aType);

        aType = new Object();
        aType.name = "Regexp";
        aType.value = 6;
        valueTypes.push(aType);

        aType = new Object();
        aType.name = "Custom...";
        aType.value = 7;
        valueTypes.push(aType);

    }

    self.setDemoComponent = function (aDemoComponent) {
        demoComponent = aDemoComponent;
    };

    function preparations() {
        textForm = new TextFieldForm(demoComponent);
        form.txtFormat.text = demoComponent.format;
        fillValueTypes();
        form.mcmbValueType.data = valueTypes;
        form.mcmbValueType.displayField = "name";
        form.mcmbValueType.displayList = valueTypes;
        form.mcmbValueType.field = "value";
    }

    self.show = function () {
        form.show();
    };

    self.showOnPanel = function (aPanel) {

        preparations();
        textForm.showOnPanel(aPanel);
        aPanel.add(form.view);
    };

    form.txtFormat.onActionPerformed = function () {
        demoComponent.format = form.txtFormat.text;
    };

//    form.formattedField.onParse = function () {
//        form.formattedField.valueType
//    };
//
//    form.formattedField.onRender = function () {
//
//    };

    form.mcmbValueType.onValueChange = function (event) {
        demoComponent.valueType = form.mcmbValueType.value.value;
    };

    demoComponent.onActionPerformed = function (event) {
        P.Logger.info(demoComponent.value);
    };


    form.button.onActionPerformed = function(event) {
        P.Logger.info(demoComponent.value);
    };
}
