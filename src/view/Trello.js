import React from 'react';
import coursePracticeData from '../data/coursePracticeData';
import TrelloCard from '../common/TrelloCard'

const Trello = () => {
    return (
        <div>
            {coursePracticeData.map(card => <TrelloCard key={card.id} card={card} />)}
        </div>
    );
}

export default Trello;
