import React from 'react';
import courseAbout from '../data/courseAbout';
import { Accordion } from 'react-bootstrap';
import MainViewCard from '../common/MainVIewCard';

const Main = () => {
    return (
        <div>
            <Accordion alwaysOpen defaultActiveKey="0">
                {courseAbout.map((card, index) => {
                    return (
                        <Accordion.Item key={card.id} eventKey={index.toString()}>
                            <MainViewCard card={card}/>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </div>
    );
}

export default Main;
