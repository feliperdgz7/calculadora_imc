import { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

const App = () => {
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');
    const [imcClasse, setIMCClasse] = useState('');

    const calcularIMC = (altura, peso) => {
        const calculoIMC = peso / (altura*altura);
        setIMC(calculoIMC);

        let classificacaoIMC;
        let classeIMC;

        switch (true){
            case calculoIMC < 18.5:
                classificacaoIMC = 'Abaixo do peso';
                break;
            case calculoIMC >= 18.5 && calculoIMC <= 24.9:
                classificacaoIMC = 'Peso normal';
                break;
            case calculoIMC >= 25 && calculoIMC <= 29.9:
                classificacaoIMC = 'Sobrepeso';
                break;
            case calculoIMC >= 30 && calculoIMC <= 34.9:
                classificacaoIMC = 'Obesidade grau I';
                break;
            case calculoIMC >= 35 && calculoIMC <= 39.9:
                classificacaoIMC = 'Obesidade grau II';
                break;
            default:
                classificacaoIMC = 'Obesidade grau III (mórbida)';
        }
        setClassificacao(classificacaoIMC);

        if (calculoIMC <= 24.9){
            classeIMC = 'normal';
        } else if (calculoIMC >= 25 && calculoIMC<= 29.9){
            classeIMC = 'alerta';
        } else {
            classeIMC = 'risco';
        }
        setIMCClasse(classeIMC);
    };

    return(
        <>
            <Header/>
            <Formulario calcularIMC={calcularIMC}/>
            {imc && <Resultado imc={imc} classificacao={classificacao} imcClasse={imcClasse} />}
        </>
    )
    }

export default App
