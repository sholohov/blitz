import{q as a,a2 as o,s as r,x as s,G as i,j as n}from"./CjZrE5Wh.js";async function u(){try{const{data:t}=await a.auth.login({redirect_uri:location.href,nofollow:1});t&&o(t.location,{external:!0})}catch(t){r(t,{title:"Вход в аккаунт"})}}async function c(){const{$storage:t}=s();try{await a.auth.logout(),await i.auth.logout(),t.user.remove(),n().resetUser(),o("/")}catch(e){r(e,{title:"Вход из аккаунта"})}}const f={logout:c,login:u};export{f as a};
