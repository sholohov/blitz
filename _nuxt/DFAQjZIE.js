import{av as s}from"./ByGHtsLc.js";const t={accountId:0,name:"Гость"},r=s("auth",{state:()=>({...t}),actions:{resetUser(){this.$patch({...t})},setUser(e){this.$patch(e)}}});export{r as u};
