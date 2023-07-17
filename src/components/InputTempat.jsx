import React from 'react';
import styled from 'styled-components'

const ContainerInput = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    gap: 15px;
`

const Label = styled.label`
    font-size: 24px;
`

const InputTempat = ({ handlePlaceChange }) => {
    const handleInputChange = (event) => {
        const enteredPlace = event.target.value;
        handlePlaceChange(enteredPlace);
    }

    return (
        <ContainerInput>
            <Label htmlFor="inputTempat">Nama Tempat:</Label>
            <input id="inputTempat" type="text" onChange={handleInputChange} />
        </ContainerInput>
    );
}

export default InputTempat;
