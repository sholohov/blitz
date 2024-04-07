import{aa as h,at as b}from"./C1pZ3Ysy.js";const m=()=>h().$device,p=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,x=e=>Array.isArray(e),a=e=>typeof e=="function",v=(e,t)=>{const i=n.get(e);i&&i.handlers.push(...t)},y=(e,t)=>Object.is(e,t)||e.match&&t.match?Object.is(e.match,t.match):!1,k=(e,t)=>{const i=n.get(e);i&&(i.handlers=i.handlers.filter(s=>!t.some(r=>y(s,r))))},d=e=>{const t=[];return a(e)&&t.push({match:e}),p(e)&&t.push(e),x(e)?e.map(i=>a(i)?{match:i}:i):t},g=(e,t)=>{e&&a(t.matchOnce)&&t.matchOnce(),!e&&a(t.unmatchOnce)&&t.unmatchOnce()},f=(e,t)=>{e&&a(t.match)&&t.match(),!e&&a(t.unmatch)&&t.unmatch()},n=new Map,E=e=>{const t={mediaQuery:matchMedia(e),handlers:[],callback(i){const s=n.get(e);s&&s.handlers.forEach(r=>{f(i.matches,r)})}};return n.set(e,t),n.get(e)},Q=e=>{var i;const t=n.get(e);t&&((i=t.mediaQuery)!=null&&i.addEventListener?t.mediaQuery.addEventListener("change",t.callback):t.mediaQuery.addListener(t.callback))},l=e=>{var i;const t=n.get(e);t&&((i=t.mediaQuery)!=null&&i.removeEventListener?t.mediaQuery.removeEventListener("change",t.callback):t.mediaQuery.removeListener(t.callback))},u={add(e,t){let i=n.get(e);i||(i=E(e),Q(e));const s=d(t);v(e,s);const r=i.mediaQuery.matches;return s.forEach(o=>{g(r,o),o.defer||f(r,o)}),this},remove(e,t){if(t){const i=d(t);k(e,i)}else l(e),n.delete(e);return this},destroy(){[...n.keys()].forEach(e=>{l(e),n.delete(e)})}},c=Object.freeze({laptop:1400,tablet:1024,mobile:640,mobileSmall:480}),L={isMobileSm:{max:c.mobileSmall},isMobile:{max:c.mobile},isTablet:{max:c.tablet},isLaptop:{max:c.laptop},isDesktop:{min:c.laptop+1}},O=e=>{if(e.min&&!e.max)return`screen and (min-width: ${e.min}px)`;if(e.max&&!e.min)return`screen and (max-width: ${e.max}px)`;if(e.max&&e.min)return`screen and (min-width: ${e.min}px) and (max-width: ${e.max}px)`;throw new Error("createMediaExpression: no property specified")},w=b("breakpoints",{state:()=>({isMobile:m().isMobile,isTablet:m().isMobileOrTablet}),actions:{setBreakpoint(e){this[e.key]=e.value},init(){Object.entries(L).forEach(([e,t])=>{t&&u.add(O(t),{match:()=>this.setBreakpoint({key:e,value:!0}),unmatch:()=>this.setBreakpoint({key:e,value:!1})})})},destroy(){u.destroy()}}});export{w as u};
