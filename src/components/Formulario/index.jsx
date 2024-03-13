import { useState } from "react";

import styles from './Formulario.module.css';


const Formulario = ({ calcularIMC }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(altura*altura)
        console.log(peso)
    };

    

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <span>Calcule seu IMC</span>
                <div className={styles.altura}>
                    <span className={styles.alturaTexto}>Altura(ex.: 1.70):</span>
                    <input type="text" required placeholder="Informe sua altura" onChange={({target}) => setAltura(parseFloat(target.value))} />
                </div>
                <div>
                    <span className={styles.pesoTexto}>Peso(ex.: 61.9):</span>
                    <input type="text" required placeholder="Informe seu peso" onChange={({target}) => setPeso(parseFloat(target.value))} />
                </div>
                <button type="submit">Calcular</button>
            </form>
        </div>
    )
}

export default Formulario