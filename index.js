const input = document.querySelector('form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const mistake = document.querySelector('#mistake')

input.addEventListener('submit', function(e){
    e.preventDefault()

    if(nameInput.value === '' ||  emailInput.value === ''){
        mistake.style.display = 'block'

        setTimeout(() => {
            mistake.style.display = 'none'
        }, 5000)

        return
    }
    alert(`Hello ${nameInput.value}🎊, your form has been submitted successfully.\nYour email is ${emailInput.value}`)
    console.log(nameInput.value)
    console.log(emailInput.value)

    nameInput.value = ''
    emailInput.value = ''

    
})