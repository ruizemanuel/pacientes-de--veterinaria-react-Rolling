import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CitaItem from './CitaItem';

const ListaCitas = (props) => {
    return (

        <div className='mt-4'>

            {props.arregloCitas.length !== 0 ? <ListGroup horizontal variant="flush">
                {props.arregloCitas.map((item, posicion) => <CitaItem key={posicion} cita={item} borrarCita={props.borrarCita} />)}
            </ListGroup>
            :
            <p className='fw-bold text-center'>No hay citas</p>}
        </div>
    );
};

export default ListaCitas;