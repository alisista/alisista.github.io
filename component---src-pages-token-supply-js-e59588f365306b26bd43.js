(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,a){"use strict";a.r(t),a(33),a(158),a(159),a(160);var r=a(179),n=a.n(r),o=(a(54),a(79),a(53),a(83),a(168),a(180)),i=a.n(o),s=a(12),l=a.n(s),c=a(0),u=a.n(c),m=a(220),p=(a(170),a(193),a(163)),h=a.n(p),d=a(166),f=a.n(d),v=(a(167),a(175)),y=a(178),g=a(185),E=a(181),b=a(195),w=a(184),N=(a(173),a(215)),x=a.n(N);f.a.locale("ja");var k=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={page:1*(a.params.page||1)},a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=i()(n.a.mark(function e(){var t,a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getJSOND("5de1ey0yfod0iv9","aht");case 2:if(t=e.sent,a=h()(h()(t.history).keys()).chain().map(function(e){return 1*e}).sortBy(function(e){return e}).value(),void 0==t.history[this.state.page]){e.next=9;break}return e.next=7,this.getJSOND(t.history[this.state.page],"history_"+this.state.page);case 7:r=e.sent,this.set(Object.assign({},r,{pages:a}));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.componentDidUpdate=function(){},a.render=function(){var e,t=this.state.history,a=this.state.holders;if(void 0==t)e=u.a.createElement(g.a,null);else{var r,n=[],o=this.state.pages||[],i=Array.isArray(o),s=0;for(o=i?o:o[Symbol.iterator]();;){var l;if(i){if(s>=o.length)break;l=o[s++]}else{if((s=o.next()).done)break;l=s.value}var c=l;this.state.page===c?n.push(u.a.createElement("li",{className:"page-item active",style:{cursor:"default"}},u.a.createElement("span",{className:"page-link",style:{cursor:"default"}},c))):n.push(u.a.createElement("li",{className:"page-item"},u.a.createElement("a",{className:"page-link",href:"/token/supply/?page="+c},c)))}r=u.a.createElement("div",{className:"pt-2 text-center"},u.a.createElement("div",{className:"d-inline-block"},u.a.createElement("ul",{className:"pagination"},n)));var m=[],p=t,h=Array.isArray(p),d=0;for(p=h?p:p[Symbol.iterator]();;){var N;if(h){if(d>=p.length)break;N=p[d++]}else{if((d=p.next()).done)break;N=d.value}var k,L=N,S=a[L.uid];k="mission"==L.type?{join:"ハッカー部入部"}[L.mission_id]:L.reason,m.push(u.a.createElement("tr",null,u.a.createElement("td",{className:"text-muted d-none d-md-table-cell"},f()(L.date).format("YYYY MM/DD")),u.a.createElement("td",{className:"d-table-cell d-md-none text-center"},u.a.createElement("div",null,u.a.createElement("b",{className:"text-primary"},L.amount)),u.a.createElement("div",{className:"text-muted small"},f()(L.date).format("M/D"))),u.a.createElement("td",{className:"w-1"},u.a.createElement("a",{href:"https://twitter.com/"+S.screen_name,target:"_blank"},u.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+S.photoURL.replace(/_normal/,"")+")"}}))),u.a.createElement("td",{className:"d-none d-md-table-cell"},u.a.createElement("div",null,u.a.createElement("a",{className:"text-dark",href:"https://twitter.com/"+S.screen_name,target:"_blank"},S.displayName)),u.a.createElement("div",null,u.a.createElement("a",{className:"text-muted small",href:"https://twitter.com/"+S.screen_name,target:"_blank"},"@",S.screen_name))),u.a.createElement("td",{className:"d-none d-md-table-cell text-center"},u.a.createElement("b",{className:"text-primary"},L.amount)," ",u.a.createElement("span",{className:"text-muted",style:{fontSize:"12px"}},"AHT")),u.a.createElement("td",{className:"d-none d-md-table-cell"},k),u.a.createElement("td",{className:"d-md-none d-table-cell"},u.a.createElement("div",null,k),u.a.createElement("div",null,u.a.createElement("a",{className:"text-muted small",href:"https://twitter.com/"+S.screen_name,target:"_blank"},S.displayName)))))}e=u.a.createElement("div",null,u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table card-table table-striped table-vcenter"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"text-center d-none d-md-table-cell",style:{whiteSpace:"nowrap",width:"250px"}},u.a.createElement("a",{href:"https://wavesexplorer.com/tx/4PHPY8YjFKzRTfMtiMYGLL4VBdUGMhF45VxZNnT6K7fL",target:"_blank"},u.a.createElement("img",{src:x.a,className:"mr-2",style:{width:"30px"}}),u.a.createElement("b",null,"ALIS HackerToken"))),u.a.createElement("td",{className:"text-center d-table-cell d-md-none",style:{}},u.a.createElement("a",{href:"https://wavesexplorer.com/tx/4PHPY8YjFKzRTfMtiMYGLL4VBdUGMhF45VxZNnT6K7fL",target:"_blank"},u.a.createElement("b",null,"ALIS HackerToken"))),u.a.createElement("td",{className:"w-1 text-center",style:{whiteSpace:"nowrap"}},u.a.createElement("div",null,this.state.amount),u.a.createElement("div",{className:"text-muted small"},"供給数")),u.a.createElement("td",{className:"w-1 text-center",style:{whiteSpace:"nowrap"}},u.a.createElement("div",null,"75209200"),u.a.createElement("div",{className:"text-muted small"},"総発行数")),u.a.createElement("td",{className:"w-1 text-center d-none d-md-table-cell",style:{whiteSpace:"nowrap"}},u.a.createElement("div",null,"WAVES"),u.a.createElement("div",{className:"text-muted small"},"プラットフォーム")),u.a.createElement("td",null)))))),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table card-table table-striped table-vcenter"},u.a.createElement("thead",null,u.a.createElement("tr",{className:"d-none d-md-table-row"},u.a.createElement("th",null,"供給日"),u.a.createElement("th",{colSpan:"2"},"獲得者"),u.a.createElement("th",{className:"text-center",style:{whiteSpace:"nowrap"}},"供給額"),u.a.createElement("th",null,"供給事由")),u.a.createElement("tr",{className:"d-md-none d-table-row"},u.a.createElement("th",{style:{paddingLeft:"12px"}},"AHT"),u.a.createElement("th",{colSpan:"2"},"獲得者 / 事由"))),u.a.createElement("tbody",null,m)))),r)}return u.a.createElement(v.a,null,u.a.createElement(w.a,{title:"AHT供給ログ | ALISハッカー部",desc:"AHTの供給履歴です"}),u.a.createElement(E.a,{links:[{name:"ホーム",href:"/home/"},{name:"whoami",href:"/whoami/"},{name:"ランキング",href:"/rankings/alis/"},{name:"企画",href:"/rankings/note/?tag=alis"},{name:"ランキング",href:"/rangings/alis/"},{name:"マガジン",href:"/magazines/"}]}),u.a.createElement(b.a,{items:[{name:"供給履歴",href:"/token/supply/",icon:"coins"},{name:"トークン獲得者",href:"/token/winners/",icon:"users"}],location:this.props.location}),u.a.createElement("div",{className:"my-3 my-md-5"},u.a.createElement("div",{className:"container"},e)),u.a.createElement(y.a,null))},t}(m.a);t.default=k},162:function(e,t,a){var r;e.exports=(r=a(177))&&r.default||r},168:function(e,t){!function(t){"use strict";var a,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"==typeof e,u=t.regeneratorRuntime;if(u)c&&(e.exports=u);else{(u=t.regeneratorRuntime=c?e.exports:{}).wrap=b;var m="suspendedStart",p="suspendedYield",h="executing",d="completed",f={},v={};v[i]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(P([])));g&&g!==r&&n.call(g,i)&&(v=g);var E=k.prototype=N.prototype=Object.create(v);x.prototype=E.constructor=k,k.constructor=x,k[l]=x.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(E),e},u.awrap=function(e){return{__await:e}},L(S.prototype),S.prototype[s]=function(){return this},u.AsyncIterator=S,u.async=function(e,t,a,r){var n=new S(b(e,t,a,r));return u.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},L(E),E[l]="Generator",E[i]=function(){return this},E.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},u.values=P,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return s.type="throw",s.arg=e,t.next=r,n&&(t.method="next",t.arg=a),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),T(a),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;T(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=a),f}}}function b(e,t,a,r){var n=t&&t.prototype instanceof N?t:N,o=Object.create(n.prototype),i=new I(r||[]);return o._invoke=function(e,t,a){var r=m;return function(n,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===n)throw o;return R()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var s=_(i,a);if(s){if(s===f)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===m)throw r=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=h;var l=w(e,t,a);if("normal"===l.type){if(r=a.done?d:p,l.arg===f)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r=d,a.method="throw",a.arg=l.arg)}}}(e,a,i),o}function w(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}function N(){}function x(){}function k(){}function L(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){var t;this._invoke=function(a,r){function o(){return new Promise(function(t,o){!function t(a,r,o,i){var s=w(e[a],e,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(c).then(function(e){l.value=e,o(l)},i)}i(s.arg)}(a,r,t,o)})}return t=t?t.then(o,o):o()}}function _(e,t){var r=e.iterator[t.method];if(r===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=a,_(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=w(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=a),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=a,t.done=!0,t};return o.next=o}}return{next:R}}function R(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},173:function(e,t,a){e.exports=a.p+"static/404-fcdd980d4bec9f5e4f577268926c400b.jpg"},174:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var r=a(0),n=a.n(r),o=a(8),i=a.n(o),s=a(157),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(162),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(31);a.d(t,"parsePath",function(){return m.a});var p=n.a.createContext({}),h=function(e){return n.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},175:function(e,t,a){"use strict";var r=a(176),n=a(0),o=a.n(n),i=a(8),s=a.n(i),l=a(172),c=a.n(l),u=a(174),m=function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement("div",null,o.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},o.a.createElement("html",{lang:"en"})),t)},data:r})};m.propTypes={children:s.a.node.isRequired},t.a=m},176:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},177:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),i=a.n(o),s=a(32),l=a(1),c=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return n.a.createElement(s.a,{location:t,pageResources:a})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},178:function(e,t,a){"use strict";a(158),a(159),a(79),a(160);var r=a(12),n=a.n(r),o=a(0),i=a.n(o),s=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e=[],t=this.props.items||[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}],a=Array.isArray(t),r=0;for(t=a?t:t[Symbol.iterator]();;){var n;if(a){if(r>=t.length)break;n=t[r++]}else{if((r=t.next()).done)break;n=r.value}var o=n;e.push(i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{href:o.href,target:"_blank"},i.a.createElement("i",{className:"fab fa-"+o.key}))))}return i.a.createElement("footer",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("ul",{className:"list-inline social-buttons"},e)),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("ul",{className:"list-inline quicklinks"})))))},t}(o.Component);t.a=s},179:function(e,t,a){e.exports=a(187)},180:function(e,t){function a(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(r,n)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function s(e){a(i,n,o,s,l,"next",e)}function l(e){a(i,n,o,s,l,"throw",e)}s(void 0)})}}},181:function(e,t,a){"use strict";a(169),a(158),a(159),a(79),a(160);var r=a(12),n=a.n(r),o=a(0),i=a.n(o),s=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e,t=this;if(void 0!=this.props.user){var a=0,r=0;if(void 0!=this.props.serverInfo&&void 0!=this.props.serverInfo.amount&&void 0!=this.props.serverInfo.amount.aht){var n=this.props.serverInfo.amount.aht;a=""+n.earned;var o=n.earned+(n.tipped||0),s=n.paid+(n.tip||0);r=Math.round(1e10*(o-s))/1e10;var l=this.props.payment||[];void 0!=l[0]&&"requested"==l[0].status&&(r-=l[0].amount)}r=Math.round(1e8*r)/1e8,a=Math.round(1e8*a)/1e8,void 0!=this.props.user&&void 0==this.props.user.linkTo?e=i.a.createElement("a",{href:"#",className:"nav-link pr-0 leading-none","data-toggle":"dropdown"},i.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),i.a.createElement("span",{className:"ml-2 d-none d-lg-block"},i.a.createElement("span",{className:"text-default"},this.props.user.displayName),i.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||r+" AHT 保 / "+a+" AHT 獲"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(e=i.a.createElement("a",{href:this.props.user.linkTo,target:"_blank",className:"nav-link pr-0 leading-none"},i.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),i.a.createElement("span",{className:"ml-2 d-none d-sm-block"},i.a.createElement("span",{className:"text-default"},this.props.user.displayName),i.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||a+" AHT"))))}var c,u,m=[],p=this.props.links||[],h=Array.isArray(p),d=0;for(p=h?p:p[Symbol.iterator]();;){var f;if(h){if(d>=p.length)break;f=p[d++]}else{if((d=p.next()).done)break;f=d.value}var v=f;m.push(i.a.createElement("div",{className:"nav-item d-none d-md-flex"},i.a.createElement("a",{href:v.href,className:"btn btn-sm btn-outline-primary"},v.name)))}return void 0!=this.props.user&&void 0==this.props.user.linkTo?c=i.a.createElement("div",{className:"dropdown"},e,i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-arrow"},i.a.createElement("a",{className:"dropdown-item",onClick:function(){t.props.auth.logout()}},i.a.createElement("i",{className:"dropdown-icon fe fe-log-out"})," ログアウト"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(c=i.a.createElement("a",{href:this.props.user.linkTo},e)),!0!==this.props.noSubHeader&&(u=i.a.createElement("a",{href:"#",className:"header-toggler d-lg-none ml-3 ml-lg-0","data-toggle":"collapse","data-target":"#headerMenuCollapse"},i.a.createElement("span",{className:"header-toggler-icon"}))),i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"flax-fill"},i.a.createElement("div",{className:"header py-4"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("a",{className:"header-brand",href:"/"},this.props.title||"ALIS Hacker's Club"),i.a.createElement("div",{className:"d-flex order-lg-2 ml-auto"},m,c),u)))))},t}(o.Component);t.a=s},184:function(e,t,a){"use strict";a(158),a(159),a(79),a(160);var r=a(12),n=a.n(r),o=a(0),i=a.n(o),s=a(172),l=a.n(s),c=a(173),u=a.n(c),m=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e=[],t=this.props.title||"404ページ | ALISハッカー部",a=this.props.desc||"史上初！マミぃさんに300AHTお支払いで描いていただいたハッカー部のイラストです。";e.push({name:"twitter:card",content:"summary_large_image"}),e.push({name:"twitter:site",content:"@alishackers"}),e.push({name:"twitter:image",content:"https://alishackers.club"+u.a}),e.push({name:"twitter:description",content:a}),e.push({name:"twitter:title",content:t}),e.push({name:"og:title",content:t}),e.push({name:"og:image",content:"https://alishackers.club"+u.a}),e.push({name:"og:description",content:a}),e.push({name:"description",content:a}),e.push({name:"keywords",content:"ALIS, ALISハッカー部, ハッカー部, ALIS HackerToken, 独自経済圏, トークンエコノミー, 暗号通貨, cryptocurrency, ハッカー部トークン, WAVES, 仮想通貨"});var r=[];if(void 0!=this.props.links){var n=this.props.links,o=Array.isArray(n),s=0;for(n=o?n:n[Symbol.iterator]();;){var c;if(o){if(s>=n.length)break;c=n[s++]}else{if((s=n.next()).done)break;c=s.value}var m=c;r.push({rel:"stylesheet",type:"text/css",href:m})}}else r=[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}];return i.a.createElement(l.a,{title:t,link:r,meta:e})},t}(o.Component);t.a=m},185:function(e,t,a){"use strict";var r=a(12),n=a.n(r),o=a(0),i=a.n(o),s=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e=i.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-6"},this.props.message||"法定通貨に依存しない完全独自経済圏で好きなことを追求して生きていこう！");return this.props.no_message&&(e=null),i.a.createElement("div",{className:"page",style:{width:"100%"}},i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"container text-center"},i.a.createElement("div",{className:"display-1 text-muted mb-5",style:{fontSize:"40px"}},i.a.createElement("i",{className:"si si-exclamation"})," ",this.props.title||"データ取得中"),i.a.createElement("h1",{className:"h2 mb-4"},this.props.subtitle||"少々お待ち下さい..."),e,i.a.createElement("a",{className:"btn btn-primary",href:this.props.btn_link||"/"},i.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),this.props.btn_text||"トップページへ戻る"))))},t}(o.Component);t.a=s},187:function(e,t,a){var r=function(){return this}()||Function("return this")(),n=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=n&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=a(168),n)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},195:function(e,t,a){"use strict";a(169),a(158),a(159),a(79),a(160);var r=a(12),n=a.n(r),o=a(0),i=a.n(o),s=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e=this,t=[],a=function(){if(n){if(o>=r.length)return"break";s=r[o++]}else{if((o=r.next()).done)return"break";s=o.value}var a=s,l=void 0;void 0!=a.icon&&(l=i.a.createElement("i",{className:"mr-2 "+(a.fa_type||"fa")+" fa-"+a.icon}));var c=void 0;if(void 0!=a.href){var u="",m=e.props.location.pathname.toLowerCase();(a.active||m===a.href)&&(u="active");var p=a.href;c=i.a.createElement("a",{href:p,className:"nav-link "+u},l,a.name)}else{var h="";a.key===e.props.component.state.tab&&(h="active"),c=i.a.createElement("a",{onClick:function(){e.props.component.setState({tab:a.key},function(){void 0!=a.func&&a.func()})},className:"nav-link "+h},l,a.name)}t.push(i.a.createElement("li",{className:"nav-item",key:"topic-"+(a.key||"all")},c))},r=this.props.items,n=Array.isArray(r),o=0;for(r=n?r:r[Symbol.iterator]();;){var s;if("break"===a())break}return i.a.createElement("div",{className:"header collapse d-lg-flex p-0",id:"headerMenuCollapse"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("div",{className:"col-lg order-lg-first"},i.a.createElement("ul",{className:"nav nav-tabs border-0 flex-column flex-lg-row"},t)))))},t}(o.Component);t.a=s},215:function(e,t,a){e.exports=a.p+"static/alis_hackers-b0f73db538e1af4c194f9fc10871687e.png"},220:function(e,t,a){"use strict";var r=a(179),n=a.n(r),o=(a(36),a(168),a(180)),i=a.n(o),s=a(12),l=a.n(s),c=a(0),u=a(170),m=a.n(u),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).params={},void 0!=t.location.href&&(a.params=(m.a.parse(t.location.href,!0)||{query:{}}).query),a}l()(t,e);var a=t.prototype;return a.set=function(){var e=i()(n.a.mark(function e(t){var a=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){a.setState(t,e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.getJSOND=function(){var e=i()(n.a.mark(function e(t,a){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){window.$.getJSON("https://dl.dropboxusercontent.com/s/"+t+"/"+a+".json",function(t){e(t)})}));case 1:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),t}(c.Component);t.a=p}}]);
//# sourceMappingURL=component---src-pages-token-supply-js-e59588f365306b26bd43.js.map