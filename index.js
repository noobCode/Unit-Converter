/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberInput = document.getElementById("input-number")
const lengthPTag = document.getElementById("length")
const volumePTag = document.getElementById("volume")
const massPTag = document.getElementById("mass")

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    console.log("click")
    let valToConvert = numberInput.value
    
    /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
    */
        
    let lengthConversionToImp = (valToConvert*3.281).toFixed(3)
    let volumeConversionToImp = (valToConvert*0.264).toFixed(3)
    let massConversionToImp = (valToConvert*2.204).toFixed(3)
    
    let lengthConversionToMet = (valToConvert/3.281).toFixed(3)
    let volumeConversionToMet = (valToConvert/0.264).toFixed(3)
    let massConversionToMet = (valToConvert/2.204) .toFixed(3)
    
    lengthPTag.textContent = `${valToConvert} meters = ${lengthConversionToImp} feet | ${valToConvert} feet = ${lengthConversionToMet} meters`
    volumePTag.textContent = `${valToConvert} liters = ${volumeConversionToImp} gallons | ${valToConvert} gallons = ${volumeConversionToMet} litres`
    massPTag.textContent = `${valToConvert} kilos = ${massConversionToImp} pounds | ${valToConvert} kilos = ${massConversionToMet} pounds`
    
})
