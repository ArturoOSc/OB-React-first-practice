import React from 'react';
import { Coma } from '../../../models/coma.class';
import ComponenteaTask from '../../container/componenteA';



const ComponentebTask = () => {

    const defaultComp = new Coma('Arturo', 'Solís', false, 'artur@example.com');

    return (
        <div>
            <div>
                <h1>Contacto</h1>
            </div>       
            <ComponenteaTask coma={defaultComp}></ComponenteaTask>
        </div>
    );
};


export default ComponentebTask;
