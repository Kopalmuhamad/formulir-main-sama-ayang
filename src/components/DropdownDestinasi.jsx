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
                <option value="Pantai">ATV</option>
                <option value="Gunung">Cafe(isi nama cafenya)</option>
                <option value="Kota">Camp</option>
                <option value="Kota">Flying Fox</option>
                <option value="Kota">Hotel</option>
                <option value="Kota">Villa (tapi bukan Villa Duta)</option>
                <option value="Kota">Dufan</option>
                <option value="Kota">Jungle</option>
                <option value="Kota">Taman Bunga</option>
                <option value="Kota">Safari</option>
            </select>
        </ContainerDestinasi>
    );
}

export default DropdownDestinasi;
