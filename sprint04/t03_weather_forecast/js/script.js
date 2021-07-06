fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.45&lon=30.52&exclude=current,minutely,hourly,alerts&appid=eb9906711076a1ee61f0bdb8bd7907ca')
.then(function (resp) {return resp.json()})
.then(function (data) {
    renderKyiv(data);
})
.catch(function () {
    
});
let item = document.querySelector('.item'),
    box = document.querySelector('.box'),
    box2 = document.querySelector('.box2');
let deg, clouds;
function renderBerlin(data){
    //console.log(data)
    document.querySelector('.first-H2').textContent = data.timezone;
    for(let i = 0; i < data.daily.length; i++){
    deg = (data.daily[i].temp.day - 273).toFixed() + '&deg;',
    clouds = data.daily[i].weather[0]['main']; 
    box.innerHTML += `
        <div class="item">
        <div class="date">${getMyDate(data.daily[i].dt)}</div>
        <div class="deg">${deg}</div>
        <div class="clouds">${clouds}</div>
        <div class="feature"><img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0]['icon']}@2x.png"></div>
        </div>
        `;
    }    
}

function renderKyiv(data){
    document.querySelector('.second-H2').textContent = data.timezone;
    for(let k = 0; k < data.daily.length; k++){
        deg = (data.daily[k].temp.day - 273).toFixed() + '&deg;',
        clouds = data.daily[k].weather[0]['main']; 
        box2.innerHTML +=  `
        <div class="item">
        <div class="date">${getMyDate(data.daily[k].dt)}</div>
        <div class="deg">${deg}</div>
        <div class="clouds">${clouds}</div>
        <div class="feature"><img src="https://openweathermap.org/img/wn/${data.daily[k].weather[0]['icon']}@2x.png"></div>
        </div>
        `; 
    }
       
}

function getMyDate(date){
    let seconds = new Date(date * 1000);
    let options = {
        weekday: 'long'
    }
    let myDate = {
        day: seconds.getDate(),
        month : seconds.getMonth() + 1,
        weekday: seconds.toLocaleString('en-US', options)
    }
    function zero(a){
        return String(a).length === 1 ? '0' + a : a
    }
    return zero(myDate.day) + '.' + zero(myDate.month) + '<br>' + myDate.weekday;
}