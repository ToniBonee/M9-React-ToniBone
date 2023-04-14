import React, { useState } from 'react';
function Form(props) {
    const [state, setState] = useState({
        nombre: '',
        apellido: ''
    });

    const gestionarCambio = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const enviarFormulario = () => {
        props.enviarFormulario(state);
        setState({
            nombre: '',
            apellido: ''
        });
    };
    return (
        <form>
            <section class="row">
                <section class="col-6">
                    <label htmlFor="nombre">Nombre</label><br></br>
                    <input type="text" name="nombre" id="nombre" value={state.nombre} onChange={gestionarCambio} /><br></br>
                </section>
                <section class="col-6">
                    <label htmlFor="apellido">Apellido</label><br></br>
                    <input type="text" name="apellido" id="apellido" value={state.apellido} onChange={gestionarCambio} /><br></br>
                </section>
                <section class="col-12">
                    <input type="button" value="Enviar" onClick={enviarFormulario} />
                </section>
            </section>

        </form>
    );

}
export default Form;