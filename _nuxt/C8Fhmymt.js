import{d as T,x as b,y as S,r as g,A as c,z as E,o as V,l as I,h as r,w,aa as m,a6 as B,ab as R,m as k,R as A,_ as U,v as q}from"./DJlEGeV1.js";const D={class:"ui-input-number"},z=["min","max","step","disabled","placeholder"],F=T({__name:"UiInputNumber",props:b({min:{type:[Number,String],default:Number.MIN_SAFE_INTEGER},max:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},step:{type:[Number,String],default:1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"0"},width:{type:String,default:""}},{modelValue:{required:!0,default:""},modelModifiers:{}}),emits:b(["clear","keyup","keydown","input","change"],["update:modelValue"]),setup(u,{expose:x,emit:M}){const a=u,t=S(u,"modelValue"),f=g(),$=M;let o=0;const v=(s=!1,e)=>{if(s){e();const d=Date.now()+500;o=window.setInterval(()=>{d>Date.now()||e()},50)}else window.clearTimeout(o),o=0},l=(s=!1)=>{v(s,()=>{+t.value>=+a.max||(t.value=(+t.value||0)+ +a.step)})},i=(s=!1)=>{v(s,()=>{+t.value<=+a.min||(t.value=(+t.value||0)-+a.step)})};function y(){var s;(s=f.value)==null||s.blur()}function N(){var s;(s=f.value)==null||s.focus()}return c(()=>t.value,()=>{t.value===""?t.value="":+t.value<=+a.min?t.value=+a.min:+t.value>=+a.max&&(t.value=+a.max),$("input")}),E(()=>{window.clearTimeout(o)}),x({focus:N,blur:y}),(s,e)=>{const d=U,p=q;return V(),I("div",D,[r(p,{"is-square":"","is-text":"",class:"ui-input-number__btn",disabled:+t.value<=+a.min||u.disabled,onTouchstart:e[0]||(e[0]=m(n=>i(!0),["prevent"])),onTouchend:e[1]||(e[1]=m(n=>i(!1),["prevent"])),onTouchcancel:e[2]||(e[2]=n=>i(!1)),onMousedown:e[3]||(e[3]=n=>i(!0)),onMouseup:e[4]||(e[4]=n=>i(!1)),onMouseleave:e[5]||(e[5]=n=>i(!1))},{default:w(()=>[r(d,{name:"remove"})]),_:1},8,["disabled"]),B(k("input",{ref_key:"inputRef",ref:f,"onUpdate:modelValue":e[6]||(e[6]=n=>t.value=n),type:"number",min:u.min,max:u.max,step:u.step,disabled:u.disabled,placeholder:u.placeholder,class:"ui-input-number__input",style:A({width:u.width})},null,12,z),[[R,t.value]]),r(p,{"is-square":"","is-text":"",class:"ui-input-number__btn",disabled:+t.value>=+a.max||u.disabled,onTouchstart:e[7]||(e[7]=m(n=>l(!0),["prevent"])),onTouchend:e[8]||(e[8]=m(n=>l(!1),["prevent"])),onTouchcancel:e[9]||(e[9]=n=>l(!1)),onMousedown:e[10]||(e[10]=n=>l(!0)),onMouseup:e[11]||(e[11]=n=>l(!1)),onMouseleave:e[12]||(e[12]=n=>l(!1))},{default:w(()=>[r(d,{name:"add"})]),_:1},8,["disabled"])])}}});export{F as _};
