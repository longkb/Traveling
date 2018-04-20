var g=this,q=function(a,c){a=a.split(".");var b=g;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===c?b=b[d]&&b[d]!==Object.prototype[d]?b[d]:b[d]={}:b[d]=c},r=function(a,c){function b(){}b.prototype=c.prototype;a.o=c.prototype;a.prototype=new b;a.prototype.constructor=a;a.m=function(a,b,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return c.prototype[b].apply(a,e)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a))};r(t,Error);t.prototype.name="CustomError";var aa=function(a,c){for(var b=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<b.length;)d+=b.shift()+e.shift();return d+b.join("%s")},u=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},v=function(a,c){return a<c?-1:a>c?1:0};var w=function(a,c){c.unshift(a);t.call(this,aa.apply(null,c));c.shift()};r(w,t);w.prototype.name="AssertionError";var x=function(a,c){if(!a){var b="Assertion failed";if(c){b+=": "+c;var d=Array.prototype.slice.call(arguments,2)}throw new w(""+b,d||[]);}};var ba=Array.prototype.forEach?function(a,c,b){x(null!=a.length);Array.prototype.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&c.call(b,e[f],f,a)};var y;a:{var z=g.navigator;if(z){var A=z.userAgent;if(A){y=A;break a}}y=""}var B=function(a){return-1!=y.indexOf(a)};var da=function(a,c){var b=ca;Object.prototype.hasOwnProperty.call(b,a)||(b[a]=c(a))};var ea=B("Opera"),C=B("Trident")||B("MSIE"),fa=B("Edge"),D=B("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),E=-1!=y.toLowerCase().indexOf("webkit")&&!B("Edge"),ga=E&&B("Mobile"),F=function(){var a=g.document;return a?a.documentMode:void 0},G;
a:{var H="",I=function(){var a=y;if(D)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fa)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(E)return/WebKit\/(\S+)/.exec(a);if(ea)return/(?:Version)[ \/]?(\S+)/.exec(a)}();I&&(H=I?I[1]:"");if(C){var J=F();if(null!=J&&J>parseFloat(H)){G=String(J);break a}}G=H}
var K=G,ca={},L=function(a){da(a,function(){for(var c=0,b=u(String(K)).split("."),d=u(String(a)).split("."),e=Math.max(b.length,d.length),f=0;0==c&&f<e;f++){var h=b[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;c=v(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||v(0==h[2].length,0==l[2].length)||v(h[2],l[2]);h=h[3];l=l[3]}while(0==c)}return 0<=c})},M;var N=g.document;
M=N&&C?F()||("CSS1Compat"==N.compatMode?parseInt(K,10):5):void 0;var O;if(!(O=!D&&!C)){var P;if(P=C)P=9<=Number(M);O=P}O||D&&L("1.9.1");C&&L("9");var ha=B("Safari")&&!((B("Chrome")||B("CriOS"))&&!B("Edge")||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(B("iPhone")&&!B("iPod")&&!B("iPad")||B("iPad")||B("iPod"));var R=function(a){var c=window;if(ga&&ha&&c){c.focus();var b=0,d=null,d=c.setInterval(function(){a.closed||5==b?(c.clearInterval(d),Q(a)):(a.close(),b++)},150)}else a.close(),Q(a)},Q=function(a){if(!a.closed&&a.document&&a.document.body)if(a=a.document.body,x(null!=a,"goog.dom.setTextContent expects a non-null value for node"),"textContent"in a)a.textContent="Please close this window.";else if(3==a.nodeType)a.data="Please close this window.";else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=
a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data="Please close this window."}else{for(var c;c=a.firstChild;)a.removeChild(c);x(a,"Node cannot be null or undefined.");a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode("Please close this window."))}};var ia=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var c=a.substring(a.indexOf("://")+3),b=c.indexOf("/");-1!=b&&(c=c.substring(0,b));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var b="",d=c.indexOf(":");if(-1!=d){var e=c.substring(d+
1),c=c.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)b=":"+e}return a+"://"+c+b};var ja=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}function c(a){for(var c=h,b=0;64>b;b+=4)c[b/4]=a[b]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3];for(b=16;80>b;b++)a=c[b-3]^c[b-8]^c[b-14]^c[b-16],c[b]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],n=e[3],l=e[4],k,m,b=0;80>b;b++)40>b?20>b?(k=n^d&(f^n),m=1518500249):(k=d^f^n,m=1859775393):60>b?(k=d&f|n&(d|f),m=2400959708):(k=d^f^n,m=3395469782),k=((a<<5|a>>>27)&4294967295)+k+l+m+c[b]&4294967295,
l=n,n=f,f=(d<<30|d>>>2)&4294967295,d=a,a=k;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;e[3]=e[3]+n&4294967295;e[4]=e[4]+l&4294967295}function b(a,b){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,l=a.length;e<l;++e)d.push(a.charCodeAt(e));a=d}b||(b=a.length);d=0;if(0==k)for(;d+64<b;)c(a.slice(d,d+64)),d+=64,m+=64;for(;d<b;)if(f[k++]=a[d++],m++,64==k)for(k=0,c(f);d+64<b;)c(a.slice(d,d+64)),d+=64,m+=64}function d(){var a=[],d=8*m;56>k?b(l,56-k):b(l,
64-(k-56));for(var h=63;56<=h;h--)f[h]=d&255,d>>>=8;c(f);for(h=d=0;5>h;h++)for(var p=24;0<=p;p-=8)a[d++]=e[h]>>p&255;return a}for(var e=[],f=[],h=[],l=[128],p=1;64>p;++p)l[p]=0;var k,m;a();return{reset:a,update:b,digest:d,digestString:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};var la=function(a,c,b){var d=[],d=[c,a];ba(b,function(a){d.push(a)});return ka(d.join(" "))},ka=function(a){var c=ja();c.update(a);return c.digestString().toLowerCase()};var ma=function(a){var c=a||[];a=[];for(var b=0,d=c.length;b<d;++b){var e=String(c[b]||"");e&&a.push(e)}if(2>a.length)return null;c=a[0];b=gadgets.rpc.getOrigin(a[1]);if(b!==a[1])return null;a=a.slice(2);return(a=(b&&c?["session_state",la(ia(b),c,a||[])].join(" "):null)||"")&&a.substr(14)||null},na=function(a,c,b){this.i=String(a||"");this.f=String(c||"");this.a=String(b||"");this.b={};this.j=this.l=this.g=this.h="";this.c=null};
na.prototype.evaluate=function(){var a={},c="";try{c=String(document.cookie||"")}catch(h){}for(var c=c.split("; ").join(";").split(";"),b=0,d=c.length;b<d;++b){var e=c[b],f=e.indexOf("=");-1!=f?a[e.substr(0,f)]=e.substr(f+1):a[e]=null}this.b=a;if(this.b.SID)if(this.f=this.f.split(".")[0].split("@")[0],this.g=String(this.b[0==this.i.indexOf("https://")?"SAPISID":"APISID"]||""))if(a=0==gadgets.rpc.getOrigin(String(window.location.href)).indexOf("https://")?"SAPISID":"APISID",this.h=String(this.b[a]||
"")){c=String(this.b.LSOLH||"").split(":");b=c.length;if(1==b||4==b)this.l=c[0];if(3==b||4==b)a=String(c[b-3]||""),c=String(c[b-1]||""),b=this.h,a?(d=[a],b&&d.push(b),b=ka(d.join(" ")).substr(0,4)):b=null,b===c&&(this.j=a);this.a&&(a=this.a.indexOf("."),-1!=a&&(a=this.a.substr(0,a)||"",this.a=a+"."+ma([this.g,this.i,this.f,this.l,this.j,a]).substr(0,4)));a=ma([this.g,this.i,this.f,this.a]);this.a&&(a=a+"."+this.a);this.c=a}else this.c="";else this.c=""};
var oa=function(a,c,b){a=new na(a,c,b);a.evaluate();return a},S=function(a,c,b){b=b||pa(this);var d=null;if(a){a=String(a);var e=a.indexOf(".");-1!=e&&(d=a.substr(e+1))}c=oa(b,c,d).c;if(null==a||""==a)a=c==a;else if(null==c||c.length!=a.length)a=!1;else{d=b=0;for(e=a.length;d<e;++d)b|=a.charCodeAt(d)^c.charCodeAt(d);a=0==b}return a},T=function(a,c,b){b=b||pa(this);b=oa(b);if(String(a)!=b.c)throw Error("Unauthorized request");c=String(c);a=parseInt(c,10);String(a)==c&&0<=a?(c=b.j)?(c=c.split("|"),
a=c.length<=a?null:c[a]||null):a=null:a=null;return a},pa=function(a){a=String(a.origin||"");if(!a)throw Error("RPC has no origin.");return a};q("checkSessionState",S);q("getVersionInfo",T);var U,V,W,X,Y,Z,qa=window,ra=(window.location.href||qa.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/)||[];
"1"===decodeURIComponent(ra[ra.length-1]||"")?(W=function(a,c,b,d,e,f){U.send(c,e,d,f||gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)},X=function(a,c){U.register(a,c,gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)},Y=function(a){var c=/^(?:https?:\/\/)?[0-9.\-A-Za-z]+(?::\d+)?/.exec(a),c=gapi.iframes.makeWhiteListIframesFilter([c?c[0]:null]);W("..","oauth2callback",gadgets.rpc.getAuthToken(".."),void 0,a,c)},V=function(){sa()},Z=function(){W("..","oauth2relayReady",gadgets.rpc.getAuthToken(".."));X("check_session_state",
ta);X("get_versioninfo",ua)}):(W=function(a,c,b,d,e){gadgets.rpc.call(a,c+":"+b,d,e)},X=function(a,c){gadgets.rpc.register(a,c)},Y=function(a){gadgets.rpc.getTargetOrigin("..")==gadgets.rpc.getOrigin(a)&&W("..","oauth2callback",gadgets.rpc.getAuthToken(".."),void 0,a)},V=function(){Z()},Z=function(){W("..","oauth2relayReady",gadgets.rpc.getAuthToken(".."));X("check_session_state",S);X("get_versioninfo",T)});
var sa=function(){var a=Z;window.gapi.load("gapi.iframes",function(){U=gapi.iframes.getContext().getParentIframe();a()})},va=function(a){window.setTimeout(function(){Y(a)},1)},ta=function(a){if(a){var c=a.session_state;var b=a.client_id}return S(c,b,U.getOrigin())},ua=function(a){return T(a.xapisidHash,a.sessionIndex,U.getOrigin())},wa=!1,xa=!1,ya=function(){xa=!0;wa&&V()};q("oauth2callback",va);
q("oauth2verify",function(a,c){var b=window.open("javascript:void(0);",a),d;if(b&&!b.closed&&(d=b.oauth2callbackUrl))return window.timeoutMap=window.timeoutMap||{},window.realSetTimeout=window.realSetTimeout||window.setTimeout,window.setTimeout=function(a,c){try{var d=a,e=!1;a=function(){if(!e){e=!0;try{window.timeoutMap[String(k)]=void 0,delete window.timeoutMap[String(k)]}catch(m){}return d.call(this)}};var f=b.setTimeout(a,c);var k=window.realSetTimeout(a,c);window.timeoutMap[String(k)]=f;return k}catch(m){}return window.realSetTimeout(a,
c)},window.realClearTimeout=window.realClearTimeout||window.clearTimeout,window.clearTimeout=function(a){try{var c=window.timeoutMap[String(a)];c&&b.clearTimeout(c)}catch(h){}try{window.timeoutMap[String(a)]=void 0,delete window.timeoutMap[String(a)]}catch(h){}window.realClearTimeout(a)},va(String(d)),"keep_open"!=c&&R(b),!0;b&&!b.closed&&R(b);return!1});q("init",function(){wa=!0;xa&&V()});window.addEventListener?window.addEventListener("load",ya,!1):window.attachEvent("onload",ya);
