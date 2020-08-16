var button = document.getElementById('search-button');
          button.addEventListener("click", function(){
            const textBox=document.getElementById('text-box').value;

               fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textBox}&units=metric&appid=e135d720f10026c448e9d792c0b47124`)

              .then(weather => {
             return weather.json();
             })
          .then(showWeatherReport);
        })
            
        function showWeatherReport(weather){

            let temperature = document.getElementById('temperature');
                temperature.innerHTML = `${Math.round(weather.main.temp)}`;

            let weatherType = document.getElementById('weather');
                weatherType.innerText = `${weather.weather[0].main}`;

            let minMaxTemp = document.getElementById('min-max');
                minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil
                (weather.main.temp_max)}&deg;C (max)`;

            let city = document.getElementById('city');
                city.innerText = `${weather.name}, ${weather.sys.country}`;
            
            if (weatherType.textContent == 'Clear') {
                document.body.style.backgroundImage = "url('images/sunny.jpg')";
              }

            else if (weatherType.textContent == 'Clouds') {
                     document.body.style.backgroundImage = "url('images/cloudy.jpg')";
                }

            else if (weatherType.textContent == 'Drizzle') {
                     document.body.style.backgroundImage = "url('images/snowy.jpg')";
                }

            else if (weatherType.textContent == 'Haze') {
                     document.body.style.backgroundImage = "url('images/hazy.jpg')";
                }

            else if (weatherType.textContent == 'Rain') {
                    document.body.style.backgroundImage = "url('images/rainy.jpg')";
                }

            else if (weatherType.textContent == 'Snow') {
                    document.body.style.backgroundImage = "url('images/snowy.jpg')";
                }
        }