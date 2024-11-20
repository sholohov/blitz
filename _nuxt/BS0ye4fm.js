import{_ as et}from"./W1n9aEx_.js";import{d as lt,o as R,n as w,j as X,w as at,F as nt,D as ot,p as Y,x,a4 as rt,v as it,h as ut,a7 as st,q as e}from"./BzQ49_ll.js";import{c as F}from"./z8RK9n7K.js";import{s as i}from"./DhcCwqhx.js";const ft={class:"metrics-plates"},ct={class:"metrics-plates__item-label"},bt={key:0,class:"metrics-plates__item-diff"},ht=lt({__name:"MetricsPlates",props:{items:{type:Array,required:!0,default:()=>[]},loading:{type:Boolean,default:!1}},setup(t){return(a,l)=>{const n=et;return R(),w("div",ft,[X(st,{tag:"ul",class:"metrics-plates__list"},{default:at(()=>[(R(!0),w(nt,null,ot(t.items,o=>(R(),w("li",{key:o.key,class:"metrics-plates__item"},[Y("span",ct,x(o.label),1),Y("b",{class:"metrics-plates__item-value",style:rt({color:o.color?`var(--color-${o.color})`:null})},[it(x(o.value)+" ",1),o.diff?(R(),w("span",bt,x(o.diff),1)):ut("",!0)],4),X(n,{loading:t.loading},null,8,["loading"])]))),128))]),_:1})])}}}),Z=(t,a)=>{if(!(!t||!a))return t.reduce((l,n)=>l+n.battle_life_time,0)/a.battles},dt=(t={})=>{var c,b,g,k,y,_,h,d,I,D,N,M,T,L,V,A,$,C,j,S,q,E,z,G,W,H;const a=[];a.push({label:"",key:"battles",value:((c=t.stat)==null?void 0:c.battles)||0,diff:e.number.toInteger((b=t.statDiff)==null?void 0:b.battles,!0)},{label:"",key:"winRate",value:e.number.toFloatPercent(((g=t.stat)==null?void 0:g.winRate)||0),diff:e.number.toFloatPercent((k=t.statDiff)==null?void 0:k.winRate,!0),color:F.winRate(((y=t.stat)==null?void 0:y.winRate)||0)},{label:"",key:"damagePerBattle",value:((_=t.stat)==null?void 0:_.damagePerBattle)||0,diff:e.number.toInteger((h=t.statDiff)==null?void 0:h.damagePerBattle,!0)});const l=t.stat&&t.achievements?i.winsInPlatoon({wins:t.stat.wins,achievements:t.achievements}):0,n=(()=>{var J,K,O,Q,U;if(!t.statDiff||!t.achievementsDiff)return null;const B=(((J=t.stat)==null?void 0:J.wins)??0)-t.statDiff.wins,p=((O=(K=t.achievements)==null?void 0:K.max_series)==null?void 0:O.jointVictory)??0,tt=((U=(Q=t.achievementsDiff)==null?void 0:Q.max_series)==null?void 0:U.jointVictory)??0;return(p-tt)/(B/100)})();a.push({label:"",key:"winsInPlatoon",value:e.number.toFloatPercent(l||0),diff:n?e.number.toFloatPercent(l-n,!0):null});const o=i.battlesPerDay({battles:((d=t.stat)==null?void 0:d.battles)??0,createAt:t.createAt??0}),u=i.battlesPerDay({battles:(((I=t.stat)==null?void 0:I.battles)??0)-(((D=t.statDiff)==null?void 0:D.battles)??0),createAt:t.createAt??0}),r=o-u;a.push({label:"",key:"battlesPerDay",value:o,diff:t.statDiff?e.number.toInteger(r,!0):null});const P=i.totalMasters(t.tanks??[]),v=i.totalMasters(t.tanksDiff??[]);a.push({label:"",key:"tanksWithMaster",value:`${P} / ${((N=t.tanks)==null?void 0:N.length)??0}`,diff:t.tanksDiff?`${v} / ${((M=t.tanksDiff)==null?void 0:M.length)??0}`:null}),a.push({label:"",key:"fragPerBattle",value:e.number.toFloatNumber(((T=t.stat)==null?void 0:T.fragPerBattle)||0),diff:e.number.toFloatNumber((L=t.statDiff)==null?void 0:L.fragPerBattle,!0)},{label:"",key:"surviveRate",value:e.number.toFloatPercent(((V=t.stat)==null?void 0:V.surviveRate)||0),diff:e.number.toFloatPercent((A=t.statDiff)==null?void 0:A.surviveRate,!0)},{label:"",key:"hitRate",value:e.number.toFloatPercent((($=t.stat)==null?void 0:$.hitRate)||0),diff:e.number.toFloatPercent((C=t.statDiff)==null?void 0:C.hitRate,!0)},{label:"",key:"spottedPerBattle",value:e.number.toFloatNumber(((j=t.stat)==null?void 0:j.spottedPerBattle)||0),diff:e.number.toFloatNumber((S=t.statDiff)==null?void 0:S.spottedPerBattle,!0)},{label:"",key:"xpPerBattle",value:e.number.toInteger(((q=t.stat)==null?void 0:q.xpPerBattle)||0),diff:e.number.toInteger((E=t.statDiff)==null?void 0:E.xpPerBattle,!0)},{label:"",key:"max_frags",value:((z=t.stat)==null?void 0:z.max_frags)||0,diff:e.number.toInteger((G=t.statDiff)==null?void 0:G.max_frags,!0)},{label:"",key:"max_xp",value:((W=t.stat)==null?void 0:W.max_xp)||0,diff:e.number.toInteger((H=t.statDiff)==null?void 0:H.max_xp,!0)});const s=Z(t.tanks,t.stat)??0,f=Z(t.tanksDiff,t.statDiff)??null,m=(f||0)-s;return a.push({key:"battle_life_time",label:"Время жизни в минутах",value:e.number.toFloatNumber(s/60||0),diff:f?e.number.toFloatNumber(m/60||0,!0):null}),a.forEach(B=>{B.label=e.stat.accountProp(B.key)}),a},mt=(t=[],a)=>{const l=t.length;let n;a&&l&&(n=i.accountAll(a.all,l));const o=Math.floor(t.reduce((u,r)=>Math.floor(u+i.battlesPerDay({createAt:r.created_at*1e3,battles:r.statistics.all.battles})),0)/l);return[{key:"battles",label:"Боёв",value:(n==null?void 0:n.battles)||0},{key:"winRate",label:"Побед",value:e.number.toFloatPercent((n==null?void 0:n.winRate)||0),color:F.winRate((n==null?void 0:n.winRate)||0)},{key:"damagePerBattle",label:"Урон",value:(n==null?void 0:n.damagePerBattle)||0},{key:"activity",label:"Боёв в день",value:e.number.toInteger(o)}]},Pt=t=>{var s,f,m,c,b;const a=t.tank.all,l=t.tankDiff?t.tankDiff.all:null,n=[{key:"battles",label:e.stat.accountProp("battles"),value:e.number.toInteger(a.battles||0),diff:e.number.toInteger(l==null?void 0:l.battles,!0)},{key:"winRate",label:e.stat.accountProp("winRate"),value:e.number.toFloatPercent(a.winRate||0),diff:e.number.toFloatPercent(l==null?void 0:l.winRate,!0),color:F.winRate(a.winRate||0)},{key:"damagePerBattle",label:e.stat.accountProp("damagePerBattle"),value:e.number.toInteger(a.damagePerBattle||0),diff:e.number.toInteger((l==null?void 0:l.damagePerBattle)||0,!0)},{key:"fragPerBattle",label:e.stat.accountProp("fragPerBattle"),value:e.number.toFloatNumber(a.fragPerBattle||0),diff:e.number.toFloatNumber(l==null?void 0:l.fragPerBattle,!0)},{key:"surviveRate",label:e.stat.accountProp("surviveRate"),value:e.number.toFloatPercent(a.surviveRate||0),diff:e.number.toFloatPercent(l==null?void 0:l.surviveRate,!0)},{key:"hitRate",label:e.stat.accountProp("hitRate"),value:e.number.toFloatPercent(a.hitRate||0),diff:e.number.toFloatPercent(l==null?void 0:l.hitRate,!0)},{key:"spottedPerBattle",label:e.stat.accountProp("spottedPerBattle"),value:e.number.toFloatNumber(a.spottedPerBattle||0),diff:e.number.toFloatNumber(l==null?void 0:l.spottedPerBattle,!0)},{key:"xpPerBattle",label:e.stat.accountProp("xpPerBattle"),value:e.number.toInteger(a.xpPerBattle||0),diff:e.number.toInteger(l==null?void 0:l.xpPerBattle,!0)},{key:"max_frags",label:e.stat.accountProp("max_frags"),value:e.number.toInteger(a.max_frags||0),diff:e.number.toInteger((s=t.tankDiff)==null?void 0:s.max_frags)},{key:"max_xp",label:e.stat.accountProp("max_xp"),value:e.number.toInteger(a.max_xp||0),diff:e.number.toInteger((f=t.tankDiff)==null?void 0:f.max_xp)}],o=t.tank.achievements?i.winsInPlatoon({wins:t.tank.all.wins??0,achievements:t.tank.achievements}):void 0,u=(m=t.tankDiff)!=null&&m.achievements?i.winsInPlatoon({wins:t.tankDiff.all.wins??0,achievements:t.tankDiff.achievements})-(o||0):void 0;n.push({key:"winsInPlatoon",label:e.stat.accountProp("winsInPlatoon"),value:e.number.toFloatPercent(o||0),diff:e.number.toFloatPercent(u,!0)});const r=t.tank.battle_life_time/a.battles,P=(((c=t.tankDiff)==null?void 0:c.battle_life_time)??NaN)/(((b=t.tankDiff)==null?void 0:b.all.battles)??NaN),v=r-P;return n.push({key:"lifeTime",label:e.stat.accountProp("lifeTime"),value:e.number.toFloatNumber(r/60||0),diff:e.number.toFloatNumber(v/60||0,!0)}),n},vt=(t={})=>{var l,n,o,u,r,P,v,s,f,m,c,b,g,k,y,_,h;const a=[{key:"battles",label:"Боёв",value:((l=t.stat)==null?void 0:l.battles)||0,diff:e.number.toInteger((n=t.diff)==null?void 0:n.battles,!0)},{key:"winRate",label:"Побед",value:e.number.toFloatPercent(((o=t.stat)==null?void 0:o.winRate)||0),diff:e.number.toFloatPercent((u=t.diff)==null?void 0:u.winRate,!0),color:F.winRate(((r=t.stat)==null?void 0:r.winRate)||0)},{key:"damagePerBattle",label:"Урон",value:((P=t.stat)==null?void 0:P.damagePerBattle)||0,diff:e.number.toInteger((v=t.diff)==null?void 0:v.damagePerBattle,!0)},{key:"fragPerBattle",label:"Уничтожено",value:e.number.toFloatNumber(((s=t.stat)==null?void 0:s.fragPerBattle)||0),diff:e.number.toFloatNumber((f=t.diff)==null?void 0:f.fragPerBattle,!0)},{key:"surviveRate",label:"Выживаемость",value:e.number.toFloatPercent(((m=t.stat)==null?void 0:m.surviveRate)||0),diff:e.number.toFloatPercent((c=t.diff)==null?void 0:c.surviveRate,!0)},{key:"hitRate",label:"Меткость",value:e.number.toFloatPercent(((b=t.stat)==null?void 0:b.hitRate)||0),diff:e.number.toFloatPercent((g=t.diff)==null?void 0:g.hitRate,!0)},{key:"spottedPerBattle",label:"Обнаружено",value:e.number.toFloatNumber(((k=t.stat)==null?void 0:k.spottedPerBattle)||0),diff:e.number.toFloatNumber((y=t.diff)==null?void 0:y.spottedPerBattle,!0)}];if((_=t.stat)!=null&&_.mm_rating){const d=(t.stat.mm_rating||0)*10+3e3;a.push({key:"mm_rating",label:"Рейтинг",value:e.number.toInteger(d)})}else{const d=10-(((h=t.stat)==null?void 0:h.calibration_battles_left)||0);a.push({key:"calibration_battles_left",label:d<10?"Калибровочные бои":"Рейтинг",value:d<10?`${e.number.toInteger(d)}/10`:"---"})}return a},Bt={account:dt,accountRating:vt,tank:Pt,clan:mt};export{ht as _,Bt as m};
