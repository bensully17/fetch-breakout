// GET request
  // Request to get information from an API
  // Different API endpoints => different data returned

var baseUrl = 'http://services.swpc.noaa.gov'
var time = ''
setTimeout(function(){
  location = ''
},30000)

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
for ()

for (let i = 0; i < 4; i++) {
  let mainData = document.querySelector('#data')
  let newDiv = document.createElement('div')
  mainData.appendChild(newDiv)
  for (let j = 0; j < 2; j++) {
    var newInnerDiv = document.createElement('div')
    let newDivs = document.querySelectorAll('#data > div')
    newDivs[i].appendChild(newInnerDiv)
  }
}
let charts = document.querySelector('#charts')
for (i = 0; i < 1; i++) {
  let newChartDiv = document.createElement('div')
  charts.appendChild(newChartDiv)
}
let ovation = document.querySelectorAll('#charts > div')[0]
let ovationImage = document.createElement('img')

ovation.appendChild(ovationImage)

fetch(baseUrl + '/images/animations/ovation-north/latest.jpg')
  .then(function(result){
    ovationImage.setAttribute('src', result.url)
    ovationImage.setAttribute('id', 'ovImg')
  })



newDivs = document.querySelectorAll('#data > div')
newDivs[0].setAttribute('id', 'speed')
newDivs[1].setAttribute('id', 'density')
newDivs[2].setAttribute('id', 'bz')
newDivs[3].setAttribute('id', 'intensity')

let speedText = document.querySelectorAll('#speed > div')
speedText[0].setAttribute('id', 'key')
speedText[1].setAttribute('id', 'value')

let densityText = document.querySelectorAll('#density > div')
densityText[0].setAttribute('id', 'key')
densityText[1].setAttribute('id', 'value')

let bzText = document.querySelectorAll('#bz > div')
bzText[0].setAttribute('id', 'key')
bzText[1].setAttribute('id', 'value')

let intensityText = document.querySelectorAll('#intensity > div')
intensityText[0].setAttribute('id', 'key')
intensityText[1].setAttribute('id', 'value')

let speedKey = document.querySelector('#speed > #key')
let densityKey = document.querySelector('#density > #key')
let bzKey = document.querySelector('#bz > #key')
let intensityKey = document.querySelector('#intensity > #key')

speedKey.textContent = 'Solar Wind Speed:'
densityKey.textContent = 'Solar Wind Density:'
bzKey.textContent = 'Solar Wind Direction:'
intensityKey.textContent = 'Calculated Intensity:'

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
const speedValue = document.querySelector('#speed > #value')
const densityValue = document.querySelector('#density > #value')
const bzValue = document.querySelector('#bz > #value')
const intensityValue = document.querySelector('#intensity > #value')


