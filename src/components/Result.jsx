import React from 'react';
import styled from 'styled-components'

const ContainerResult = styled.div`
    width: 80%;
    margin: 0 auto;
`

const Result = ({ selectedDate, selectedDestination, enteredPlace }) => {
    return (
        <ContainerResult>
            <h2>Hasil:</h2>
            <p>Tanggal: {selectedDate}</p>
            <p>Destinasi: {selectedDestination}</p>
            <p>Tempat: {enteredPlace}</p>
        </ContainerResult>
    );
}

export default Result;
