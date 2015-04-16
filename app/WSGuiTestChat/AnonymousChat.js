/**
 * 
 * @author user
 */
function AnonymousChat() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var userName;
    var chat = new P.ServerModule("chatServer")
    form.txtMessage.value = "";
    form.panel.element.style.overflowY = "auto"
    model.requery(function () {
    });


    var webSocket = null;
    function addEventsListener() {
        var sTypes = "";
        var delimiter = "";

        if (webSocket) {
            webSocket.close();
            webSocket = null;
        }
        var wsProtocol = "ws:";
        if (window.location.protocol == 'https:')
            wsProtocol = "wss:";

        webSocket = new WebSocket(wsProtocol + "//" + window.location.host + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + "/chatServer");
        console.log(webSocket);
        webSocket.onopen = function () {
            P.Logger.info("onOpen");
        };

        webSocket.onerror = function () {
            P.Logger.info("onError");
        };

        webSocket.onmessage = function (aEventData) {
            P.Logger.info("onMessage");
            var data =JSON.parse(aEventData.data);
            var uNameBox = new P.FlowPane();
            uNameBox.element.innerHTML = "<div>" + data.user + " :</div";
            uNameBox.background = new P.Color("#bff1bc");
            form.panel.element.appendChild(uNameBox.element);
            var msgBox = new P.FlowPane();
            msgBox.element.innerHTML = data.value;
            msgBox.background = new P.Color("#bff1bc");
            form.panel.element.appendChild(msgBox.element);
            msgBox.element.style.marginBottom="3px";
            msgBox.element.scrollIntoView();
            
         };
        webSocket.onclose = function () {
            P.Logger.info("onClose");
        };
    }

    var uNameCallback = function (aName) {
        userName = aName;
        form.txtMessage.focus();
        form.toFront();
    };

    self.show = function () {
        var uNameForm = new askUserName();
        form.show();
        uNameForm.showModal(uNameCallback);
        addEventsListener();

    };

    form.btnSend.onActionPerformed = function (event) {
        var msg = {user:userName,value:form.txtMessage.value};
        webSocket.send(JSON.stringify(msg));
        form.txtMessage.value = "";
        form.txtMessage.focus();
    };
    
    form.txtMessage.onKeyPressed = function(event) {
        if (event.controlDown & (event.key ==13)){
            form.btnSend.onActionPerformed();
        }
    };



}
