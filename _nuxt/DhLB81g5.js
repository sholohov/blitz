import{d as y,x as r,y as c,r as v,c as g,o as x,l as b,m as a,a6 as k,ab as w,R as d,f as M}from"./DJlEGeV1.js";const V={class:"ui-input-range__inner"},N={class:"ui-input-range__input"},R=["max","min","step"],C=y({__name:"UiInputRange",props:r({min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},width:{type:String,default:void 0}},{modelValue:{required:!0,default:0},modelModifiers:{}}),emits:r(["keyup","keydown","input","change"],["update:modelValue"]),setup(u,{expose:m,emit:p}){const l=u,i=c(u,"modelValue"),o=v(),f=g(()=>{const t=(l.max-l.min)/100;return Math.round(i.value/t)}),s=p;return m({focus:()=>{var t;(t=o.value)==null||t.focus()},blur:()=>{var t;(t=o.value)==null||t.blur()}}),(t,e)=>(x(),b("div",{class:"ui-input-range",style:d({width:u.width})},[a("div",V,[a("div",N,[k(a("input",{ref_key:"inputRef",ref:o,"onUpdate:modelValue":e[0]||(e[0]=n=>i.value=n),max:u.max,min:u.min,step:u.step,type:"range",class:"ui-input-range__input-element",onInput:e[1]||(e[1]=n=>s("input",n)),onChange:e[2]||(e[2]=n=>s("change",n)),onKeyup:e[3]||(e[3]=n=>s("keyup")),onKeydown:e[4]||(e[4]=n=>s("keydown"))},null,40,R),[[w,i.value,void 0,{number:!0}]]),a("span",{class:"ui-input-range__input-thumb",style:d({transform:`translateX(${M(f)-100}%)`})},null,4)])])],4))}});export{C as _};
