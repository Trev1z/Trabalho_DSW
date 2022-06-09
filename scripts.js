let btn = document.querySelector ('password')

btn.addEventListener ('click', ()=>{let inputSenha = document.querySelector('senha')
if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'password')
}

})


