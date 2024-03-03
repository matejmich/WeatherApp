(()=>{"use strict";({607:function(){var t=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(c,i){function r(t){try{d(o.next(t))}catch(t){i(t)}}function u(t){try{d(o.throw(t))}catch(t){i(t)}}function d(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,u)}d((o=o.apply(t,e||[])).next())}))};let e="Prague",n="C";function o(){return t(this,void 0,void 0,(function*(){try{const t=yield fetch(`https://api.weatherapi.com/v1/current.json?key=92cd24c6951f4116a4d72917242701&q=${e}`,{mode:"cors"});if(!t.ok)throw new Error(`Failed to fetch data. Status: ${t.status}`);const o=yield t.json();yield function(t){u.textContent=t.current.condition.text,d.textContent=t.location.name,g.textContent=t.location.region+", "+t.location.country;const e="C"===n?t.current.temp_c:t.current.temp_f;a.textContent=`${e} °${n}`,l.textContent="Feels Like: "+t.current.feelslike_c+" °C",m.textContent="Humidity: "+t.current.humidity+" %",s.textContent="Pressure: "+t.current.pressure_mb+" hPa",y.textContent="Wind speed "+t.current.wind_kph+"km/h"}(o),console.log(o)}catch(t){console.error("Error fetching data:",t.message)}}))}o();const c=document.getElementById("timeP");let i;function r(){const t=new Date,e=t.getHours().toString().padStart(2,"0"),n=t.getMinutes().toString().padStart(2,"0");i=`${e}:${n}`,c.textContent=i}r();const u=document.getElementById("clouds"),d=document.getElementById("location"),a=document.getElementById("temperature"),l=document.getElementById("feelsLike"),m=document.getElementById("humidity"),s=document.getElementById("pressure"),y=document.getElementById("windSpeed"),f=document.getElementById("form"),h=document.getElementById("locationI"),g=document.getElementById("location2"),C=document.getElementById("unitSwitchBtn");null==f||f.addEventListener("submit",(t=>{t.preventDefault(),e=h.value,o(),r()})),null==C||C.addEventListener("click",(()=>{n="C"===n?"F":"C",C.textContent="C"===n?"Switch To °C":"Switch to °F",o()}))}})[607]()})();