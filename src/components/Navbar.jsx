import React from 'react';
import styled from 'styled-components'


const Navbar = () => {

    const ContainerNavbar = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    position: fixed;
    top: 0;
    `


    return (
        <ContainerNavbar>
            <h1>Formulir Main sama Opal</h1>
        </ContainerNavbar>
    );
}

export default Navbar;