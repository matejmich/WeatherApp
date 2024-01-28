let data;
let loc: string = 'Prague';
let temperatureUnit: string = 'C';

async function getData() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=92cd24c6951f4116a4d72917242701&q=${loc}`, {mode: 'cors'})
        
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const wData = await response.json();
        await fillDom(wData);
        console.log(wData);
    } catch (error: any) {
        console.error('Error fetching data:', error.message);
    }
}

getData();
let currentTime: string
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Ensure two digits
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure two digits
    currentTime = `${hours}:${minutes}`;
}

const cloudsP: any = document.getElementById('clouds')
const locationP: any = document.getElementById('location')
const temperatureP: any = document.getElementById('temperature')
const feelsLikeP: any = document.getElementById('feelsLike')
const humidityP: any = document.getElementById('humidity')
const pressureP: any = document.getElementById('pressure')
const windSpeedP: any = document.getElementById('windSpeed')
const form: any = document.getElementById('form')
const locationI: any = document.getElementById('locationI')
const locationP2: any = document.getElementById('location2')
const timeP: any = document.getElementById('timeP')
const unitSwitchBtn = document.getElementById('unitSwitchBtn');

form?.addEventListener('submit', (e: any) => {
    e.preventDefault()
    loc = locationI.value
    getData()
    getCurrentTime()
    timeP.textContent = currentTime

})

unitSwitchBtn?.addEventListener('click', () => {
    temperatureUnit = temperatureUnit === 'C' ? 'F' : 'C';
    unitSwitchBtn.textContent = `Switch To °${temperatureUnit}`;
    getData();
});
 
function fillDom(info: any) {
    cloudsP.textContent = info.current.condition.text
    locationP.textContent = info.location.name 
    locationP2.textContent = info.location.region + ', ' + info.location.country
    const temperatureValue = temperatureUnit === 'C' ? info.current.temp_c : info.current.temp_f;
    temperatureP.textContent = `${temperatureValue} °${temperatureUnit}`;
    feelsLikeP.textContent = 'Feels Like: ' + info.current.feelslike_c + ' °C'
    humidityP.textContent = 'Humidity: ' + info.current.humidity + ' %'
    pressureP.textContent = 'Pressure: ' + info.current.pressure_mb + ' hPa'
    windSpeedP.textContent = 'Wind speed ' + info.current.wind_kph + 'km/h'
    
}