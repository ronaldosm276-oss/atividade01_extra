//Pegando elementos do DOM???
const formDados = document.querySelector('#formulario') // tá pegando o id do formulario
const divResultado = document.querySelector('#resultado')
//pegou id do div resultado

//eventos em uma página - comportamentos do usuario - click, clique duplo, submeter informações, etc

//

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let num1 = parseFloat(form_num.get('num1'))


    if (num1 % 3 == 0 && num1 % 7 == 0) {

    divResultado.innerHTML = `O número ${num1} é divisível por 3 e 7.`
    }
else 
    divResultado.innerHTML = `O número ${num1} não é divisível por 3 e 7.`
    })


/*if (num1 === num2 && num2 === num3)
    divResultado.innerHTML = `Triângulo Equilátero`

else if (num1 == num2 || num2 == num3 || num3 == num1) { 
    divResultado.innerHTML = `Triângulo Isóscele`
}

else 
    divResultado.innerHTML = `Triângulo Escaleno`
})


% - resto da divisão - 
10 % 3 = 1
10 % 2 = 0
10 % 5 = 0
10 % 4 = 2

serve de forma geral para verificar o resto da divisão, podendo saber se o resto é 1, 2, 3, etc.

para verificar se um número é divisível por outro, basta verificar se o resto da divisão é 0.

*/

//ctrl shift p para abrir uma aba especial no topo ali
