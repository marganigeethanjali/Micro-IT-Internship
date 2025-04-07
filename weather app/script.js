
        const searchBtn = document.getElementById("searchBtn");

        async function cllingAPI() {
            let cityName = document.getElementById("city").value;

            if (cityName === '') {
                alert('Please enter a city');
                return;
            }

            const API_KEY = "f5330173ed11f2f4051ca94864718a21";
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
            const output=document.getElementById("weather");
           
                const res= await fetch(URL);
                const data = await res.json();
                 
                console.log(output);
                console.log(data);

                document.getElementById("heading").innerText = `Weather Details of ${data.name}`;
                document.getElementById("description").innerText = `Description: ${data.weather[0].description}`;
                document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
                document.getElementById("windSpeed").innerText = `Wind Speed: ${data.wind.speed} m/s`;

            
            cityName="";
        }
searchBtn.addEventListener("click", cllingAPI)
