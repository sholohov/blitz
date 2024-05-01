import{_ as tt}from"./BHA4Nd6Z.js";import{f as et,o as R,c as w,b as U,w as lt,F as at,A as nt,a as X,t as x,K as ot,d as rt,m as it,T as ut,s as e}from"./Dfk_Fzw6.js";import{c as F}from"./CXVwBHr2.js";import{s as i}from"./D-pHF5aR.js";const st={class:"metrics-plates"},ft={class:"metrics-plates__item-label"},ct={key:0,class:"metrics-plates__item-diff"},_t=et({__name:"MetricsPlates",props:{items:{type:Array,required:!0,default:()=>[]},loading:{type:Boolean,default:!1}},setup(t){return(a,l)=>{const n=tt;return R(),w("div",st,[U(ut,{tag:"ul",class:"metrics-plates__list"},{default:lt(()=>[(R(!0),w(at,null,nt(t.items,o=>(R(),w("li",{key:o.key,class:"metrics-plates__item"},[X("span",ft,x(o.label),1),X("b",{class:"metrics-plates__item-value",style:ot({color:o.color?`var(--color-${o.color})`:null})},[rt(x(o.value)+" ",1),o.diff?(R(),w("span",ct,x(o.diff),1)):it("",!0)],4),U(n,{loading:t.loading},null,8,["loading"])]))),128))]),_:1})])}}}),Y=(t,a)=>{if(!(!t||!a))return t.reduce((l,n)=>l+n.battle_life_time,0)/a.battles},bt=(t={})=>{var f,c,b,g,k,y,_,h,d,I,D,N,M,T,L,A,V,$,C,j,S,E,q,z,G,K;const a=[];a.push({label:"",key:"battles",value:((f=t.stat)==null?void 0:f.battles)||0,diff:e.number.toInteger((c=t.statDiff)==null?void 0:c.battles,!0)},{label:"",key:"winRate",value:e.number.toFloatPercent(((b=t.stat)==null?void 0:b.winRate)||0),diff:e.number.toFloatPercent((g=t.statDiff)==null?void 0:g.winRate,!0),color:F.winRate(((k=t.stat)==null?void 0:k.winRate)||0)},{label:"",key:"damagePerBattle",value:((y=t.stat)==null?void 0:y.damagePerBattle)||0,diff:e.number.toInteger((_=t.statDiff)==null?void 0:_.damagePerBattle,!0)});const l=t.stat&&t.achievements?i.winsInPlatoon({wins:t.stat.wins,achievements:t.achievements}):0,n=(()=>{var W,H,J,O,Q;if(!t.statDiff||!t.achievementsDiff)return null;const B=(((W=t.stat)==null?void 0:W.wins)??0)-t.statDiff.wins,Z=((J=(H=t.achievements)==null?void 0:H.max_series)==null?void 0:J.jointVictory)??0,p=((Q=(O=t.achievementsDiff)==null?void 0:O.max_series)==null?void 0:Q.jointVictory)??0;return(Z-p)/(B/100)})();a.push({label:"",key:"winsInPlatoon",value:e.number.toFloatPercent(l||0),diff:n?e.number.toFloatPercent(l-n,!0):""});const o=i.battlesPerDay({battles:((h=t.stat)==null?void 0:h.battles)??0,createAt:t.createAt??0}),u=i.battlesPerDay({battles:(((d=t.stat)==null?void 0:d.battles)??0)-(((I=t.statDiff)==null?void 0:I.battles)??0),createAt:t.createAt??0})-o;a.push({label:"",key:"battlesPerDay",value:o,diff:t.statDiff?e.number.toInteger(u,!0):""});const r=i.totalMasters(t.tanks??[]),v=i.totalMasters(t.tanksDiff??[]);a.push({label:"",key:"tanksWithMaster",value:`${r} / ${((D=t.tanks)==null?void 0:D.length)??0}`,diff:t.tanksDiff?`${v} / ${((N=t.tanksDiff)==null?void 0:N.length)??0}`:""}),a.push({label:"",key:"fragPerBattle",value:e.number.toFloatNumber(((M=t.stat)==null?void 0:M.fragPerBattle)||0),diff:e.number.toFloatNumber((T=t.statDiff)==null?void 0:T.fragPerBattle,!0)},{label:"",key:"surviveRate",value:e.number.toFloatPercent(((L=t.stat)==null?void 0:L.surviveRate)||0),diff:e.number.toFloatPercent((A=t.statDiff)==null?void 0:A.surviveRate,!0)},{label:"",key:"hitRate",value:e.number.toFloatPercent(((V=t.stat)==null?void 0:V.hitRate)||0),diff:e.number.toFloatPercent(($=t.statDiff)==null?void 0:$.hitRate,!0)},{label:"",key:"spottedPerBattle",value:e.number.toFloatNumber(((C=t.stat)==null?void 0:C.spottedPerBattle)||0),diff:e.number.toFloatNumber((j=t.statDiff)==null?void 0:j.spottedPerBattle,!0)},{label:"",key:"xpPerBattle",value:e.number.toInteger(((S=t.stat)==null?void 0:S.xpPerBattle)||0),diff:e.number.toInteger((E=t.statDiff)==null?void 0:E.xpPerBattle,!0)},{label:"",key:"max_frags",value:((q=t.stat)==null?void 0:q.max_frags)||0,diff:e.number.toInteger((z=t.statDiff)==null?void 0:z.max_frags,!0)},{label:"",key:"max_xp",value:((G=t.stat)==null?void 0:G.max_xp)||0,diff:e.number.toInteger((K=t.statDiff)==null?void 0:K.max_xp,!0)});const m=Y(t.tanks,t.stat)??0,s=Y(t.tanksDiff,t.statDiff)??null,P=(s||0)-m;return a.push({key:"battle_life_time",label:"Время жизни в минутах",value:e.number.toFloatNumber(m/60||0),diff:s?e.number.toFloatNumber(P/60||0,!0):void 0}),a.forEach(B=>{B.label=e.stat.accountProp(B.key)}),a},dt=(t=[],a)=>{const l=t.length;let n;a&&l&&(n=i.accountAll(a.all,l));const o=Math.floor(t.reduce((u,r)=>Math.floor(u+i.battlesPerDay({createAt:r.created_at*1e3,battles:r.statistics.all.battles})),0)/l);return[{key:"battles",label:"Боёв",value:(n==null?void 0:n.battles)||0},{key:"winRate",label:"Побед",value:e.number.toFloatPercent((n==null?void 0:n.winRate)||0),color:F.winRate((n==null?void 0:n.winRate)||0)},{key:"damagePerBattle",label:"Урон",value:(n==null?void 0:n.damagePerBattle)||0},{key:"activity",label:"Боёв в день",value:e.number.toInteger(o)}]},mt=t=>{var s,P,f,c,b;const a=t.tank.all,l=t.tankDiff?t.tankDiff.all:null,n=[{key:"battles",label:e.stat.accountProp("battles"),value:e.number.toInteger(a.battles||0),diff:e.number.toInteger(l==null?void 0:l.battles,!0)},{key:"winRate",label:e.stat.accountProp("winRate"),value:e.number.toFloatPercent(a.winRate||0),diff:e.number.toFloatPercent(l==null?void 0:l.winRate,!0),color:F.winRate(a.winRate||0)},{key:"damagePerBattle",label:e.stat.accountProp("damagePerBattle"),value:e.number.toInteger(a.damagePerBattle||0),diff:e.number.toInteger((l==null?void 0:l.damagePerBattle)||0,!0)},{key:"fragPerBattle",label:e.stat.accountProp("fragPerBattle"),value:e.number.toFloatNumber(a.fragPerBattle||0),diff:e.number.toFloatNumber(l==null?void 0:l.fragPerBattle,!0)},{key:"surviveRate",label:e.stat.accountProp("surviveRate"),value:e.number.toFloatPercent(a.surviveRate||0),diff:e.number.toFloatPercent(l==null?void 0:l.surviveRate,!0)},{key:"hitRate",label:e.stat.accountProp("hitRate"),value:e.number.toFloatPercent(a.hitRate||0),diff:e.number.toFloatPercent(l==null?void 0:l.hitRate,!0)},{key:"spottedPerBattle",label:e.stat.accountProp("spottedPerBattle"),value:e.number.toFloatNumber(a.spottedPerBattle||0),diff:e.number.toFloatNumber(l==null?void 0:l.spottedPerBattle,!0)},{key:"xpPerBattle",label:e.stat.accountProp("xpPerBattle"),value:e.number.toInteger(a.xpPerBattle||0),diff:e.number.toInteger(l==null?void 0:l.xpPerBattle,!0)},{key:"max_frags",label:e.stat.accountProp("max_frags"),value:e.number.toInteger(a.max_frags||0),diff:e.number.toInteger((s=t.tankDiff)==null?void 0:s.max_frags)},{key:"max_xp",label:e.stat.accountProp("max_xp"),value:e.number.toInteger(a.max_xp||0),diff:e.number.toInteger((P=t.tankDiff)==null?void 0:P.max_xp)}],o=t.tank.achievements?i.winsInPlatoon({wins:t.tank.all.wins??0,achievements:t.tank.achievements}):void 0,u=(f=t.tankDiff)!=null&&f.achievements?i.winsInPlatoon({wins:t.tankDiff.all.wins??0,achievements:t.tankDiff.achievements})-(o||0):void 0;n.push({key:"winsInPlatoon",label:e.stat.accountProp("winsInPlatoon"),value:e.number.toFloatPercent(o||0),diff:e.number.toFloatPercent(u,!0)});const r=t.tank.battle_life_time/a.battles,v=(((c=t.tankDiff)==null?void 0:c.battle_life_time)??NaN)/(((b=t.tankDiff)==null?void 0:b.all.battles)??NaN),m=r-v;return n.push({key:"lifeTime",label:e.stat.accountProp("lifeTime"),value:e.number.toFloatNumber(r/60||0),diff:e.number.toFloatNumber(m/60||0,!0)}),n},Pt=(t={})=>{var l,n,o,u,r,v,m,s,P,f,c,b,g,k,y,_,h;const a=[{key:"battles",label:"Боёв",value:((l=t.stat)==null?void 0:l.battles)||0,diff:e.number.toInteger((n=t.diff)==null?void 0:n.battles,!0)},{key:"winRate",label:"Побед",value:e.number.toFloatPercent(((o=t.stat)==null?void 0:o.winRate)||0),diff:e.number.toFloatPercent((u=t.diff)==null?void 0:u.winRate,!0),color:F.winRate(((r=t.stat)==null?void 0:r.winRate)||0)},{key:"damagePerBattle",label:"Урон",value:((v=t.stat)==null?void 0:v.damagePerBattle)||0,diff:e.number.toInteger((m=t.diff)==null?void 0:m.damagePerBattle,!0)},{key:"fragPerBattle",label:"Уничтожено",value:e.number.toFloatNumber(((s=t.stat)==null?void 0:s.fragPerBattle)||0),diff:e.number.toFloatNumber((P=t.diff)==null?void 0:P.fragPerBattle,!0)},{key:"surviveRate",label:"Выживаемость",value:e.number.toFloatPercent(((f=t.stat)==null?void 0:f.surviveRate)||0),diff:e.number.toFloatPercent((c=t.diff)==null?void 0:c.surviveRate,!0)},{key:"hitRate",label:"Меткость",value:e.number.toFloatPercent(((b=t.stat)==null?void 0:b.hitRate)||0),diff:e.number.toFloatPercent((g=t.diff)==null?void 0:g.hitRate,!0)},{key:"spottedPerBattle",label:"Обнаружено",value:e.number.toFloatNumber(((k=t.stat)==null?void 0:k.spottedPerBattle)||0),diff:e.number.toFloatNumber((y=t.diff)==null?void 0:y.spottedPerBattle,!0)}];if((_=t.stat)!=null&&_.mm_rating){const d=(t.stat.mm_rating||0)*10+3e3;a.push({key:"mm_rating",label:"Рейтинг",value:e.number.toInteger(d)})}else{const d=10-(((h=t.stat)==null?void 0:h.calibration_battles_left)||0);a.push({key:"calibration_battles_left",label:d<10?"Калибровочные бои":"Рейтинг",value:d<10?`${e.number.toInteger(d)}/10`:"---"})}return a},ht={account:bt,accountRating:Pt,tank:mt,clan:dt};export{_t as _,ht as m};