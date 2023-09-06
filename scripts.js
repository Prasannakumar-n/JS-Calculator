document.addEventListener('DOMContentLoaded', function () {
let number_keys = Array.from(document.getElementsByClassName('number'))
let value = document.getElementById('ans')
let clear = document.getElementById('clear')
let equal = document.getElementById('equal')
let operations = Array.from(document.getElementsByClassName('operation'))
let operand
let operator
console.log(clear)
numbers = number_keys.splice(2,12)


numbers.forEach(number => {
    number.addEventListener('click',addnumb)
});
clear.addEventListener('click',clearfun)
equal.addEventListener('click', equalfun)

operations.forEach(operation =>{
    operation.addEventListener('click', operationfun)
})


function addnumb(event){
    let content = event.target.innerHTML
    console.log(content)
    value.innerText = value.innerText + String(content)
    console.log(value.innerText)
}
function clearfun(){
    value.innerHTML = ''
}
function equalfun(){
    console.log('from equalfun')
    if (operator){
        if (operator == '+'){
            value.innerText = parseFloat(operand) + parseFloat(value.innerText)
        }
        if (operator == '-'){
            value.innerText = parseFloat(operand) - parseFloat(value.innerText)
        }
        if (operator == '*'){
            value.innerText = parseFloat(operand) * parseFloat(value.innerText)
        }
        if (operator == '/'){
            value.innerText = parseFloat(operand) / parseFloat(value.innerText)
        }
        console.log(value.innerText)
}
}
function operationfun(event){
    operand = value.innerText
    operator = event.target.innerHTML
    clearfun()
}

})