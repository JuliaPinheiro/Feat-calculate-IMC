const calcular = document.getElementById('calcular');


function imc (){

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura !== '' && peso !=='' ){

        const resultimc = (peso/(altura*altura)).toFixed(1);

        resultado.textContent = resultimc;
        
        let classificacao = '';

        if (resultimc < 18.5){

            classificacao = 'abaixo do peso';

        }else if ( resultimc < 25 ){
                classificacao = 'Peso ideal, parabéns!!';
                } else if (resultimc < 30 ){

                classificacao = 'levemente acima do peso';
                 } else if (resultimc < 35){
                
                classificacao = 'obesidade grau I';
                
                } else if (resultimc < 40){
                
                 classificacao = 'obesidade grau II';
                } else{
                    classificacao = 'obesidade grau III';
                }
                                    

                resultado.textContent = `${nome} seu IMC é ${resultimc} e você está ${classificacao}`;
                            
        } else{

        resultado.textContent = 'preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);

