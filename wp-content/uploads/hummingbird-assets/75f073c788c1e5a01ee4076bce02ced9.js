/**handles:qlwapp**/
(()=>{"use strict";function q(e,t){return e.includes(parseInt(t))||e.includes(t.toString())}function m(e,t){return parseInt(e+t)}function g(e){let t=""+e.getMinutes();return 1===t.length&&(t="0"+t),e.getHours()+":"+t}function e(e){this.qlwapp=e,this.init(this)}e.prototype={open(e,t){let a="https://api.whatsapp.com/send";this.mobiledevice||(a="https://web.whatsapp.com/send");const n=t,s=n.dataset.message||"",o=n.dataset.phone||"",i=n.dataset.type||"phone",l=n.dataset.group||"";"group"==i?n.setAttribute("href",l):n.setAttribute("href",a+"?phone="+o+"&text="+encodeURIComponent(s));var t=new CustomEvent("qlwapp.click",{bubbles:!0,cancelable:!0});this.qlwapp.dispatchEvent(t)},toggle(e){e?.preventDefault();var e=new CustomEvent("qlwapp.toggle");this.qlwapp.dispatchEvent(e)},chat(e,t){e.preventDefault();const a=t.closest(".qlwapp-box"),n=a.querySelector(".qlwapp-reply"),s=a.querySelector(".qlwapp-header"),o=t.querySelector(".qlwapp-avatar img")?.getAttribute("src"),i=t.querySelector(".qlwapp-name")?.textContent,l=t.querySelector(".qlwapp-label")?.textContent,p=t.querySelector(".qlwapp-time")?.textContent,r=t.dataset.message,c=t.dataset.type,u=t.dataset.group,d=t.dataset.phone;a.classList.add("response","opening"),this.qlwapp.dispatchEvent(new CustomEvent("qlwapp.height")),setTimeout(function(){a.classList.remove("opening")},300);const w=s.querySelector(".qlwapp-avatar img"),q=s.querySelector(".qlwapp-number"),m=s.querySelector(".qlwapp-name"),g=s.querySelector(".qlwapp-label"),v=a.querySelector(".qlwapp-message");w&&(w.setAttribute("src",o),w.setAttribute("alt",i)),q&&(q.innerHTML=u),m&&(m.innerHTML=i),g&&(g.innerHTML=p?p+" - "+l:l),v&&(v.innerHTML=r),n.dataset[c]="phone"==c?d:u,n.dataset.type=c},previous(e,t){e.preventDefault();const a=t.closest(".qlwapp-box");a.classList.add("closing"),setTimeout(function(){a.classList.remove("response","closing"),a.classList.remove("texting")},300)},init(o){const t=new CustomEvent("qlwapp.init"),a=new CustomEvent("qlwapp.resize"),l=this.qlwapp;if(l.classList.add("qlwapp-js-ready"),l.classList.contains("auto-load")&&(!(n=document.cookie.match("(^|;) ?qlwapp-auto-load=([^;]*)(;|$)"))||!n[2])){const q=Number(l.dataset.autoloadelay);setTimeout(()=>{o.toggle()},q),function(e,t,a){const n=new Date;n.setTime(n.getTime()+864e5),document.cookie=e+"="+t+";path=/;expires="+n.toGMTString()}("qlwapp-auto-load","auto open cookie",1)}var e,n;l.addEventListener("qlwapp.init",function(e){var t;o.mobiledevice=(t=window.matchMedia("(pointer:coarse)"))&&t.matches}),l.addEventListener("qlwapp.time",function(e){const t=e.target,a=JSON.parse(t.dataset.timedays)||[],n=parseInt(t.dataset.timezone)||0,s=new Date((new Date).getTime()+60*n*1e3).getUTCDay().toString(),o=t.querySelector(".qlwapp-days"),i=t.querySelector(".qlwapp-time");if(a&&a.length&&!a.includes(s)){t.classList.add("qlwapp-timeout"),o&&(o.style.display="block"),i&&(i.style.display="none");const m=function(t,a){for(let e=t;e<=6;e++)if(q(a,e))return e;for(let e=0;e<=t;e++)if(q(a,e))return e}(s,a),g=t.querySelector(`.day${m}`);return g&&g.classList.add("qlwapp-available-day"),!0}a&&a.length&&a.includes(s)&&(o&&(o.style.display="none"),i&&(i.style.display="block"));var l=t.dataset.timefrom||!1,p=t.dataset.timeto||!1,e,l;if(!p||!l||l===p)return!0;const r=new Date,c=-r.getTimezoneOffset()-n,u=new Date,d=new Date;e=m(l[0],l[1]),l=m(l[3],l[4]),d.setHours(e),d.setMinutes(l+c),e=m(p[0],p[1]),l=m(p[3],p[4]),u.setHours(e),u.setMinutes(l+c);let w=d.getTime();var l=u.getTime();if(w>l&&(w-=864e5),r.getTime()>=w&&r.getTime()<=l||(t.classList.add("qlwapp-timeout"),o&&(o.style.display="none"),i&&(i.style.display="block")),!n)return!0;t.querySelector(".from").textContent=g(d),t.querySelector(".to").textContent=g(u)}),l.addEventListener("qlwapp.pro",function(){const e=l.querySelector(".qlwapp-toggle"),t=l.querySelectorAll(".qlwapp-account"),a=new CustomEvent("qlwapp.time",{bubbles:!0});e.dispatchEvent(a),t.forEach(function(e){e.dispatchEvent(a)})}),l.addEventListener("qlwapp.resize",function(){this.classList.contains("qlwapp-show")&&o.toggle()}),l.addEventListener("qlwapp.init",function(){o.mobiledevice?(l.classList.add("mobile"),l.classList.remove("desktop")):(l.classList.add("desktop"),l.classList.remove("mobile")),l.classList.add("qlwapp-js-ready")}),l.addEventListener("qlwapp.init",function(){var e;l.classList.contains("qlwapp-premium")&&(e=new CustomEvent("qlwapp.pro"),l.dispatchEvent(e))}),l.addEventListener("qlwapp.height",function(e){const t=e.currentTarget,a=t.querySelector(".qlwapp-body").querySelector(".qlwapp-carousel"),n=t?.querySelector(".qlwapp-header")?.offsetHeight||0,s=t?.querySelector(".qlwapp-footer")?.offsetHeight||0;if(a){let e=window.innerHeight-n-s;o.mobiledevice||(e=.7*window.innerHeight-n-s),a.style.maxHeight=e+"px"}}),l.addEventListener("qlwapp.toggle",function(e){const t=e.currentTarget,a=t.querySelector(".qlwapp-box");t.classList.add("qlwapp-transition"),a.classList.remove("response","texting"),setTimeout(function(){t.classList.toggle("qlwapp-show");var e=new CustomEvent("qlwapp.height",{bubbles:!0});t.dispatchEvent(e)},10),setTimeout(function(){t.classList.toggle("qlwapp-transition")},300)}),l.addEventListener("click",function(e){var t=e.target.closest("[data-action]"),a;if(t&&l.contains(t))switch(t.dataset?.action){case"open":o.open(e,t);break;case"box":case"close":o.toggle(e,t);break;case"chat":o.chat(e,t);break;case"previous":o.previous(e,t)}}),l.querySelector("[data-action=response]")?.addEventListener("keypress",function(e){e.target.matches("textarea")&&13==e.keyCode&&setTimeout(function(){!function(e){if("createEvent"in document){const t=e.ownerDocument,a=t.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,t.defaultView,1,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}else e.click()}(l.querySelector(".qlwapp-reply"))},100)}),l.querySelector("[data-action=response]")?.addEventListener("keyup",function(e){if(e.target.matches("textarea")){e.preventDefault();const t=e.currentTarget,a=e.target,n=t.querySelector("pre"),s=t.querySelector(".qlwapp-reply"),o=l.querySelector(".qlwapp-box"),i=o.querySelector(".qlwapp-buttons");n.innerHTML=a.value,setTimeout(function(){o.classList.add("texting"),o.style.paddingBottom=n.offsetHeight+"px",i.classList.add("active");var e=a.value;""==(s.dataset.message=e)&&(o.classList.remove("texting"),i.classList.remove("active"))},300)}}),l.dispatchEvent(t),window.addEventListener("click",e=>{if(!e.target.closest("#qlwapp.qlwapp-show")){const e=document.querySelector("#qlwapp.qlwapp-show");e&&e.dispatchEvent(new CustomEvent("qlwapp.toggle"))}}),window.addEventListener("resize",()=>{if("TEXTAREA"!==document.activeElement.tagName){const e=document.querySelector("#qlwapp");e&&(e.dispatchEvent(a),e.dispatchEvent(t))}})}};const s=e;(()=>{window.qlwapp=(t,a)=>{if(void 0===a||"object"==typeof a)t.plugin_qlwapp||(t.plugin_qlwapp=new s(t,a));else if("string"==typeof a&&"_"!==a[0]&&"init"!==a){let e;const n=t.plugin_qlwapp;if(n instanceof s&&"function"==typeof n[a]){const t=Array.from(arguments).slice(1);e=n[a](...t)}return"destroy"===a&&(t.plugin_qlwapp=null),void 0!==e?e:t}};const e=()=>{document.querySelectorAll(".qlwapp").forEach(function(e){window.qlwapp(e)})};e(),window.addEventListener("load",()=>{e()})})()})();