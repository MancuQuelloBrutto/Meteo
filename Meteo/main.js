var app = new Vue({
    el: "#app",
    data: {
        ricerca: '',
        meteo: [],
        meteoTemp: [],
        meteoInfo: [],
        country: [],
        wind: [],
        apiKey: 'd1e203f4168ce2e47eeca3292f15b217',
        apiUrl: 'https://api.openweathermap.org/data/2.5/',
    },
    methods: {
        eseguiRicerca(){
            axios.get(`${this.apiUrl}weather?q=${this.ricerca}&units=metric&APPID=${this.apiKey}`,{

            }).then(function (risposta) {
                app.meteo = risposta.data;
                app.meteoTemp = risposta.data.main;
                app.meteoInfo = risposta.data.weather[0];
                app.country = risposta.data.sys;
                app.wind = risposta.data.wind;
                risposta => risposta.json
                console.log(risposta);
            })
        },
        dateBuilder () {
            let d = new Date();
            let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
            let days = ["Domenica", "Lunedì", "Martedì", "Mercoldì", "Giovedì", "Venerdi", "Sabato"];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${day} ${date} ${month} ${year}`;
          }
    }
})