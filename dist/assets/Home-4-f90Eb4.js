import{r as l,j as e,L as o}from"./index-BkzoR9p6.js";import{a as c}from"./index-DBG7Kx6D.js";import{f as m}from"./constant-7LJQrAjc.js";import{a as g}from"./api-CI6MUtbO.js";import{m as a}from"./proxy-Da6xkRlv.js";import"./index-t--hEgTQ.js";const h="/assets/hero-5EcZFBXV.png",N=()=>{const[i,d]=l.useState([]);l.useEffect(()=>{(async()=>{try{const s=await g.get("feedback");d(s.data)}catch(s){console.error("Failed to fetch feedback:",s)}})()},[]);const x=l.useMemo(()=>i.filter(r=>r.rating>3).sort(()=>.5-Math.random()).slice(0,4),[i]);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-colors",children:[e.jsxs("section",{className:"py-20 px-5 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10",children:[e.jsxs(a.div,{initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},className:"max-w-xl",children:[e.jsx("h1",{className:"text-5xl font-bold leading-tight mb-4",children:"Unlock Your Potential"}),e.jsx("p",{className:"text-lg mb-6",children:"Dive into tailored courses, solve engaging questions, and learn at your own pace with our smart LMS."}),e.jsx(o,{to:"/courses",className:"px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition",children:"Start Learning"})]}),e.jsx(a.img,{src:h,alt:"LMS Illustration",className:"w-full max-w-lg",initial:{x:50,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6}})]}),e.jsx("section",{className:"py-16 px-5 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8",children:m.map((t,s)=>e.jsx(c,{glareEnable:!0,tiltMaxAngleX:15,tiltMaxAngleY:15,children:e.jsxs(a.div,{whileHover:{scale:1.05},className:"bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all",children:[e.jsx("img",{src:t.image,alt:t.title,className:" w-full h-40 mb-4 object-cover"}),e.jsx("h2",{className:"text-xl font-semibold mb-2",children:t.title}),e.jsx("p",{children:t.desc})]})},s))}),e.jsxs(a.section,{className:"px-5 lg:px-20 py-14 bg-gray-100 dark:bg-gray-900 text-center",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},children:[e.jsx("h2",{className:"text-3xl font-bold mb-10",children:"Platform Impact"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 text-xl",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-blue-600 font-bold text-4xl",children:"20K+"}),e.jsx("p",{children:"Learners Enrolled"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-green-600 font-bold text-4xl",children:"500+"}),e.jsx("p",{children:"Courses Completed"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-purple-600 font-bold text-4xl",children:"4.9/5"}),e.jsx("p",{children:"User Rating"})]})]})]}),e.jsxs(a.section,{className:"py-16 px-5 lg:px-20 bg-white dark:bg-gray-800",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},children:[e.jsx("h2",{className:"text-3xl font-bold mb-10 text-center",children:"What Learners Say"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-10",children:x.map((t,s)=>e.jsx(c,{glareEnable:!0,tiltMaxAngleX:10,tiltMaxAngleY:10,children:e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg",children:t.name[0]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg",children:t.name}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:t.email})]})]}),e.jsxs("p",{className:"italic mb-2",children:['"',t.message,'"']}),e.jsx("div",{className:"flex gap-1",children:Array.from({length:5}).map((r,n)=>e.jsx("span",{children:n<Math.floor(t.rating)?"⭐":"☆"},n))})]})},s))})]}),e.jsxs(a.section,{className:"text-center py-16 px-6 bg-blue-100 dark:bg-blue-900",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ready to start your journey?"}),e.jsx("p",{className:"mb-6 text-lg",children:"Join a course and begin transforming your skills today."}),e.jsx(o,{to:"/courses",className:"bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition",children:"Get Started"})]})]})};export{N as default};
