import React, { Component } from 'react';
import HeadTabla from './Tabla/headTabla';
import BodyTabla from './Tabla/bodyTabla';
function Tabla(props) {
 
    const { datosPersonas, eliminarPersona } = props;
 return (
 <table className="table">
  <HeadTabla/>
  <BodyTabla  datosPersonas={datosPersonas} eliminarPersona={eliminarPersona}/>
 </table>
 );
 
}
export default Tabla;