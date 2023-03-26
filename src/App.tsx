import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Rating from "./components/rating/Rating";

export default function App() {
    return (
        <div>
            APP component
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
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}

