const firstNameText=document.querySelector('#first__name')
const lastNameText=document.querySelector('#last__name')
const emailAddressText=document.querySelector('#email__address')
const messageText=document.querySelector('#message')
const submitBtn=document.querySelector('#submit__btn')
const checkBtn=document.querySelector('#check-btn')
const sucessState=document.querySelector('.sucess__state__section')
checkBtn.onclick=()=>{checkBtn.classList.toggle('checked')}
document.querySelector('.consent__section label').onclick=()=>{checkBtn.classList.toggle('checked')}
let radios=document.querySelectorAll('input[type="radio"]')
radios.forEach(radio=>{radio.addEventListener('change',function(){radios.forEach(r=>{if(r!==this){r.checked=!1}})})});submitBtn.onclick=(e)=>{if(firstNameText.value===''){let p=document.querySelector('.input__box.first__name p.error')
p.innerHTML='This field is required'
p.style.display='block'
p.style.color='red'
firstNameText.style.borderColor='transparent'
firstNameText.style.outline='3px solid red'
firstNameText.onkeyup=()=>{if(firstNameText.value!==''){p.style.display='none'
firstNameText.style.borderColor='initial'
firstNameText.style.outlineColor='var(--primary-green-600)'}}}else if(lastNameText.value===''){let p=document.querySelector('.input__box.last__name p.error')
p.innerHTML='This field is required'
p.style.display='block'
p.style.color='red'
lastNameText.style.borderColor='transparent'
lastNameText.style.outline='3px solid red'
lastNameText.onkeyup=()=>{if(lastNameText.value!==''){p.style.display='none'
lastNameText.style.borderColor='initial'
lastNameText.style.outlineColor='var(--primary-green-600)'}}}else if(emailAddressText.value===''){let p=document.querySelector('.input__box.email__address p.error')
p.innerHTML='This field is required'
p.style.display='block'
p.style.color='red'
emailAddressText.style.borderColor='transparent'
emailAddressText.style.outline='3px solid red'
emailAddressText.onkeyup=()=>{if(emailAddressText.value!==''){p.style.display='none'
emailAddressText.style.borderColor='initial'
emailAddressText.style.outlineColor='var(--primary-green-600)'}}}else if(message.value===''){let p=document.querySelector('.input__box.message p.error')
p.innerHTML='This field is required'
p.style.display='block'
p.style.color='red'
message.style.border='3px solid red'
message.style.outlineColor='transparent'
message.onkeyup=()=>{if(message.value!==''){p.style.display='none'
message.style.border='1px solid var(--grey-medium)'
message.style.outlineColor='var(--primary-green-600)'}}}else if(!checkBtn.classList.contains('checked')){let p=document.querySelector('.consent__section p.error')
p.innerHTML='To submit this form, please consent to being contacted'
p.style.display='block'
p.style.color='red'
message.style.border='3px solid red'
message.style.outlineColor='transparent'
checkBtn.onclick=()=>{checkBtn.classList.add('checked')
if(checkBtn.classList.contains('checked')){p.style.display='none'}}
document.querySelector('.consent__section label').onclick=()=>{checkBtn.classList.add('checked')
if(checkBtn.classList.contains('checked')){p.style.display='none'}}}else{sucessState.classList.add('ok')}}