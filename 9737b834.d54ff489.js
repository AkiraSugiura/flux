(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),c=(n(0),n(113)),i={id:"dispatcher",title:"Dispatcher"},o={id:"dispatcher",title:"Dispatcher",description:"Dispatcher is used to broadcast payloads to registered callbacks. This is",source:"@site/../docs/Dispatcher.md",permalink:"/flux/docs/dispatcher",editUrl:"https://github.com/facebook/flux/edit/master/docs/../docs/Dispatcher.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1562298457,sidebar:"docs",previous:{title:"In-Depth Overview",permalink:"/flux/docs/in-depth-overview"},next:{title:"Flux Utils",permalink:"/flux/docs/flux-utils"}},l=[{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Dispatcher is used to broadcast payloads to registered callbacks. This is\ndifferent from generic pub-sub systems in two ways:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Callbacks are not subscribed to particular events. Every payload is\ndispatched to every registered callback."),Object(c.b)("li",{parentName:"ul"},"Callbacks can be deferred in whole or part until other callbacks have\nbeen executed.")),Object(c.b)("p",null,"Check out ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/flux/blob/master/src/Dispatcher.js"}),"Dispatcher.js")," for the source code."),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"register(function callback): string")),"\nRegisters a callback to be invoked with every dispatched payload. Returns a token that can be used with ",Object(c.b)("inlineCode",{parentName:"p"},"waitFor()"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"unregister(string id): void")),"\nRemoves a callback based on its token.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"waitFor(array<string> ids): void")),"\nWaits for the callbacks specified to be invoked before continuing execution of the current callback. This method should only be used by a callback in response to a dispatched payload.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dispatch(object payload): void"))," Dispatches a payload to all registered callbacks.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"isDispatching(): boolean"))," Is this Dispatcher currently dispatching."))),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"For example, consider this hypothetical flight destination form, which\nselects a default city when a country is selected:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var flightDispatcher = new Dispatcher();\n\n// Keeps track of which country is selected\nvar CountryStore = {country: null};\n\n// Keeps track of which city is selected\nvar CityStore = {city: null};\n\n// Keeps track of the base flight price of the selected city\nvar FlightPriceStore = {price: null};\n")),Object(c.b)("p",null,"When a user changes the selected city, we dispatch the payload:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"flightDispatcher.dispatch({\n  actionType: 'city-update',\n  selectedCity: 'paris'\n});\n")),Object(c.b)("p",null,"This payload is digested by ",Object(c.b)("inlineCode",{parentName:"p"},"CityStore"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'city-update') {\n    CityStore.city = payload.selectedCity;\n  }\n});\n")),Object(c.b)("p",null,"When the user selects a country, we dispatch the payload:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"flightDispatcher.dispatch({\n  actionType: 'country-update',\n  selectedCountry: 'australia'\n});\n")),Object(c.b)("p",null,"This payload is digested by both stores:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"})," CountryStore.dispatchToken = flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'country-update') {\n    CountryStore.country = payload.selectedCountry;\n  }\n});\n")),Object(c.b)("p",null,"When the callback to update ",Object(c.b)("inlineCode",{parentName:"p"},"CountryStore")," is registered, we save a reference\nto the returned token. Using this token with ",Object(c.b)("inlineCode",{parentName:"p"},"waitFor()"),", we can guarantee\nthat ",Object(c.b)("inlineCode",{parentName:"p"},"CountryStore")," is updated before the callback that updates ",Object(c.b)("inlineCode",{parentName:"p"},"CityStore"),"\nneeds to query its data."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"CityStore.dispatchToken = flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'country-update') {\n    // `CountryStore.country` may not be updated.\n    flightDispatcher.waitFor([CountryStore.dispatchToken]);\n    // `CountryStore.country` is now guaranteed to be updated.\n\n    // Select the default city for the new country\n    CityStore.city = getDefaultCityForCountry(CountryStore.country);\n  }\n});\n")),Object(c.b)("p",null,"The usage of ",Object(c.b)("inlineCode",{parentName:"p"},"waitFor()")," can be chained, for example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"FlightPriceStore.dispatchToken =\n  flightDispatcher.register(function(payload) {\n    switch (payload.actionType) {\n      case 'country-update':\n      case 'city-update':\n        flightDispatcher.waitFor([CityStore.dispatchToken]);\n        FlightPriceStore.price =\n          getFlightPriceStore(CountryStore.country, CityStore.city);\n        break;\n  }\n});\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"country-update")," payload will be guaranteed to invoke the stores'\nregistered callbacks in order: ",Object(c.b)("inlineCode",{parentName:"p"},"CountryStore"),", ",Object(c.b)("inlineCode",{parentName:"p"},"CityStore"),", then\n",Object(c.b)("inlineCode",{parentName:"p"},"FlightPriceStore"),"."))}s.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return n?r.a.createElement(h,o({ref:t},p,{components:n})):r.a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);