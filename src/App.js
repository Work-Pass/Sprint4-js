import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Corpo1 from './componentes/Corpo/Corpo1';
import ImgPrincipal from './componentes/Corpo/imgPrincipal';
import Corpo2 from './componentes/Corpo/Corpo2';
import Corpo3 from './componentes/Corpo/Corpo3';
import Corpo4 from './componentes/Corpo/Corpo4';
import Login from './componentes/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import GlobalStyle from './GlobalStyle';
import { AppHeader, AppLink, AppLogo } from './AppStyles';

function App() {
    return (
        <>
            <GlobalStyle />
            <AppHeader>
                <Header />
                <ImgPrincipal />
                <Corpo1 />
                <Corpo2 />
                <Corpo3 />
                <Corpo4 />
                <Login />
                <Footer />
            </AppHeader>
        </>
    );
}

export default App;
