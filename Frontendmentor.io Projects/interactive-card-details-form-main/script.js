const cardHolder = document.querySelector('#cardholder')
const cardNumber = document.querySelector('#cardnumber')
const expMonth = document.querySelector('#expMonth')
const expYear = document.querySelector('#expYear')
const cvv = document.querySelector('#cvv')
let showName = document.querySelector('.name')
let showcardNumber = document.querySelector('.cardnumber span')
let showExpMonth = document.querySelector('#month')
let showexpYear = document.querySelector('#year')

function confirmDetails() {
    const form = document.getElementById('paymentForm');
   
   

    const nameinput = cardHolder.value.trim()
    const words = nameinput.split(' ')    
    let isvalid = true

    if ( words.length !== 2  && !nameinput){
        cardHolder.style.border = ' 1px solid red'
        isvalid = false
    } 
    if(!cardNumber.value.trim()){
        cardNumber.style.border = '1px solid red'
        isvalid = false

    }
    if(!expMonth.value.trim()){
        expMonth.style.border = '1px solid red'
        isvalid = false

    }
    if(!expYear.value.trim()){
        expYear.style.border = '1px solid red'
        isvalid = false

    }
    if(!cvv.value.trim()){
        cvv.style.border = '1px solid red'
        isvalid = false

    }
    if (isvalid){
        const cardDetails = document.querySelector('.card-details')
        cardDetails.style.display = 'none'
        const submitted = document.querySelector('.submitted')
        submitted.style.display = 'block'
        cardHolder.value =""
        cardNumber.value =""
        expMonth.value =""
        expYear.value =""
        cvv.value =""

        showName.innerHTML = 'Jane Appleseed'
        showcardNumber.innerHTML = '0000 0000 0000 0000'
        showExpMonth.innerHTML = '10'
        showexpYear.innerHTML = '22'
    }

   
}
function continuefunc (){
    const cardDetails = document.querySelector('.card-details')
    cardDetails.style.display = 'block'
    const submitted = document.querySelector('.submitted')
    submitted.style.display = 'none'



}

cardHolder.addEventListener('keyup', ()=> {
    showName.innerHTML = cardHolder.value
})

cardNumber.addEventListener('keyup',()=>{
  showcardNumber.innerHTML= cardNumber.value;

})

expMonth.addEventListener('keyup', ()=> {
    showExpMonth.innerHTML = expMonth.value
})
expYear.addEventListener('keyup', ()=> {
    showexpYear.innerHTML = expYear.value
})

