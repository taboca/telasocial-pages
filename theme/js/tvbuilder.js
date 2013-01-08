
function handlerMove(e) { 
 	e.target.style.backgroundColor='#eee';
}

window.addEventListener('mousemove', handlerMove, false);

  function xpathBuilder(element) {
      path = new Array();
      if (element && element.id){
          path.push('//' + element.tagName.toLowerCase() + '[id="' + element.id + '"]');
      } else {  
          var tpath = "";
          for (; element && element.nodeType == 1; element = element.parentNode) {
            idx = 1;
            for (var sEl = element.previousSibling; sEl ; sEl = sEl.previousSibling)
                if(sEl.nodeType == 1 && sEl.tagName == element.tagName) idx++;
            xname = element.tagName.toLowerCase();
            if (idx > 1)
               xname += "[" + idx + "]";
            tpath = "/" + xname + tpath;
          }
          if(tpath.length > 0)
            path.push(tpath);

      }
      return path;
    };

