import React from 'react';
const BodyTabla = (props) => {
    const filas = props.datosPersonas.map((fila, index) => {
        return (
            <tr key={index}>
                <td>{fila.nombre}</td>
                <td>{fila.apellido}</td>
                <td>
                    <button onClick={() =>
                        props.eliminarPersona(index)}>Eliminar</button>
                </td>
            </tr>
        )
    })
    return <tbody>{filas}</tbody>
}
export default BodyTabla;