<<<<<<< HEAD
"use strict";(()=>{var e={};e.id=38,e.ids=[38],e.modules={56037:e=>{e.exports=require("mongoose")},75600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},96762:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},15563:(e,t,r)=>{r.r(t),r.d(t,{config:()=>g,default:()=>f,routeModule:()=>h});var n={};r.r(n),r.d(n,{default:()=>m});var i=r(89947),a=r(2706),o=r(96762),s=r(93307),d=r(92098),u=r.n(d),l=r(64102),p=r.n(l),c=r(19774);async function m(e,t){if("POST"===e.method){let{patientId:r,startTime:n,endTime:i,purpose:a}=e.body;console.log("Empfangene Daten:",{patientId:r,startTime:n,endTime:i,purpose:a});try{if(await (0,s.A)(),!r||!n||!i||!a)return t.status(400).json({message:"Alle Felder (patientId, startTime, endTime, purpose) sind erforderlich."});if(new Date(n)>=new Date(i))return t.status(400).json({message:"Startzeit muss vor der Endzeit liegen."});let e=await p().findById(r);if(!e)return t.status(404).json({message:"Patient nicht gefunden."});console.log("Patient wurde gefunden");let o=new(u())({patientId:r,startTime:new Date(n).toISOString(),endTime:new Date(i).toISOString(),purpose:a.trim()});console.log("Neuer Appointment wurde erstellt");let d=await o.save();console.log("Neuer Appointment wurde gespeichert"),e.practice&&await c.A.findByIdAndUpdate(e.practice,{$push:{appointments:d._id}}),t.status(201).json({message:"Termin erfolgreich hinzugef\xfcgt.",appointment:d})}catch(e){console.error("Fehler beim Erstellen eines Termins:",e),t.status(500).json({message:"Interner Serverfehler."})}}else if("GET"===e.method)try{await (0,s.A)();let e=await u().find().populate("patientId");t.status(200).json({appointments:e})}catch(e){console.error("Fehler beim Abrufen der Termine:",e),t.status(500).json({message:"Interner Serverfehler"})}else t.setHeader("Allow",["POST"]),t.status(405).json({message:`Methode ${e.method} nicht erlaubt.`})}let f=(0,o.M)(n,"default"),g=(0,o.M)(n,"config"),h=new i.PagesAPIRouteModule({definition:{kind:a.A.PAGES_API,page:"/api/appointment",pathname:"/api/appointment",bundlePath:"",filename:""},userland:n})},93307:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(56037),i=r.n(n);let a=async()=>{try{await i().connect(process.env.MONGODB_URI,{useNewUrlParser:!0,useUnifiedTopology:!0}),console.log("Erfolgreich mit der MongoDB-Datenbank verbunden.")}catch(e){throw console.error(`Fehler beim Verbinden mit der MongoDB-Datenbank: ${e.message}`),console.error("Stack-Trace: ",e.stack),Error("Verbindung zur MongoDB fehlgeschlagen.")}}},92098:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});let n=r(96797)._(r(56037)),i=new n.default.Schema({patientId:{type:n.default.Schema.Types.ObjectId,ref:"Patient",required:!0},startTime:{type:Date,required:!0},endTime:{type:Date,required:!0},purpose:{type:String,required:!0}},{timestamps:!0}),a=n.default.models.Appointment||n.default.model("Appointment",i);e.exports=a},64102:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});let n=r(96797)._(r(56037)),i=new n.default.Schema({full_name:{type:String,required:!0},insurance:{type:String,required:!0},is_private:{type:String,required:!0},birth_date:{type:Date,required:!0},gender:{type:String,required:!0},address:{type:String,required:!0},phoneNumber:{type:String,required:!0},documents:{type:[n.default.Schema.Types.ObjectId],ref:"MedicalDocument",default:[]},email:{type:String,required:!0,match:[/.+\@.+\..+/,"Please provide a valid email address."]},emergency_contact:{type:String,required:!0},practice:{type:n.default.Schema.Types.ObjectId,ref:"Practice",required:!0}},{timestamps:!0}),a=n.default.models.Patient||n.default.model("Patient",i);e.exports=a},19774:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(56037),i=r.n(n);let a=new(i()).Schema({name:{type:String,required:!0,unique:!0},practice_address:{type:String,required:!0},practice_phoneNumber:{type:String,required:!0},appointments:{type:[i().Schema.Types.ObjectId],ref:"Appointment",default:[]}}),o=i().models.Practice||i().model("Practice",a)},2706:(e,t)=>{Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},89947:(e,t,r)=>{e.exports=r(75600)},96797:(e,t)=>{t._=function(e){return e&&e.__esModule?e:{default:e}}}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=15563);module.exports=r})();
=======
version https://git-lfs.github.com/spec/v1
oid sha256:84bd12173bb32a2df3a1be5f531bc623163441dcea885f1645c664ca871daa95
size 4559
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
