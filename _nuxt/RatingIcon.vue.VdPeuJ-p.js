import{s as r}from"./index.gZPKXVCX.js";import{f,i as m,o as p,c as b,a as g,k as o,t as R,C as y}from"./entry.DP5yAQ98.js";const v=a=>{if(a.role!=="private")return a.role;const e=1e3*60*60*24,n=Date.now();let i=a.role;return a.joinedAt*1e3>n-7*e&&(i="recruit"),i},j=(a,e,n)=>a.map(i=>{const t=(e??{})[i.tank_id]??{},s=n.find(l=>l.tank_id===i.tank_id);return t.name||console.log("no tank in vehicles data: id -",i.tank_id),{...i,is_premium:t.is_premium,is_collectible:t.is_collectible??!1,name:t.name,nation:t.nation,tier:t.tier,type:t.type,images:t.images,all:r.tank(i.all),achievements:{achievements:(s==null?void 0:s.achievements)??{},max_series:(s==null?void 0:s.max_series)??{},tank_id:(s==null?void 0:s.tank_id)??0,account_id:(s==null?void 0:s.account_id)??0}}}),h=a=>({...a,statistic:{all:{},rating:{}},create_at:0,last_battle_time:0}),u=(a,e)=>{const n=e.statistics.all,i=e.statistics.rating;return{account_id:e.account_id,account_name:e.nickname,create_at:e.created_at,last_battle_time:e.last_battle_time,statistic:{all:r.accountAll(n),rating:i?r.accountRating(i):null},joined_at:a.joined_at,role:_.getMemberRole({role:a.role,joinedAt:a.joined_at})}},$=(a,e)=>{const n=a.members_ids.map(i=>{var l;const t=((l=a.members)==null?void 0:l[i])??{account_id:0,account_name:"Deleted",joined_at:0,role:""},s=e[i];return s?u(t,s):h(t)});return{...a,members:n}},k=a=>{const e={league:"calibration",value:""};if(a.battlesLeft===0&&a.mmRating===0)return e;if(a.mmRating===0)return e.value=`${10-a.battlesLeft}/10`,e;const n=a.mmRating*10+3e3;return e.value=n.toFixed(0),n<2e3?e.league="bronze":n<3e3?e.league="silver":n<4e3?e.league="gold":n<5e3?e.league="platinum":e.league="brilliant",e},w=a=>{var c;const e=a.key,n=a.achievements.achievements[e],i=a.achievements.max_series[e],t=a.encyclopedia[e],s=d=>`/img/medals/${e.replace(/EU|RU|NA|SEA/,"")}${d??""}.webp`,l={key:e,count:n||0,series:i||0,condition:t==null?void 0:t.condition,description:t==null?void 0:t.description,name:t==null?void 0:t.name,section:t==null?void 0:t.section,image:s()};return t.options&&(l.name=((c=t.options[n-1])==null?void 0:c.name)||t.name,l.count=n?t.options.length-n+1:0,l.degree=n,l.image=s(n||t.options.length)),l.name=String(l.name).replace(/\(.+\)/,""),l},_={getMemberRole:v,getRating:k,clan:$,clanMember:u,accountTanks:j,achievementsMedal:w},x=["src","alt"],M={class:"rating-icon__value"},D=f({__name:"RatingIcon",props:{rating:{type:Object,default:void 0,required:!0},large:{type:Boolean,default:!1}},setup(a){const e=a,n=m(()=>e.large!==!1?"m":"l"),i=m(()=>e.rating?_.getRating({battlesLeft:e.rating.calibration_battles_left,mmRating:e.rating.mm_rating}):{});return(t,s)=>(p(),b("span",{class:y(["rating-icon",[a.large!==!1?"rating-icon--large":""]])},[g("img",{class:"rating-icon__img",src:`/img/leagues/${o(i).league}_${o(n)}.webp`,alt:t.$formatter.clan.league(o(i).league)},null,8,x),g("span",M,R(o(i).value||"---"),1)],2))}});export{D as _,_ as m};