import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './styles.scss'

const Home = () => (
    <div className="home-container">
        <div>
            <h1 className="title">
                Desafio do Capítulo 3,<br /> Bootcamp DevSuperior
            </h1>
        </div>

        <div>
            <p className="home-description">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
               Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
               Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki:
                <span className="email"> antforfigma@gmail.com</span> <br />
            </p>
        </div>
        <div>
            <Link to="/search" >
                <Button text="Começar" />
            </Link>
        </div>
    </div>
);

export default Home;