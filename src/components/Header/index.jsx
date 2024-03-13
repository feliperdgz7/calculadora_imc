import styles from './Header.module.css';

export default () =>{
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Calculadora de IMC</h1>
            <p className={styles.text}>
                O IMC, ou Índice de Massa Corporal, é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.
            </p>
        </header>
    )
}

