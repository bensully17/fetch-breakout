// GET request
  // Request to get information from an API
  // Different API endpoints => different data returned

var baseUrl = 'http://services.swpc.noaa.gov/products/solar-wind/'
var time = ''
setTimeout(function(){
  location = ''
},30000)




fetch(baseUrl + 'plasma-1-day.json')
  .then(function(response) {
    return response.json()
  .then(function(result){
    array = result[result.length - 1]
    var time = array [0]
    var speed = array[2]
    var density = array[1]
    newh2.innerHTML = 'Last Updated: ' + time + ' UTC'
    speedDiv.innerHTML = 'Solar Wind Speed: ' + speed + ' km/s'
    densityDiv.innerHTML = 'Solar Wind Density: ' + density
    console.log(result)
    spd = ((Math.pow(parseFloat(speed), 2)/100) + (Math.pow(parseFloat(density), 2)*100))
    console.log(spd)
   })
  
})
fetch(baseUrl + 'mag-1-day.json ')
  .then(function(response) {
    return response.json()
  .then(function(result){
    var array1 = result[result.length - 1]
    var time = array1[0]
    bz = array1[3]
    console.log(result)
    bzDiv.innerHTML = 'Solar Wind Direction (Bz): ' + bz 
    bz = (parseFloat(bz))*2000
    console.log(bz)
    var intensity = (spd - bz)/1000
    intensity = intensity.toFixed(3)
    if (intensity < 0) {
      intensity = 0
    }
    btDiv.innerHTML = 'Calculated Intensity: ' + intensity
  })
})

var header = document.querySelector('header')
var newh2 = document.createElement('h2')
var spd = 0
var bz = 0
header.appendChild(newh2);


for (let i = 0; i < 4; i++) {
var main = document.querySelector('main')
var newDiv = document.createElement('div')
main.appendChild(newDiv)
}
const newDivs = document.querySelectorAll('main > div')
newDivs[0].setAttribute('id', 'speed')
newDivs[1].setAttribute('id', 'density')
newDivs[2].setAttribute('id', 'bz')
newDivs[3].setAttribute('id', 'bt')



var intensity = document.createElement('div')
const speedDiv = document.querySelector('#speed')
const densityDiv = document.querySelector('#density')
const bzDiv = document.querySelector('#bz')
const btDiv = document.querySelector('#bt')


