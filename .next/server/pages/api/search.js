<<<<<<< HEAD
"use strict";(()=>{var e={};e.id=9395,e.ids=[9395],e.modules={56037:e=>{e.exports=require("mongoose")},75600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},96762:(e,r)=>{Object.defineProperty(r,"M",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},19133:(e,r,t)=>{t.r(r),t.d(r,{config:()=>d,default:()=>c,routeModule:()=>f});var n={};t.r(n),t.d(n,{default:()=>l});var o=t(89947),a=t(2706),i=t(96762),s=t(93307);let u=require("mongodb");async function l(e,r){if("GET"!==e.method)return r.status(405).json({error:"Method not allowed"});try{let{db:t}=await (0,s.A)(),{query:n,practiceId:o}=e.query;if(!o||!n)return r.status(400).json({error:"practiceId and query are required"});let a=n.toLowerCase(),i=await t.collection("patients").aggregate([{$match:{practice:new u.ObjectId(o)}},{$lookup:{from:"documents",localField:"documents",foreignField:"_id",as:"documentDetails"}}]).toArray(),l=[];i.forEach(e=>{e.full_name.toLowerCase().includes(a)&&l.push({type:"patient",label:e.full_name,id:e._id}),e.documentDetails.forEach(r=>{r.title.toLowerCase().includes(a)&&l.push({type:"document",label:`${r.title} (${e.full_name})`,id:e._id})})}),r.status(200).json(l)}catch(e){console.error(e),r.status(500).json({error:"Internal Server Error"})}}let c=(0,i.M)(n,"default"),d=(0,i.M)(n,"config"),f=new o.PagesAPIRouteModule({definition:{kind:a.A.PAGES_API,page:"/api/search",pathname:"/api/search",bundlePath:"",filename:""},userland:n})},93307:(e,r,t)=>{t.d(r,{A:()=>a});var n=t(56037),o=t.n(n);let a=async()=>{try{await o().connect(process.env.MONGODB_URI,{useNewUrlParser:!0,useUnifiedTopology:!0}),console.log("Erfolgreich mit der MongoDB-Datenbank verbunden.")}catch(e){throw console.error(`Fehler beim Verbinden mit der MongoDB-Datenbank: ${e.message}`),console.error("Stack-Trace: ",e.stack),Error("Verbindung zur MongoDB fehlgeschlagen.")}}},2706:(e,r)=>{Object.defineProperty(r,"A",{enumerable:!0,get:function(){return t}});var t=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},89947:(e,r,t)=>{e.exports=t(75600)}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=19133);module.exports=t})();
=======
version https://git-lfs.github.com/spec/v1
oid sha256:6540c459035793af58ea913168b9834e16051cda48cc0b8ab42bc8203c601aa0
size 2350
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
