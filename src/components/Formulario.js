import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Cita } from '../helpers/citaClass';
import '../styles.css'
import ListaCitas from './ListaCitas';

const Formulario = () => {

    let citasLocalStorage = JSON.parse(localStorage.getItem('listaCitas')) || [];
    const [citas, setCitas] = useState(citasLocalStorage);
    const [mascota, setMascota] = useState('');
    const [dueno, setDueno] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintoma, setSintoma] = useState('');

    useEffect(() => {
        localStorage.setItem('listaCitas', JSON.stringify(citas));
    }, [citas]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let citaNueva = new Cita(
            mascota,
            dueno,
            fecha,
            hora,
            sintoma
        );

        setCitas([...citas, citaNueva]);
        setMascota('');
        setDueno('')
        setFecha('')
        setHora('')
        setSintoma('')
    }

    const borrarCita = (nombre) => {
        let arrayFiltrado = citas.filter(cita => cita.mascota !== nombre);
        setCitas(arrayFiltrado);
    };

    return (
        <div>
            <div className='d-flex justify-content-center'>

                <Form className='ms-5 formWidth2' onSubmit={handleSubmit}>
                    <p className='h6 mb-4'>Llenar el formulario para crear una cita</p>
                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold'>Nombre de mascota</Form.Label>
                        <Form.Control className='col formWidth ms-4' type="text" placeholder="Nombre de mascota"
                            maxLength={20}
                            required
                            onChange={(e) => setMascota(e.target.value)}
                            value={mascota}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold' >Nombre de dueño</Form.Label>
                        <Form.Control className='col formWidth ms-4' type="text" placeholder="Nombre de dueño"
                            maxLength={20}
                            required
                            onChange={(e) => setDueno(e.target.value)}
                            value={dueno}
                        />
                    </Form.Group>

                    <div className='d-flex justify-content-between row'>
                        <Form.Group className="mb-3 d-flex align-items-center col">
                            <Form.Label className=' fw-bold' >Fecha</Form.Label>
                            <Form.Control className='formWidth ms-4' type="date"
                                placeholder="Fecha"
                                required
                                onChange={(e) => setFecha(e.target.value)}
                                value={fecha}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex align-items-center col">
                            <Form.Label className=' fw-bold' >Hora</Form.Label>
                            <Form.Control className='formWidth ms-4' type="time"
                                placeholder="Hora"
                                required
                                onChange={(e) => setHora(e.target.value)}
                                value={hora}
                            />
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold' >Sintomas</Form.Label>
                        <Form.Control className='col formWidth ms-4' type="text" placeholder="Sintomas"
                            maxLength={40}
                            required
                            onChange={(e) => setSintoma(e.target.value)}
                            value={sintoma}
                        />
                    </Form.Group>
                    <div className='text-center mt-4'>
                        <Button className='mb-3 centrar' variant="primary" type="submit">
                            Agregar nueva cita
                        </Button>
                    </div>

                </Form>

            </div>
            <ListaCitas arregloCitas={citas} borrarCita={borrarCita} ></ListaCitas>
        </div>

    );
};

export default Formulario;