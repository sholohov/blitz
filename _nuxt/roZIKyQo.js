import{g as s}from"./RPJY7rI9.js";import{aM as e}from"./DJlEGeV1.js";const r=e("notify",{state:()=>({items:[],duration:5e3}),actions:{add(i){i.id=s(),i.duration=i.duration??this.duration,this.items.push(i),i.duration!==0&&setTimeout(()=>{this.remove(i)},i.duration)},remove(i){const t=this.items.findIndex(o=>o.id===i.id);t>=0&&this.items.splice(t,1)}}});export{r as u};
