var es=['body','frameset','head'];
var u='http://www.soup.io/';
var fn='soup_bookmarklet_'+(Math.floor(Math.random()*100000));

window.open(u+'bookmarklet-loading.html',fn,'toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=400');

try {
    var s=document.createElement('script');
    s.setAttribute('src',u+'bookmarklet/js/'+ fn +'/5');
    for (var i=0; i<es.length; i++) {
        var e=document.getElementsByTagName(es[i])[0];
        if(e) {
            e.appendChild(s);
            break;
        }
    }}
catch(e) {
    alert("This doesn't work here.");
}

void(0);

