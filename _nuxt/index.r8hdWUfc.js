import{i}from"./request.5IkpOjNq.js";const g=t=>{const e=/([<>!=]{1,2})([^<>!=]{1,2})/i,o=t.match(e);if(!o||!o[1])throw new Error("Filter Parameter Parse: operator not found");return{operator:o[1],value:(o==null?void 0:o[2])??""}},b=t=>`${t.operator}${t.value}`,u=t=>{switch(String(t)){case"true":return!0;case"false":return!1;default:return null}},r=t=>typeof t!="string"||["[object Object]","null"].includes(t)?null:String(t),l=t=>Number.isNaN(Number(t))?null:Number(t),y=(t,e)=>{if(Array.isArray(t))return t;if(!t||typeof t!="string")return null;const o=t.split(",");switch(e){case"boolean":return o.map(u);case"number":return o.map(l);case"string":return o.map(r);default:return null}},n={toArray:y,toBoolean:u,toString:r,toNumber:l},S=t=>(t=i(t)?t:{},{tankIsPremium:n.toBoolean(t==null?void 0:t.tankIsPremium),tankInGarage:n.toNumber(t==null?void 0:t.tankInGarage),tankNation:n.toArray(t==null?void 0:t.tankNation,"string")??[],tankTire:n.toArray(t==null?void 0:t.tankTire,"number")??[],tankType:n.toArray(t==null?void 0:t.tankType,"string")??[],achievementsSection:n.toString(t==null?void 0:t.achievementsSection),achievementsShow:n.toString(t==null?void 0:t.achievementsShow)??"important",battleMode:n.toString(t==null?void 0:t.battleMode)??"random"}),f=t=>(t=i(t)?t:{},{search:n.toString(t==null?void 0:t.search)??"",joinedAtDays:n.toString(t==null?void 0:t.joinedAtDays),lastBattleDays:n.toString(t==null?void 0:t.lastBattleDays)}),h=t=>(t=i(t)?t:{},{battleMode:n.toString(t==null?void 0:t.battleMode),accountId:n.toNumber(t==null?void 0:t.accountId),attributes:n.toArray(t==null?void 0:t.attributes,"string")??[],config:n.toString(t==null?void 0:t.config),style:n.toString(t==null?void 0:t.style),textColor:n.toString(t==null?void 0:t.textColor),bgColor:n.toString(t==null?void 0:t.bgColor),bgColorOpacity:n.toNumber(t==null?void 0:t.bgColorOpacity)}),d=t=>(t=i(t)?t:{},{ids:n.toArray(t==null?void 0:t.ids,"number")??[]}),k=({operator:t,value:e})=>{switch(t){case">":return`больше чем ${e}`;case"<":return`меньше чем ${e}`;case">=":return`больше или равно ${e}`;case"<=":return`меньше или равно ${e}`;case"!=":return`не равно ${e}`;case"=":return`равно ${e}`;default:return e}},A=(t,e,o)=>{switch(o){case"<":return t<e;case">":return t>e;case"<=":return t<=e;case">=":return t<=e;case"=":return t===e;case"!=":return t!==e;default:return!0}},N=t=>{if(!i(t))throw new TypeError("Value is not a object");const e={};return Object.entries(t).forEach(([o,c])=>{c!=null&&String(c)&&(e[o]=String(c))}),e},j={executeExpression:A,makeAccountFilters:S,makeClanFilters:f,humanizeParam:k,parseParameter:g,stringifyParameter:b,makeAccountSessionWidgetFilters:h,makeAccountSessionsFilters:d,toRouteQuery:N};export{j as f,S as m};
