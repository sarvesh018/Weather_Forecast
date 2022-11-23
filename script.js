const apiKey = "YOUR API KEY";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const url = (city)=> `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

getWeatherByLocation("Bhopal");
async function getWeatherByLocation (city){
     
         const resp =await  fetch(url(city), {
             origin: "cros" });
         const respData = await resp.json();
     
           addWeatherToPage(respData);
          
     }
    
      function addWeatherToPage(data){
        const {temp} = Ktoc(data.current.temp_c);
        const weather = document.createElement('div')
        //   weather.classList.add('weather');        
        weather.innerHTML = `
        <div class="weather" style="background-image: url'https://source.unsplash.com/1600x900/?${data.current.name}'">
            <h1> ${data.location.name}, ${data.location.region} ${data.location.country}</h1>
            <div class="icon" style="display: flex">
            <h2>Temp: ${data.current.temp_c} ℃ </h2>
            <img style="width: 50%, height:50%"src="${data.current.condition.icon} ">
            </div>
            <h2>Wind Speed: ${data.current.wind_kph} km/h</h2>
            <h2>Humidity: ${data.current.humidity}%</h2>
            <h2>UV Index: ${data.current.uv}</h2>
            <h2>Localtime: ${data.location.localtime}</h2>
        </div>
          
        `;
          
          main.innerHTML= "";
           main.appendChild(weather);
      };


     function Ktoc(K){
         return Math.floor(K - 273.15);
     }



     form.addEventListener('submit',(e) =>{
        e.preventDefault();

        const city = search.value;

        if(city){
            getWeatherByLocation(city)
        }

     });

     //<div> <img src="url('https://source.unsplash.com/1600x900/?${data.current.name}')"> </div>
