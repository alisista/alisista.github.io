(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,a){"use strict";a.r(t),a(79),a(153),a(52);var n=a(12),s=a.n(n),r=a(51),o=a.n(r),i=a(0),c=a.n(i),l=a(158),d=a.n(l),u=a(161),m=a.n(u),h=a(162),p=a.n(h),f=(a(181),a(156)),v=a(163),A=a(167),w=function(){function e(e){this.component=e}var t=e.prototype;return t.pushAlert=function(e,t){void 0===t&&(t="danger");var a=this.component.state.alerts||[];a.unshift({type:t,text:e}),this.component.setState({alerts:a},function(){})},t.dissmissAlert=function(e){var t=this.component.state.alerts||[];t.splice(e,1),this.component.setState({alerts:t})},e}(),g=a(220),b=a.n(g),E=a(221),y=a.n(E);a(224),y.a.locale("ja");var N=function(e){function t(t){var a;a=e.call(this,t)||this;var n=t.location.href,s=p.a.parse(n,!0),r=null;return void 0!=s.query.a&&void 0!=s.query.s&&void 0!=s.query.d&&void 0!=s.query.p&&(r=t.location.origin+"/home/"+t.location.search),a.state={oauth:r,alerts:[],tobeRemoved:null},a.alerts=new w(o()(o()(a))),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.auth=new A.a(this,{redirect:!0,oauth:this.state.oauth})},a.componentDidUpdate=function(){window.$(".waves-receiver").tooltip({boundary:"window",placement:"right"})},a.render=function(){var e,t=this,a=[];(this.state.alerts||[]).forEach(function(e,n){a.push(c.a.createElement("div",{role:"alert",className:"alert alert-"+e.type+" ml-3 mr-3",style:{width:"100%"}},c.a.createElement("button",{type:"button",className:"close",onClick:function(){t.alerts.dissmissAlert(n)}}),e.text))});var n=void 0===this.state.isUser?this.render_loading():this.render_dashboard();return void 0!=this.state.user&&(e=c.a.createElement("a",{href:"#",className:"nav-link pr-0 leading-none","data-toggle":"dropdown"},c.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.state.user.photoURL+")"}}),c.a.createElement("span",{className:"ml-2 d-none d-lg-block"},c.a.createElement("span",{className:"text-default"},this.state.user.displayName),c.a.createElement("small",{className:"text-muted d-block mt-1"},"0.00000000 AHT")))),c.a.createElement(f.a,null,c.a.createElement(d.a,{link:[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}]}),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"flax-fill"},c.a.createElement("div",{className:"header py-4"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"d-flex"},c.a.createElement("a",{className:"header-brand",href:"/"},"ALIS HackerToken"),c.a.createElement("div",{className:"d-flex order-lg-2 ml-auto"},c.a.createElement("div",{className:"dropdown"},e,c.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-arrow"},c.a.createElement("a",{className:"dropdown-item",onClick:function(){t.auth.logout()}},c.a.createElement("i",{className:"dropdown-icon fe fe-log-out"})," ","ログアウト"))))))))),c.a.createElement("div",{className:"my-3 my-md-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},a,n))),c.a.createElement(v.a,{items:[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}]}))},a.addWaves=function(){var e=this;this.auth.genRandomValue(function(t){var a="https://client.wavesplatform.com#gateway/auth?r=https://alishackers.club/&n=ALIS HackerToken&i=/img/alis_hackers.png&s=//oauth&d="+t+"_"+e.state.user.uid+"&debug=false";window.clearInterval(e.interval);var n=window.open(a),s=p.a.parse(window.location.href);null==n?window.location.href=a:(n.parentWindow=window,e.interval=window.setInterval(function(){var t,a,r;try{r=n.location.href,a=p.a.parse(r),n.close()}catch(e){t=e}null==t&&s.host===a.host&&(window.clearInterval(e.interval),e.auth.validateWavesAddress(r))},1e3))})},a.render_loading=function(){return c.a.createElement("div",{className:"page",style:{width:"100%"}},c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"display-1 text-muted mb-5"},c.a.createElement("i",{className:"si si-exclamation"})," データ取得中"),c.a.createElement("h1",{className:"h2 mb-3"},"少々お待ち下さい..."),c.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-7"},"法定通貨に依存しない完全独自経済圏で好きなことを追求して生きていこう！"),c.a.createElement("a",{className:"btn btn-primary",href:"/"},c.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),"トップページへ戻る"))))},a.removeWavesAddress=function(e){this.setState({tobeRemoved:e},function(){window.$("#pageModal").modal({})})},a.confirmRemoval=function(e){window.$("#pageModal").modal("hide"),this.auth.removeWavesAddress(e)},a.render_dashboard=function(){var e,t=this,a=(this.state.userInfo||{}).waves_addresses||{};if(m.a.isEmpty(a))e=c.a.createElement("div",{className:"card-body"},"Wavesアドレスは登録されていません。");else{var n,s=[],r=[];for(var o in a)!0===a[o].receiver?n=a[o]:r.push(a[o]);void 0!=n&&r.unshift(n),r.forEach(function(e,r){var o;o=void 0==n&&0==r||void 0!=n&&n.address==e.address?c.a.createElement("img",{src:b.a}):c.a.createElement("img",{"data-toggle":"tooltip",className:"waves-receiver",title:"受け取りアドレスに設定する",src:b.a,onClick:function(){t.auth.setAsReceiver(e.address)}}),s.push(c.a.createElement("tr",null,c.a.createElement("td",null,o),c.a.createElement("td",{style:{wordBreak:"break-all"}},c.a.createElement("b",null,e.address)),c.a.createElement("td",null,c.a.createElement("span",{style:{whiteSpace:"nowrap"}},y()(a[e.address].added_at).format("YYYY年"))," ",c.a.createElement("span",{style:{whiteSpace:"nowrap"}},y()(a[e.address].added_at).format("M月D日"))),c.a.createElement("td",null,c.a.createElement("a",{className:"icon",onClick:function(){t.removeWavesAddress(e.address)}},c.a.createElement("i",{className:"fe fe-trash text-danger"})))))}),e=c.a.createElement("table",{className:"table card-table table-striped table-vcenter"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"受取"),c.a.createElement("th",null,"Wavesアドレス"),c.a.createElement("th",null,"追加日"),c.a.createElement("th",null,"削除"))),c.a.createElement("tbody",null,s))}return c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"table-responsible"},e),c.a.createElement("div",{className:"card-footer text-right"},c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){t.addWaves()}},"Wavesアドレスを追加"))),c.a.createElement("div",{className:"modal fade",id:"pageModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Wavesアドレス削除確認"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"})),c.a.createElement("div",{className:"modal-body",style:{wordBreak:"break-all"}},"本当に"," ",c.a.createElement("b",null,this.state.tobeRemoved)," ","を削除してよろしいですか？"),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"取り消し"),c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){t.confirmRemoval(t.state.tobeRemoved)}},"実行"))))))},t}(i.Component);t.default=N},152:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},155:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h});var n=a(0),s=a.n(n),r=a(8),o=a.n(r),i=a(151),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var l=a(152),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var u=a(31);a.d(t,"parsePath",function(){return u.a});var m=s.a.createContext({}),h=function(e){return s.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){"use strict";var n=a(157),s=a(0),r=a.n(s),o=a(8),i=a.n(o),c=a(158),l=a.n(c),d=a(155),u=function(e){var t=e.children;return r.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},r.a.createElement("html",{lang:"en"})),t)},data:n})};u.propTypes={children:i.a.node.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},159:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),o=a.n(r),i=a(36),c=a(1),l=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return s.a.createElement(i.a,{location:t,pageResources:a})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){"use strict";a(164),a(165),a(79),a(166);var n=a(12),s=a.n(n),r=a(0),o=a.n(r),i=function(e){function t(t){return e.call(this,t)||this}return s()(t,e),t.prototype.render=function(){var e=[],t=this.props.items,a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var s;if(a){if(n>=t.length)break;s=t[n++]}else{if((n=t.next()).done)break;s=n.value}var r=s;e.push(o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:r.href,target:"_blank"},o.a.createElement("i",{className:"fab fa-"+r.key}))))}return o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("ul",{className:"list-inline social-buttons"},e)),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("ul",{className:"list-inline quicklinks"})))))},t}(r.Component);t.a=i},167:function(e,t,a){"use strict";a(170),a(81),a(171),a(172),a(173);var n=a(174),s=a.n(n),r=a(176),o=a.n(r),i=a(162),c=a.n(i),l=a(161),d=a.n(l);a(177),s.a.initializeApp({apiKey:"AIzaSyAsl3dTaQWj8ljxb-2tLJd7FTYtexGInio",authDomain:"alishackers-f5d05.firebaseapp.com",databaseURL:"https://alishackers-f5d05.firebaseio.com",projectId:"alishackers-f5d05",storageBucket:"alishackers-f5d05.appspot.com",messagingSenderId:"791078170170",timestampsInSnapshots:!0});var u=function(){function e(e,t){var a=this;void 0===t&&(t={}),this.opts=t,this.component=e,"undefined"!=typeof window&&(this.db=s.a.firestore(),this.provider=new s.a.auth.TwitterAuthProvider,s.a.auth().useDeviceLanguage(),s.a.auth().onAuthStateChanged(function(e,t){if(e){var n={displayName:e.displayName,photoURL:e.photoURL,uid:e.uid,id:e.providerData[0].uid};a.component.setState({user:n,isUser:!0},function(){a.getUserInfo(n)})}else!0===a.opts.redirect?window.location.href="/":a.component.setState({user:null,isUser:!1})}))}var t=e.prototype;return t.setData=function(e,t,a){var n=this;void 0==a&&(a=function(e){console.log(e),n.component.alerts.pushAlert("エラーが発生しました。時間をおいてもう一度お試し下さい！")}),this.db.collection("users").doc(this.component.state.user.uid).set(e,{merge:!0}).then(function(e){t()}).catch(function(e){a(e)})},t.updateData=function(e,t,a){var n=this;void 0==a&&(a=function(s){console.log(s),null!==s.toString().match(/no document to update/i)?n.setData(e,t,a):n.component.alerts.pushAlert("エラーが発生しました。時間をおいてもう一度お試し下さい！")}),this.db.collection("users").doc(this.component.state.user.uid).update(e).then(function(e){t()}).catch(function(e){a(e)})},t.getUserInfo=function(e){var t=this;this.db.collection("users").doc(e.uid).get().then(function(e){var a=e.data()||{};t.component.setState({userInfo:a},function(){void 0!=t.opts.oauth&&t.validateWavesAddress(t.opts.oauth)})}).catch(function(e){console.log(e)})},t.login=function(){s.a.auth().signInWithPopup(this.provider).then(function(){window.location.href="/home/"}).catch(function(e){alert("ログインに失敗しました！もう一度お試し下さい。")})},t.logout=function(){s.a.auth().signOut().then(function(){window.location.href="/"}).catch(function(e){alert("ログアウトに失敗しました。もう一度お試し下さい。")})},t.validateWavesAddress=function(e){var t=e,a=c.a.parse(t,!0),n=a.query.d,s=(a.query.s,a.query.p),r=a.query.a,o=n.split("_"),i=o[0];o[1]!=this.component.state.user.uid||i!=this.component.state.userInfo.random_value?this.component.alerts.pushAlert("認証に失敗しました。時間を置いて再度お試し下さい。"):this.addWavesAddress({publickKey:s,address:r,added_at:Date.now()})},t.setAsReceiver=function(e){var t=this,a=this.component.state.userInfo.waves_addresses||{};for(var n in a)n==e?a[n].receiver=!0:delete a[n].receiver;this.setWavesAddress(a,function(){t.component.alerts.pushAlert("受け取りアドレスを"+e+" に変更しました！","success")})},t.checkAddressInPool=function(e,t){var a=this;this.db.collection("addresses").doc(e).get().then(function(n){n.exists?a.component.alerts.pushAlert(e+"は既に他の人に登録されているため使えません。"):t()}).catch(function(e){console.log(e),a.component.alerts.pushAlert("エラーが発生しました。時間をおいてもう一度お試し下さい！")})},t.addWavesAddress=function(e){var t=this,a=this.component.state.userInfo.waves_addresses||{};void 0!=a[e.address]?this.component.alerts.pushAlert(e.address+" は既に登録されています！","warning"):this.checkAddressInPool(e.address,function(){d.a.isEmpty(a)&&(e.receiver=!0),a[e.address]=e,t.setWavesAddress(a,function(){t.addAddressToPool(e.address,function(){t.component.alerts.pushAlert(e.address+" を追加しました！","success")})})})},t.setWavesAddress=function(e,t){var a=this;this.updateData({waves_addresses:e},function(){var n=a.component.state.userInfo||{};n.waves_addresses=e,a.component.setState({userInfo:n},function(){}),t()})},t.removeAddressFromPool=function(e,t){this.db.collection("addresses").doc(e).delete().then(function(e){t()}).catch(function(e){t()})},t.addAddressToPool=function(e,t){this.db.collection("addresses").doc(e).set({uid:this.component.state.user.uid}).then(function(e){t()}).catch(function(e){t()})},t.genRandomValue=function(e){var t=this,a=o()();this.setData({random_value:a},function(){var n=t.component.state.userInfo||{};n.random_value=a,t.component.setState({userInfo:n},function(){e(a)})})},t.removeWavesAddress=function(e){var t=this,a=this.component.state.userInfo.waves_addresses||{};delete a[e],this.setWavesAddress(a,function(){t.removeAddressFromPool(e,function(){t.component.alerts.pushAlert(e+" を削除しました！")})})},e}();t.a=u},220:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACrUExURUxpcQAAAABU/QBV/QBV/wBV/wBV/QA//wBV/QAA/xNd9BNb8xVd9A5a8hNd8QBV/xFb8RNe7w1Z8Q1Z8w9a9BFb9BNb9RNb9ABU/xZe9A5Y8Bdg8g9Z8xVe9RZd8h1k8hNc8xNd9gBW/RJb8iFl8BRd8hBb8A9a8RBb8hxj8hFb8gAz/wBV/gNc/wNb/wJc/wJb/wJa/wBV/QJZ/wFZ/wNd/wNZ/wRa/wRd/0MrWF8AAAAsdFJOUwAB+/v7A/wE/gGRgJF/c/xydICAlaSAjvqRf46ApH16gZP8lHt+bYJ9kJEFDHHjxQAAAJ9JREFUGNNFjlcWwyAMBNcxBpzee+8FjEva/U8WGUiyj58ZLU8CKLFAf4Aohk8gML1no58h7hnOTNUb4m7KpKroujX0v5EQKzK2IzBPw5LJmAki4GyYY6XGjxlwzViuvgmzBU7F9ltQkj83wDFteSOZXgI3tN0SJUM9pB30mgmXdl6DKE8T6FAntxzY2wVWb8712s2d2b+Kw59Lc9l5/gDcFxK6VyrYfgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=component---src-pages-home-js-0d6a2233e857e679e1e1.js.map