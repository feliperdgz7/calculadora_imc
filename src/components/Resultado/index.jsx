import styles from './Resultado.module.css';

const Resultado = ({ imc, classificacao, imcClasse }) => {
    return (
        <div className={styles.resultado}>
            <h2 className={styles.title}>Resultado</h2>
            <p className={styles.text}>Seu IMC: {imc.toFixed(2)}</p>
            <p className={`${styles.classificacao} ${styles[imcClasse]}`}>Classificação: {classificacao}</p>
        </div>
    );
};

export default Resultado;