webpackJsonp([0,2],{"6Jhy":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("CwoH"),s=r(c),l=n("NKHc"),f=n("Lf13"),p=n("Vz5A"),d=n("i/8a"),m=r(d),h=n("vYZg"),v=n("6KKI"),y=r(v);n("VEpa"),n("c1YI");var b=n("ZJnk"),g=r(b),E=n("Zajt"),w=r(E),_=n("w67F"),O=r(_),j=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",null,s["default"].createElement(g["default"],null),s["default"].createElement("div",{className:"container"},this.props.children))}}]),t}(c.Component),P=(0,p.createStore)(y["default"],void 0,(0,p.applyMiddleware)(m["default"]));(0,l.render)(s["default"].createElement(f.Provider,{store:P},s["default"].createElement(h.Router,{history:h.browserHistory},s["default"].createElement(h.Route,{path:"/",component:j},s["default"].createElement(h.IndexRoute,{component:w["default"]}),s["default"].createElement(h.Route,{path:"/post/:pathname",component:O["default"]})))),document.getElementById("app"))},0:function(e,t,n){e.exports=n("6Jhy")},"6KKI":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){var n=void 0,r={};return n=t.map(function(e){return r[e.pathname]=s.assign({},e,{create_time:new Date(e.create_time).toLocaleDateString()}),e.pathname}),s.assign({},e,{keys:s.union(e.keys,n),data:s.assign({},e.data,r),isFetching:!1})}function u(e,t){var n={};return n[t.pathname]=s.assign({},t,{create_time:new Date(t.create_time).toLocaleString()}),s.assign({},e,n)}function i(){return!0}Object.defineProperty(t,"__esModule",{value:!0});var c=(n("Vz5A"),n("OE/d")),s=a(c),l=n("7D2o"),f=r(l),p={posts:{keys:[],data:{},isFetching:!1,nextPageUrl:"",errorMessage:""}},d=new f["default"];d.register("update","posts.isFetching",i),d.register("update","posts",o),d.register("update","posts.data",u),d.register("update","posts.errorMessage",function(e,t){return t}),d.register("reset","posts.errorMessage",function(){return""}),t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?p:arguments[0],t=arguments[1];return d.reduce(e,t)}},"OE/d":function(e,t){"use strict";function n(e){return Array.isArray(e)}function r(e){return"[object Object]"===f.call(e)}function a(e){return"[object Function]"===f.call(e)}function o(){var e=[].concat.apply([],arguments);return e.filter(function(t,n){return e.indexOf(t)===n})}function u(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var t=1;t<arguments.length;t++){var n=arguments[t];if(null!=n)for(var r in n)e[r]=n[r]}return e}function i(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var t=1;t<arguments.length;t++){var a=arguments[t];if(null!=a)for(var o in a){var u=a[o],c=e[o];n(u)?e[o]=i(n(c)?c:[],u):r(u)?e[o]=i(r(c)?c:{},u):e[o]=u}}return e}function c(e){return n(e)?e.slice():r(e)?u({},e):e}function s(e){return n(e)?i([],e):r(e)?i({},e):e}function l(e,t,a){var o=void 0;if(n(e))o=[];else{if(!r(e))return e;o={}}for(var u in e)a=a?a+"."+u:u,0===t.indexOf(a)?o[u]=l(e[u],t,a):o[u]=e[u],a="";return o}Object.defineProperty(t,"__esModule",{value:!0}),t.isArray=n,t.isObject=r,t.isFunction=a,t.union=o,t.assign=u,t.assignDeep=i,t.clone=c,t.cloneDeep=s,t.cloneWithPath=l;var f=Object.prototype.toString},"7D2o":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("OE/d"),u=function(){function e(){r(this,e),this.reducers={}}return a(e,[{key:"register",value:function(e,t,n){var r=this.reducers[t]||{};r[e]=n,this.reducers[t]=r}},{key:"reduce",value:function(e,t){var n=t.type,r=t.path,a=this.reducers[r];if(!a)return e;e=(0,o.cloneWithPath)(e,r);var u=r.split("."),i=u.pop(),c=a[n],s=u.reduce(function(e,t){return e=e[t]},e);return s[i]=c(s[i],t.data),e}}]),e}();t["default"]=u},VEpa:function(e,t){},c1YI:"VEpa",KV4m:"VEpa","4r7d":"VEpa",Zajt:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{__html:e}}function c(e,t){var n=e.posts,r=n.keys,a=n.data;return{posts:r.map(function(e){return a[e]})}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("CwoH"),f=r(l),p=n("vYZg"),d=n("Lf13"),m=n("v39V");n("NAA+");var h=["全部","JavaScript","HTML","CSS","Node.js","Linux","PHP","其他"],v=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={activeTab:0},n.renderRow=n.renderRow.bind(n),n.renderTab=n.renderTab.bind(n),n}return u(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderRow",value:function(e,t){var n=e.tag||[];return f["default"].createElement("div",{className:"article-item",key:t},f["default"].createElement(p.Link,{className:"article-item--title",to:"/post/"+e.pathname},f["default"].createElement("h3",null,e.title)),f["default"].createElement("div",{className:"article-item--summary",dangerouslySetInnerHTML:i(e.summary)}),f["default"].createElement("div",{className:"article--info"},f["default"].createElement("img",{className:"article--avatar",src:"https://avatars0.githubusercontent.com/u/10356168?v=3&s=460"}),f["default"].createElement("a",{className:"article--author",href:"https://github.com/xiaoyann",target:"_blank"},"xiaoyann"),f["default"].createElement("span",{className:"article--time"},"发布于 ",e.create_time),n.map(function(e,t){return f["default"].createElement("span",{key:t,className:"article--tag"},e.name)})))}},{key:"renderTab",value:function(e,t){var n=this,r=this.state.activeTab===t?"cate-bar--tab cate-bar--active":"cate-bar--tab";return f["default"].createElement("span",{className:r,key:t,onClick:function(){return n.setState({activeTab:t})}},e)}},{key:"render",value:function(){var e=this.props.posts;return f["default"].createElement("div",{className:"content"},f["default"].createElement("div",{className:"cate-bar"},h.map(this.renderTab)),f["default"].createElement("div",{className:"article-list"},e.map(this.renderRow)))}}]),t}(l.Component);t["default"]=(0,d.connect)(c,{fetchPosts:m.fetchPosts})(v)},v39V:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var u=t[a](o),i=u.value}catch(c){return void n(c)}return u.done?void e(i):Promise.resolve(i).then(function(e){return r("next",e)},function(e){return r("throw",e)})}return r("next")})}}function a(){var e=this;return function(){var t=r(regeneratorRuntime.mark(function n(t,r){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,o={method:"GET"},t({type:"update",path:"posts.isFetching"}),e.prev=2,e.next=5,fetch(u.POSTS_LIST,o).then(function(e){return e.json()});case 5:a=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](2),t({type:"update",path:"posts.errorMessage",data:e.t0.message}),e.abrupt("return");case 12:t({type:"update",path:"posts",data:a.data.posts});case 13:case"end":return e.stop()}},n,e,[[2,8]])}));return function(e,n){return t.apply(this,arguments)}}()}function o(e){var t=this;return function(){var n=r(regeneratorRuntime.mark(function a(n,r){var o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=void 0,i={method:"GET"},n({type:"update",path:"posts.isFetching"}),t.prev=2,t.next=5,fetch(u.POSTS_DETAIL+"?pathname="+e,i).then(function(e){return e.json()});case 5:o=t.sent,t.next=12;break;case 8:return t.prev=8,t.t0=t["catch"](2),n({type:"update",path:"posts.errorMessage",data:t.t0.message}),t.abrupt("return");case 12:n({type:"update",path:"posts.data",data:o.data});case 13:case"end":return t.stop()}},a,t,[[2,8]])}));return function(e,t){return n.apply(this,arguments)}}()}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPosts=a,t.fetchDetail=o;var u=n("ejrM")},ejrM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,r="/api";t.POSTS_LIST=r+"/post/list",t.POSTS_DETAIL=r+"/post/detail"},"NAA+":"VEpa",w67F:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{__html:e}}function c(e,t){var n=e.posts.data;return{posts:n[t.params.pathname]||{}}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("CwoH"),f=r(l),p=n("Lf13"),d=n("v39V");n("KV4m");var m=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.commentsDisplayed=!1,n}return u(t,e),s(t,[{key:"componentWillMount",value:function(){var e=this.props.params;this.props.fetchDetail(e.pathname)}},{key:"componentDidMount",value:function(){this.displayComments()}},{key:"componentDidUpdate",value:function(){this.displayComments()}},{key:"displayComments",value:function(){var e=this.props.posts,t=e.id,n=e.pathname;if(t&&!this.commentsDisplayed){this.commentsDisplayed=!0;var r=this.refs.comments,a=document.createElement("div");a.setAttribute("data-thread-key",t),a.setAttribute("data-url","https://52dachu.com/post/"+n);var o=setInterval(function(){window.__LOADED__&&(clearInterval(o),DUOSHUO.EmbedThread(a),r.appendChild(a))},100)}}},{key:"render",value:function(){var e=this.props.posts,t=e.tag||[];return f["default"].createElement("div",{className:"content"},f["default"].createElement("div",{className:"article"},f["default"].createElement("div",null,f["default"].createElement("h1",{className:"article--title"},e.title),f["default"].createElement("div",{className:"article--info"},f["default"].createElement("img",{className:"article--avatar",src:"https://avatars0.githubusercontent.com/u/10356168?v=3&s=460"}),f["default"].createElement("a",{className:"article--author",href:"https://github.com/xiaoyann",target:"_blank"},"xiaoyann"),f["default"].createElement("span",{className:"article--time"},"发布于 ",e.create_time),t.map(function(e,t){return f["default"].createElement("span",{key:t,className:"article--tag"},e.name)}))),f["default"].createElement("div",{className:"article--bd",dangerouslySetInnerHTML:i(e.content)}),f["default"].createElement("div",{ref:"comments",className:"comments"})))}}]),t}(l.Component);t["default"]=(0,p.connect)(c,{fetchDetail:d.fetchDetail})(m)},ZJnk:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("CwoH"),s=r(c),l=n("vYZg");n("4r7d");var f=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"header"},s["default"].createElement("div",{className:"header--bd"},s["default"].createElement(l.Link,{className:"logo",to:"/"},s["default"].createElement("span",{className:"logo--52"},"52"),s["default"].createElement("span",{className:"logo--dachu"},"dachu")),s["default"].createElement("a",{className:"github-link",href:"https://github.com/xiaoyann",target:"_blank"},s["default"].createElement("svg",{"aria-hidden":"true",className:"github-icon",height:"22",version:"1.1",viewBox:"0 0 16 16",width:"22"},s["default"].createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))))}}]),t}(c.Component);t["default"]=f}});