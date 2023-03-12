import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div>
      APP component
      <Rating />
      <Accordion title={'Menu'} />
      <Accordion title={'Contacts'} />
      <Accordion title={'News'} />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
    </div>
  );
}

function Star(props: any) {
  if(props.selected === true) {
    return <div><b>Star</b></div>;
  }
  return <div>star</div>;
}

export default App;
