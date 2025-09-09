const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyToSelect = document.querySelector(".currency-to-select")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const dolarToday = 5.2
    const euroToday = 6.2
    

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("EUR", {
            style: "currency",
            currency: "eur"
        }).format(inputCurrencyValue / euroToday)
    }else if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    const currencyImgToConvert = document.querySelector(".currency-img-to-convert")
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")

    if (currencyToSelect.value ==  "dolar"){
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImgToConvert.src = "./assets/dolar.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"}).format()
    }else if (currencyToSelect.value ==  "euro"){
        currencyNameToConvert.innerHTML = "Euro"
        currencyImgToConvert.src = "./assets/euro.png"
        currencyValueToConvert.innerHTML = 1
    }else if (currencyToSelect.value ==  "real"){
        currencyNameToConvert.innerHTML = "Real"
        currencyImgToConvert.src = "./assets/real.png"
        
    }


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"

    }else if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"

    }else if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real "
        currencyImg.src = "./assets/real.png"

        
    }

    convertValues()
}

currencyToSelect.addEventListener('change', changeCurrency)
currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)