
// listo: El componente Item no tiene componentes hijos.
// ok: ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// ok: PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { Fragment, useState } from "react";

export default function Item(props) {
//console.log(props);

const [cantidadStock, setCantidadStock] = useState(props.stock);
 
   
  const agregarAlCarrito= props.agregarAlCarrito;
  //console.log(props);

  return (
    
    <Fragment>
    <div className='producto'>
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>En stock: {(cantidadStock>0) ? cantidadStock : <span>agotado</span>}</h5>
      <button type="button" name="comprar" onClick={ ()=>{agregarAlCarrito(setCantidadStock(cantidadStock - 1))}}  disabled={cantidadStock<=0}>{(cantidadStock>0) ? "comprar" : "Sin stock"}</button>
    </div>
    </Fragment>
  )
}

 
