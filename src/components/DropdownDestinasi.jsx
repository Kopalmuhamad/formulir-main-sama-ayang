import React from 'react';
import styled from 'styled-components'

const ContainerDestinasi = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    gap: 15px;
`

const Label = styled.label`
    font-size: 24px;
`

const DropdownDestinasi = ({ handleDestinationChange }) => {
    const handleDropdownChange = (event) => {
        const selectedDestination = event.target.value;
        handleDestinationChange(selectedDestination);
    }

    return (
        <ContainerDestinasi>
            <Label htmlFor="dropdownDestinasi">Destinasi:</Label>
            <select id="dropdownDestinasi" onChange={handleDropdownChange}>
                <option value="Cafe(masukin nama cafenya di bawah ya ayang)">Cafe</option>
                <option value="ATV">ATV</option>
                <option value="Camp">Kota</option>
                <option value="Hotel">Hotel</option>
                <option value="Villa(tapi bukan villa duta)">Villa</option>
                <option value="Dufan">Dufan</option>
                <option value="Jungle">Jungle</option>
                <option value="Safari">Safari</option>
            </select>
        </ContainerDestinasi>
    );
}

export default DropdownDestinasi;
