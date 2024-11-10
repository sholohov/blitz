import{c as e}from"./B4FMxlHh.js";import{aw as i}from"./DEnf58KD.js";const u=t=>{const n=/([<>!=]{1,2})([^<>!=]{1,2})/i,o=t.match(n);if(!o||!o[1])throw new Error("Filter Parameter Parse: operator not found");return{operator:o[1],value:(o==null?void 0:o[2])??""}},g=t=>`${t.operator}${t.value}`,l=t=>(t=i(t)?t:{},{tankIsPremium:e.toBoolean(t==null?void 0:t.tankIsPremium),tankInGarage:e.toNumber(t==null?void 0:t.tankInGarage),tankNation:e.toArray(t==null?void 0:t.tankNation,"string")??[],tankTire:e.toArray(t==null?void 0:t.tankTire,"number")??[],tankType:e.toArray(t==null?void 0:t.tankType,"string")??[],achievementsSection:e.toString(t==null?void 0:t.achievementsSection),achievementsShow:e.toString(t==null?void 0:t.achievementsShow)??"important",battleMode:e.toString(t==null?void 0:t.battleMode)??"random"}),b=t=>(t=i(t)?t:{},{search:e.toString(t==null?void 0:t.search)??"",joinedAtDays:e.toString(t==null?void 0:t.joinedAtDays),lastBattleDays:e.toString(t==null?void 0:t.lastBattleDays)}),S=t=>(t=i(t)?t:{},{battleMode:e.toString(t==null?void 0:t.battleMode),accountId:e.toNumber(t==null?void 0:t.accountId),attributes:e.toArray(t==null?void 0:t.attributes,"string")??[],config:e.toString(t==null?void 0:t.config),style:e.toString(t==null?void 0:t.style),textColor:e.toString(t==null?void 0:t.textColor),bgColor:e.toString(t==null?void 0:t.bgColor),bgColorOpacity:e.toNumber(t==null?void 0:t.bgColorOpacity)}),r=t=>(t=i(t)?t:{},{ids:e.toArray(t==null?void 0:t.ids,"number")??[]}),y=({operator:t,value:n})=>{switch(t){case">":return`больше чем ${n}`;case"<":return`меньше чем ${n}`;case">=":return`больше или равно ${n}`;case"<=":return`меньше или равно ${n}`;case"!=":return`не равно ${n}`;case"=":return`равно ${n}`;default:return n}},h=(t,n,o)=>{switch(o){case"<":return t<n;case">":return t>n;case"<=":return t<=n;case">=":return t<=n;case"=":return t===n;case"!=":return t!==n;default:return!0}},k=t=>{if(!i(t))throw new TypeError("Value is not a object");const n={};return Object.entries(t).forEach(([o,c])=>{c!=null&&String(c)&&(n[o]=String(c))}),n},f={executeExpression:h,makeAccountFilters:l,makeClanFilters:b,humanizeParam:y,parseParameter:u,stringifyParameter:g,makeAccountSessionWidgetFilters:S,makeAccountSessionsFilters:r,toRouteQuery:k};export{f,l as m};
