import{d as T,z as S,r as g,B as E,A as V,o as k,q as B,j as r,w as x,y as I,ap as m,_ as q,al as A,aq as F,s as R,a4 as U,E as M}from"./BytUdlbn.js";const D={class:"ui-input-number"},z=["min","max","step","disabled","placeholder"],G=T({__name:"UiInputNumber",props:M({min:{type:[Number,String],default:Number.MIN_SAFE_INTEGER},max:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},step:{type:[Number,String],default:1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"0"},width:{type:String,default:""}},{modelValue:{required:!0,default:""},modelModifiers:{}}),emits:M(["clear","keyup","keydown","input","change"],["update:modelValue"]),setup(s,{expose:y,emit:$}){const a=s,t=S(s,"modelValue"),v=g(),p=$;let i=0;const b=(u=!1,e)=>{if(u){e();const d=Date.now()+500;i=window.setInterval(()=>{d>Date.now()||e()},30)}else window.clearTimeout(i),i=0},l=(u=!1)=>{b(u,()=>{+t.value>=+a.max||(t.value=(+t.value||0)+ +a.step)})},o=(u=!1)=>{b(u,()=>{+t.value<=+a.min||(t.value=(+t.value||0)-+a.step)})};function N(){var u;(u=v.value)==null||u.blur()}function f(){var u;(u=v.value)==null||u.focus()}return E(()=>t.value,()=>{t.value===""?t.value="":+t.value<=+a.min?t.value=+a.min:+t.value>=+a.max&&(t.value=+a.max),p("input","keyup")}),V(()=>{window.clearTimeout(i)}),y({focus:f,blur:N}),(u,e)=>{const d=I,w=q;return k(),B("div",D,[r(w,{"is-square":"","is-text":"",tabindex:"-1",class:"ui-input-number__btn",disabled:+t.value<=+a.min||s.disabled,onTouchstart:e[0]||(e[0]=m(n=>o(!0),["prevent"])),onTouchend:e[1]||(e[1]=m(n=>o(!1),["prevent"])),onTouchcancel:e[2]||(e[2]=n=>o(!1)),onMousedown:e[3]||(e[3]=n=>o(!0)),onMouseup:e[4]||(e[4]=n=>o(!1)),onMouseleave:e[5]||(e[5]=n=>o(!1)),onFocus:e[6]||(e[6]=n=>f())},{default:x(()=>[r(d,{name:"remove"})]),_:1},8,["disabled"]),A(R("input",{ref_key:"inputRef",ref:v,"onUpdate:modelValue":e[7]||(e[7]=n=>t.value=n),type:"number",min:s.min,max:s.max,step:s.step,disabled:s.disabled,placeholder:s.placeholder,class:"ui-input-number__input",style:U({width:s.width}),onKeyup:e[8]||(e[8]=n=>p("keyup",n))},null,44,z),[[F,t.value]]),r(w,{"is-square":"","is-text":"",tabindex:"-1",class:"ui-input-number__btn",disabled:+t.value>=+a.max||s.disabled,onTouchstart:e[9]||(e[9]=m(n=>l(!0),["prevent"])),onTouchend:e[10]||(e[10]=m(n=>l(!1),["prevent"])),onTouchcancel:e[11]||(e[11]=n=>l(!1)),onMousedown:e[12]||(e[12]=n=>l(!0)),onMouseup:e[13]||(e[13]=n=>l(!1)),onMouseleave:e[14]||(e[14]=n=>l(!1)),onFocus:e[15]||(e[15]=n=>f())},{default:x(()=>[r(d,{name:"add"})]),_:1},8,["disabled"])])}}});export{G as _};
