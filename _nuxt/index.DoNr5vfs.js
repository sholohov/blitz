import{aa as b,ar as f}from"./entry.DP5yAQ98.js";import{d as l}from"./disableScroll.DjVa_9z0.js";import{b as g,a as v}from"./request.5IkpOjNq.js";const k=()=>b().$device,x=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,y=e=>Array.isArray(e),c=e=>typeof e=="function",M=(e,t)=>{const i=s.get(e);i&&i.handlers.push(...t)},O=(e,t)=>Object.is(e,t)||e.match&&t.match?Object.is(e.match,t.match):!1,S=(e,t)=>{const i=s.get(e);i&&(i.handlers=i.handlers.filter(n=>!t.some(a=>O(n,a))))},m=e=>{const t=[];return c(e)&&t.push({match:e}),x(e)&&t.push(e),y(e)?e.map(i=>c(i)?{match:i}:i):t},E=(e,t)=>{e&&c(t.matchOnce)&&t.matchOnce(),!e&&c(t.unmatchOnce)&&t.unmatchOnce()},p=(e,t)=>{e&&c(t.match)&&t.match(),!e&&c(t.unmatch)&&t.unmatch()},s=new Map,Q=e=>{const t={mediaQuery:matchMedia(e),handlers:[],callback(i){const n=s.get(e);n&&n.handlers.forEach(a=>{p(i.matches,a)})}};return s.set(e,t),s.get(e)},$=e=>{var i;const t=s.get(e);t&&((i=t.mediaQuery)!=null&&i.addEventListener?t.mediaQuery.addEventListener("change",t.callback):t.mediaQuery.addListener(t.callback))},d=e=>{var i;const t=s.get(e);t&&((i=t.mediaQuery)!=null&&i.removeEventListener?t.mediaQuery.removeEventListener("change",t.callback):t.mediaQuery.removeListener(t.callback))},u={add(e,t){let i=s.get(e);i||(i=Q(e),$(e));const n=m(t);M(e,n);const a=i.mediaQuery.matches;return n.forEach(o=>{E(a,o),o.defer||p(a,o)}),this},remove(e,t){if(t){const i=m(t);S(e,i)}else d(e),s.delete(e);return this},destroy(){[...s.keys()].forEach(e=>{d(e),s.delete(e)})}},r=Object.freeze({laptop:1400,tablet:1024,mobile:640,mobileSmall:480}),w={isMobileSm:{max:r.mobileSmall},isMobile:{max:r.mobile},isTablet:{max:r.tablet},isLaptop:{max:r.laptop},isDesktop:{min:r.laptop+1}},L=e=>{if(e.min&&!e.max)return`screen and (min-width: ${e.min}px)`;if(e.max&&!e.min)return`screen and (max-width: ${e.max}px)`;if(e.max&&e.min)return`screen and (min-width: ${e.min}px) and (max-width: ${e.max}px)`;throw new Error("createMediaExpression: no property specified")},B=f("breakpoints",{state:()=>({isMobile:!1,isTablet:!1}),actions:{setBreakpoint(e){this[e.key]=e.value},init(){Object.entries(w).forEach(([e,t])=>{t&&u.add(L(t),{match:()=>this.setBreakpoint({key:e,value:!0}),unmatch:()=>this.setBreakpoint({key:e,value:!1})})})},destroy(){u.destroy()}}}),h="http://glossary-static-cdn.lesta.ru/icons/wotb/current/uploaded/vehicles",H=f("main",{state:()=>({version:"0.8.0",mainSearchOpened:!1,mobileMenuOpened:!1,vehicles:null,achievements:null}),actions:{openMobileMenu(e){this.mobileMenuOpened=e,l(e)},toggleMobileMenu(e){e===void 0?this.mobileMenuOpened=!this.mobileMenuOpened:this.mobileMenuOpened=e,l(this.mobileMenuOpened)},toggleMainSearch(e){e===void 0?this.mainSearchOpened=!this.mainSearchOpened:this.mainSearchOpened=e},async getTanksVehicles(){const{data:e}=await g.get("/data/tanks.json"),t={};e.forEach(i=>{let n=i.ru_name||i.en_name;n=/^none$/i.test(n)?`TN: ${i.tech_name}`:n??`ID: ${i.cd}`,t[i.cd]={tank_id:i.cd,name:n,nation:i.nation,tier:i.level,type:i.class,is_premium:String(i.tags).includes("premium"),is_collectible:String(i.tags).includes("collectible"),images:{preview:`${h}/hd_thumbnail/${i.tech_name}.png`,normal:`${h}/hd/${i.tech_name}.png`}}}),this.vehicles=t||null},async getAchievements(){const{data:e}=await v.encyclopedia.getAchievements();this.achievements=e??null}}});export{k as a,H as b,B as u};
