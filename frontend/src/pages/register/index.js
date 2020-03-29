import React from 'react'

import logoImg from '../../assets/logo.svg'

import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import "./style.css"


export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas
                        a encontrarem casos na sua Ong.
                    </p>
                    <Link className='back-link' to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da Ong"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="Uf" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastar</button>
                </form>
            </div>
        </div>
    )
}