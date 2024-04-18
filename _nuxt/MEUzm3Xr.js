import{at as s}from"./BDSon2aS.js";const t={accountId:0,name:"Гость"},o=s("auth",{state:()=>({...t}),actions:{resetUser(){this.$patch({...t})},setUser(e){this.$patch(e)}}});export{o as u};
