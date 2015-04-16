var sessionStore;
/**
 * 
 * @author user
 * @public
 * @stateless
 */
function chatServer() {
    var self = this, model = P.loadModel(this.constructor.name);

    // TODO : place constructor code here
    
    self.onopen = function (session) {
        P.Logger.info("ID: " + session.id);
        if (sessionStore == null) {
            sessionStore = [];
        }
        session.onclose = function () {
            //переберем список сессий и удалим эту
            for (var i = 0; i < sessionStore.length; i++) {
                if (sessionStore[i] == session) {
                    sessionStore.splice(i, 1);
                }
            }
        };
        session.onmessage = function (message) {
            P.Logger.info("WebSocket Got message " + message.data);
            self.sendMessage(message.data);
        };
        session.onerror =  function (aError){
            P.Logger.info("Got Error " + aError);
        };
        sessionStore.push(session);
    };

//    var s = P.WebSocketSession();




    self.sendMessage = function (msg) {
        P.Logger.info("HTTP Got message" + msg);
        for (var i = 0; i < sessionStore.length; i++) {
            sessionStore[i].send(msg);
        }
    };

}

