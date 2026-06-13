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

    let num1 = (form_num.get('nome'))
    let num2 = parseFloat(form_num.get('num1'))


if (nome == "ABCD1234" && num1 == "1234")
    divResultado.innerHTML = `ACESSO PERMITIDO`
else 
    divResultado.innerHTML = `ACESSO NEGADO`
})

