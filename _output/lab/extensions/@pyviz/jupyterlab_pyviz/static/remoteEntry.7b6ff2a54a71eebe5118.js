var _JUPYTERLAB;(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@pyviz/jupyterlab_pyviz"]=(()=>{"use strict";var e,r,t,n,o,a,i,l,u,s,d,f,p,c,h,v,y,b,m,g,j,w,S={462:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(218),t.e(979)]).then((()=>()=>t(1979))),"./extension":()=>Promise.all([t.e(218),t.e(979)]).then((()=>()=>t(1979))),"./style":()=>t.e(534).then((()=>()=>t(8534)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n=t.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>o,init:()=>a})}},P={};function _(e){if(P[e])return P[e].exports;var r=P[e]={id:e,loaded:!1,exports:{}};return S[e].call(r.exports,r,r.exports,_),r.loaded=!0,r.exports}return _.m=S,_.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return _.d(r,{a:r}),r},_.d=(e,r)=>{for(var t in r)_.o(r,t)&&!_.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((r,t)=>(_.f[t](e,r),r)),[])),_.u=e=>(863===e?"@jupyter-widgets/controls":e)+"."+{80:"9f7417d8d295ae62fff4",191:"efb32e33fe3fa1892d73",218:"e126244cd2f9a88b7b68",534:"7ae7feced8e92c2e696c",863:"0e861eb711c99e3c041c",891:"e439e9d8455ef796b37c",979:"9e0a6baebb6cfd7e3ad6"}[e]+".js",_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@pyviz/jupyterlab_pyviz:",_.l=(t,n,o)=>{if(e[t])e[t].push(n);else{var a,i;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var s=l[u];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,_.nc&&a.setAttribute("nonce",_.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),i&&document.head.appendChild(a)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{_.S={};var e={},r={};_.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];_.o(_.S,t)||(_.S[t]={});var a=_.S[t],i="@pyviz/jupyterlab_pyviz",l=(e,r,t)=>{var n=a[e]=a[e]||{},o=n[r];(!o||!o.loaded&&i>o.from)&&(n[r]={get:t,from:i})},u=[];switch(t){case"default":l("@jupyter-widgets/jupyterlab-manager","3.0.0",(()=>Promise.all([_.e(80),_.e(891),_.e(218)]).then((()=>()=>_(2080))))),l("@pyviz/jupyterlab_pyviz","2.0.1",(()=>Promise.all([_.e(218),_.e(979)]).then((()=>()=>_(1979)))))}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var r=_.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!o:""==f!=o);if("u"==d){if(!u||"u"!=f)return!1}else if(u)if(f==d)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||d<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=_.S[e];if(!t||!_.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",d=(e,r,t,n)=>{var o=u(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(s(t,o,n)),h(e[t][o])},f=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},p=(e,r,t,n)=>{var a=e[t];return"No satisfying version ("+o(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(a).map((e=>e+" from "+a[e].from)).join(", ")},c=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(p(e,r,t,n))},h=e=>(e.loaded=1,e.get()),y=(v=e=>function(r,t,n,o){var a=_.I(r);return a&&a.then?a.then(e.bind(e,r,_.S[r],t,n,o)):e(r,_.S[r],t,n,o)})(((e,r,t,n)=>(i(e,t),h(f(r,t,n)||c(r,e,t,n)||l(r,t))))),b=v(((e,r,t,n)=>(i(e,t),d(r,0,t,n)))),m=v(((e,r,t,n,o)=>{var a=r&&_.o(r,t)&&f(r,t,n);return a?h(a):o()})),g={},j={6510:()=>b("default","@lumino/widgets",[1,1,16,1]),9129:()=>b("default","@lumino/disposable",[1,1,4,3]),3087:()=>b("default","@jupyterlab/docmanager",[1,3,0,0]),3242:()=>m("default","@jupyter-widgets/jupyterlab-manager",[1,3,0,0],(()=>Promise.all([_.e(80),_.e(891)]).then((()=>()=>_(2080))))),1797:()=>b("default","@lumino/coreutils",[1,1,5,3]),1840:()=>b("default","@jupyterlab/notebook",[1,3,0,0]),2898:()=>b("default","@jupyterlab/logconsole",[1,3,0,0]),3067:()=>b("default","@jupyterlab/settingregistry",[1,3,0,0]),3211:()=>b("default","@lumino/messaging",[1,1,4,3]),4834:()=>b("default","@jupyterlab/services",[1,6,0,0]),5351:()=>y("default","@jupyterlab/outputarea",[1,3,0,0]),6168:()=>b("default","@lumino/signaling",[1,1,4,3]),7082:()=>b("default","@jupyterlab/mainmenu",[1,3,0,0]),8562:()=>b("default","@lumino/properties",[1,1,2,3]),9837:()=>b("default","@jupyterlab/rendermime",[1,3,0,0]),9850:()=>b("default","@lumino/algorithm",[1,1,3,3]),608:()=>b("default","@lumino/domutils",[1,1,2,3])},w={218:[6510,9129],863:[608],891:[1797,1840,2898,3067,3211,4834,5351,6168,7082,8562,9837,9850],979:[3087,3242]},_.f.consumes=(e,r)=>{_.o(w,e)&&w[e].forEach((e=>{if(_.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,S[e]=t=>{delete P[e],t.exports=r()}},n=r=>{delete g[e],S[e]=t=>{throw delete P[e],r}};try{var o=j[e]();o.then?r.push(g[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={924:0};_.f.j=(r,t)=>{var n=_.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(218|863|891)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>{n=e[r]=[t,o]}));t.push(n[2]=o);var a=_.p+_.u(r),i=new Error;_.l(a,(t=>{if(_.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r)}};var r=(r,t)=>{for(var n,o,[a,i,l]=t,u=0,s=[];u<a.length;u++)o=a[u],_.o(e,o)&&e[o]&&s.push(e[o][0]),e[o]=0;for(n in i)_.o(i,n)&&(_.m[n]=i[n]);for(l&&l(_),r&&r(t);s.length;)s.shift()()},t=self.webpackChunk_pyviz_jupyterlab_pyviz=self.webpackChunk_pyviz_jupyterlab_pyviz||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),_(462)})();