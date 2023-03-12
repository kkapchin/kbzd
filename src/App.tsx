import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div>
      APP component
      <Rating />
      <Accordion
        title={'Menu'}
        isCollapsed={true}
      />
      <Accordion
        title={'Contacts'}
        isCollapsed={false}
      />
      <Accordion
        title={'News'}
        isCollapsed={true}
      />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star isSelected={true} />
      <Star isSelected={true} />
      <Star isSelected={true} />
      <Star isSelected={true} />
      <Star isSelected={false} />
    </div>
  );
}

type StarType = {
  isSelected: boolean,
}

function Star({isSelected}: StarType) {
  if(isSelected === true) {
    return <div><b>Star</b></div>;
  }
  return <div>star</div>;
}

export default App;
