import React from 'react';
import { Accordion } from 'react-bootstrap';

const MainViewCard = ({card}) => {
    return (
        <>
            <Accordion.Header>{card.title}</Accordion.Header>
            <Accordion.Body>
                {card.body}
            </Accordion.Body>
        </>
    );
}

export default MainViewCard;
