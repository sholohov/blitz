import{aw as s,Q as x}from"./CjZrE5Wh.js";const h=e=>+(e.hits/(e.shots/100)||0).toFixed(2),m=e=>+(e.wins/(e.battles/100)||0).toFixed(2),u=e=>{const t=e.battles||0;return+((e.survived_battles||0)/(t/100)||0).toFixed(2)},i=e=>{const t=e.battles||0;return+((e.damage_dealt||0)/t||0).toFixed(0)},d=e=>{const t=e.battles||0;return+((e.xp||0)/t||0).toFixed(0)},g=e=>{const t=e.battles||0;return+((e.frags||0)/t||0).toFixed(2)},b=e=>{const t=e.battles||0;return+((e.frags8p||0)/t||0).toFixed(2)},p=e=>{const t=e.battles||0;return+((e.spotted||0)/t||0).toFixed(2)},M=Object.freeze(Object.defineProperty({__proto__:null,damagePerBattle:i,frag8pPerBattle:b,fragPerBattle:g,hitRate:h,spottedPerBattle:p,surviveRate:u,winRate:m,xpPerBattle:d},Symbol.toStringTag,{value:"Module"})),w=e=>({...e,winRate:m(e),hitRate:h(e),surviveRate:u(e),damagePerBattle:i(e),xpPerBattle:d(e),fragPerBattle:g(e),spottedPerBattle:p(e)}),P=(e,t=1)=>{if(!s(e))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(e.battles/t),capture_points:Math.floor(e.capture_points/t),damage_dealt:Math.floor(e.damage_dealt/t),damage_received:Math.floor(e.damage_received/t),dropped_capture_points:Math.floor(e.dropped_capture_points/t),frags8p:Math.floor(e.frags8p/t),frags:Math.floor(e.frags/t),hits:Math.floor(e.hits/t),losses:Math.floor(e.losses/t),max_frags:Math.floor(e.max_frags/t),max_frags_tank_id:Math.floor(e.max_frags_tank_id/t),max_xp:Math.floor(e.max_xp/t),max_xp_tank_id:Math.floor(e.max_xp_tank_id/t),shots:Math.floor(e.shots/t),spotted:Math.floor(e.spotted/t),survived_battles:Math.floor(e.survived_battles/t),win_and_survived:Math.floor(e.win_and_survived/t),wins:Math.floor(e.wins/t),xp:Math.floor(e.xp/t),winRate:m(e),hitRate:h(e),surviveRate:u(e),xpPerBattle:d(e),damagePerBattle:i(e),fragPerBattle:g(e),frag8pPerBattle:b(e),spottedPerBattle:p(e)}},_=(e,t)=>{if(!s(e)||!s(t))throw new Error("addValues: some value is not a object");const a={};for(const r in{...e,...t}){const o=Number(e[r]??0),n=Number(t[r]??0);a[r]=o-n}return a},B=(e,t)=>{const a={frags:e.frags,all:_(e.all,t.all),clan:e!=null&&e.clan&&(t!=null&&t.clan)?_(e.clan,t.clan):null,rating:void 0};return e.rating&&t.rating&&(a.rating=_(e.rating,t.rating)),a},f=(e,t)=>{if(!s(e)||!s(t))throw new Error("addValues: some value is not a object");const a={};for(const r in{...e,...t}){const o=Number(e[r]??0),n=Number(t[r]??0);a[r]=o+n}return a},y=(e,t)=>{const a={frags:e.frags,all:f(e.all,t.all),clan:e.clan&&t.clan?f(e.clan,t.clan):null,rating:void 0};return e.rating&&t.rating&&(a.rating=f(e.rating,t.rating)),a},k=(e,t=1)=>{if(!s(e))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(e.battles/t),capture_points:Math.floor(e.capture_points/t),damage_dealt:Math.floor(e.damage_dealt/t),damage_received:Math.floor(e.damage_received/t),dropped_capture_points:Math.floor(e.dropped_capture_points/t),frags8p:Math.floor(e.frags8p/t),frags:Math.floor(e.frags/t),hits:Math.floor(e.hits/t),losses:Math.floor(e.losses/t),shots:Math.floor(e.shots/t),spotted:Math.floor(e.spotted/t),survived_battles:Math.floor(e.survived_battles/t),win_and_survived:Math.floor(e.win_and_survived/t),wins:Math.floor(e.wins/t),xp:Math.floor(e.xp/t),calibration_battles_left:Math.floor(e.calibration_battles_left/t),current_season:Math.floor(e.current_season/t),mm_rating:+(e.mm_rating/t).toFixed(2),recalibration_start_time:Math.floor(e.recalibration_start_time/t),is_recalibration:e.is_recalibration,rating:e.mm_rating?Math.floor(e.mm_rating*10+3e3):0,winRate:m(e),hitRate:h(e),surviveRate:u(e),damagePerBattle:i(e),fragPerBattle:g(e),spottedPerBattle:p(e)}},v=(e,t,a)=>{const r={achievements:{},max_series:{}};for(const o in e.achievements){const n=e.achievements[o]||0,l=t.achievements[o]||0,c=Array.isArray(a==null?void 0:a[o].options);c?r.achievements[o]=Math.abs(n-l)?n:0:r.achievements[o]=c?n:n-l}for(const o in e.max_series){const n=e.max_series[o]||0,l=t.max_series[o]||0;r.max_series[o]=n-l}return r},R=(e,t)=>{var a,r;return[e.all.wins*1e3,e.all.damage_dealt,(((a=t.achievements)==null?void 0:a.medalBrothersInArms)??0)*(1500/2),(((r=t.achievements)==null?void 0:r.medalCrucialContribution)??0)*(3500/2)].reduce((o,n)=>o+n,0)},F=e=>{var t;return(((t=e.achievements.max_series)==null?void 0:t.jointVictory)||0)/(e.wins/100)},A=e=>{const{battles:t,createAt:a}=e,r=(Date.now()-a)/x;return Math.floor(t/Math.max(r,1))},j=e=>e.reduce((t,a)=>a.mark_of_mastery===4?t+1:t,0),V=(e,t,a)=>{const r={achievements:{},max_series:{},account_id:e.account_id,tank_id:e.tank_id};for(const o in e.achievements){const n=e.achievements[o]||0,l=t.achievements[o]||0,c=Array.isArray(a==null?void 0:a[o].options);c?r.achievements[o]=Math.abs(n-l)?n:0:r.achievements[o]=c?n:n-l}for(const o in e.max_series){const n=e.max_series[o]||0,l=t.max_series[o]||0;r.max_series[o]=n-l}return r},D={accountAll:P,accountRating:k,tank:w,diffFull:B,diff:_,sum:f,sumFull:y,accountAchievementsDiff:v,teamPoints:R,winsInPlatoon:F,battlesPerDay:A,totalMasters:j,tankAchievementsDiff:V,...M};export{D as s};