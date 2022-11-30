import {
  addDoc, collection, doc, getFirestore, increment, updateDoc
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../stylesheets/Card.css";
import { cartContext } from "./CartContextComponent";
import { Link } from "react-router-dom";
import "../stylesheets/Card.css";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(cartContext);
  const name = "";
  const lastName = "";
  const tel = "";
  const email1 = "";
  const email2 = "";

  const [finPedido, setFinPedido] = useState(false);

  const [codeOrder, setCodeOrder] = useState("");

  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})

  const setField = (field, value) => {
    setForm({...form, [field]: value})
  // Check and see if errors exist, and remove them from the error object:
  if ( !!errors[field] ) {
    setErrors({...errors, [field]: null})
  }
  }

const findFormErrors = () => {
  const { name, lastName,email1,email2} = form
  const newErrors = {}
  // name errors
  if ( !name || name === '' ) newErrors.name = 'Este campo no puede estar vacío'
  else if ( name.length < 3 ) newErrors.name = 'El nombre es muy corto'
  else if (name.length >30 ) newErrors.name = 'El nombre es muy largo'
  //lastName errors
  if ( !lastName || lastName === '' ) newErrors.lastName = 'Este campo no puede estar vacío'
  else if ( lastName.length < 3 ) newErrors.lastName = 'El apellido es muy corto'
  else if (lastName.length >30 ) newErrors.lastName = 'El apellido es muy largo'
  // email1 errors
  if (!email1 || email1 === '') newErrors.email1 = "El email es requerido";
  else if (!/\S+@\S+\.\S+/.test(email1))newErrors.email1 = "La dirección de correo ingresada es inválida";
  // email2 errors 
  if (!email2 || email2 === '') newErrors.email2 = "El email es requerido";
  else if (!/\S+@\S+\.\S+/.test(email2))newErrors.email2 = "La dirección de correo ingresada es inválida";
  else if (email1 !== email2) newErrors.email2 = "Los mails no coinciden"

  return newErrors
}
  const handleClick = e => {
    e.preventDefault()
    setFinPedido(false);
    const newErrors= findFormErrors()
    if (Object.keys(newErrors).length>0){
      setErrors(newErrors)
      return
    }/* else{
      alert("Thank you for your feedback")
    } */
    
    const order = {
      buyer: { name, lastName, tel, email1, email2 },
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    };
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    if (cart.length === 0) {
      return;
    }

 

    addDoc(ordersCollection, order).then(({ id }) => {
      setCodeOrder(id);
      cart.forEach((item) => {
        const documento = doc(db, "products", item.id);
        updateDoc(documento, { stock: increment(-item.quantity) });
        setFinPedido(true);
        clearCart();
      });
    });
  };

  return (
    <div>
      {finPedido ? (
        <div>
          <h2>{`Muchas gracias por su compra: ${name}. \nLa orden de su pedido es: ${codeOrder}`}</h2>
          <Link className="boton__link" to="/">
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <div>
            <Card.Title>Resumen de la compra</Card.Title>
            {cart.map((product) => (
            <Card border="dark"style={{width:'70%',margin:'20px auto', alignItems:'center' }} >
            <Card.Title>{product.title}</Card.Title>      
            <Card.Text >Precio por unidad: ${product.price}</Card.Text>
            <Card.Text >Cantidad: {product.quantity}</Card.Text>
            <Card.Text >Subtotal: ${product.quantity * product.price}</Card.Text>       
          </Card>
      ))}
          <Card.Title>{`Total de la compra: $${totalPrice()}`}</Card.Title>
          <Card.Title className="m-3">Datos para la compra</Card.Title>
          <Form>
            <Row className="m-3 justify-content-md-center">
              <Form.Group as={Col} lg="3" controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  isInvalid={!!errors.name}
                  placeholder="Ingrese aquí su nombre"
                  onChange={e=>setField('name',e.target.value)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} lg="3" controlId="formGridLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  isInvalid={!!errors.lastName}
                  placeholder="Ingrese su apellido"
                  onChange={e => setField('lastName',e.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="m-3 justify-content-md-center">
              <Form.Group as={Col} lg="6" controlId="formGridTel">
                <Form.Label>Teléfono Celular</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Ingrese su número de teléfono"
                  onChange={e => setField('tel',e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="m-3 justify-content-md-center">
              <Form.Group as={Col} lg="6" controlId="formGridEmail1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  isInvalid={!!errors.email1}
                  type="email"
                  placeholder="Ingrese su Email"
                  onChange={e => setField('email1',e.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.email1}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="m-3 justify-content-md-center">
              <Form.Group as={Col} lg="6" controlId="formGridEmail2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  isInvalid={!!errors.email2}
                  type="email"
                  placeholder="Ingrese nuevamente su Email"
                  onChange={e => setField('email2',e.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.email2}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit"
             
              className="boton__Button"
              onClick={handleClick}>Generar Orden 
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}
