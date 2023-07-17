import React, { useState } from 'react';
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const ContainerKalender = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    gap: 15px;
    margin-top: 50px;
`

const Label = styled.label`
    font-size: 24px;
`


const DropdownKalender = ({ handleDateChange }) => {
    const handleDropdownChange = (event) => {
        const selectedDate = event.target.value;
        handleDateChange(selectedDate);
    }

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <ContainerKalender>
            <Label htmlFor="dropdownKalender">Mau Kapan Sayang:</Label>
            <select id="dropdownKalender" onChange={handleDropdownChange}>
                <option value="Hari Ini">Hari Ini</option>
                <option value="Besok">Besok</option>
                <option value="Lusa">Lusa</option>
            </select>
        </ContainerKalender>
    );
}

export default DropdownKalender;
