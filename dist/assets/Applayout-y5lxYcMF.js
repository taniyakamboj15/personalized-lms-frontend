import{r as c,j as e,D as L,L as z,B as w,u as p,a as j,b as x,c as v,y as m,d as f,e as _,P as C,O as $}from"./index-Df9kuZqr.js";import{c as b,s as A,a as E,u as M}from"./userSlice-BmOBmGOQ.js";const I=()=>{const[t,s]=c.useState(!1);c.useEffect(()=>{const o=localStorage.getItem("theme")||"light";s(o==="dark"),document.documentElement.setAttribute("data-theme",o),document.documentElement.classList.toggle("dark",o==="dark")},[]);const a=()=>{const o=t?"light":"dark";s(!t),document.documentElement.setAttribute("data-theme",o),document.documentElement.classList.toggle("dark",o==="dark"),localStorage.setItem("theme",o)};return e.jsxs("label",{className:"cursor-pointer grid place-items-center relative w-10 h-10",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:a,className:"toggle theme-controller absolute opacity-0 w-full h-full cursor-pointer"}),e.jsx("img",{src:t?L:z,alt:"Theme Icon",className:"w-6 h-6"})]})};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),U=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,a,o)=>o?o.toUpperCase():a.toLowerCase()),y=t=>{const s=U(t);return s.charAt(0).toUpperCase()+s.slice(1)},k=(...t)=>t.filter((s,a,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===a).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=c.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:n="",children:r,iconNode:h,...g},l)=>c.createElement("svg",{ref:l,...D,width:s,height:s,stroke:t,strokeWidth:o?Number(a)*24/Number(s):a,className:k("lucide",n),...g},[...h.map(([i,u])=>c.createElement(i,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(t,s)=>{const a=c.forwardRef(({className:o,...n},r)=>c.createElement(F,{ref:r,iconNode:s,className:k(`lucide-${S(y(t))}`,`lucide-${t}`,o),...n}));return a.displayName=y(t),a};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],H=d("book",B);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],R=d("file-up",P);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],O=d("info",T);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],K=d("key",q);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],Z=d("log-in",V);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],W=d("log-out",G);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],J=d("panel-left",Y);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],X=d("phone",Q);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],se=d("user",ee);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],oe=d("users-round",te),ae="/assets/logo-Dw7w-yPD.png",re=()=>{const[t,s]=c.useState(null),[a,o]=c.useState(!0),n=async()=>{try{const r=await fetch(`${w}user/profile`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),h=await r.json();if(!r.ok)throw new Error(h.msg||"Failed to fetch user data");s(h.data)}catch(r){console.error("Error fetching user:",r.message),s(null)}finally{o(!1)}};return c.useEffect(()=>{n()},[]),{user:t,loading:a}},ne=({toggleSidebar:t,isSidebarOpen:s})=>{const a=p(),{user:o,loading:n}=re(),r=j();c.useEffect(()=>{if(!n&&!o){b();return}else r(A(o))},[o,n,a]);const h=x();return e.jsxs("div",{className:"navbar shadow-sm z-20 bg-neutral-100 dark:bg-gray-800 border-b-2 border-zinc-700 shadow-neutral-400",children:[h.pathname!=="/login"&&h.pathname!=="/register"?e.jsx("div",{className:"flex-none",children:e.jsx("button",{className:`btn btn-square btn-ghost transition-transform duration-300 ease-in-out ${s?"scale-x-[-1] ":"scale-x-100"}`,onClick:t,children:e.jsx(J,{size:24})})}):null,e.jsx("div",{className:"flex-1",children:e.jsx(v,{to:"/",className:"btn btn-link",children:e.jsx("img",{src:ae,className:"h-28"})})}),e.jsx("div",{className:"flex-none",children:e.jsx(I,{})})]})},le=()=>e.jsxs("footer",{className:"footer footer-horizontal footer-center bg-white  p-10 border-t-4 border-zinc-700 shadow-neutral-400 dark:bg-gray-800 dark:border-gray-700",children:[e.jsxs("aside",{children:[e.jsx("svg",{width:"50",height:"50",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",className:"inline-block fill-current",children:e.jsx("path",{d:"M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"})}),e.jsxs("p",{className:"font-bold",children:["EduVibe Edu Ltd.",e.jsx("br",{}),"Providing reliable Education since 2025"]}),e.jsxs("p",{children:["Copyright © ",new Date().getFullYear()," - All right reserved"]})]}),e.jsx("nav",{children:e.jsxs("div",{className:"grid grid-flow-col gap-4",children:[e.jsx("a",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:e.jsx("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),e.jsx("a",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:e.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),e.jsx("a",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:e.jsx("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]})})]}),ce=()=>{const t=j(),s=p();return async()=>{try{(await fetch(`${w}auth/logout`,{method:"POST",credentials:"include"})).ok?(t(b()),m.success("Logout Successful"),s("/login")):m.error("Logout Failed")}catch(o){m.error("Logout Failed: "+o.message)}}},ie=({isOpen:t})=>{const s=x(),a=p(),o=ce(),{role:n}=f(l=>{var i;return((i=l==null?void 0:l.user)==null?void 0:i.user)||{}}),r=f(l=>{var i;return(i=l.user)==null?void 0:i.isLoggedIn}),h=n==="admin";if(console.log("role",n),s.pathname==="/login"||s.pathname==="/register")return null;const g=[{label:"Dashboard",icon:e.jsx(se,{size:20}),path:"/dashboard",onlyforLoggedIn:!0},{label:"Courses",icon:e.jsx(H,{size:20}),path:"/courses"},{label:"About",icon:e.jsx(O,{size:20}),path:"/about"},{label:"Contact",icon:e.jsx(X,{size:20}),path:"/contact"},{label:"Upload",icon:e.jsx(R,{size:20}),path:"/admin-upload",onlyForAdmin:!0},{label:"Users",icon:e.jsx(oe,{size:20}),path:"/users",onlyForAdmin:!0},{label:"Forget Password",icon:e.jsx(K,{size:20}),path:"/forget-password",onlyforLoggedIn:!0},{label:"Logout",icon:e.jsx(W,{size:20}),onClick:o,onlyforLoggedIn:!0},{label:"Login",icon:e.jsx(Z,{size:20}),onClick:()=>{a("/login")}}];return e.jsx("div",{className:`h-screen shadow-md transition-all duration-300 flex-shrink-0    border-r-2 border-zinc-700 shadow-neutral-400 bg-neutral-100 dark:bg-gray-800 ${t?"w-64":"w-16"}`,children:e.jsx("ul",{className:"pt-4 space-y-2",children:g.filter(l=>!(l.onlyForAdmin&&!h||l.onlyforLoggedIn&&!r||l.label==="Login"&&r)).map(({label:l,icon:i,path:u,onClick:N})=>e.jsx("li",{children:u?e.jsxs(v,{to:u,className:"grid grid-cols-[40px_1fr] items-center px-2 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200",children:[e.jsx("div",{className:"flex justify-center items-center",children:i}),e.jsx("div",{className:`overflow-hidden transition-all duration-300 ${t?"opacity-100":"opacity-0 w-0"}`,children:e.jsx("span",{className:"whitespace-nowrap",children:l})})]}):e.jsxs("button",{onClick:N,className:"w-full text-left grid grid-cols-[40px_1fr] items-center px-2 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200",children:[e.jsx("div",{className:"flex justify-center items-center",children:i}),e.jsx("div",{className:`overflow-hidden transition-all duration-300 ${t?"opacity-100":"opacity-0 w-0"}`,children:e.jsx("span",{className:"whitespace-nowrap",children:l})})]})},l))})})},de=E({reducer:{user:M}}),ge=()=>{const t=x(),[s,a]=c.useState(!1),o=()=>{a(r=>!r)},n=["/login","/register"].includes(t.pathname);return e.jsxs("div",{className:"min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900",children:[e.jsx(_,{position:"top-center",autoClose:3e3}),e.jsxs(C,{store:de,children:[e.jsx("div",{className:"fixed top-0 left-0 right-0 z-40",children:e.jsx(ne,{toggleSidebar:o,isSidebarOpen:s})}),!n&&e.jsxs(e.Fragment,{children:[s&&e.jsx("div",{className:"fixed inset-0 z-30 bg-white/10 backdrop-blur-sm md:hidden transition-opacity duration-300 ease-in-out",onClick:o}),e.jsx("div",{className:`
                fixed top-16 z-40 h-[calc(100vh-4rem)] transition-all duration-300
                bg-white dark:bg-gray-800 border-r shadow
                ${s?"left-0":"-left-full"}
                w-64
                md:left-0 md:z-20
                ${s?"md:w-64":"md:w-16"}
              `,children:e.jsx(ie,{isOpen:s})})]}),e.jsx("div",{className:`pt-16 transition-all duration-300 ${n?"":"md:ml-16 "+(s?"md:ml-64":"")}`,children:e.jsxs("div",{className:`min-h-[calc(100vh-4rem)] flex flex-col ${n?"bg-white dark:bg-gray-800":"dark:bg-gray-800"}`,children:[e.jsx("main",{className:"flex-1 overflow-y-auto min-h-screen",children:e.jsx($,{})}),!n&&e.jsx(le,{})]})})]})]})};export{ge as default};
