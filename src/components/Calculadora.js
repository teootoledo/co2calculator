//Importo react
import React, {useState, Fragment} from 'react';

const Calculadora = () => {
    
    const [numero, setNumero] = useState(0); //nombre, f = uS(numero de inicio)
    
    const aumentar = () => {setNumero(numero+1);}

    return (
        <Fragment>
            <h3>Calculadora de CO2 y filtros HEPA {numero}</h3>
            <button onClick={aumentar} className='btn-primary' >Aumentar</button>
        </Fragment>
        );
}
 
export default Calculadora;