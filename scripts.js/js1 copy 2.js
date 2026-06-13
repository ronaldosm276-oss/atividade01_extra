//Pegando elementos do DOM???
const formDados = document.querySelector('#formulario') // tá pegando o id do formulario
const divResultado = document.querySelector('#resultado')
//pegou id do div resultado

//eventos em uma página - comportamentos do usuario - click, clique duplo, submeter informações, etc
//
//
//
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let num1 = parseFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))
    let num3 = parseFloat(form_num.get('num3'))

if (num1 === num2 && num2 === num3)
    divResultado.innerHTML = `Triângulo Equilátero`

else if (num1 == num2 || num2 == num3 || num3 == num1) { 
    divResultado.innerHTML = `Triângulo Isóscele`
}
else 
    divResultado.innerHTML = `Triângulo Escaleno`
})

