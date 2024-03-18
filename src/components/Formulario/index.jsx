import { useState } from "react";

import styles from './Formulario.module.css';


const Formulario = ({ calcularIMC }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const alturaNumerica = parseFloat(altura.replace(',','.'));
        const pesoNumerico = parseFloat(peso.replace(',','.'));
        calcularIMC(alturaNumerica,pesoNumerico);
    };

    

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <span>Calcule seu IMC</span>
                <div className={styles.altura}>
                    <span className={styles.alturaTexto}>Altura(ex.: 1.70):</span>
                    <input type="text" required placeholder="Informe sua altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </div>
                <div>
                    <span className={styles.pesoTexto}>Peso(ex.: 61.9):</span>
                    <input type="text" required placeholder="Informe seu peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>
                <button type="submit">Calcular</button>
            </form>
        </div>
    )
}

export default Formulario