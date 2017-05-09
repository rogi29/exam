var $$modules={};if("undefined"==typeof module&&"undefined"!=typeof window)var module={};if("undefined"==typeof __filename)var __filename="";!function(t,e,r){var n="$Export";"object"==typeof exports&&"undefined"!=typeof e?e.exports=r():("undefined"!=typeof window?t=window:"undefined"!=typeof global&&(t=global),t[n]=r())}(this,module,function(){"use strict";function t(t,n,o){return $$modules[n]={obj:t,path:o},{include:e(t,n),init:r(t,n,[])}}function e(t,e){return function(n){return{init:r(t,e,n)}}}function r(t,e,r){return function(e,n,o){"undefined"!=typeof window?e=window:"undefined"!=typeof global&&(e=global);var i=function(t,n){var i,u=[],l=l||t||{},s=s||n||l.document||{};if(r.length<1)return o.apply(e,u);for(var a=0;a<r.length;a++)switch(r[a]){case"window":u[a]=l;break;case"document":u[a]=s;break;default:if(i=$$modules[r[a]],"undefined"==typeof i)throw new Error("`"+r[a]+"` module doesn't exists!");u[a]=e[i.obj]||require(i.path)(l,s)}return o.apply(e,u)};"object"==typeof exports&&"undefined"!=typeof n?n.exports=i:typeof window!=={}?e[t]=i(window,document):e[t]=i}}return{module:t}});var $Export=$Export||require("../export");$Export.module("Element","Element","./window/element").include(["window"]).init(this,module,function(t){return t.Element||{prototype:{}}});var $Export=$Export||require("../export");$Export.module("NodeList","NodeList","./window/nodes").include(["window"]).init(this,module,function(t){return t.NodeList||{prototype:{}}});var $Export=$Export||require("../export");$Export.module("CSSStyleSheet","CSSStyleSheet","./window/style").include(["window"]).init(this,module,function(t){return t.CSSStyleSheet||{prototype:{}}});var $Export=$Export||require("../export");$Export.module("HTMLAllCollection","HTMLAllCollection","./window/html").include(["window"]).init(this,module,function(t){return t.HTMLAllCollection||function(){return{prototype:{}}}});var $Export=$Export||require("./export");$Export.module("Ruddy","@core","./core").include(["window","document","HTMLAllCollection"]).init(this,module,function(t,e,r){var n={},o={},i=$Export.module,u={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img",input:"input"},l=Object.assign||function(t){"use strict";if(null===t)throw new TypeError("Cannot convert undefined or null to an object");t=Object(t);for(var e=1;e<arguments.length;e++){var r=arguments[e];if(null!==r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s=function(t){return"object"==typeof t||"function"==typeof t},a=function(t){return"function"==typeof t},c=Array.isArray||function(t){return t&&t.constructor===Array||""+t!==t&&"[object Array]"=={}.toString.call(t)},p=function(t){return"string"==typeof t},f=function(t){return"number"==typeof t},d=Number.isInteger||function(t){return f(t)&&isFinite(t)&&Math.round(t)===t},h=function(t){return f(t)&&Math.round(t)!==t},y=function(t){return"[object Date]"===Object.prototype.toString.call(t)},m=function(t){return"boolean"==typeof t},g=function(e){var r=Object.prototype.toString.call(e);return"NodeList"in t&&e instanceof t.NodeList||"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(r)&&d(e.length)&&(0===e.length||v(e[0])&&e[0].nodeType>0)},v=function(t){return t&&(t.nodeName||t.tagName||t.className||t.id)&&t!=e?!0:!1},E=function(t){return t==e},w=function(t){if(typeof e==={})return!1;var r,n=e.createElement(u[t]||"div");return t="on"+t,(r=t in n)||(n.setAttribute(t,"return;"),r="function"==typeof n[t]),n=null,r};return{cache:n,events:o,assign:l,"export":i,isObj:s,isFunc:a,isArr:c,isEl:v,isStr:p,isNum:f,isInt:d,isFloat:h,isDate:y,isBool:m,isNodes:g,isDoc:E,isEvent:w}});var $Export=$Export||require("../core/export");$Export.module("$arr","@array","../globals/array").include(["@core"]).init(this,module,function(t){"use strict";var e=function(e){if(t.isArr(e)===!1)throw new TypeError("Array type - argument provided is not an array type");var r={isEmpty:function(){return 0===e.length},keys:function(){var t=[],r=0;if(e.isEmpty())return[];for(r;r<e.length;r++)t[r]=r;return t},join:Array.prototype.join||function(t){var r=e,n=r.length,o=0,i="",t=t||",";for(o;o!==n-1;o++)i+=r[o]+t;return i+=r[n-1]},push:Array.prototype.push||function(){var t=arguments,r=t.length,n=0;for(n;n!==r;n++)e[e.length]=t[n];return e.length},pop:Array.prototype.pop||function(){var t;return e.length<=0?void 0:(t=e[e.length-1],e.length=e.length-1,t)},reverse:Array.prototype.reverse||function(){var t=e.length-1,r=0,n=0,o=[];for(t;t>=n;t--)o[r]=e[t],r++;return o},concat:Array.prototype.concat||function(){var t=arguments,r=t.length,n=0,o=$arr(e).join();for(n;n!==r;n++)o+=","+t[n];return o.split(",")},forEach:Array.prototype.forEach||function(t,r){if("function"!=typeof t)throw new TypeError(t+" is not a function");var n=e.join().split(","),r=r||e,o=n.length,i=0;for(i;i!==o;i++)t.call(r,n[i],i,n)},map:Array.prototype.map||function(t,r){var n,o=e,i=[],u=0,l=o.length;for(u;u!=l;u++)n=o[u],i[u]=r?t.call(r,n,u,o):t(n,u,o);return i},reduce:Array.prototype.reduce||function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=e,o=n.length>>>0,i=0;if(2==arguments.length)r=arguments[1];else{for(;o>i&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;o>i;i++)i in n&&(r=t(r,n[i],i,n));return r},indexOf:Array.prototype.indexOf||function(t){var e=this.length>>>0,r=Number(arguments[1])||0;for(r=0>r?Math.ceil(r):Math.floor(r),0>r&&(r+=e);e>r;r++)if(r in this&&this[r]===t)return r;return-1},first:function(){return e.length<=0?void 0:e[0]},last:function(){return e.length<=0?void 0:e[e.length-1]}};return t.assign(e,r)};return e});var $Export=$Export||require("../core/export");$Export.module("$str","@string","../globals/string").include(["@core"]).init(this,module,function(t){"use strict";var e=function(e){if(t.isStr(e)===!1)throw new TypeError("String type - argument provided is not a string type");var r={isEmpty:function(){var t=e;return null===t||""===t||0===t.length},toLowerCase:String.prototype.toLowerCase||function(){return e.replace(/[a-z]/g,function(t){return String.fromCharCode(-33&t.charCodeAt(0))})},toUpperCase:String.prototype.toUpperCase||function(){return e.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))})},ucfirst:function(){return e.charAt(0).toUpperCase()+this.substr(1)},pregMatch:function(t){var r=new RegExp(t);return r.test(e)},escapeHTML:function(){var t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML},toHTML:function(){var t=document.createElement("div");t.innerHTML=e;var r=t.childNodes[0];return r?r.nodeValue:""}};return t.assign(e,r)};return e});var $Export=$Export||require("../core/export");$Export.module("$num","@number","../globals/number").include(["@core"]).init(this,module,function(t){"use strict";var e=function(e){if(t.isNumber(e)===!1)throw new TypeError("Number type - argument provided is not an number type");var r={isInteger:function(){return t.isInt(e)},isFloat:function(){return t.isFloat(e)}};return t.assign(e,r)};return e});var $Export=$Export||require("../core/export");$Export.module("$int","@integer","../globals/integer").include(["@core"]).init(this,module,function(t){"use strict";var e=function(e){if(t.isInt(e)===!1)throw new TypeError("Integer type - argument provided is not an integer type");var r={};return t.assign(e,r)};return e});var $Export=$Export||require("../core/export");$Export.module("$float","@float","../globals/float").include(["@core"]).init(this,module,function(t){var e=function(e){if(t.isFloat(e)===!1)throw new TypeError("Float type - argument provided is not an float type");var r={};return t.assign(e,r)};return e});var $Export=$Export||require("../core/export");$Export.module("$obj","@object","../globals/object").include(["@core"]).init(this,module,function(t){"use strict";var e=function(e){if(t.isObj(e)===!1)throw new TypeError("Object type - argument provided is not an object type");var r={hasOwnProperty:function(t){return Object.hasOwnProperty(this,t)&&!Object.hasOwnProperty(r,t)},isEmpty:function(){var t;for(t in e)if(r.hasOwnProperty.call(e,t))return!1;return!0},keys:function(){var t,n=[],o=0;if(e.isEmpty())return[];for(t in e)r.hasOwnProperty.call(e,t)||(n[o]=t,o++);return n},values:function(){var t,n=[],o=0;if(e.isEmpty())return[];for(t in e)r.hasOwnProperty.call(e,t)||(n[o]=e[t],o++);return n},push:function(){var t,r,n=arguments;for(r in n)t=n[r],e[t.key]=t.value;return $obj(e).keys().length},map:function(t,r){var n,o,i=e,u=[];for(n in i)o=i[n],u[n]=r?t.call(r,o,n,i):t(o,n,i);return u},forEach:function(t,n){if("function"!=typeof t)throw new TypeError(t+" is not a function");var o,n=n||e;for(o in e)r[o]||t.call(n,e[o],o,e)},assign:function(t,r){return e.prototype[t]=r},extend:function(t){t=t.prototype;for(var r in t)e.prototype[r]||(e.prototype[r]=t[r]);return e}};return t.assign(e,r)};return e});var $Export=$Export||require("../core/export");$Export.module("$func","@function","../globals/function").include(["@core"]).init(this,module,function(t){"use strict";var e=function(e){if(t.isFunc(e)===!1)throw new TypeError("Function type - argument provided is not a function type");var r={assign:function(t,e){return e.prototype[t]=e},bind:Function.prototype.bind||function(t){function r(){}var n=[].slice,o=n.call(arguments,1),i=e,u=function(){return i.apply(e instanceof r?e:t||window,o.concat(n.call(arguments)))};return r.prototype=e.prototype,u.prototype=new r,u}};return t.assign(e,r)};return e});var $Export=$Export||require("../core/export");$Export.module("$nodes","@nodes","../globals/nodes").include(["NodeList","@core"]).init(this,module,function(t,e){"use strict";var r=function(r){if(e.isNodes(r)===!1)throw new TypeError("Nodes type - argument provided is not a nodeList type");var n={isEmpty:function(){return 0===r.length},keys:function(){var t=[],e=0;if(r.isEmpty())return[];for(e;e<r.length;e++)t[e]=e;return t},indexOf:function(t){var e,n=r;for(e in n)if(t==n[e])return e;return-1},concat:function(){var t=arguments,e=t.length,n=0,o=$nodes(r).join();for(n;n!==e;n++)o+=","+t[n];return o.split(",")},forEach:t.prototype.forEach||function(t,e){if("function"!=typeof t)throw new TypeError(t+" is not a function");var n=r,e=e||r,o=n.length,i=0;for(i;i!==o;i++)t.call(e,n[i],i,n)},first:function(){if(0===r.length)throw new TypeError("Cant retrieve first element of an nodeList array with no initial value");return r[0]},last:function(){if(0===r.length)throw new TypeError("Cant retrieve last element of an empty nodeList with no initial value");return r[r.length-1]},toArray:function(){var t=[],e=0;for(e;e<r.length;e++)t[e]=r[e];return r=t}};return e.assign(r,n)};return r});var $Export=$Export||require("../core/export");$Export.module("$css","@style","../globals/style").include(["@core","window","document","Element","CSSStyleSheet"]).init(this,module,function(t,e,r,n,o){"use strict";var i=function(e){var r={getRule:function(t){return e.cssRules[t]},getCSSText:function(t){return e.cssRules[t].cssText},insertRule:o.prototype.insertRule||function(t,r){var n;return t=t.replace(/\s+/g,""),n=t.split("{"),e.addRule(n[0],n[1].replace("}",""),r),r},deleteRule:o.prototype.deleteRule||function(t){return e.removeRule(t)},ruleToJson:function(t){t=t.replace(/\s+/g,""),t=t.split("{");var e=t[0],r='{"selector":"'+e+'","'+t[1].replace(":",'":"').replace(";}",'"}').replace(";",'","');return r},jsonToRule:function(t){var e=JSON.parse(t).selector,r=e+t.replace(/"/g,"").replace(/,/g,";").replace("selector:"+e+";","");return r},ruleToObj:function(t){t=t.replace(/\s+/g,""),t=t.split("{");var e={},r=null,n=0,o=t[0],i=t[1].replace("}").split(";");for(e[o]={},n;n!=i.length;n++)""!==i[n]&&(r=i[n].split(":"),e[o][r[0]]=r[1]);return e},objToRule:function(t){var e,r,n="";for(e in t){n+=e+"{";for(r in t[e])n+=r+":"+t[e][r]}return n+"}"}};return t.assign(e,r)};return i});var $Export=$Export||require("../core/export");$Export.module("$doc","@document","../globals/document").include(["@core","window","document","Element"]).init(this,module,function(t,e,r,n){"use strict";var o=function(o){if(t.isDoc(o)===!1)throw new TypeError("Document type - argument provided is not a document variable");var i={querySelectorAll:r.querySelectorAll||function(t,e,n,o,i){var u=r,l=u.createStyleSheet();for(i=u.all,e=[],t=t.replace(/\[for\b/gi,"[htmlFor").split(","),n=t.length;n--;){for(l.addRule(t[n],"visiblility:visible",0),o=i.length;o--;)i[o].currentStyle.visiblility&&e.push(i[o]);l.removeRule(0)}return e},querySelector:r.querySelector||function(t){var e=i.querySelectorAll.call(r,t);return e.length?e[0]:null},createStyle:function(t){var e,n=r.createElement("style");return n.title=t,e=r.getElementsByTagName("head")[0].appendChild(n),e.sheet},getStyle:function(t){var e,n=r.styleSheets,o=n.length;for(e=o;e--;)if(n[e].title==t)return n[e];return!1},addEventListener:r.addEventListener||function(t,e){return o.attachEvent("on"+t,e)},dispatchEvent:n.prototype.dispatchEvent||function(t){return o.fireEvent("on"+t.type,t)},customEvent:function(t,n){function o(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=r.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}return"function"==typeof e.CustomEvent?new o(t,n):(e.CustomEvent=o,new o(t,n))},mousePosition:function(t,e){var n=t.pageX||t.clientX+r.body.scrollLeft+r.documentElement.scrollLeft||(t.changedTouches?t.changedTouches[0].pageX:0),o=t.pageY||t.clientY+r.body.scrollTop+r.documentElement.scrollTop||(t.changedTouches?t.changedTouches[0].pageY:0),i={x:Math.round(n),y:Math.round(o)};return e&&i[e]?i[e]:i},size:function(t){var e=Math.max(r.documentElement.clientWidth,r.body.scrollWidth,r.documentElement.scrollWidth,r.body.offsetWidth,r.documentElement.offsetWidth)||0,n=Math.max(r.documentElement.clientHeight,r.body.scrollHeight,r.documentElement.scrollHeight,r.body.offsetHeight,r.documentElement.offsetHeight)||0,o={width:e,height:n};return t&&o[t]?o[t]:o},viewport:function(t){var n=e.innerWidth||(r.documentElement?r.documentElement.clientWidth:r.body.clientWidth)||0,o=e.innerHeight||(r.documentElement?r.documentElement.clientHeight:r.body.clientHeight)||0,i={width:n,height:o};return t&&i[t]?i[t]:i},getComputedStyle:function(){function t(e,r,n,o){var i,u=r[n],l=parseFloat(u),s=u.split(/\d/)[0];return o=null!==o?o:/%|em/.test(s)&&e.parentElement?t(e.parentElement,e.parentElement.currentStyle,"fontSize",null):16,i="fontSize"==n?o:/width/i.test(n)?e.clientWidth:e.clientHeight,"em"==s?l*o:"in"==s?96*l:"pt"==s?96*l/72:"%"==s?l/100*i:l}function r(t,e){var r="border"==e?"Width":"",n=e+"Top"+r,o=e+"Right"+r,i=e+"Bottom"+r,u=e+"Left"+r;t[e]=(t[n]==t[o]==t[i]==t[u]?[t[n]]:t[n]==t[i]&&t[u]==t[o]?[t[n],t[o]]:t[u]==t[o]?[t[n],t[o],t[i]]:[t[n],t[o],t[i],t[u]]).join(" ")}function n(e){var n=e.currentStyle,o=this,i=t(e,n,"fontSize",null);for(var u in n)/width|height|margin.|padding.|border.+W/.test(u)&&"auto"!==o[u]?o[u]=t(e,n,u,i)+"px":"styleFloat"===u?o["float"]=n[u]:o[u]=n[u];return r(o,"margin"),r(o,"padding"),r(o,"border"),o.fontSize=i+"px",o}function o(t){return new n(t)}return"getComputedStyle"in e?e.getComputedStyle.apply(e,arguments):(n.prototype={constructor:n,getPropertyPriority:function(){},getPropertyValue:function(t){return this[t]||""},item:function(){},removeProperty:function(){},setProperty:function(){},getPropertyCSSValue:function(){}},o)}};return t.assign(o,i)};return o});var $Export=$Export||require("../core/export");$Export.module("$el","@element","../globals/element").include(["window","document","Element","@core","@document","@nodes"]).init(this,module,function(t,e,r,n,o,i){"use strict";var u=function(t){if(n.isEl(t)===!1)throw new TypeError("Element type - argument provided is not an element type");var u={querySelectorAll:r.prototype.querySelectorAll||function(r){var n,u=t.childNodes,l=[],s=0;for(n=0;n<u.length;n++)-1!==i(o(e).querySelectorAll(r)).indexOf(u[n])&&(l[s]=u[n],s++);return l},querySelector:r.prototype.querySelector||function(e){var r=$el(t).querySelectorAll(e);return r.length?r[0]:null},addEventListener:r.prototype.addEventListener||function(e,r){return t.attachEvent("on"+e,r)},dispatchEvent:r.prototype.dispatchEvent||function(e){return t.fireEvent("on"+e.type,e)},getAttribute:r.prototype.getAttribute||function(e){var r,n=t.attributes;for(r=n.length;r--;)if(n[r].name==e)return n[r].value;return null},setAttribute:r.prototype.setAttribute||function(e,r){var n,o=t.attributes;for(n=o.length;n--;)if(o[n].name==e)return void(o[n].value=r);o[o.length]={},o[o.length][e]={}}};return n.assign(t,u)};return u});var $Export=$Export||require("../core/export");$Export.module("$r","@ruddy","../globals/ruddy").include(["window","document","@core","@object","@function","@element","@document","@nodes","@style"]).init(this,module,function(t,e,r,n,o,i,u,l,s){"use strict";var a=r.cache.$r={},c=u(e),p=l("undefined"==typeof c.all?c.getElementsByTagName("*"):c.all),f=(s(c.createStyle("ruddyjs")),n(function(t){if(!(this instanceof f))return new f(t);var e,n=t;if(r.isEl(n)&&(n=p.indexOf(t)),a[n]){var o=a[n];this.el=o.el,this.param=o.param,this.index=o.index}else r.isEl(t)?(e=i(t),t=n):r.isStr(t)?(e=l(c.querySelectorAll(t)),n=1==e.length?p.indexOf(e.first()):t,e=1==e.length?e.first():e):r.isInt(t)?(e=p[t]?p[t]:null,n=t):(e=t,n=JSON.stringify(t)||t),this.el=e,this.param=t,this.index=n,a[n]={el:this.el,param:this.param,index:this.index}}));return f.assign("find",o(function(t){var e,r,n,o=this.param+":"+t,i=this.param;return a[o]?f(o):(r=l(c.querySelectorAll(i+" "+t)),1==r.length?(e=r.first(),n=p.indexOf(e)||o):n=o,a[o]={el:e,param:o,index:n,rule:null},f(o))})),f.assign("each",o(function(t){var e=this.el;return r.isArr(e)||r.isNodes(e)?(e.forEach.call(e,t,this),this):(t.call(this,e,0,e),this)})),f.assign("html",o(function(t){var e=this.el;if(r.isEl(e)===!1)throw new TypeError("$r `this.el` is not an element");return t?r.isFunc(t)?e.innerHTML=t.call(e):e.innerHTML=t:r.assign(e.innerHTML,{append:function(t){return r.isFunc(t)?e.innerHTML+=t.call(e):e.innerHTML+=t}})})),f.assign("attribute",o(function(t,e){var n,o=this.el;if(r.isEl(o)===!1)throw new TypeError("$r `this.el` is not an element");return e?o.setAttribute(t,e.toString()):(n=o.getAttribute(t)||"",r.assign(n,{append:function(e){return o.setAttribute(t,n+e.toString())},remove:function(){return o.removeAttribute(t)}}))})),f.assign("value",o(function(t){var e=this.el;if(r.isEl(e)===!1)throw new TypeError("$r `this.el` is not an element");return t?e.value=t.toString():r.assign(e.value,{append:function(t){return e.value+=" "+t}})})),f.assign("id",o(function(t){var e=this.el;if(r.isEl(e)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return t?e.id=t.toString():e.id})),f.assign("class",o(function(t){var e=this.el;if(r.isEl(e)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return t?e.className=t.toString():e.className})),f.assign("append",function(t,e){var n=this.el;if(r.isEl(n)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return e?n.insertBefore(t,e.nextSibling||null):n.appendChild(t)}),f.assign("prepend",function(t,e){var n=this.el;if(r.isEl(n)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return e||(e=n.firstChild),n.insertBefore(t,e)}),f.assign("replace",function(t){var e=this.el;if(r.isEl(e)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return e.parentNode.replaceChild(t,e)}),f.assign("remove",function(){var t=this.el;if(r.isEl(t)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return t.parentNode.removeChild(t)}),f.assign("parent",function(){var t=this.el;if(r.isEl(t)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return f(t.parentNode)}),f.assign("sibling",function(){var t=this.el;if(r.isEl(this.el)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return f(t.nextSibling)}),f.assign("childs",function(){var t=this.el;if(r.isEl(this.el)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return t.childNodes}),f.assign("contains",function(t){var e=this.el;if(r.isEl(this.el)===!1)throw new TypeError("$r `this.el` is not an `Element` type");return e.contains(t)}),f.assign("createRule",o(function(t){var e=t.insertRule(this.param+"{}",t.cssRules.length);return a[this.param].rule=this.rule=t.getRule(e),e})),f.assign("css",o(function(t,e){var r=this.rule;return t+="",e?r.style[t]=e:r.style[t]})),f.assign("style",o(function(t,e){var r=this.el;return e?r.style[t]=e:$str(r.style[t]).isEmpty()?c.getComputedStyle(r).getPropertyValue(t):r.style[t]})),f.assign("on",o(function(e,n,o){var i,u=this,l=this.el,s=0;return e in r.events?void(l.calls=r.events[e].call(u,l,n,o)):void l.addEventListener(e,function(e){e=e||t.event,i=e.target||e.srcElement,s++,n.call(u,e,i,l,s)},!1)})),f.assign("position",o(function(r){var n,o,i,u,l,s,a,c="getBoundingClientRect"in this.el?this.el.getBoundingClientRect():{top:0,left:0},p=e.body,f=e.documentElement;return o=t.pageYOffset||f.scrollTop||p.scrollTop,i=t.pageXOffset||f.scrollLeft||p.scrollLeft,u=f.clientTop||p.clientTop||0,l=f.clientLeft||p.clientLeft||0,s=c.left+i-l,a=c.top+o-u,n={x:Math.round(s)||0,y:Math.round(a)||0},r&&r in n?n[r]:n})),f.assign("size",o(function(t){var e=parseInt(this.style("width"))||this.el.offsetWidth||0,r=parseInt(this.style("height"))||this.el.offsetHeight||0,n={width:e,height:r};return t&&n[t]?n[t]:n})),f.assign("getTranslate",o(function(){var t,e=this.style("transform");if(e&&(t=e.match(/translate\((.*)px, (.*)px\)/)?e.match(/(translate)\((.*)px, (.*)px\)/):e.match(/translate(X|Y)\((.*)px\)/)),null!==t)switch(t[1]){case"X":return{x:parseInt(t[2])||0,y:0};case"Y":return{x:0,y:parseInt(t[2])||0};default:return{x:parseInt(t[2])||0,y:parseInt(t[3])||0}}return{x:parseInt(this.style("left"))||0,y:parseInt(this.style("top"))||0}})),f.assign("setTranslate",o(function(t,r){return"transform"in e.body.style?(this.style("transform","translate("+t+"px, "+r+"px)"),this):(this.style("top",r+"px"),this.style("left",t+"px"),this)})),f.assign("setTranslateX",o(function(t){return"transform"in e.body.style?(this.style("transform","translateX("+t+"px)"),this):(this.style("left",t+"px"),this)})),f.assign("setTranslateY",o(function(t){return"transform"in e.body.style?(this.style("transform","translateY("+t+"px)"),this):(this.style("left",t+"px"),this)})),f});
