(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4863)}])},4564:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.suspense=function(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e},l.NoSSR=function(e){let{children:l}=e;return l},(0,t(2648).Z)(t(7294));var a=t(2983)},7645:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,l){let t=r.default,s={loading:e=>{let{error:l,isLoading:t,pastDelay:a}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s=a({},s,e)),s=a({},s,l);let n=s.loader,o=()=>null!=n?n().then(d):Promise.resolve(d(()=>null));return s.loadableGenerated&&delete(s=a({},s,s.loadableGenerated)).loadableGenerated,"boolean"!=typeof s.ssr||s.ssr||(delete s.webpack,delete s.modules),t(a({},s,{loader:o}))};var a=t(6495).Z,s=t(2648).Z;s(t(7294));var r=s(t(4588));function d(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),e.exports=l.default)},3644:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.LoadableContext=void 0;var a=(0,t(2648).Z)(t(7294));let s=a.default.createContext(null);l.LoadableContext=s},4588:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=t(932).Z,s=t(6495).Z,r=(0,t(2648).Z)(t(7294)),d=t(4564),n=t(3644);let o=[],i=[],c=!1;function m(e){let l=e(),t={loading:!0,loaded:null,error:null};return t.promise=l.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}class x{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:l}=this;e.loading&&("number"==typeof l.delay&&(0===l.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},l.delay)),"number"==typeof l.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},l.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,l){this._loadFn=e,this._opts=l,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,l){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},l),s=null;function o(){if(!s){let l=new x(e,t);s={getCurrentValue:l.getCurrentValue.bind(l),subscribe:l.subscribe.bind(l),retry:l.retry.bind(l),promise:l.promise.bind(l)}}return s.promise()}if(t.lazy=r.default.lazy(a(function*(){if(t.ssr&&s){let e=s.getCurrentValue(),l=yield e.loaded;if(l)return l}return yield t.loader()})),!c){let e=t.webpack?t.webpack():t.modules;e&&i.push(l=>{for(let t of e)if(-1!==l.indexOf(t))return o()})}function m(e){!function(){o();let e=r.default.useContext(n.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(l=>{e(l)})}();let l=t.loading,a=r.default.createElement(l,{isLoading:!0,pastDelay:!0,error:null}),s=t.ssr?r.default.Fragment:d.NoSSR,i=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:a},r.default.createElement(s,null,r.default.createElement(i,Object.assign({},e))))}return m.preload=()=>o(),m.displayName="LoadableComponent",m}(m,e)}function u(e,l){let t=[];for(;e.length;){let a=e.pop();t.push(a(l))}return Promise.all(t).then(()=>{if(e.length)return u(e,l)})}p.preloadAll=()=>new Promise((e,l)=>{u(o).then(e,l)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(l=>{let t=()=>(c=!0,l());u(i,e).then(t,t)})},window.__NEXT_PRELOADREADY=p.preloadReady,l.default=p},5152:function(e,l,t){e.exports=t(7645)},9008:function(e,l,t){e.exports=t(3121)},4863:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return m}});var a=t(5893),s=t(9008);t(5675);var r=t(7510),d=t(7004),n=t(9334),o=t(5152);let i=o(()=>t.e(257).then(t.t.bind(t,4210,19)).then(e=>e.default),{loadableGenerated:{webpack:()=>[require.resolveWeak("react-p5")]},ssr:!1}),c=e=>{let l=0,t=(e,l)=>{e.createCanvas(1920,1080).parent(l)},s=e=>{e.background("#FFFFFF"),e.stroke(239,125,0),e.strokeWeight(2),e.ellipse(l,150,100,100),e.rotate(.3),e.scale(1.2),e.translate(150,-70),e.triangle(30,75,58,20,86,75),e.scale(.8),e.translate(1450,-300),e.ellipse(0,150,100,100),e.rotate(-.6),e.scale(1.5),e.translate(-180,-100),e.rect(30,20,55,55),1920==++l&&(l=0)};return(0,a.jsx)(i,{setup:t,draw:s})};function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s,{children:[(0,a.jsx)("title",{children:"ESAT Landing"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(r.Z,{}),(0,a.jsxs)("main",{className:"flex flex-col w-full h-fit sm:px-4",children:[(0,a.jsxs)("div",{className:"flex flex-col bg-transparent w-full h-[440px] md:h-[705px] sm:pt-24 md:pt-[280px] pb-0 md:pb-[316px] sm:gap-y-2 md:gap-y-9 text-[#333333]",children:[(0,a.jsxs)("h1",{className:"sm:text-4xl md:text-7xl uppercase sm:text-left md:text-center font-bold leading-tight ",children:["La calidad de ESAT",(0,a.jsx)("br",{className:"sm:hidden md:block"})," sin importar donde",(0,a.jsx)("br",{className:"sm:hidden md:block"})," te encuentres"]}),(0,a.jsxs)("p",{className:"sm:text-lg md:text-3xl sm:text-left md:text-center font-light",children:["Nuestros profesores son expertos en su campo y te brindar\xe1n la",(0,a.jsx)("br",{className:"sm:hidden md:block"})," mejor formaci\xf3n en tiempo real, con todas las ventajas de un ",(0,a.jsx)("br",{className:"sm:hidden md:block"}),"curso presencial"]}),(0,a.jsx)("button",{className:"mx-auto w-full md:w-2/12 hd:w-4/12 mt-2 md:mt-0 mb-2 px-6 border bg-[#EF7D00] py-2 md:py-3 text-white hover:text-black hover:bg-white text-base md:text-lg rounded-xl shadow hover:shadow-lg outline-none focus:outline-none",type:"button",children:"Ver cursos"}),(0,a.jsx)("div",{className:"flex w-full absolute z-[-1] place-content-center",children:(0,a.jsx)(c,{})})]}),(0,a.jsx)(d.default,{}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row w-full sm:h-[805px] hd:h-[600px] lg:h-[805px] justify-center hd:px-20 lg:px-36 md:pr-56",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:pr-40 lg:pl-14 md:my-auto hd:w-full",children:[(0,a.jsx)("h1",{className:"text-5xl font-semibold border-[#BABABA] border-b-[2.5px] pb-6",children:"Cursos online en directo"}),(0,a.jsx)("p",{className:"text-xl md:text-2xl pt-5",children:"En nuestra plataforma, ofrecemos cursos online en directo que te permiten aprender de la mejor manera sin importar d\xf3nde te encuentres."}),(0,a.jsx)("p",{className:"text-base md:text-lg font-light pt-4 md:pt-12",children:"\xa1No te pierdas la oportunidad de aprender de la mejor manera, sin importar d\xf3nde te encuentres, con nuestros cursos online en directo de alta calidad!"})]}),(0,a.jsx)("div",{className:"flex flex-col sm:w-full hd:w-[1200px] lg:w-full pt-7 md:pt-0 hd:pl-24 justify-center align-center mx-auto",children:(0,a.jsx)("div",{style:{backgroundImage:'url("./img/cOnline1.jpg")'},className:"bg-white w-full lg:w-[800px] h-[250px] md:h-[600px] lg:my-auto transition duration-300 ease-in-out hover:shadow-2xl bg-cover bg-center rounded-2xl"})})]}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row w-full sm:h-[805px] hd:h-[600px] lg:h-[580px] sm:justify-center lg:justify-center hd:px-20 lg:px-36 md:pr-56 hd:mb-20 hd:gap-10 lg:gap-0",children:[(0,a.jsxs)("div",{className:"flex flex-col hd:pt-7 md:pt-0",children:[(0,a.jsxs)("div",{className:"flex md:hidden flex-col md:pr-40 md:pl-14 md:my-auto",children:[(0,a.jsx)("h1",{className:"text-5xl font-semibold border-[#BABABA] border-b-[2.5px] pb-6",children:"Participa en las clases"}),(0,a.jsx)("p",{className:"text-xl md:text-2xl pt-5",children:"Podr\xe1s participar en las clases y hacer preguntas en tiempo real, lo que te garantiza un aprendizaje m\xe1s completo y enriquecedor."}),(0,a.jsx)("p",{className:"text-base md:text-lg font-light pt-4 md:pt-12",children:"\xa1No te pierdas la oportunidad de aprender de la mejor manera, sin importar d\xf3nde te encuentres, con nuestros cursos online en directo de alta calidad!"})]}),(0,a.jsx)("div",{className:"flex flex-col sm:w-full hd:w-full lg:w-full pt-7 md:pt-0 lg:pl-24 justify-center align-center mx-auto",children:(0,a.jsx)("div",{style:{backgroundImage:'url("./img/cOnline2.jpg")'},className:"bg-white w-full hd:w-[550px] lg:w-[800px] h-[200px] md:h-[600px] lg:my-auto transition duration-300 ease-in-out hover:shadow-2xl bg-cover bg-center rounded-2xl"})})]}),(0,a.jsxs)("div",{className:"hidden md:flex flex-col lg:pr-40 hd:w-1/2 lg:pl-14 md:my-auto hd:w-full",children:[(0,a.jsx)("h1",{className:"text-5xl font-semibold border-[#BABABA] border-b-[3.5px] pb-6",children:"Participa en las clases"}),(0,a.jsx)("p",{className:"text-xl md:text-2xl pt-5",children:"Podr\xe1s participar en las clases y hacer preguntas en tiempo real, lo que te garantiza un aprendizaje m\xe1s completo y enriquecedor."}),(0,a.jsx)("p",{className:"text-base md:text-lg font-light pt-4 md:pt-12",children:"\xa1No te pierdas la oportunidad de aprender de la mejor manera, sin importar d\xf3nde te encuentres, con nuestros cursos online en directo de alta calidad!"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row w-full sm:h-[805px] hd:h-[600px] lg:h-[805px] justify-center hd:px-20 lg:px-36 md:pr-56 hd:mb-20 lg:mb-0",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:pr-40 lg:pl-14 md:my-auto hd:w-full",children:[(0,a.jsx)("h1",{className:"text-5xl font-semibold border-[#BABABA] border-b-[2.5px] pb-6",children:"Se escalable piensa en grande"}),(0,a.jsx)("p",{className:"text-xl md:text-2xl pt-5",children:"En nuestra plataforma, ofrecemos cursos online en directo que te permiten aprender de la mejor manera sin importar d\xf3nde te encuentres."}),(0,a.jsx)("p",{className:"text-base md:text-lg font-light pt-4 md:pt-12",children:"\xa1No te pierdas la oportunidad de aprender de la mejor manera, sin importar d\xf3nde te encuentres, con nuestros cursos online en directo de alta calidad!"})]}),(0,a.jsx)("div",{className:"flex flex-col sm:w-full hd:w-[1200px] lg:w-full pt-7 md:pt-0 hd:pl-24 justify-center align-center mx-auto",children:(0,a.jsx)("div",{style:{backgroundImage:'url("./img/cOnline3.jpg")'},className:"bg-white w-full lg:w-[800px] h-[250px] md:h-[600px] lg:my-auto transition duration-300 ease-in-out hover:shadow-2xl bg-cover bg-center rounded-2xl"})})]}),(0,a.jsx)("div",{className:"flex flex-col bg-[#F1F1F1] w-full h-[300px] md:h-[600px] gap-y-2 md:gap-y-12",children:(0,a.jsxs)("div",{className:"flex flex-col content-center gap-y-6 md:gap-y-12 my-auto",children:[(0,a.jsxs)("p",{className:"text-2xl md:text-5xl text-center font-light",children:["Aprende las ",(0,a.jsxs)("span",{className:"font-semibold",children:["competencias y habilidades",(0,a.jsx)("br",{className:"hidden md:block"})," digitales con mayor valor"]})," en el mercado"]}),(0,a.jsx)("button",{className:"mx-auto w-full md:w-2/12 mb-2 px-6 border bg-[#EF7D00] py-2 md:py-5 text-white hover:text-black hover:bg-white text-base md:text-lg rounded-xl shadow hover:shadow-lg outline-none focus:outline-none",type:"button",children:"Ver cursos"})]})}),(0,a.jsxs)("div",{className:"flex flex-col bg-white w-full h-[1100px] lg:py-auto hd:py-20 lg:py-48 hd:px-28 gap-y-6 lg:gap-y-12",children:[(0,a.jsxs)("p",{className:"text-2xl md:text-2xl md:text-4xl text-center font-light pt-10 md:pt-0",children:["Hemos ayudado a cientos de alumnas/os a ",(0,a.jsx)("span",{className:"font-semibold",children:"encontrar un futuro profesional"})]}),(0,a.jsxs)("div",{className:"flex flex-row gap-5 md:gap-14 w-full place-content-evenly md:pt-20 lg:pl-24 lg:pr-24",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row py-4",children:[(0,a.jsx)("div",{className:"bg-black mx-auto md:mx-0 w-full md:w-5/6 h-[100px] md:h-full md:my-auto rounded-2xl bg-cover bg-center",style:{backgroundImage:'url("./img/pf1.png")'}}),(0,a.jsxs)("div",{className:"flex flex-col md:px-5 pt-3 md:py-2",children:[(0,a.jsx)("p",{className:"text-sm md:text-base font-bold",children:"Diego Pertusa"}),(0,a.jsx)("p",{className:"text-sm md:text-base font-light",children:"Frontend Developer"}),(0,a.jsx)("p",{clasName:"text-sm md:text-base",children:"We Are Marketing(WAM)"}),(0,a.jsx)("p",{className:"pt-2 md:pt-5 italic text-base md:text-lg font-light",children:"“El postgrado me abri\xf3 la puerta al mercado laboral y me di\xf3 la oportunidad de trabajar en lo que me apasiona”."})]})]}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row py-4",children:[(0,a.jsx)("div",{className:"bg-black mx-auto md:mx-0 w-full md:w-5/6 h-[100px] md:h-full md:my-auto rounded-2xl bg-cover bg-center",style:{backgroundImage:'url("./img/pf2.png")'}}),(0,a.jsxs)("div",{className:"flex flex-col md:px-5 pt-3 md:py-2",children:[(0,a.jsx)("p",{className:"text-sm md:text-base font-bold",children:"Ruben L\xf3pez"}),(0,a.jsx)("p",{className:"text-sm md:text-base font-light",children:"Graphic & Interaction Designer"}),(0,a.jsx)("p",{clasName:"text-sm md:text-base",children:"Sakudarte"}),(0,a.jsx)("p",{className:"pt-2 md:pt-5 italic text-base md:text-lg font-light",children:"“El postgrado me abri\xf3 la puerta al mercado laboral y me di\xf3 la oportunidad de trabajar en lo que me apasiona”."})]})]}),(0,a.jsxs)("div",{className:"md:flex hidden flex-row py-4 ",children:[(0,a.jsx)("div",{className:"bg-black w-5/6 h-full my-auto rounded-2xl bg-cover bg-center",style:{backgroundImage:'url("./img/pf3.png")'}}),(0,a.jsxs)("div",{className:"flex flex-col px-5 py-2",children:[(0,a.jsx)("p",{className:"font-bold",children:"Kike Domingo"}),(0,a.jsx)("p",{className:"font-light",children:"Product Manager & UX/UI Designer"}),(0,a.jsx)("p",{children:"Vitcord"}),(0,a.jsx)("p",{className:"pt-5 italic text-lg font-light",children:"“El postgrado me abri\xf3 la puerta al mercado laboral y me di\xf3 la oportunidad de trabajar en lo que me apasiona”."})]})]})]}),(0,a.jsxs)("div",{className:"flex flex-row gap-5 md:gap-14 w-full place-content-evenly lg:pt-20 lg:pl-24 lg:pr-24",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row py-4",children:[(0,a.jsx)("div",{className:"bg-black mx-auto md:mx-0 w-full md:w-5/6 h-[100px] md:h-full md:my-auto rounded-2xl bg-cover bg-center",style:{backgroundImage:'url("./img/pf4.png")'}}),(0,a.jsxs)("div",{className:"flex flex-col md:px-5 pt-3 md:py-2",children:[(0,a.jsx)("p",{className:"text-sm md:text-base font-bold",children:"Jonathan Kutnowski"}),(0,a.jsx)("p",{className:"text-sm md:text-base font-light",children:"UX/UI Designer"}),(0,a.jsx)("p",{clasName:"text-sm md:text-base",children:"Blinkfire Analytics"}),(0,a.jsx)("p",{className:"pt-2 md:pt-5 italic text-base md:text-lg font-light",children:"“El postgrado me abri\xf3 la puerta al mercado laboral y me di\xf3 la oportunidad de trabajar en lo que me apasiona”."})]})]}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row py-4",children:[(0,a.jsx)("div",{className:"bg-black mx-auto md:mx-0 w-full md:w-5/6 h-[100px] md:h-full md:my-auto rounded-2xl bg-cover bg-center",style:{backgroundImage:'url("./img/pf5.png")'}}),(0,a.jsxs)("div",{className:"flex flex-col md:px-5 pt-3 md:py-2",children:[(0,a.jsx)("p",{className:"text-sm md:text-base font-bold",children:"Esther Garc\xeda"}),(0,a.jsx)("p",{className:"text-sm md:text-base font-light",children:"Graphic Designer"}),(0,a.jsx)("p",{clasName:"text-sm md:text-base",children:"Lladr\xf3"}),(0,a.jsx)("p",{className:"pt-2 md:pt-5 italic text-base md:text-lg font-light",children:"“El postgrado me abri\xf3 la puerta al mercado laboral y me di\xf3 la oportunidad de trabajar en lo que me apasiona”."})]})]}),(0,a.jsxs)("div",{className:"md:flex hidden flex-row py-4",children:[(0,a.jsx)("div",{className:"bg-black w-5/6 h-full my-auto rounded-2xl bg-cover bg-center",style:{backgroundImage:'url("./img/pf6.png")'}}),(0,a.jsxs)("div",{className:"flex flex-col px-5 py-2",children:[(0,a.jsx)("p",{className:"font-bold",children:"Tamara Tr\xfcb"}),(0,a.jsx)("p",{className:"font-light",children:"UX/UI Designer"}),(0,a.jsx)("p",{children:"Entwicklungspark AG"}),(0,a.jsx)("p",{className:"pt-5 italic text-lg font-light",children:"“El postgrado me abri\xf3 la puerta al mercado laboral y me di\xf3 la oportunidad de trabajar en lo que me apasiona”."})]})]})]})]}),(0,a.jsx)(n.Z,{})]})]})}}},function(e){e.O(0,[675,435,4,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);