(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,a){"use strict";a.r(t),a(52);var n=a(12),r=a.n(n),i=a(0),c=a.n(i),s=a(158),l=a.n(s),o=a(156),m=a(161),u=a(166),d=a.n(u),f=function(e){function t(t){var a;a=e.call(this,t)||this,console.log(t);var n=t.location.href||"",r=d.a.parse(n,!0),i=null,c=!1;return"1"==r.query.noredirect&&(c=!0),void 0!=r.query.a&&void 0!=r.query.s&&void 0!=r.query.d&&void 0!=r.query.p&&(i=t.location.origin+"/home/"+t.location.search),a.state={noredirect:c,redirect:i},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;!0!==this.state.noredirect&&setTimeout(function(){window.location.href=e.state.redirect},5e3)},a.render=function(){var e=void 0===this.state.redirect?this.render_wrongPage():this.render_oauth();return c.a.createElement(o.a,null,c.a.createElement(l.a,{link:[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}]}),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"flax-fill"},c.a.createElement("div",{className:"header py-4"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"d-flex"},c.a.createElement("a",{className:"header-brand",href:"/"},"ALIS HackerToken")))))),c.a.createElement("div",{className:"my-3 my-md-5"},e),c.a.createElement(m.a,{items:[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}]}))},a.render_wrongPage=function(){return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"display-1 text-muted mb-5"},c.a.createElement("i",{className:"si si-exclamation"})," 404"),c.a.createElement("h1",{className:"h2 mb-3"},"お探しのページは見つかりませんでした。"),c.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-7"},"法定通貨に依存しない完全独自経済圏で好きなことを追求して生きていこう！"),c.a.createElement("a",{className:"btn btn-primary",href:"/"},c.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),"トップページへ戻る"))))},a.render_oauth=function(){var e=this.state.redirect;return console.log(e),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"display-1 text-muted mb-5"},c.a.createElement("i",{className:"si si-exclamation"})," 認証中"),c.a.createElement("h1",{className:"h2 mb-3"},"リダイレクト待ちです。少々お待ち下さい。"),c.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-7"},"自動的にリダイレクトされない場合は、下のボタンをクリックして手動で移動して下さい。"),c.a.createElement("a",{className:"btn btn-primary",href:e,style:{color:"white"}},c.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),"認証を続ける"),c.a.createElement("a",{href:e},e))))},t}(i.Component);t.default=f},152:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=a(151),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(152),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(31);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),c=a(8),s=a.n(c),l=a(158),o=a.n(l),m=a(154),u=function(e){var t=e.children;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},i.a.createElement("html",{lang:"en"})),t)},data:n})};u.propTypes={children:s.a.node.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=a(36),l=a(1),o=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(s.a,{location:t,pageResources:a})};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},161:function(e,t,a){"use strict";a(162),a(163),a(79),a(164);var n=a(12),r=a.n(n),i=a(0),c=a.n(i),s=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.items,a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var r;if(a){if(n>=t.length)break;r=t[n++]}else{if((n=t.next()).done)break;r=n.value}var i=r;e.push(c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{href:i.href,target:"_blank"},c.a.createElement("i",{className:"fab fa-"+i.key}))))}return c.a.createElement("footer",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("ul",{className:"list-inline social-buttons"},e)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("ul",{className:"list-inline quicklinks"})))))},t}(i.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-oauth-js-97c31840e4eb0d1cbccc.js.map