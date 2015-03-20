    function bottomMask(){
         var maskWrap = window.document.createElement("div");
         maskWrap.setAttribute("style","width:100%;height:100%;position:fixed;bottom:0px;background:#f00;opacity:.1;z-index:-1;");
        /*
             var column = document.createElement("td");
             column.appendChild(document.createTextNode(objName.value));
             row.appendChild(column);
             maskWrap.appendChild(column);
        */
         htmlEles = window.document.getElementsByTagName('body');
         for (var i in htmlEles){
              if(typeof(htmlEles[i])==="object"){
                   htmlEles[i].appendChild(maskWrap);
              }
         }
    }
    if(location.host=="400.ayi800.com") {
        bottomMask();
    }


