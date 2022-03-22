const inputBill = document.querySelector('#bill')
const inputNumberPeople = document.querySelector('#number-people')
const inputTipPercentage = document.querySelector('.custom')
const tipPercentageButtons = document.querySelector('.tip-buttons')
const tipResetButton = document.querySelector('#reset-tip-calculation')
let tipPercentageText = null; 
const invalidInputMessages = document.querySelectorAll('.invalid-message')

const handleBillInputChange = () => {
    const inputBillIsValid = validateInputElement(inputBill) 
    const invalidMessage = invalidInputMessages[0]

    if(!inputBillIsValid) {
        inputBill.classList.add('error')
        invalidMessage.style.display = 'block'
        return
    }

    invalidMessage.style.display = 'none'
    inputBill.classList.remove('error')
    calculateTip()
}

const handleTipPercentageInputChange = () => {
    const customTipInputIsValid = validateInputElement(inputTipPercentage)
    
    if(!customTipInputIsValid) {
        return inputTipPercentage.classList.add('error')
    }

    inputTipPercentage.classList.remove('error')
    tipPercentageText = inputTipPercentage.value
    calculateTip()
}

const handleNumberPeopleInputChange = () => {
    const inputNumberPeopleIsValid = validateInputElement(inputNumberPeople)
    const invalidMessage = invalidInputMessages[1]
    
    if(!inputNumberPeopleIsValid) {
        inputNumberPeople.classList.add('error')
        invalidMessage.style.display = 'block'
        return
    }

    invalidMessage.style.display = 'none'
    inputNumberPeople.classList.remove('error')
    calculateTip()
}

const validateInputElement = input => Number(input.value) > 0


const handleTipPercentageButtonClick = (el) => {
    const tipButtons = tipPercentageButtons.children
    
    for (let tipButton of tipButtons) {
        tipButton.classList.remove('active')
        const tipButtonIsBeingClicked = tipButton === el
        if(tipButtonIsBeingClicked) {
            tipButton.classList.add('active')
            tipPercentageText = tipButton.innerText.replace('%', '')
        }
    }

    calculateTip()
}

const calculateTip = () => {
    changeTipResetButtonActiveState(true)

    const bill = Number(inputBill.value)
    const numberOfPeople = Number(inputNumberPeople.value)
    const tipPercentage = Number(tipPercentageText)/100

    if(!bill || !numberOfPeople || !tipPercentage) return
    
    const tipAmountPerPerson = (bill * tipPercentage) / numberOfPeople
    const totalPerPerson = (bill + bill * tipPercentage) / numberOfPeople 

    updateTipResult(tipAmountPerPerson, totalPerPerson)
}

const changeTipResetButtonActiveState = (active) => {
    active ? tipResetButton.classList.add('active') : tipResetButton.classList.remove('active')
}

const updateTipResult = (tipAmountPerPerson, totalPerPerson) => {
    const tipAmountResult = document.querySelector('#tip-amount-result')
    const totalPerPersonResult = document.querySelector('#total-person-result')

    tipAmountResult.innerText = `$${tipAmountPerPerson.toFixed(2)}`
    totalPerPersonResult.innerText = `$${totalPerPerson.toFixed(2)}`
}

const handleTipResetButtonClick = () => {
    inputBill.value = ''
    inputNumberPeople.value = ''
    inputTipPercentage.value = ''

    inputBill.classList.remove('error')
    inputNumberPeople.classList.remove('error')
    inputTipPercentage.classList.remove('error')

    tipPercentageText = null

    for (let invalidMessage of invalidInputMessages) {
        invalidMessage.style.display = 'none'
    }

    const tipButtons = tipPercentageButtons.children
    for (let tipButton of tipButtons) {
        tipButton.classList.remove('active')
    }

    changeTipResetButtonActiveState(false)
    updateTipResult(0, 0)
}

inputBill.addEventListener('change', () => handleBillInputChange())
inputTipPercentage.addEventListener('change', () => handleTipPercentageInputChange())
inputNumberPeople.addEventListener('change', () => handleNumberPeopleInputChange())
tipPercentageButtons.addEventListener('click', (e) => {
    const el = e.target
    if (el.classList.contains('custom')) return
    handleTipPercentageButtonClick(el)
})
tipResetButton.addEventListener('click', () => handleTipResetButtonClick())
