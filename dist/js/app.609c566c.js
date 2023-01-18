(function(){var t={4674:function(t){function e(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=function(){return[]},e.resolve=e,e.id=4674,t.exports=e},788:function(t,e,n){"use strict";var a=n(6369),r=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},i=[],o=n(1001),s={},l=(0,o.Z)(s,r,i,!1,null,null,null),u=l.exports,c=n(2631),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-l flex-row-l justify-center justify-between-l"},[e("TheCloudinaryBackground"),e("TheWaitlistForm")],1)},m=[],d=function(){var t=this,e=t._self._c;return e("cld-image",{staticClass:"dn db-l w-50-ns vh-100",attrs:{publicId:"hannah-busing-unsplash",dpr:"auto",quality:"auto"}},[e("cld-transformation",{attrs:{flags:"rasterize"}})],1)},p=[],b={},v=(0,o.Z)(b,d,p,!1,null,null,null),h=v.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-waitlist vh-100 w-50-ns w-100-m"},[e("div",{staticClass:"w-70 center pv6"},[t._m(0),e("h4",{staticClass:"f5 fw1 lh-copy georgia i mt0"},[t._v(" Be one of the first to access our service! ")]),e("p"),e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("label",{staticClass:"db mb2 brown b georgia",attrs:{for:"firstname"}},[t._v("First Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],staticClass:"db w-80 w-60-m pa2 br2 mb3 ba bw1 b--brown",attrs:{type:"text",name:"firstname",id:"firstname",placeholder:"First name"},domProps:{value:t.firstname},on:{input:function(e){e.target.composing||(t.firstname=e.target.value)}}}),e("label",{staticClass:"db mb2 brown b georgia",attrs:{for:"lastname"}},[t._v("Last Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],staticClass:"db w-80 w-60-m pa2 br2 mb3 ba bw1 b--brown",attrs:{type:"text",name:"lastname",id:"lastname",placeholder:"Last name"},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}}),e("label",{staticClass:"db mb2 brown b georgia",attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"db w-80 w-60-m pa2 br2 mb4 ba bw1 b--brown",attrs:{type:"email",name:"email",id:"email",placeholder:"Emaul"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(1)])])])},g=[function(){var t=this,e=t._self._c;return e("h3",{staticClass:"f2 f1-m f-headline-l measure-narrow lh-title mv0"},[e("span",{staticClass:"lh-copy brown pa1 tracked-tight"},[t._v(" Joinr. ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-100"},[e("button",{staticClass:"f6 ttu tracked black-80 bg-brown pa3 br3 white bb link b--brown hover-white dim bg-animate pointer",attrs:{type:"submit"}},[t._v("Join waitlist")])])}],y=n(5153);const _=[{name:"signups",columns:[{name:"firstname",type:"string"},{name:"lastname",type:"string"},{name:"email",type:"email"}]}],x=(0,y.kH)(),C={databaseURL:"https://Olufunke-Moronfolu-s-workspace-vj48pf.us-west-2.xata.sh/db/xata-cloudinary-waitlist",apiKey:"xau_WAMw8evIhRbrATj5QNZqERFdUuQgdHQv6"};class k extends x{constructor(t){super({...C,...t},_)}}let O;const j=()=>O||(O=new k,O);var P={data:()=>({firstname:"",lastname:"",email:""}),methods:{async submitForm(){const t=j();await t.db.signups.create({firstname:this.firstname,lastname:this.lastname,email:this.email}).then((t=>{console.log(t)}))}}},T=P,N=(0,o.Z)(T,w,g,!1,null,null,null),E=N.exports,Z={components:{TheCloudinaryBackground:h,TheWaitlistForm:E}},F=Z,A=(0,o.Z)(F,f,m,!1,null,null,null),L=A.exports;a.ZP.use(c.ZP);const M=[{path:"/",name:"home",component:L},{path:"/success",name:"success",component:()=>n.e(17).then(n.bind(n,5918))}],S=new c.ZP({mode:"history",base:"/",routes:M});var B=S,U=n(7692),q=n.n(U);a.ZP.config.productionTip=!1,new a.ZP({router:B,render:t=>t(u)}).$mount("#app"),a.ZP.use(q(),{configuration:{cloudName:"moerayo",secure:!0}})}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var o=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],i=t[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,i<o&&(o=i));if(s){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[a,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/sigin.96143bbe.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="xata-cloudinary-waitlist:";n.l=function(a,r,i,o){if(t[a])t[a].push(r);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==e+i){s=f;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=a),t[a]=[r];var m=function(e,n){s.onerror=s.onload=null,clearTimeout(d);var r=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var i=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=i);var o=n.p+n.u(e),s=new Error,l=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}};n.l(o,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,o=a[0],s=a[1],l=a[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(e&&e(a);u<o.length;u++)i=o[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},a=self["webpackChunkxata_cloudinary_waitlist"]=self["webpackChunkxata_cloudinary_waitlist"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(788)}));a=n.O(a)})();
//# sourceMappingURL=app.609c566c.js.map