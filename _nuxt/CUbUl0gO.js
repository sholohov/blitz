import{d as c,o as u,e as h,w as a,n as t,h as o,f as m,v as f,N as p,t as g,a4 as v,_ as w,y}from"./CjZrE5Wh.js";import{_ as B}from"./Cb74_AAG.js";import{_ as S}from"./DSeEFkux.js";import x from"./f3e3m13b.js";import{a as C}from"./BPrNtVlW.js";const $={class:"unauthorised-view__inner"},k={class:"unauthorised-view__body"},N={class:"unauthorised-view__title"},V={class:"content-area unauthorised-view__description"},A=c({__name:"UnauthorisedView",props:{title:{type:String,default:""},height:{type:String,default:"calc(100vh - 112px)"},loading:{type:Boolean,default:!1}},setup(n){function s(){C.login()}return(i,e)=>{const l=w,r=y,_=B,d=S;return u(),h(d,{class:"unauthorised-view",style:v({height:n.height})},{default:a(()=>[t("div",$,[o(m(x),{class:"unauthorised-view__icon"}),t("div",k,[t("h2",N,f(n.title||"Авторизуйтесь"),1),t("div",V,[p(i.$slots,"default",{},()=>[e[0]||(e[0]=t("p",null," Это позволит видеть больше информации о вашем аккаунте ",-1))])]),o(r,{class:"unauthorised-view__auth",onClick:s},{before:a(()=>[o(l,{name:"login"})]),default:a(()=>[e[1]||(e[1]=g(" Войти "))]),_:1})]),o(_,{loading:n.loading},null,8,["loading"])])]),_:3},8,["style"])}}});export{A as _};