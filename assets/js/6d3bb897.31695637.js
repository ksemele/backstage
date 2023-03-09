/*! For license information please see 6d3bb897.31695637.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[811510],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},950907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author"},s=void 0,l={unversionedId:"permissions/plugin-authors/01-setup",id:"permissions/plugin-authors/01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author",source:"@site/../docs/permissions/plugin-authors/01-setup.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/01-setup",permalink:"/docs/permissions/plugin-authors/01-setup",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/01-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author"},sidebar:"docs",previous:{title:"Defining custom permission rules",permalink:"/docs/permissions/custom-rules"},next:{title:"2. Adding a basic permission check",permalink:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check"}},p={},u=[{value:"Setup for the Tutorial",id:"setup-for-the-tutorial",level:2},{value:"Integrate the new plugin",id:"integrate-the-new-plugin",level:2}],c={toc:u};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following tutorial is designed to help plugin authors add support for permissions to their plugins. We'll add support for permissions to example ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list-backend")," plugins, but the process should be similar for other plugins!"),(0,r.kt)("p",null,"The rest of this page is focused on adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list-backend")," plugins to your Backstage instance. If you want to add support for permissions to your own plugin instead, feel free to skip to the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check"}),"next section"),"."),(0,r.kt)("h2",o({},{id:"setup-for-the-tutorial"}),"Setup for the Tutorial"),(0,r.kt)("p",null,'We will use a "Todo list" feature, composed of the ',(0,r.kt)("inlineCode",{parentName:"p"},"todo-list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list-backend")," plugins, as well as their dependency, ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list-common"),"."),(0,r.kt)("p",null,"The source code is available here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list"}),"todo-list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list-backend"}),"todo-list-backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list-common"}),"todo-list-common"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy-paste the three folders into the plugins folder of your backstage application repository (removing the ",(0,r.kt)("inlineCode",{parentName:"p"},"example-")," prefix from each folder) or run the following script from the root of your backstage application:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ cd $(mktemp -d)\n  git clone --depth 1 --quiet --no-checkout --filter=blob:none https://github.com/backstage/backstage.git .\n  git checkout master -- plugins/example-todo-list/\n  git checkout master -- plugins/example-todo-list-backend/\n  git checkout master -- plugins/example-todo-list-common/\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list/package.json\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list-backend/package.json\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list-common/package.json\n  for file in plugins/*; do mv \"$file\" \"$OLDPWD/${file/example-todo/todo}\"; done\n  cd -\n")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," directory of your project should now include ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list-backend"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"todo-list-common"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Important"),": if you are on ",(0,r.kt)("strong",{parentName:"p"},"Windows"),", make sure you have WSL and git installed on your machine before executing the script above.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add these packages as dependencies for your Backstage app:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"# From your Backstage root directory\n$ yarn add --cwd packages/backend @internal/plugin-todo-list-backend @internal/plugin-todo-list-common\n$ yarn add --cwd packages/app @internal/plugin-todo-list\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include the backend and frontend plugin in your application:"),(0,r.kt)("p",{parentName:"li"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/todolist.ts")," with the following content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript",metastring:'title="packages/backend/src/plugins/todolist.ts"',title:'"packages/backend/src/plugins/todolist.ts"'}),"import { DefaultIdentityClient } from '@backstage/plugin-auth-node';\nimport { createRouter } from '@internal/plugin-todo-list-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin({\n  logger,\n  discovery,\n}: PluginEnvironment): Promise<Router> {\n  return await createRouter({\n    logger,\n    identity: DefaultIdentityClient.create({\n      discovery,\n      issuer: await discovery.getExternalBaseUrl('auth'),\n    }),\n  });\n}\n")),(0,r.kt)("p",{parentName:"li"},"Apply the following changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/index.ts"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'}),"import techdocs from './plugins/techdocs';\n/* highlight-add-next-line */\nimport todoList from './plugins/todolist';\nimport search from './plugins/search';\n\nasync function main() {\n  const searchEnv = useHotMemoize(module, () => createEnv('search'));\n  const appEnv = useHotMemoize(module, () => createEnv('app'));\n  /* highlight-add-next-line */\n  const todoListEnv = useHotMemoize(module, () => createEnv('todolist'));\n  // ..\n\n  apiRouter.use('/proxy', await proxy(proxyEnv));\n  apiRouter.use('/search', await search(searchEnv));\n  apiRouter.use('/permission', await permission(permissionEnv));\n  /* highlight-add-next-line */\n  apiRouter.use('/todolist', await todoList(todoListEnv));\n  // Add backends ABOVE this line; this 404 handler is the catch-all fallback\n  apiRouter.use(notFoundHandler());\n  // ..\n}\n")),(0,r.kt)("p",{parentName:"li"},"Apply the following changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'}),'/* highlight-add-next-line */\nimport { TodoListPage } from \'@internal/plugin-todo-list\';\n\nconst routes = (\n  <FlatRoutes>\n    <Route path="/search" element={<SearchPage />}>\n      {searchPage}\n    </Route>\n    <Route path="/settings" element={<UserSettingsPage />} />\n    {/* highlight-add-next-line */}\n    <Route path="/todo-list" element={<TodoListPage />} />\n    {/* ... */}\n  </FlatRoutes>\n);\n')))),(0,r.kt)("p",null,"Now if you start your application you should be able to reach the ",(0,r.kt)("inlineCode",{parentName:"p"},"/todo-list")," page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Todo List plugin page",src:n(539570).Z,width:"1323",height:"611"})),(0,r.kt)("hr",null),(0,r.kt)("h2",o({},{id:"integrate-the-new-plugin"}),"Integrate the new plugin"),(0,r.kt)("p",null,"If you play with the UI, you will notice that it is possible to perform a few actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create a new todo item (",(0,r.kt)("inlineCode",{parentName:"li"},"POST /todos"),")"),(0,r.kt)("li",{parentName:"ul"},"view todo items (",(0,r.kt)("inlineCode",{parentName:"li"},"GET /todos"),")"),(0,r.kt)("li",{parentName:"ul"},"edit an existing todo item (",(0,r.kt)("inlineCode",{parentName:"li"},"PUT /todos"),")")),(0,r.kt)("p",null,"Let's try to bring authorization on top of each one of them."))}d.isMDXComponent=!0},539570:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/permission-todo-list-page-6cbdeae87098cd84d982e8ece2442ce9.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))n.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var c=0;c<s.length;c++)r.call(i,s[c])&&(l[s[c]]=i[s[c]])}}return l}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,s=60110,l=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),a=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),s=c("react.context"),l=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),u=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function k(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var b=y.prototype=new k;b.constructor=y,r(b,h.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+P(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),C(i,t,n,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=r+P(s=e[p],p);l+=C(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(s=e.next()).done;)l+=C(s=s.value,t,n,u=r+P(s,p++),i);else if("object"===s)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function _(){var e=T.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,n)=>{n(541535)}}]);