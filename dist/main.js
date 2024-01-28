(()=>{"use strict";({607:function(){var t=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(c,r){function i(t){try{d(o.next(t))}catch(t){r(t)}}function u(t){try{d(o.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}d((o=o.apply(t,e||[])).next())}))};let e,n="Prague",o="C";function c(){return t(this,void 0,void 0,(function*(){try{const t=yield fetch(`https://api.weatherapi.com/v1/current.json?key=92cd24c6951f4116a4d72917242701&q=${n}`,{mode:"cors"});if(!t.ok)throw new Error(`Failed to fetch data. Status: ${t.status}`);const e=yield t.json();yield function(t){r.textContent=t.current.condition.text,i.textContent=t.location.name,f.textContent=t.location.region+", "+t.location.country;const e="C"===o?t.current.temp_c:t.current.temp_f;u.textContent=`${e} °${o}`,d.textContent="Feels Like: "+t.current.feelslike_c+" °C",a.textContent="Humidity: "+t.current.humidity+" %",l.textContent="Pressure: "+t.current.pressure_mb+" hPa",m.textContent="Wind speed "+t.current.wind_kph+"km/h"}(e),console.log(e)}catch(t){console.error("Error fetching data:",t.message)}}))}c();const r=document.getElementById("clouds"),i=document.getElementById("location"),u=document.getElementById("temperature"),d=document.getElementById("feelsLike"),a=document.getElementById("humidity"),l=document.getElementById("pressure"),m=document.getElementById("windSpeed"),s=document.getElementById("form"),y=document.getElementById("locationI"),f=document.getElementById("location2"),g=document.getElementById("timeP"),h=document.getElementById("unitSwitchBtn");null==s||s.addEventListener("submit",(t=>{t.preventDefault(),n=y.value,c(),function(){const t=new Date,n=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0");e=`${n}:${o}`}(),g.textContent=e})),null==h||h.addEventListener("click",(()=>{o="C"===o?"F":"C",h.textContent=`Switch To °${o}`,c()}))}})[607]()})();