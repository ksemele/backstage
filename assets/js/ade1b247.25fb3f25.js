/*! For license information please see ade1b247.25fb3f25.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[768682],{603905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(667294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,h=u["".concat(s,".").concat(m)]||u[m]||g[m]||r;return o?a.createElement(h,i(i({ref:t},c),{},{components:o})):a.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},187740:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});o(827378);var a=o(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const i={id:"homepage",title:"Backstage homepage - Setup and Customization",description:"Documentation on setting up and customizing Backstage homepage"},p=void 0,s={unversionedId:"getting-started/homepage",id:"getting-started/homepage",title:"Backstage homepage - Setup and Customization",description:"Documentation on setting up and customizing Backstage homepage",source:"@site/../docs/getting-started/homepage.md",sourceDirName:"getting-started",slug:"/getting-started/homepage",permalink:"/docs/getting-started/homepage",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/homepage.md",tags:[],version:"current",frontMatter:{id:"homepage",title:"Backstage homepage - Setup and Customization",description:"Documentation on setting up and customizing Backstage homepage"},sidebar:"docs",previous:{title:"Customize the look-and-feel of your App",permalink:"/docs/getting-started/app-custom-theme"},next:{title:"Keeping Backstage Updated",permalink:"/docs/getting-started/keeping-backstage-updated"}},l={},c=[{value:"Homepage",id:"homepage",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup homepage",id:"setup-homepage",level:3},{value:"1. Install the plugin",id:"1-install-the-plugin",level:4},{value:"2. Create a new HomePage component",id:"2-create-a-new-homepage-component",level:4},{value:"3. Update router for the root <code>/</code> route",id:"3-update-router-for-the-root--route",level:4},{value:"4. Update sidebar items",id:"4-update-sidebar-items",level:4},{value:"Use the default template",id:"use-the-default-template",level:3},{value:"Composing your homepage",id:"composing-your-homepage",level:3}],u={toc:c};function g(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",n({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"homepage"}),"Homepage"),(0,a.kt)("p",null,"Having a good Backstage homepage can significantly improve the discoverability of the platform. You want your users to find all the things they need right from the homepage and never have to remember direct URLs in Backstage. The ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/home"}),"Home plugin")," introduces a system for composing a homepage for Backstage in order to surface relevant info and provide convenient shortcuts for common tasks. It's designed with composability in mind with an open ecosystem that allows anyone to contribute with any component, to be included in any homepage."),(0,a.kt)("p",null,"For App Integrators, the system is designed to be composable to give total freedom in designing a Homepage that suits the needs of the organization. From the perspective of a Component Developer who wishes to contribute with building blocks to be included in Homepages, there's a convenient interface for bundling the different parts and exporting them with both error boundary and lazy loading handled under the surface."),(0,a.kt)("p",null,"At the end of this tutorial, you can expect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your Backstage app to have a dedicated homepage instead of Software Catalog."),(0,a.kt)("li",{parentName:"ul"},"Understand the composability of homepage and how to start customizing it for your own organization.")),(0,a.kt)("h3",n({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"Before we begin, make sure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have created your own standalone Backstage app using ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/getting-started/#create-your-backstage-app"}),(0,a.kt)("inlineCode",{parentName:"a"},"@backstage/create-app"))," and not using a fork of the ",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/backstage/backstage"}),"backstage")," repository."),(0,a.kt)("li",{parentName:"ul"},"You do not have an existing homepage, and by default you are redirected to Software Catalog when you open Backstage.")),(0,a.kt)("p",null,"Now, let's get started by installing the home plugin and creating a simple homepage for your Backstage app."),(0,a.kt)("h3",n({},{id:"setup-homepage"}),"Setup homepage"),(0,a.kt)("h4",n({},{id:"1-install-the-plugin"}),"1. Install the plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/app @backstage/plugin-home\n")),(0,a.kt)("h4",n({},{id:"2-create-a-new-homepage-component"}),"2. Create a new HomePage component"),(0,a.kt)("p",null,"Inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/app")," directory, create a new file where our new homepage component is going to live. Create ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/app/src/components/home/HomePage.tsx")," with the following initial code"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\n\nexport const HomePage = () => {\n  /* We will shortly compose a pretty homepage here. */\n  return <h1>Welcome to Backstage!</h1>;\n};\n")),(0,a.kt)("h4",n({},{id:"3-update-router-for-the-root--route"}),"3. Update router for the root ",(0,a.kt)("inlineCode",{parentName:"h4"},"/")," route"),(0,a.kt)("p",null,"If you don't have a homepage already, most likely you have a redirect setup to use the Catalog homepage as a homepage."),(0,a.kt)("p",null,"Inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx"),", look for"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'}),'const routes = (\n  <FlatRoutes>\n    <Navigate key="/" to="catalog" />\n    {/* ... */}\n  </FlatRoutes>\n);\n')),(0,a.kt)("p",null,"Let's replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Navigate>")," line and use the new component we created in the previous step as the new homepage."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'}),'/* highlight-add-start */\nimport { HomepageCompositionRoot } from \'@backstage/plugin-home\';\nimport { HomePage } from \'./components/home/HomePage\';\n/* highlight-add-end */\n\nconst routes = (\n  <FlatRoutes>\n    {/* highlight-remove-next-line */}\n    <Navigate key="/" to="catalog" />\n    {/* highlight-add-start */}\n    <Route path="/" element={<HomepageCompositionRoot />}>\n      <HomePage />\n    </Route>\n    {/* highlight-add-end */}\n    {/* ... */}\n  </FlatRoutes>\n);\n')),(0,a.kt)("h4",n({},{id:"4-update-sidebar-items"}),"4. Update sidebar items"),(0,a.kt)("p",null,"Let's update the route for \"Home\" in the Backstage sidebar to point to the new homepage. We'll also add a Sidebar item to quickly open Catalog."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Before"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"After"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("img",{alt:"Sidebar without Catalog",src:o(714150).Z,width:"215",height:"475"})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("img",{alt:"Sidebar with Catalog",src:o(697935).Z,width:"215",height:"475"}))))),(0,a.kt)("p",null,"The code for the Backstage sidebar is most likely inside your ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/packages/app/src/components/Root/Root.tsx"}),(0,a.kt)("inlineCode",{parentName:"a"},"packages/app/src/components/Root/Root.tsx")),"."),(0,a.kt)("p",null,"Let's make the following changes"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx",metastring:'title="packages/app/src/components/Root/Root.tsx"',title:'"packages/app/src/components/Root/Root.tsx"'}),'/* highlight-add-next-line */\nimport CategoryIcon from \'@material-ui/icons/Category\';\n\nexport const Root = ({ children }: PropsWithChildren<{}>) => (\n  <SidebarPage>\n    <Sidebar>\n      <SidebarLogo />\n      {/* ... */}\n      <SidebarGroup label="Menu" icon={<MenuIcon />}>\n        {/* Global nav, not org-specific */}\n        {/* highlight-remove-next-line */}\n        <SidebarItem icon={HomeIcon} to="catalog" text="Home" />\n        {/* highlight-add-start */}\n        <SidebarItem icon={HomeIcon} to="/" text="Home" />\n        <SidebarItem icon={CategoryIcon} to="catalog" text="Catalog" />\n        {/* highlight-add-end */}\n        <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />\n        <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />\n        <SidebarItem icon={LayersIcon} to="explore" text="Explore" />\n        <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />\n        {/* End global nav */}\n        <SidebarDivider />\n        {/* ... */}\n      </SidebarGroup>\n    </Sidebar>\n  </SidebarPage>\n);\n')),(0,a.kt)("p",null,"That's it! You should now have ",(0,a.kt)("em",{parentName:"p"},"(although slightly boring)")," a homepage!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of a blank homepage",src:o(849091).Z,width:"1920",height:"1134"})),(0,a.kt)("p",null,"In the next steps, we will make it interesting and useful!"),(0,a.kt)("h3",n({},{id:"use-the-default-template"}),"Use the default template"),(0,a.kt)("p",null,"There is a default homepage template (",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/storybook/?path=/story/plugins-home-templates--default-template"}),"storybook link"),") which we will use to set up our homepage. Checkout the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/blog/2022/01/25/backstage-homepage-templates"}),"blog post announcement")," about the Backstage homepage templates for more information."),(0,a.kt)("h3",n({},{id:"composing-your-homepage"}),"Composing your homepage"),(0,a.kt)("p",null,"Composing a homepage is no different from creating a regular React Component,\ni.e. the App Integrator is free to include whatever content they like. However,\nthere are components developed with the homepage in mind. If you are looking\nfor components to use when composing your homepage, you can take a look at the\n",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/storybook?path=/story/plugins-home-components"}),"collection of Homepage components"),"\nin storybook. If you don't find a component that suits your needs but want to\ncontribute, check the\n",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/plugins/home/README.md#contributing"}),"Contributing documentation"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to use one of the available homepage templates you can find the\n",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/storybook/?path=/story/plugins-home-templates"}),"templates"),'\nin the storybook under the "Home" plugin. And if you would like to contribute\na template, please see the\n',(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/plugins/home/README.md#contributing"}),"Contributing documentation"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport Grid from '@material-ui/core/Grid';\nimport { HomePageCompanyLogo } from '@backstage/plugin-home';\n\nexport const HomePage = () => {\n  return (\n    <Grid container spacing={3}>\n      <Grid item xs={12} md={4}>\n        <HomePageCompanyLogo />\n      </Grid>\n    </Grid>\n  );\n};\n")))}g.isMDXComponent=!0},697935:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/sidebar-with-catalog-f94e950f2ea3627ecaab41aabbe167b6.png"},714150:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/sidebar-without-catalog-e7737bc9f306437332595c57606fc644.png"},849091:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/simple-homepage-db083f208f2b1bfe180eb81e04e345a6.png"},862525:e=>{var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,r){for(var i,p,s=n(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))o.call(i,c)&&(s[c]=i[c]);if(t){p=t(i);for(var u=0;u<p.length;u++)a.call(i,p[u])&&(s[p[u]]=i[p[u]])}}return s}},541535:(e,t,o)=>{var a=o(862525),n=60103,r=60106;var i=60109,p=60110,s=60112;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;n=u("react.element"),r=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),p=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),c=u("react.lazy")}var g="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function f(e,t,o){this.props=e,this.context=t,this.refs=d,this.updater=o||h}function b(){}function k(e,t,o){this.props=e,this.context=t,this.refs=d,this.updater=o||h}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=f.prototype;var y=k.prototype=new b;y.constructor=k,a(y,f.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,o){var a,r={},i=null,p=null;if(null!=t)for(a in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!O.hasOwnProperty(a)&&(r[a]=t[a]);var s=arguments.length-2;if(1===s)r.children=o;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===r[a]&&(r[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:p,props:r,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,o,a,i){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var s=!1;if(null===e)s=!0;else switch(p){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+j(s,0):a,Array.isArray(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),S(i,t,o,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=a+j(p=e[l],l);s+=S(p,t,o,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(p=e.next()).done;)s+=S(p=p.value,t,o,c=a+j(p,l++),i);else if("object"===p)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,o){if(null==e)return e;var a=[],n=0;return S(e,a,"","",(function(e){return t.call(o,e,n++)})),a}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function H(){var e=R.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,o)=>{o(541535)}}]);