import styles from './Resultado.module.css';

const Resultado = ({ imc, classificacao, imcClasse }) => {
    return (
        <div className={styles.resultado}>
            <h2 className={styles.title}>Resultado</h2>
            <p className={styles.text}>Seu IMC: <span className={`${styles[imcClasse]}`}>{imc.toFixed(2)}</span></p>
            <p className={styles.text}>Classificação: <span className={`${styles[imcClasse]}`}>{classificacao}</span></p>
        </div>
    );
};

export default Resultado;