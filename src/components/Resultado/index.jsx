
const Resultado = ({ imc, classificacao }) => {
    return (
        <div>
            <h2>Resultado</h2>
            <p>Seu IMC: {imc.toFixed(2)}</p>
            <p>Classificação: {classificacao}</p>
        </div>
    );
};

export default Resultado;