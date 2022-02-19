import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TrelloCard = ({card}) => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.title}
                    </Card.Text>
                    <Button onClick={() => window.location.href = card.link} variant="primary">Перейти к карточке в Trello</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TrelloCard;
