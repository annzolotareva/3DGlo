(()=>{"use strict";(e=>{console.log(e);const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let m=0;const s=e=>(e<10&&(e="0"+e),e),r=()=>{let r=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=s(r.hours),n.textContent=s(r.minutes),o.textContent=s(r.seconds),r.timeRemaining<=0&&(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(m))};r(),m=setInterval(r,1e3)})("30 december 2021")})();