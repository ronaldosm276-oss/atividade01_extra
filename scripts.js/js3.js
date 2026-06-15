//Pegando elementos do DOM???
const formDados = document.querySelector('#formulario') // tá pegando o id do formulario
const divResultado = document.querySelector('#resultado')
//pegou id do div resultado

//eventos em uma página - comportamentos do usuario - click, clique duplo, submeter informações, etc

//

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)
    let nome = form_num.get('nome')
    let num1 = parseFloat(form_num.get('num1'))
    let lucro = ''

if (num1 < 10) lucro = 0.7;

else if (num1 <= 30) lucro = 0.5;
else if (num1 <= 50) lucro = 0.4;
else if (num1 > 50) lucro = 0.3;

let adicional = (num1 * lucro)
let valorv = (num1 + adicional)

divResultado.innerHTML = `O produto ${nome} tem adicional de R$${adicional} reais e vende-se por R$${valorv} reais.`

    })

