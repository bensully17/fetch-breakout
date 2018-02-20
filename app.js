var baseUrl = 'http://services.swpc.noaa.gov'
var time = ''
setTimeout(function(){
  location = ''
},60000)

function northHemi() {
  fetch(baseUrl + '/images/animations/ovation-north/latest.jpg')
  .then(function(result){
    ovationImage.setAttribute('src', result.url)
    ovationImage.setAttribute('id', 'ovImg')
  })
}
function southHemi() {
  fetch(baseUrl + '/images/animations/ovation-south/latest.jpg')
  .then(function(result){
    ovationImage.setAttribute('src', result.url)
    ovationImage.setAttribute('id', 'ovImg')
  })
}
northHemi()

for (let i = 0; i < 3; i++) {
  let main = document.querySelector('main')
  let newSections = document.createElement('section')
  main.appendChild(newSections)
}

newSections = document.querySelectorAll('main > section')
newSections[0].setAttribute('id', 'options')
newSections[1].setAttribute('id', 'data')
newSections[2].setAttribute('id', 'charts')

let mainOptions = document.querySelector('#options')
// for ()

for (let i = 0; i < 4; i++) {
  let mainData = document.querySelector('#data')
  let newDiv = document.createElement('div')
  mainData.appendChild(newDiv)
  for (let j = 0; j < 3; j++) {
    var newInnerDiv = document.createElement('div')
    let newDivs = document.querySelectorAll('#data > div')
    newDivs[i].appendChild(newInnerDiv)
  }
}
let charts = document.querySelector('#charts')
for (i = 0; i < 2; i++) {
  let newChartDiv = document.createElement('div')
  charts.appendChild(newChartDiv)
}
let ovation = document.querySelectorAll('#charts > div')[0]
let ovationImage = document.createElement('img')
ovation.appendChild(ovationImage)
ovation.setAttribute('id', 'ovation')


for (i = 0; i < 2; i++){
  let buttonsDiv = document.querySelectorAll('#charts > div')[1]
  buttonsDiv.setAttribute('id', 'buttons')
  let newButtons = document.createElement('button')
  newButtons.setAttribute('class', 'button')
  buttonsDiv.appendChild(newButtons)
}
const buttons = document.querySelectorAll('.button')
buttons[0].textContent = 'Northern Hemisphere'
buttons[1].textContent = 'Southern Hemisphere'
buttons[0].addEventListener('click', northHemi)
buttons[1].addEventListener('click', southHemi)

newDivs = document.querySelectorAll('#data > div')
newDivs[0].setAttribute('id', 'speed')
newDivs[1].setAttribute('id', 'density')
newDivs[2].setAttribute('id', 'bz')
newDivs[3].setAttribute('id', 'intensity')

let speedText = document.querySelectorAll('#speed > div')
speedText[0].setAttribute('class', 'key')
speedText[1].setAttribute('class', 'value')
speedText[2].setAttribute('class', 'units')

let densityText = document.querySelectorAll('#density > div')
densityText[0].setAttribute('class', 'key')
densityText[1].setAttribute('class', 'value')
densityText[2].setAttribute('class', 'units')

let bzText = document.querySelectorAll('#bz > div')
bzText[0].setAttribute('class', 'key')
bzText[1].setAttribute('class', 'value')
bzText[2].setAttribute('class', 'units')

let intensityText = document.querySelectorAll('#intensity > div')
intensityText[0].setAttribute('class', 'key')
intensityText[1].setAttribute('class', 'value')

let speedKey = document.querySelector('#speed > .key')
let densityKey = document.querySelector('#density > .key')
let bzKey = document.querySelector('#bz > .key')
let intensityKey = document.querySelector('#intensity > .key')

speedKey.textContent = 'Solar Wind Speed:'
densityKey.textContent = 'Solar Wind Density:'
bzKey.textContent = 'Solar Wind Magnetic Field:'
intensityKey.textContent = 'Calculated Intensity:'

let speedUnits = document.querySelector('#speed > .units')
let densityUnits = document.querySelector('#density > .units')
let bzUnits = document.querySelector('#bz > .units')


speedUnits.textContent = 'km/s'
densityUnits.textContent = 'p/cm'+'\u00B3' 
bzUnits.textContent = 'nT'



fetch(baseUrl + '/products/solar-wind/plasma-1-day.json')
  .then(function(response) {
    return response.json()
  .then(function(result){
    array = result[result.length - 1]
    var time = array [0]
    var speed = array[2]
    var density = array[1]
    newh2.textContent = 'Last Updated: ' + time + ' UTC'
    speedValue.textContent = speed 
    densityValue.textContent = density
    console.log(result)
    spd = ((Math.pow(parseFloat(speed), 2)/100) + (Math.pow(parseFloat(density), 2)*100))
    console.log(spd)
   }) 
})
fetch(baseUrl + '/products/solar-wind/mag-1-day.json ')
  .then(function(response) {
    return response.json()
  .then(function(result){
    var array1 = result[result.length - 1]
    var time = array1[0]
    bz = array1[3]
    console.log(result)
    bzValue.textContent = bz 
    bz = (parseFloat(bz))*2000
    console.log(bz)
    var intensity = (spd - bz)/1000
    intensity = intensity.toFixed(3)
    if (intensity < 0) {
      intensity = 0
    }
    console.log(intensity);
    
    intensityValue.textContent = intensity
  })
})

var header = document.querySelector('header')
var newh2 = document.createElement('h2')
var spd = 0
var bz = 0
header.appendChild(newh2);

var intensity = document.createElement('div')
const speedValue = document.querySelector('#speed > .value')
const densityValue = document.querySelector('#density > .value')
const bzValue = document.querySelector('#bz > .value')
const intensityValue = document.querySelector('#intensity > .value')


