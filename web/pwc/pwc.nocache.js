function pwc(){
  var $intern_14 = '', $intern_11 = ' top: -1000px;', $intern_37 = '" for "gwt:onLoadErrorFn"', $intern_35 = '" for "gwt:onPropertyErrorFn"', $intern_20 = '");', $intern_38 = '#', $intern_50 = '&', $intern_78 = '.cache.js', $intern_40 = '/', $intern_46 = '//', $intern_67 = '2BF5389D96DB69845C8BBC6AA3D4F74D', $intern_68 = '399027190E3D28FBD6A5C241820F0DDE', $intern_69 = '50D0DCB78DFAB88A877495FBAE568897', $intern_70 = '699DFE191651FB0964498274D8E67F32', $intern_71 = '90EDE6F4F8E43CAA750E93F4E24E6F46', $intern_72 = '9DCFECA305BC08A50A0E6926DD3CD890', $intern_77 = ':', $intern_29 = '::', $intern_90 = ':moduleBase', $intern_13 = '<!doctype html>', $intern_15 = '<html><head><\/head><body><\/body><\/html>', $intern_32 = '=', $intern_39 = '?', $intern_73 = 'B2CB60791CE5E95EA9343BF33AE096B7', $intern_34 = 'Bad handler "', $intern_12 = 'CSS1Compat', $intern_18 = 'Chrome', $intern_74 = 'D54F8AD3052286ED6A847F46BCAE9866', $intern_75 = 'D81FD108DB4C4DC6DFA69B52FA8E40EB', $intern_17 = 'DOMContentLoaded', $intern_6 = 'DUMMY', $intern_76 = 'E8B5A740AE9C14638DEE906CB6085830', $intern_89 = 'Ignoring non-whitelisted Dev Mode URL: ', $intern_53 = 'Unexpected exception in locale detection, using default: ', $intern_52 = '_', $intern_88 = '__gwtDevModeHook:pwc', $intern_51 = '__gwt_Locale', $intern_45 = 'base', $intern_43 = 'baseUrl', $intern_1 = 'begin', $intern_7 = 'body', $intern_0 = 'bootstrap', $intern_42 = 'clear.cache.gif', $intern_31 = 'content', $intern_48 = 'default', $intern_85 = 'end', $intern_19 = 'eval("', $intern_87 = 'file:', $intern_61 = 'gecko', $intern_62 = 'gecko1_8', $intern_2 = 'gwt.codesvr.pwc=', $intern_3 = 'gwt.codesvr=', $intern_84 = 'gwt/standard/standard.css', $intern_36 = 'gwt:onLoadErrorFn', $intern_33 = 'gwt:onPropertyErrorFn', $intern_30 = 'gwt:property', $intern_25 = 'head', $intern_82 = 'href', $intern_86 = 'http:', $intern_58 = 'ie10', $intern_60 = 'ie8', $intern_59 = 'ie9', $intern_8 = 'iframe', $intern_41 = 'img', $intern_22 = 'javascript', $intern_9 = 'javascript:""', $intern_79 = 'link', $intern_83 = 'loadExternalRefs', $intern_47 = 'locale', $intern_49 = 'locale=', $intern_26 = 'meta', $intern_24 = 'moduleRequested', $intern_23 = 'moduleStartup', $intern_57 = 'msie', $intern_27 = 'name', $intern_10 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_4 = 'pwc', $intern_65 = 'pwc.devmode.js', $intern_44 = 'pwc.nocache.js', $intern_28 = 'pwc::', $intern_80 = 'rel', $intern_66 = 'ru', $intern_56 = 'safari', $intern_21 = 'script', $intern_64 = 'selectingPermutation', $intern_5 = 'startup', $intern_81 = 'stylesheet', $intern_16 = 'undefined', $intern_63 = 'unknown', $intern_54 = 'user.agent', $intern_55 = 'webkit';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_4, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_5, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  pwc.__sendStats = sendStats;
  pwc.__moduleName = $intern_4;
  pwc.__errFn = null;
  pwc.__moduleBase = $intern_6;
  pwc.__softPermutationId = 0;
  pwc.__computePropValue = null;
  pwc.__getPropMap = null;
  pwc.__gwtInstallCode = function(){
  }
  ;
  pwc.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  var __gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  var __gwt_getMetaProperty = function(){
    return null;
  }
  ;
  __propertyErrorFunction = null;
  var activeModules = $wnd.__gwt_activeModules = $wnd.__gwt_activeModules || {};
  activeModules[$intern_4] = {moduleName:$intern_4};
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function getInstallLocation(){
    setupInstallLocation();
    return frameDoc.getElementsByTagName($intern_7)[0];
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc.createElement($intern_8);
    scriptFrame.src = $intern_9;
    scriptFrame.id = $intern_4;
    scriptFrame.style.cssText = $intern_10 + $intern_11;
    scriptFrame.tabIndex = -1;
    $doc.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == $intern_12?$intern_13:$intern_14;
    frameDoc.write(doctype + $intern_15);
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_16) {
          return typeof $doc.body != $intern_16 && $doc.body != null;
        }
        return /loaded|complete/.test($doc.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_17, onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_17, onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code_0){
      function removeScript(body_0, element){
      }

      var docbody = getInstallLocation();
      var doc = getInstallLocationDoc();
      var script;
      if (navigator.userAgent.indexOf($intern_18) > -1 && window.JSON) {
        var scriptFrag = doc.createDocumentFragment();
        scriptFrag.appendChild(doc.createTextNode($intern_19));
        for (var i = 0; i < code_0.length; i++) {
          var c = window.JSON.stringify(code_0[i]);
          scriptFrag.appendChild(doc.createTextNode(c.substring(1, c.length - 1)));
        }
        scriptFrag.appendChild(doc.createTextNode($intern_20));
        script = doc.createElement($intern_21);
        script.language = $intern_22;
        script.appendChild(scriptFrag);
        docbody.appendChild(script);
        removeScript(docbody, script);
      }
       else {
        for (var i = 0; i < code_0.length; i++) {
          script = doc.createElement($intern_21);
          script.language = $intern_22;
          script.text = code_0[i];
          docbody.appendChild(script);
          removeScript(docbody, script);
        }
      }
    }

    pwc.onScriptDownloaded = function(code_0){
      setupWaitForBodyLoad(function(){
        installCode(code_0);
      }
      );
    }
    ;
    sendStats($intern_23, $intern_24);
    var script = $doc.createElement($intern_21);
    script.src = filename;
    $doc.getElementsByTagName($intern_25)[0].appendChild(script);
  }

  pwc.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  pwc.__installRunAsyncCode = function(code_0){
    var docbody = getInstallLocation();
    var script = getInstallLocationDoc().createElement($intern_21);
    script.language = $intern_22;
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_26);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_27), content;
      if (name_0) {
        name_0 = name_0.replace($intern_28, $intern_14);
        if (name_0.indexOf($intern_29) >= 0) {
          continue;
        }
        if (name_0 == $intern_30) {
          content = meta.getAttribute($intern_31);
          if (content) {
            var value_0, eq = content.indexOf($intern_32);
            if (eq >= 0) {
              name_0 = content.substring(0, eq);
              value_0 = content.substring(eq + 1);
            }
             else {
              name_0 = content;
              value_0 = $intern_14;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_33) {
          content = meta.getAttribute($intern_31);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_34 + content + $intern_35);
            }
          }
        }
         else if (name_0 == $intern_36) {
          content = meta.getAttribute($intern_31);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_34 + content + $intern_37);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    pwc.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_38);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_39);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_40, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_14;
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_41);
        img.src = url_0 + $intern_42;
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_43);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_14;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_21);
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_44) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_14;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_45);
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return $intern_14;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_46 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_14) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_14) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_14 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return pwc.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunc) {
        __propertyErrorFunc(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers[$intern_47] = function(){
      var locale = null;
      var rtlocale = $intern_48;
      try {
        if (!locale) {
          var queryParam = location.search;
          var qpStart = queryParam.indexOf($intern_49);
          if (qpStart >= 0) {
            var value_0 = queryParam.substring(qpStart + 7);
            var end = queryParam.indexOf($intern_50, qpStart);
            if (end < 0) {
              end = queryParam.length;
            }
            locale = queryParam.substring(qpStart + 7, end);
          }
        }
        if (!locale) {
          locale = __gwt_getMetaProperty($intern_47);
        }
        if (!locale) {
          locale = $wnd[$intern_51];
        }
        if (locale) {
          rtlocale = locale;
        }
        while (locale && !__gwt_isKnownPropertyValue($intern_47, locale)) {
          var lastIndex = locale.lastIndexOf($intern_52);
          if (lastIndex < 0) {
            locale = null;
            break;
          }
          locale = locale.substring(0, lastIndex);
        }
      }
       catch (e) {
        alert($intern_53 + e);
      }
      $wnd[$intern_51] = rtlocale;
      return locale || $intern_48;
    }
    ;
    values[$intern_47] = {'default':0, ru:1};
    providers[$intern_54] = function(){
      var ua = navigator.userAgent.toLowerCase();
      var makeVersion = function(result){
        return parseInt(result[1]) * 1000 + parseInt(result[2]);
      }
      ;
      if (function(){
        return ua.indexOf($intern_55) != -1;
      }
      ())
        return $intern_56;
      if (function(){
        return ua.indexOf($intern_57) != -1 && $doc.documentMode >= 10;
      }
      ())
        return $intern_58;
      if (function(){
        return ua.indexOf($intern_57) != -1 && $doc.documentMode >= 9;
      }
      ())
        return $intern_59;
      if (function(){
        return ua.indexOf($intern_57) != -1 && $doc.documentMode >= 8;
      }
      ())
        return $intern_60;
      if (function(){
        return ua.indexOf($intern_61) != -1;
      }
      ())
        return $intern_62;
      return $intern_63;
    }
    ;
    values[$intern_54] = {gecko1_8:0, ie10:1, ie8:2, ie9:3, safari:4};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    pwc.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    pwc.__computePropValue = computePropValue;
    $wnd.__gwt_activeModules[$intern_4].bindings = pwc.__getPropMap;
    sendStats($intern_0, $intern_64);
    if (isHostedMode()) {
      return computeUrlForResource($intern_65);
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers([$intern_66, $intern_62], $intern_67);
      unflattenKeylistIntoAnswers([$intern_48, $intern_56], $intern_68);
      unflattenKeylistIntoAnswers([$intern_66, $intern_60], $intern_69);
      unflattenKeylistIntoAnswers([$intern_48, $intern_60], $intern_70);
      unflattenKeylistIntoAnswers([$intern_66, $intern_59], $intern_71);
      unflattenKeylistIntoAnswers([$intern_48, $intern_59], $intern_72);
      unflattenKeylistIntoAnswers([$intern_66, $intern_56], $intern_73);
      unflattenKeylistIntoAnswers([$intern_66, $intern_58], $intern_74);
      unflattenKeylistIntoAnswers([$intern_48, $intern_58], $intern_75);
      unflattenKeylistIntoAnswers([$intern_48, $intern_62], $intern_76);
      strongName = answers[computePropValue($intern_47)][computePropValue($intern_54)];
      var idx = strongName.indexOf($intern_77);
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + 1), 10);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    pwc.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_78);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    function installOneStylesheet(stylesheetUrl){
      if (!__gwt_stylesLoaded[stylesheetUrl]) {
        var l = $doc.createElement($intern_79);
        l.setAttribute($intern_80, $intern_81);
        l.setAttribute($intern_82, computeUrlForResource(stylesheetUrl));
        $doc.getElementsByTagName($intern_25)[0].appendChild(l);
        __gwt_stylesLoaded[stylesheetUrl] = true;
      }
    }

    sendStats($intern_83, $intern_1);
    installOneStylesheet($intern_84);
    sendStats($intern_83, $intern_85);
  }

  processMetas();
  pwc.__moduleBase = computeScriptBase();
  activeModules[$intern_4].moduleBase = pwc.__moduleBase;
  var filename = getCompiledCodeFilename();
  if ($wnd) {
    var devModePermitted = !!($wnd.location.protocol == $intern_86 || $wnd.location.protocol == $intern_87);
    $wnd.__gwt_activeModules[$intern_4].canRedirect = devModePermitted;
    if (devModePermitted) {
      var devModeKey = $intern_88;
      var devModeUrl = $wnd.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log($intern_89 + devModeUrl);
        }
        devModeUrl = $intern_14;
      }
      if (devModeUrl && !$wnd[devModeKey]) {
        $wnd[devModeKey] = true;
        $wnd[devModeKey + $intern_90] = computeScriptBase();
        var devModeScript = $doc.createElement($intern_21);
        devModeScript.src = devModeUrl;
        var head = $doc.getElementsByTagName($intern_25)[0];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[0]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats($intern_0, $intern_85);
  installScript(filename);
  return true;
}

pwc.succeeded = pwc();
