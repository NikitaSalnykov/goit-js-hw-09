!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("6JpON");e(r).Notify.init({width:"280px",position:"right-top",distance:"10px",opacity:1,clickToClose:!0});var u={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),submit:document.querySelector('button[type="submit"]')},a=0,d=0,l=0;u.submit.disabled=!1;var c=0;u.form.addEventListener("submit",(function(t){var o=function(t){var o,n,i;(o=t,n=c,i=Math.random()>.3,new Promise((function(e,t){setTimeout((function(){i?e({position:o,delay:n}):t({position:o,delay:n})}),c)}))).then((function(o){var n=o.position,i=o.delay;e(r).Notify.success("Fulfilled promise ".concat(n," in ").concat(i,"ms")),t===l&&(u.submit.disabled=!1)})).catch((function(o){var n=o.position,i=o.delay;e(r).Notify.failure("Rejected promise ".concat(n," in ").concat(i,"ms")),t===l&&(u.submit.disabled=!1)})),c+=d};t.preventDefault(),u.submit.disabled=!0,a=+u.delay.value,d=+u.step.value,l=+u.amount.value,c=a;for(var n=1;n<=l;n+=1)o(n)}))}();
//# sourceMappingURL=03-promises.22c1f6c2.js.map
