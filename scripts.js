const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyToSelect = document.querySelector(".currency-to-select")
const aviso = document.querySelector(".aviso")
aviso.style.display = "none"


function convertValues() {
    inputCurrencyValue = document.querySelector(".input-currency").value
    currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2;
    const euroToday = 6.2;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }else if (currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

}


function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".currency-img")
    

    if(currencyToSelect.value === currencySelect.value){
        aviso.style.display = "block"
        
    }else {
        aviso.style.display = "none"
    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }else if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    convertValues()


}