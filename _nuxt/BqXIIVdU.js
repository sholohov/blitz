import{d as b,z as p,l as k,A as w,r as M,e as V,o as $,n as B,p as a,I as N,g as m,al as z,aq as C,a4 as f}from"./BzQ49_ll.js";const I={class:"ui-input-range__inner"},R=["max","min","step"],F=b({__name:"UiInputRange",props:p({min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},width:{type:String,default:void 0}},{modelValue:{required:!0,default:0},modelModifiers:{}}),emits:p(["keyup","keydown","input","change"],["update:modelValue"]),setup(u,{expose:v,emit:g}){const l=u,r=k({focussed:!1}),o=w(u,"modelValue"),i=M(),y=V(()=>{const n=(l.max-l.min)/100;return Math.round(o.value/n)}),s=g;function c(){var n;(n=i.value)==null||n.blur()}function x(){var n;(n=i.value)==null||n.focus()}function d(n){r.focussed=n}return v({focus:x,blur:c}),(n,e)=>($(),B("div",{class:"ui-input-range",style:f({width:u.width})},[a("div",I,[a("label",{class:N(["ui-input-range__input",[m(r).focussed?"ui-input-range__input--focus":""]])},[z(a("input",{ref_key:"inputRef",ref:i,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),max:u.max,min:u.min,step:u.step,type:"range",class:"ui-input-range__input-element",onInput:e[1]||(e[1]=t=>s("input",t)),onChange:e[2]||(e[2]=t=>s("change",t)),onKeyup:e[3]||(e[3]=t=>s("keyup")),onKeydown:e[4]||(e[4]=t=>s("keydown")),onFocus:e[5]||(e[5]=t=>d(!0)),onBlur:e[6]||(e[6]=t=>d(!1))},null,40,R),[[C,o.value,void 0,{number:!0}]]),a("span",{class:"ui-input-range__input-thumb",style:f({transform:`translateX(${m(y)-100}%)`})},null,4)],2)])],4))}});export{F as _};