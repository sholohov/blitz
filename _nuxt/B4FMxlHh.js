const n=r=>{switch(String(r)){case"true":return!0;case"false":return!1;default:return null}},e=r=>typeof r!="string"||["[object Object]","null"].includes(r)?null:String(r),s=r=>Number.isNaN(Number(r))?null:Number(r),o=(r,u)=>{if(Array.isArray(r))return r;if(!r||typeof r!="string")return null;const t=r.split(",");switch(u){case"boolean":return t.map(n);case"number":return t.map(s);case"string":return t.map(e);default:return null}},c={toArray:o,toBoolean:n,toString:e,toNumber:s};export{c};
