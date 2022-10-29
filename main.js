(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),l=t(667),c=t.n(l),s=new URL(t(455),t.b),d=i()(o()),u=c()(s);d.push([n.id,":root {\n  --main-bg-color:rgba(219, 226, 239, 1.0);\n  --font-color:rgba(249, 247, 247, 1.0);\n  --light-blue:rgba(64, 115, 175, 1.0);\n  --dark-blue-blur:rgba(18, 46, 80, .6);\n  --dark-blue: rgba(18, 46, 80, 1.0);\n  --modal-color:rgba(179, 199, 223, .8);\n  --lightest-blue-blur:rgba(179, 199, 223, .6);\n  color: var(--font-color);\n  font-family: Arial, Helvetica, sans-serif;\n}\nhtml, body{\n  height: fit-content;\n  width: fit-content;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  background: url("+u+') no-repeat right 33% bottom 65%/100%;\n  -webkit-backdrop-filter: blur(3px) grayscale(60%);\n  backdrop-filter: blur(3px) grayscale(60%);\n  overflow: visible;\n  margin: 0;\n}\n#projectDiv h1{\n  margin: 0;\n}\n\n.mainContent {\n  padding: 0 0 0 25px;\n    /* display: flex;\n  flex-wrap: wrap; */\n  width: auto;\n  height: 100%-25px;\n  transition: 1s ease;\n}\n.main-content_large {\n  width: 100%;\n}\nul {\n  list-style: none;\n  margin: 5px;\n  padding: 0;\n}\n.header, .footer {\n  font-size: 2rem;\n  text-align: center;\n  background-color: var(--lightest-blue-blur);\n  color: var(--dark-blue);\n  backdrop-filter: blur(1px);\n}\n.footer{\n  background-color: var(--dark-blue);\n  color: var(--font-color);\n}\n.mainContent li {\n  margin: 7px;\n  list-style: none;\n}\n#taskHeader{\n  margin: 1.05em 0em 0em 0em;\n  color: var(--dark-blue);\n}\n#projectList li{\n  margin: 1em 0em 1em 0em;\n  text-align: center;\n}\n#projectTitle{\n  margin: 25px 16px 0 16px;\n  color: var(--dark-blue);\n}\n#taskList {\n  display: flex;\n  flex-wrap: wrap;\n}\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px;\n  margin: 5px;\n}\ninput, select{\n  border: none;\n  opacity: 0.7;\n}\n#taskSubmit {\n  margin: 2em;\n  border: thin solid black;\n  background-color: var(--main-bg-color);\n  border-radius: 10%;\n}\ninput{\n  padding: 5px;\n  text-align: center;\n}\nlabel{\n  padding: 5px;\n}\n.wrapper {\n  width: 100vw;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  border: 2px solid (0,0,0,.4);\n  transition: 1s ease;\n}\n.sidebar {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  backdrop-filter: blur(5px);\n  width: 15rem;\n  padding: 25px 16px 0 16px;\n  background: linear-gradient(135deg, var(--dark-blue-blur) 40%, var(--dark-blue) 70%);\n  transition: 1s ease;\n  position: relative;\n}\n\n.sidebar_small {\n  width: 2rem;\n  background-color: var(--dark-blue);\n}\nbutton#disappearSidebar, button#modalBtn, button#taskClear {\n  position: absolute;\n  border: none;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, .3);\n  left: 100%;\n  top: 2rem;\n  background-color: var(--font-color);\n  transform: translateX(-50%);\n  cursor: pointer;\n}\nbutton.btnCreate, button#projectClear{\n  border: none;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, .3);\n  top: 2rem;\n  background-color: var(--font-color);\n  /* transform: translateX(-50%); */\n  cursor: pointer;\n}\nbutton#modalBtn {\n  top: 5rem;\n}\nbutton#taskClear{\n  top: 8rem;\n}\n#projectBtns{\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 1em;\n}\n.formDisplay {\n  animation: fadeIn 2s;\n  -webkit-animation: fadeIn 2s;\n  -moz-animation: fadeIn 2s;\n  -o-animation: fadeIn 2s;\n  -ms-animation: fadeIn 2s;\n}\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@-moz-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@-webkit-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@-o-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@-ms-keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  color: var(--dark-blue);\n  background-color: rgba(0,0,0,0.5);\n}\n\n#taskForm {\n  background-color: var(--modal-color);\n  margin: 15% auto;\n  padding: 20px;\n  width: 40%;\n  border-radius: 25px;\n}\n.close,\n.taskDelete {\n  color: var(--dark-blue);\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\nli.task{\n  display: flex;\n  border: 2px solid var(--light-blue);\n  border-radius: 15%;\n  background-color: var(--lightest-blue-blur);\n  text-align: center;\n  padding: 6px;\n}\n.close:hover,\n.close:focus,\n.taskDelete,\n.btnCreate,\n.projectClear {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\ninput:checked+.taskDivCheck{\n  text-decoration: line-through;\n}\ndiv.taskDate, div.taskPriority{\n  margin-top: 1em;\n}\ninput[type="checkbox"]{\n  position: relative;\n\n}\ninput::placeholder{\ntext-align: center;\n}\na {\n  color: var(--font-color);\n}\n.footer div {\n  text-align: center;\n  font-size: medium;\n  margin: 0;\n  padding: 0;\n}\n.footer{\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n}\n\n\n\n',""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],l=0;l<n.length;l++){var c=n[l],s=r.base?c[0]+r.base:c[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=l,e.splice(l,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var c=r(n,o),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},455:(n,e,t)=>{n.exports=t.p+"62835b09597055e8a34c.webp"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function n(n){for(;n.firstChild;)n.removeChild(n.firstChild)}document.addEventListener("DOMContentLoaded",(()=>{submitBtn.addEventListener("click",(()=>{document.querySelector("form").reset}))}));const e="task.projects",r="task.selectedProjectId";let o=JSON.parse(localStorage.getItem(e))||[],a=localStorage.getItem(r);const i=document.getElementById("taskBtnCreate"),l=document.getElementById("newTaskAdd"),c=document.querySelector("[data-new-task-date]"),s=document.querySelector("[data-new-task-priority]"),d=(document.querySelector("[data-new-task-form]"),document.getElementById("taskList")),u=document.getElementById("task-template"),p=document.querySelector("[data-projects]"),m=document.querySelector("[data-new-project-form]"),f=document.querySelector("[data-new-project-input]"),g=document.getElementById("projectTitle"),b=document.querySelector("[data-tasks]"),y=document.getElementById("taskClear"),v=document.getElementById("projectClear");function h(){localStorage.setItem(e,JSON.stringify(o)),localStorage.setItem(r,a)}function k(){h(),function(){n(p),o.forEach((n=>{const e=document.createElement("li");e.dataset.projectId=n.id,e.classList.add("project-title"),e.innerText=n.title,n.id==a&&e.classList.add("active-list"),p.appendChild(e)})),g.innerText="Tasks for...";const e=o.find((n=>n.id==a));null==a?d.style.display="none":(d.style.display="",g.innerText=`Tasks for ${e.title}`,n(d),x(e))}()}function x(n){n.tasks.forEach((n=>{const e=document.importNode(u.content,!0),t=e.querySelector("input");t.id=n.id,t.checked=n.complete;const r=e.querySelector("label"),o=e.querySelectorAll("div")[2],a=e.querySelectorAll("div")[3];r.htmlFor=n.id,o.append(`Due: ${n.dueDate}`),a.append(`Priority: ${n.priority}`),r.append(n.name),d.appendChild(e)}))}p.addEventListener("click",(n=>{"li"===n.target.tagName.toLowerCase()&&(a=n.target.dataset.projectId,k())})),m.addEventListener("submit",(n=>{n.preventDefault();const e=f.value;if(null==e||""===e)return;const t={title:e,id:Date.now()*Math.random(),tasks:[]};f.value=null,o.push(t),k()})),y.addEventListener("click",(n=>{const e=o.find((n=>n.id==a));e.tasks=e.tasks.filter((n=>!n.complete)),k()})),v.addEventListener("click",(n=>{o=o.filter((n=>n.id!=a)),a=null,k()})),b.addEventListener("click",(n=>{"input"==n.target.tagName.toLowerCase()&&(o.find((n=>n.id==a)).tasks.find((e=>e.id==n.target.id)).complete=n.target.checked,h())})),i.addEventListener("click",(function(e){e.preventDefault();let t=l.value,r=c.value,i=s.value;if(""==t||null==t)return;let u=function(n,e,t){return{name:n,id:Date.now()*Math.random(),dueDate:e,priority:t,complete:!1}}(t,r,i);l.value=null;const p=o.find((n=>n.id==a));p.tasks.push(u),n(d),x(p),todoDom(),k()}));var w=t(379),I=t.n(w),S=t(795),E=t.n(S),C=t(569),L=t.n(C),j=t(565),D=t.n(j),T=t(216),B=t.n(T),q=t(589),M=t.n(q),A=t(426),N={};N.styleTagTransform=M(),N.setAttributes=D(),N.insert=L().bind(null,"head"),N.domAPI=E(),N.insertStyleElement=B(),I()(A.Z,N),A.Z&&A.Z.locals&&A.Z.locals,function(){const n=document.querySelector(".sidebar"),e=document.querySelector(".mainContent"),t=document.getElementById("projectDiv");document.querySelector("button").onclick=function(){n.classList.toggle("sidebar_small"),e.classList.toggle("main-content_large"),"none"===t.style.display?(t.style.display="block",t.classList.add("formDisplay"),t.classList.remove("formHide")):(t.style.display="none",t.classList.add("formHide"),t.classList.remove("formDisplay"))}}(),function(){let n=document.getElementById("taskModal"),e=document.getElementById("modalBtn"),t=document.getElementsByClassName("close")[0];e.onclick=function(){n.style.display="block",document.getElementById("newTaskDate").valueAsDate=new Date},t.onclick=function(){n.style.display="none"},window.onclick=function(e){e.target==n&&(n.style.display="none")}}(),k()})()})();