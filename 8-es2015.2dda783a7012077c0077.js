(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UrDz:function(t,r,e){"use strict";e.r(r),e.d(r,"RegisterModule",(function(){return p}));var o=e("ofXK"),n=e("tyNb"),i=e("mrSG"),b=e("3Pt+"),c=e("N/25"),s=e("fXoL");const a=function(){return["/login"]},u=[{path:"",component:(()=>{class t{constructor(t,r){this.authSvc=t,this.router=r,this.registerForm=new b.e({email:new b.b(""),password:new b.b("")})}ngOnInit(){}onRegister(){return Object(i.__awaiter)(this,void 0,void 0,(function*(){const{email:t,password:r}=this.registerForm.value;try{(yield this.authSvc.register(t,r))&&this.router.navigate(["/verification-email"])}catch(e){console.log(e)}}))}}return t.\u0275fac=function(r){return new(r||t)(s.Kb(c.a),s.Kb(n.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-register"]],features:[s.zb([c.a])],decls:21,vars:3,consts:[[1,"row","justify-content-center"],[1,"col-md-4","mt-5"],[1,"card"],[1,"card-body"],[1,"text-center","h3"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","email","placeholder","email","type","email",1,"form-control"],["formControlName","password","placeholder","password","type","password",1,"form-control"],["type","submit",1,"my-4","btn-block","btn","btn-primary","btn-lg"],[1,"form-group","mt-3"],[3,"routerLink"]],template:function(t,r){1&t&&(s.Nb(0,"div",0),s.Nb(1,"div",1),s.Nb(2,"div",2),s.Nb(3,"div",3),s.Lb(4,"br"),s.Nb(5,"h3",4),s.jc(6,"REGISTER"),s.Mb(),s.Lb(7,"br"),s.Nb(8,"form",5),s.Vb("ngSubmit",(function(){return r.onRegister()})),s.Nb(9,"div",6),s.Lb(10,"input",7),s.Mb(),s.Lb(11,"br"),s.Nb(12,"div",6),s.Lb(13,"input",8),s.Mb(),s.Nb(14,"button",9),s.jc(15,"Register"),s.Mb(),s.Mb(),s.Nb(16,"div",10),s.Nb(17,"p"),s.jc(18," \xbfTiene usted una cuenta?"),s.Nb(19,"a",11),s.jc(20," Login"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&t&&(s.Ab(8),s.ac("formGroup",r.registerForm),s.Ab(11),s.ac("routerLink",s.bc(2,a)))},directives:[b.k,b.h,b.f,b.a,b.g,b.d,n.b],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(r){return new(r||t)},imports:[[n.c.forChild(u)],n.c]}),t})(),p=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(r){return new(r||t)},imports:[[o.c,m,b.i]]}),t})()}}]);