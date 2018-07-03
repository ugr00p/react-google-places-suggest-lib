!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactGooglePlacesSuggest=t(require("react")):e.ReactGooglePlacesSuggest=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var r=n(3);e.exports=r.default||r},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){y&&d&&(y=!1,d.length?g=d.concat(g):v=-1,g.length&&i())}function i(){if(!y){var e=o(u);y=!0;for(var t=g.length;t;){for(d=g,g=[];++v<t;)d&&d[v].run();v=-1,t=g.length}d=null,y=!1,a(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,g=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new s(e,t)),1!==g.length||y||o(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.geocodeReverse=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(9),c=r(s),l=n(8),f=r(l),p=function(e){function t(){var e,n,r,u;o(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={coordinate:null,googleMaps:null,focusedSuggestIndex:0,selectedLabel:"",suggests:[]},r.handleSelectSuggest=function(e){var t=r.props.onSelectSuggest;r.geocodeSuggest(e.description,function(){r.setState({selectedLabel:e.description,suggests:[]},function(){t(e,r.state.coordinate)})})},r.updateSuggests=function(e){var t=r.props,n=t.googleMaps,o=t.suggestTypes,a=t.suggestComponentRestrictions,u=new n.places.AutocompleteService;return e?void u.getPlacePredictions({input:e,types:o,componentRestrictions:a},function(e){return e?void r.setState({focusedSuggestIndex:0,suggests:e}):void r.setState({suggests:[]})}):void r.setState({suggests:[]})},r.geocodeSuggest=function(e,t){var n=r.props.googleMaps,o=new n.Geocoder;o.geocode({address:e},function(o,a){if(a===n.GeocoderStatus.OK){var u=o[0].geometry.location,i={latitude:u.lat(),longitude:u.lng(),title:e,formatted_address:o[0].formatted_address};r.setState({coordinate:i},t)}})},r.handleKeyDown=function(e){var t=r.state,n=t.focusedSuggestIndex,o=t.suggests;o.length>0&&("Enter"!==e.key&&"ArrowUp"!==e.key&&"ArrowDown"!==e.key||e.preventDefault(),"Enter"===e.key?r.handleSelectSuggest(o[n]):"ArrowUp"===e.key?o.length>0&&n>0&&r.focusSuggest(n-1):"ArrowDown"===e.key&&o.length>0&&n<o.length-1&&r.focusSuggest(n+1))},r.focusSuggest=function(e){return r.setState({focusedSuggestIndex:e})},r.renderNoResults=function(){return r.props.textNoResults&&c.default.createElement("li",{className:"placesSuggest_suggest"},r.props.textNoResults)},r.renderDefaultSuggest=function(e){var t=e.description,n=e.structured_formatting,r=n.main_text_matched_substrings.shift(),o=null;return r&&(o={before:t.substr(0,r.offset),matched:t.substr(r.offset,r.length),after:t.substr(r.offset+r.length)}),c.default.createElement("div",null,c.default.createElement("span",{className:"placesSuggest_suggestLabel"},o?c.default.createElement("span",null,o.before.length>0?c.default.createElement("span",null,o.before):null,c.default.createElement("span",{className:"placesSuggest_suggestMatch"},o.matched),o.after.length>0?c.default.createElement("span",null,o.after):null):t))},u=n,a(r,u)}return u(t,e),i(t,[{key:"componentWillMount",value:function(){this.updateSuggests(this.props.search)}},{key:"componentWillReceiveProps",value:function(e){this.updateSuggests(e.search)}},{key:"renderSuggest",value:function e(t){var e=this.props.renderSuggest;return e?e(t):this.renderDefaultSuggest(t)}},{key:"renderSuggests",value:function(){var e=this,t=this.props,n=t.baseClassName,r=t.activeClassName,o=t.isDropdownOpen,a=this.state,u=a.focusedSuggestIndex,i=a.suggests;return o?c.default.createElement("ul",{className:"placesSuggest_suggests"},i.length>0?i.map(function(t,o){return c.default.createElement("li",{key:o,className:n+" "+(u===o&&r),onClick:function(){return e.handleSelectSuggest(t)}},e.renderSuggest(t))}):this.renderNoResults()):""}},{key:"render",value:function(){var e=this.state.selectedLabel,t=this.props,n=t.children,r=t.search;return c.default.createElement("div",{className:"placesSuggest",onKeyDown:this.handleKeyDown},n,r&&e!==r&&this.renderSuggests())}}]),t}(c.default.PureComponent);p.propTypes={children:f.default.any.isRequired,googleMaps:f.default.object.isRequired,onSelectSuggest:f.default.func,renderSuggest:f.default.func,search:f.default.string,suggestTypes:f.default.array,suggestComponentRestrictions:f.default.object,textNoResults:f.default.string,baseClassName:f.default.string,activeClassName:f.default.string,isDropdownOpen:f.default.bool},p.defaultProps={onSelectSuggest:function(){},search:"",suggestTypes:[],suggestComponentRestrictions:{country:"au"},textNoResults:"No results",baseClassName:"placesSuggest_suggest",activeClassName:"placesSuggest_suggest-active",isDropdownOpen:!1};t.geocodeReverse=function(e,t,n){var r=t.location,o=new e.Geocoder;o.geocode({location:r},function(t,r){if(r===e.GeocoderStatus.OK){var o=t[0].geometry.location,a=o.lat,u=o.lng,i={latitude:a(),longitude:u(),title:t[0].formatted_address};n(i)}})};t.default=p},function(e,t){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,i,s=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var l in r)a.call(r,l)&&(s[l]=r[l]);if(o){i=o(r);for(var f=0;f<i.length;f++)u.call(r,i[f])&&(s[i[f]]=r[i[f]])}}return s}},function(e,t,n){(function(t){"use strict";function r(e,n,r,i,s){if("production"!==t.env.NODE_ENV)for(var c in e)if(e.hasOwnProperty(c)){var l;try{if("function"!=typeof e[c]){var f=Error((i||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw f.name="Invariant Violation",f}l=e[c](n,c,i,r,null,a)}catch(e){l=e}if(!l||l instanceof Error||o((i||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var p=s?s():"";o("Failed "+r+" type: "+l.message+(null!=p?p:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var a=n(2),u={};o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(1))},function(e,t,n){"use strict";function r(){}var o=n(2);e.exports=function(){function e(e,t,n,r,a,u){if(u!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){(function(t){"use strict";function r(){return null}var o=n(4),a=n(2),u=n(5),i=function(){};"production"!==t.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function s(e){var t=e&&(k&&e[k]||e[P]);if("function"==typeof t)return t}function c(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function f(e){function r(r,s,c,f,p,d,g){if(f=f||R,d=d||c,g!==a){if(n){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=f+":"+c;!o[v]&&u<3&&(i("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[v]=!0,u++)}}return null==s[c]?r?new l(null===s[c]?"The "+p+" `"+d+"` is marked as required "+("in `"+f+"`, but its value is `null`."):"The "+p+" `"+d+"` is marked as required in "+("`"+f+"`, but its value is `undefined`.")):null:e(s,c,f,p,d)}if("production"!==t.env.NODE_ENV)var o={},u=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function p(e){function t(t,n,r,o,a,u){var i=t[n],s=T(i);if(s!==e){var c=j(i);return new l("Invalid "+o+" `"+a+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return f(t)}function d(){return f(r)}function g(e){function t(t,n,r,o,u){if("function"!=typeof e)return new l("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){var s=T(i);return new l("Invalid "+o+" `"+u+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<i.length;c++){var f=e(i,c,r,o,u+"["+c+"]",a);if(f instanceof Error)return f}return null}return f(t)}function y(){function t(t,n,r,o,a){var u=t[n];if(!e(u)){var i=T(u);return new l("Invalid "+o+" `"+a+"` of type "+("`"+i+"` supplied to `"+r+"`, expected a single ReactElement."))}return null}return f(t)}function v(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var u=e.name||R,i=N(t[n]);return new l("Invalid "+o+" `"+a+"` of type "+("`"+i+"` supplied to `"+r+"`, expected ")+("instance of `"+u+"`."))}return null}return f(t)}function h(e){function n(t,n,r,o,a){for(var u=t[n],i=0;i<e.length;i++)if(c(u,e[i]))return null;var s=JSON.stringify(e);return new l("Invalid "+o+" `"+a+"` of value `"+u+"` "+("supplied to `"+r+"`, expected one of "+s+"."))}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV?i("Invalid argument supplied to oneOf, expected an instance of array."):void 0,r)}function m(e){function t(t,n,r,o,u){if("function"!=typeof e)return new l("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],s=T(i);if("object"!==s)return new l("Invalid "+o+" `"+u+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an object."));for(var c in i)if(i.hasOwnProperty(c)){var f=e(i,c,r,o,u+"."+c,a);if(f instanceof Error)return f}return null}return f(t)}function b(e){function n(t,n,r,o,u){for(var i=0;i<e.length;i++){var s=e[i];if(null==s(t,n,r,o,u,a))return null}return new l("Invalid "+o+" `"+u+"` supplied to "+("`"+r+"`."))}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV?i("Invalid argument supplied to oneOfType, expected an instance of array."):void 0,r;for(var o=0;o<e.length;o++){var u=e[o];if("function"!=typeof u)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+_(u)+" at index "+o+"."),r}return f(n)}function w(){function e(e,t,n,r,o){return E(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return f(e)}function S(e){function t(t,n,r,o,u){var i=t[n],s=T(i);if("object"!==s)return new l("Invalid "+o+" `"+u+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `object`."));for(var c in e){var f=e[c];if(f){var p=f(i,c,r,o,u+"."+c,a);if(p)return p}}return null}return f(t)}function O(e){function t(t,n,r,u,i){var s=t[n],c=T(s);if("object"!==c)return new l("Invalid "+u+" `"+i+"` of type `"+c+"` "+("supplied to `"+r+"`, expected `object`."));var f=o({},t[n],e);for(var p in f){var d=e[p];if(!d)return new l("Invalid "+u+" `"+i+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=d(s,p,r,u,i+"."+p,a);if(g)return g}return null}return f(t)}function E(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(E);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!E(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!E(a[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function T(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function j(e){if("undefined"==typeof e||null===e)return""+e;var t=T(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function N(e){return e.constructor&&e.constructor.name?e.constructor.name:R}var k="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",R="<<anonymous>>",I={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(),arrayOf:g,element:y(),instanceOf:v,node:w(),objectOf:m,oneOf:h,oneOfType:b,shape:S,exact:O};return l.prototype=Error.prototype,I.checkPropTypes=u,I.PropTypes=I,I}}).call(t,n(1))},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},a=!0;e.exports=n(7)(o,a)}else e.exports=n(6)()}).call(t,n(1))},function(t,n){t.exports=e}])});
//# sourceMappingURL=index.js.map