import React from 'react'
import { Link } from 'react-router-dom'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import './style.css'

export default function Login() {
    return (
       <div className="login-container">
           <section className="form">
               <img src={logoImg} alt="Be the Hero"/>              
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="Submit">Entrar</button>
                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

           </section>
           <img src={heroesImg} alt=""/>
       </div> 
    )
}