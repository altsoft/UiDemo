/**
 * Datasource module is stateless data fetch/apply provider.
 * @author jskonst
 * @constructor 
 */
function Fonts() {
    var self = this, model = P.loadModel(this.constructor.name);

    this.schema = [
        // TODO : place schema definition here, such as:
        {name: "FontName", entity: "entityFontName", description: "Font Name", type: String, key: true},
        /*
         {name: "property1Name", entity: "optionalEntityName", description: "Some property1 description", type: String, key: true},
         {name: "property2Name", entity: "optionalEntityName", description: "Some property2 description", type: String, ref: {property: "referencedPropertyName", entity: "referencedEntityName"}},
         {name: "property3Name", entity: "optionalEntityName", description: "Some property3 description", type: Number, required: true},
         */
    ];
    /**
     * Method invoked by platypus runtime in data fetching purposes.
     * @param aParams Object, with properties as defined in this module's model's parameters.
     * Properties values are setted by platypus runtime engine.
     */
    this.fetch = function(aParams) {
        
        return [
            {FontName: "Arial"},
            {FontName: "Comic sans ms"},
            {FontName: "Courier"},
            {FontName: "Helvetica"},
            {FontName: "Lucida console"},
            {FontName: "Monospace"},
            {FontName: "Serif"},
            {FontName: "Tahoma"},
            {FontName: "Times New Roman"},
            {FontName: "Verdana"},
            {FontName: "Webdings"},
            {FontName: "Western"}
        ];
        // TODO : place data achivement code. Fetching from mongodb for example
        /*
         return [
         {property1Name: "object 1 name", property2Name: "object 1 description", property3Name: 2},
         {property1Name: "object 2 name", property2Name: "object 2 description", property3Name: 20},
         {property1Name: "object 3 name", property2Name: "object 3 description", property3Name: 12},
         {property1Name: "object 4 name", property2Name: "object 4 description", property3Name: 85},
         {property1Name: "object 5 name", property2Name: "object 5 description", property3Name: 20},
         ];
         */
    };

    /**
     * Method invoked by platypus runtime in data applying purposes.
     * @param aLog Array of changes - log of changes made by clients or server side data driven code to be applied.
     * @param aOnSuccess Succes callback for asynchronous version.
     * @param aOnSuccess Failure callback for asynchronous version.
     */
    this.apply = function (aLog, aOnSuccess, aOnFailure) {
        P.Logger.info("testData. aLog.length: " + aLog.length + ";");
        for (var i = 0; i < aLog.length; i++) {
            var change = aLog[i];
            /**
             * Common API of changes:
             *   var data = change.data;
             *   var keys = change.keys;
             *   var type = change.type; // 'Update', 'Delete', 'Insert'
             *   var entity = change.entity
             *   ...
             */
        }
        ;
        if (aOnSuccess) {
            // TODO : place here your asynchronous data storing code.
            // aOnSuccess(/*number of changed objects in backend*/);
        } else {
            // TODO : place here your synchronous data storing code.
            return /*number of changed objects in backend*/;
        }
    };

}
