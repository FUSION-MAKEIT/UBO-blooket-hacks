/// Astro.js
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.key === '`') {
        (function () {window.onbeforeunload = function() { return 1; };})()
    }
    if (event.ctrlKey && event.altKey && event.key === '1') {
        document.body.contentEditable = 'true'; document.designMode='on'; void 0
    }
    if (event.ctrlKey && event.altKey && event.key === '2') {
        document.body.contentEditable = 'false'; document.designMode='off'; void 0
    }
    if (event.ctrlKey && event.altKey && event.key === '3') {
        void(() => { try {alert(eval(prompt('JavaScript code to evaluate:') ?? (function(){throw null;}())))} catch (e) {e && alert(e);}})()
    }
    if (event.ctrlKey && event.altKey && event.key === '4') {
        var title = prompt("Title: ");
        var favicon = prompt("Favicon: ");
        document.title = title;
        var updatedFavicon = "https://www.google.com/s2/favicons?domain=" + favicon;
        if (!link) {link = document.createElement('link');link.rel = 'icon';document.getElementsByTagName('head')[0].appendChild(link);};
        link.href = faviconUrl;
    }
    if (event.ctrlKey && event.altKey && event.key === '5') {
        var src = prompt("URL:");
        document.write(`<iframe src="${src}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">`);
    }
    if (event.ctrlKey && event.altKey && event.key === '6') {
        var num=prompt("How Times Do You Want This Page To Show Up In your History?\Developed By:  Schoolcheats on  YT");
        done=false;
        x=window.location.href;
        for (var i=1; i<=num; i++){
            history.pushState(0, 0, i==num?x:i.toString());
            if(i==num){done=true}
        }
        if(done===true){
            alert("Flooding Successful!\n "+window.location.href+" \nIs Now In Your History "+num+(num==1?" time.":" Times. \nDeveloped By: Schoolcheats on  YT"))
        }
    }
    if (event.ctrlKey && event.altKey && event.key === '7') {
        if (typeof all === 'undefined') {let all = [];}
        all = document.getElementsByTagName('*');
        for (let i = 0; i < all.length; i++) {
            if(typeof all[i].style !== 'undefined'){
                all[i].style.fontFamily = "Arial";
            }
        }
        document.getElementsByTagName("html")[0].style.filter = "invert()";
        if (typeof elems === 'undefined') {let elems = [];}
        elems = document.querySelectorAll(" a, img, video");
        for (let j = 0 ; j < elems.length; j++) {
            if((elems[j].nodeName == "A" && (elems[j].style.background != "" || elems[j].style.backgroundImage != "")) || elems[j].nodeName != "A"){
                elems[j].style.filter = "invert()";
            }
        }
        void 0;
    }
    if (event.ctrlKey && event.altKey && event.key === '8') {
        var DELAY = 0;
        var autoClickerStyleElement = document.createElement("style");
        autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";
        document.body.appendChild(autoClickerStyleElement);
        function addClicker(e) {
            if(!e.isTrusted) {return;}
            if(e.target.classList.contains("auto-clicker-target")) {
                e.target.classList.remove("auto-clicker-target");
            } else {
                e.target.classList.add("auto-clicker-target");
            }
            document.body.removeChild(autoClickerStyleElement);
            document.body.removeEventListener("click", addClicker);
            e.preventDefault();
            autoClick(e.target);
        }
        function autoClick(element) {
            if(element.classList.contains("auto-clicker-target")) {
                element.click();
                setTimeout(function(){
                    autoClick(element);
                }, DELAY);
            }
        }
        document.body.addEventListener("click", addClicker, 0);
    }
    if (event.ctrlKey && event.altKey && event.key === '9') {
        void((function(){var a,b,c,e,f;f=0;a=document.cookie.split("; ");for(e=0;e<a.length&&a[e];e++){f++;for(b="."+location.host;b;b=b.replace(/^(?:%5C.|[^%5C.]+)/,"")){for(c=location.pathname;c;c=c.replace(/.$/,"")){document.cookie=(a[e]+"; domain="+b+"; path="+c+"; expires="+new Date((new Date()).getTime()-1e11).toGMTString());}}}alert("Expired "+f+" cookies");})())
    }
    if (event.ctrlKey && event.altKey && event.key === '0') {
        void(() => {prompt('Document outer HTML:',document.documentElement.outerHTML)})()
    }
    if (event.ctrlKey && event.altKey && event.key === '-') {
        void(() => {prompt('User agent:', navigator.userAgent)})()
    }
    if (event.ctrlKey && event.altKey && event.key === '=') {
        (function(){localStorage.clear();window.confirm('Succsesfully Cleared Local Storage!')}())
    }
    if (event.ctrlKey && event.altKey && event.key === 'h') {
        alert('ctrl + alt for all\n`: Prevent Page Closing\n1: Edit Page\n2: Stop Editing\n3: Run JavaScript\n4: Tabcloaker\n5: iFrame Cloaker\n6: History Flooder\n7: Dark Mode\n8: Auto Clicker\n9: Cookie Clearer\n0: Get HTML\n-: Get User Agent\n=: Clear Local Storage\n h: Help Message');
    }
});
