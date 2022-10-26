import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../Footer.css'

export default function Footer(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <footer className="footer"> 
                <img className="footer__logo"src="./Logo_Detail_Garage_invertido.png" alt="logo"/>                 
                <img className="footer__imagen"src="./facebook.png" alt="Facebook"/>
                <img className="footer__imagen"src="./whatsapp.png" alt="Whatsapp"/>
                <img className="footer__imagen"src="./instagram.png" alt="Instagram"/>    
            </footer> 
        </Container>
        </Navbar>
         
        
    )
}