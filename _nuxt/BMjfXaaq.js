import{_ as h}from"./BQaFixBN.js";import{_ as x}from"./DcLHZll-.js";import{f as w,v as r,x as V,r as C,M as g,o as l,c as B,a as u,j as d,m as p,Q as M,U,C as b,w as N,b as S}from"./Dfk_Fzw6.js";const E={class:"ui-input"},I={class:"ui-input__inner"},K={class:"ui-input__input"},R=["placeholder"],z=w({__name:"UiInput",props:r({placeholder:{type:String,default:void 0},type:{type:String,default:"text"}},{modelValue:{required:!0,default:""},modelModifiers:{}}),emits:r(["clear","keyup","keydown","input","change"],["update:modelValue"]),setup(n,{expose:m,emit:_}){const a=V(n,"modelValue"),i=C(),s=_,f=()=>{a.value="",s("clear")},v=()=>{var e;(e=i.value)==null||e.blur()},y=()=>{var e;(e=i.value)==null||e.focus()};return g(()=>s("input",a.value)),m({focus:y,blur:v}),(e,t)=>{const c=h,k=x;return l(),B("div",E,[u("div",I,[u("div",K,[n.type==="search"?(l(),d(c,{key:0,name:"search",class:"ui-input__search-icon"})):p("",!0),M(u("input",{ref_key:"inputRef",ref:i,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),placeholder:n.placeholder||"Введите текст",class:b(["ui-input__input-element",["ui-input__input-element--"+n.type]]),onKeyup:t[1]||(t[1]=o=>s("keyup",o)),onKeydown:t[2]||(t[2]=o=>s("keydown",o))},null,42,R),[[U,a.value]]),a.value&&n.type==="search"?(l(),d(k,{key:1,"is-text":"",class:"ui-input__clear link",onClick:f},{default:N(()=>[S(c,{name:"clear"})]),_:1})):p("",!0)])])])}}});export{z as _};