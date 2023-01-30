import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const CitaItem = (props) => {
    return (

        <ListGroup.Item className='sinborde'>
            <div className='sizeItem mt-5 mb-5'>
                <div className='mt-2 ms-2 d-flex'>
                    <div className='boxItem'></div>
                    <div>
                        <p className='h6 ms-3 margen'>{`Mascota: ${props.cita.mascota}`}</p>
                        <p className='ms-3 mb-4'>{`Dueño: ${props.cita.dueno}`}</p>
                    </div>
                </div>

                <div className='ms-2'>
                    <p>{`Fecha: ${props.cita.fecha}`}</p>
                    <p>{`Hora: ${props.cita.hora}`}</p>
                    <p>{`Sintomas: ${props.cita.sintoma}`}</p>
                </div>

                <div className='d-flex justify-content-between mb-3 me-3 mt-3'>
                    <div></div>
                    <Button className='btn btn-danger'
                        onClick={() => props.borrarCita(props.cita.mascota)}>
                        Borrar
                    </Button>
                </div>

            </div>
        </ListGroup.Item>

    );
};

export default CitaItem;