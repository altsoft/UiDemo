/**
 * Datasource module is stateless data fetch/apply provider.
 * @author user
 * @constructor 
 */
function ScriptData() {
    var self = this, model = P.loadModel(this.constructor.name);

    this.schema = [
        // TODO : place schema definition here, such as:

        {name: "property1Name", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true}


    ];

    this.params = [
        // TODO : place parameters definition here, such as:
        /*
         {name: "param1Name", type: String}
         {name: "param2Name", type: Date}
         */
    ];

    /**
     * Method invoked by platypus runtime in data fetching purposes.
     * @param aParams Object, with properties as defined in this.params.
     * Properties values are setted by platypus runtime engine.
     * @param aOnSuccess Succes callback for asynchronous version.
     * @param aOnFailure Failure callback for asynchronous version.
     */
    this.fetch = function (aParams, aOnSuccess, aOnFailure) {
        if (aOnSuccess) {
            // TODO : place here your asynchronous data achivement code. Fetching from mongodb for example
            // aOnSuccess(/*some data*/);
           return [
                {property1Name: 234}
//             {property1Name: "object 2 name", property2Name: "object 2 description", property3Name: 20},
//             {property1Name: "object 3 name", property2Name: "object 3 description", property3Name: 12},
//             {property1Name: "object 4 name", property2Name: "object 4 description", property3Name: 85},
//             {property1Name: "object 5 name", property2Name: "object 5 description", property3Name: 20},
            ];
        } else {
            // TODO : place here your synchronous data achivement code. Fetching from mongodb for example
            return
            [
                {property1Name: 123}
//             {property1Name: "object 2 name", property2Name: "object 2 description", property3Name: 20},
//             {property1Name: "object 3 name", property2Name: "object 3 description", property3Name: 12},
//             {property1Name: "object 4 name", property2Name: "object 4 description", property3Name: 85},
//             {property1Name: "object 5 name", property2Name: "object 5 description", property3Name: 20},
            ];
        }
    };

    /**
     * Method invoked by platypus runtime in data applying purposes.
     * @param aLog Array of changes - log of changes made by clients or server side data driven code to be applied.
     * @param aOnSuccess Succes callback for asynchronous version.
     * @param aOnFailure Failure callback for asynchronous version.
     */
    this.apply = function (aLog, aOnSuccess, aOnFailure) {
        P.Logger.info("ScriptData. aLog.length: " + aLog.length + ";");
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
