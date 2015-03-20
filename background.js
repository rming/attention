function getDomainFromUrl(url){
     var host = "null";
     if(typeof url == "undefined" || null == url)
          url = window.location.href;
     var regex = /.*\:\/\/([^\/]*).*/;
     var match = url.match(regex);
     if(typeof match != "undefined" && null != match)
          host = match[1];
     return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
     if(getDomainFromUrl(tab.url).toLowerCase()=="400.ayi800.com"){
          chrome.pageAction.show(tabId);
          if(changeInfo.status =="loading") {
               alert("Production!!!!!!!!!!!!!!!!!!!!");
          }
     }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
