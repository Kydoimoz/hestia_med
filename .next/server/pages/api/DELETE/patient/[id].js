<<<<<<< HEAD
"use strict";(()=>{var e={};e.id=4306,e.ids=[4306],e.modules={56037:e=>{e.exports=require("mongoose")},75600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},44937:e=>{e.exports=require("next/server")},96762:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},82907:(e,t,r)=>{r.r(t),r.d(t,{config:()=>g,default:()=>m,routeModule:()=>P});var n={};r.r(n),r.d(n,{default:()=>f});var i=r(89947),a=r(2706),d=r(96762),o=r(93307),s=r(44937),u=r(64102),l=r.n(u),p=r(92098),c=r.n(p);async function f(e){try{await (0,o.A)();let{id:t}=e.query;if(console.log("Patient ID: ",t),!t)return s.NextResponse.json({message:"Patient ID fehlt."},{status:400});if(!await l().findByIdAndDelete(t))return s.NextResponse.json({message:"Kein Patient gefunden, der gel\xf6scht werden kann."},{status:404});let r=await c().deleteMany({patientId:t});return console.log(`Patient mit ID ${t} wurde gel\xf6scht. Gel\xf6schte Termine: ${r.deletedCount}`),s.NextResponse.json({message:"Patient und zugeh\xf6rige Termine erfolgreich gel\xf6scht.",deletedAppointmentsCount:r.deletedCount},{status:200})}catch(e){return console.error("Fehler beim L\xf6schen des Patienten oder der Termine: ",e),s.NextResponse.json({message:"Interner Serverfehler."},{status:500})}}let m=(0,d.M)(n,"default"),g=(0,d.M)(n,"config"),P=new i.PagesAPIRouteModule({definition:{kind:a.A.PAGES_API,page:"/api/DELETE/patient/[id]",pathname:"/api/DELETE/patient/[id]",bundlePath:"",filename:""},userland:n})},93307:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(56037),i=r.n(n);let a=async()=>{try{await i().connect(process.env.MONGODB_URI,{useNewUrlParser:!0,useUnifiedTopology:!0}),console.log("Erfolgreich mit der MongoDB-Datenbank verbunden.")}catch(e){throw console.error(`Fehler beim Verbinden mit der MongoDB-Datenbank: ${e.message}`),console.error("Stack-Trace: ",e.stack),Error("Verbindung zur MongoDB fehlgeschlagen.")}}},92098:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});let n=r(96797)._(r(56037)),i=new n.default.Schema({patientId:{type:n.default.Schema.Types.ObjectId,ref:"Patient",required:!0},startTime:{type:Date,required:!0},endTime:{type:Date,required:!0},purpose:{type:String,required:!0}},{timestamps:!0}),a=n.default.models.Appointment||n.default.model("Appointment",i);e.exports=a},64102:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});let n=r(96797)._(r(56037)),i=new n.default.Schema({full_name:{type:String,required:!0},insurance:{type:String,required:!0},is_private:{type:String,required:!0},birth_date:{type:Date,required:!0},gender:{type:String,required:!0},address:{type:String,required:!0},phoneNumber:{type:String,required:!0},documents:{type:[n.default.Schema.Types.ObjectId],ref:"MedicalDocument",default:[]},email:{type:String,required:!0,match:[/.+\@.+\..+/,"Please provide a valid email address."]},emergency_contact:{type:String,required:!0},practice:{type:n.default.Schema.Types.ObjectId,ref:"Practice",required:!0}},{timestamps:!0}),a=n.default.models.Patient||n.default.model("Patient",i);e.exports=a},2706:(e,t)=>{Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},89947:(e,t,r)=>{e.exports=r(75600)},96797:(e,t)=>{t._=function(e){return e&&e.__esModule?e:{default:e}}}};var t=require("../../../../webpack-api-runtime.js");t.C(e);var r=t(t.s=82907);module.exports=r})();
=======
version https://git-lfs.github.com/spec/v1
oid sha256:704a80ce38ae011713d9a0e9e50e09edfebe929832102c2cc60d752d6dcb4e2b
size 3612
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
