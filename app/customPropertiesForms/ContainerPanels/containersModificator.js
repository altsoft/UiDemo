/**
 * 
 * @author user

 */
function containersModificator(aDemoContainer, aPlaygroundContainer) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    var demoContainer = aDemoContainer;        
    var playgroundContainer = aPlaygroundContainer;
    self.show = function () {
        form.show();
    };

    var btnGroup = new P.ButtonGroup();
    btnGroup.add(form.rbInfo);
    btnGroup.add(form.rbModify);
    btnGroup.add(form.rbDelete);
    form.chkScroll.selected = true;
    form.rbInfo.selected = true;


    self.addScroll = function() {
        //Необходимо очистить рабочую облсть
        //Добавить панель Scroll'a
        //Добавить панель с элементами
        //var externalContainer = new P.AnchorsPane();
        playgroundContainer.clear();
        playgroundContainer.add(demoContainer, new P.Anchors(2, null, 2, 2, null, 2));
//        externalContainer.clear();
        playgroundContainer.clear();
        var scroll = new P.ScrollPane();
        scroll.width = 100;
        scroll.height = 100;
        scroll.background = new P.Color(P.Color.BLUE);
        scroll.add(demoContainer);
        playgroundContainer.add(scroll, new P.Anchors(2, null, 2, 2, null, 2));
    };

    self.deleteScroll = function() {
        //очистить рабочую область
        //добавитьпанель с элементами 
        playgroundContainer.clear();
        playgroundContainer.add(demoContainer, new P.Anchors(2, null, 2, 2, null, 2));
    };

    self.replaceDemoContainer = function(newDemoContainer){
      if(form.chkScroll.selected){
            demoContainer = newDemoContainer;
            self.addScroll();
      }else{
          self.deleteScroll();
      }  
    };

    function preparations() {
        self.addScroll();
    }

    model.requery(function () {
        // TODO : place your code here
    });


    self.isInformation = function () {
        return form.rbInfo.selected;
    };

    self.isModify = function () {
        return form.rbModify.selected;
    };

    self.isDelete = function () {
        return form.rbDelete.selected;
    };

    self.showOnPanel = function (aPanel) {
        preparations();
        aPanel.add(form.view);
    };

    form.chkScroll.onActionPerformed = function (event) {
        if (event.source.selected) {
            self.addScroll();
        } else {
            self.deleteScroll();
        }// TODO Добавьте здесь свой код
    };
}
