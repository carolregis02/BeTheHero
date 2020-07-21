import React from 'react';
import logoImg from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo"/>
                <span> Bem-Vinda, APAD</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso.
                </Link>
                
            </header>
        </div>
    )
}