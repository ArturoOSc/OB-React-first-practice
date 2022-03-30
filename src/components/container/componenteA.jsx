import React from 'react';
import PropTypes from 'prop-types';
import { Coma } from '../../models/coma.class';



const ComponenteaTask = ({coma}) => {
    return (
        <div>
            <h2>
                Nombre: { coma.name }
            </h2>
            <h3>
                Apellido: { coma.lastName }
            </h3>
            <h4>
                email: { coma.email }
            </h4>
            <h5>
                {coma.contact ? 'Contacto en línea' : 'Contacto no conectado'}
            </h5>
        </div>
        
    );
};


ComponenteaTask.propTypes = {
    component: PropTypes.instanceOf(Coma)
};


export default ComponenteaTask;
