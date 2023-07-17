import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DropdownKalender from './components/DropdownKalender';
import DropdownDestinasi from './components/DropdownDestinasi';
import InputTempat from './components/InputTempat';
import Result from './components/Result';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
padding: 100px 0;
gap: 25px;
`;


const App = () => {

  const [selectedDate, setSelectedDate] = useState('Hari Ini');
  const [selectedDestination, setSelectedDestination] = useState('Pantai');
  const [enteredPlace, setEnteredPlace] = useState('');

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  }

  const handleDestinationChange = (selectedDestination) => {
    setSelectedDestination(selectedDestination);
  }

  const handlePlaceChange = (enteredPlace) => {
    setEnteredPlace(enteredPlace);
  }

  return (
    <Container>
      <Navbar />
      <DropdownKalender handleDateChange={handleDateChange} />
      <DropdownDestinasi handleDestinationChange={handleDestinationChange} />
      <InputTempat handlePlaceChange={handlePlaceChange} />
      <Result
        selectedDate={selectedDate}
        selectedDestination={selectedDestination}
        enteredPlace={enteredPlace}
      />
    </Container>
  );
}

export default App;

