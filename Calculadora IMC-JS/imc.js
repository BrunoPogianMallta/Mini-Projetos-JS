//atribuindo  os elementos html  em variáveis
const calcular = document.getElementById('calcular');

//função da chamada do evento click
function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome.value !== '' && altura !== '' && peso !== '') {
        //realizando calculo IMC
        const valorImc = (peso /(altura * altura)).toFixed(2);

        let resultadoImc = '';
        if(valorImc < 18.5){
            resultadoImc = 'abaixo do peso'
        }else if (valorImc < 25 ){
            resultadoImc ='Com peso ideal.Continue Assim!'
        }else if( valorImc < 30) {
            resultadoImc = 'Acima do peso'
        }else if (valorImc < 35) {
            resultadoImc = 'com obesidade grau I.'
        }else if(valorImc < 40){
            resultadoImc = 'com obesidade grau II'
        }else{
            resultadoImc = 'com obesidadae grau II.Cuidado!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${resultadoImc}`

        alert('Valor preenchido!')
    }else{
        resultado.textContent = 'Preencha todos os campos!'
        
    }
}

//chamada do evento calcular
calcular.addEventListener('click',imc);

