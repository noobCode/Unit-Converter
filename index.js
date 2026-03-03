/*
1 meter  = 3.281 feet
1 liter  = 0.264 gallon
1 kilogram = 2.204 pounds
*/

const numberInput = document.getElementById("input-number")
const lengthPTag  = document.getElementById("length")
const volumePTag  = document.getElementById("volume")
const massPTag    = document.getElementById("mass")
const convertBtn  = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
    const val = parseFloat(numberInput.value)

    if (isNaN(val)) {
        lengthPTag.textContent = "Please enter a number above."
        volumePTag.textContent = "Please enter a number above."
        massPTag.textContent   = "Please enter a number above."
        return
    }

    const mToFt   = (val * 3.281).toFixed(3)
    const ftToM   = (val / 3.281).toFixed(3)

    const lToGal  = (val * 0.264).toFixed(3)
    const galToL  = (val / 0.264).toFixed(3)

    const kgToLbs = (val * 2.204).toFixed(3)
    const lbsToKg = (val / 2.204).toFixed(3)

    lengthPTag.textContent = `${val} meters = ${mToFt} feet  |  ${val} feet = ${ftToM} meters`
    volumePTag.textContent = `${val} liters = ${lToGal} gallons  |  ${val} gallons = ${galToL} liters`
    massPTag.textContent   = `${val} kg = ${kgToLbs} lbs  |  ${val} lbs = ${lbsToKg} kg`
})
