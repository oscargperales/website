import React from 'react';
import CardIcons from './CardIcons';
import './CardItem.css';

const CardItem = (props) => {
  if (!props.item || !props.item.links || props.item.links.length === 0) {
    return null; // or some other fallback component
  }

  return (
    <div className={`card ${props.item.completed ? 'completed' : 'in-progress'}`}>
      <a
        style={{ display: 'flex' }}
        href={props.item.links[0].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{ backgroundImage: `url('${props.item.image}')` }}
          className="card__img"
          alt={props.item.title}
        />
      </a>
      <div className="card__body">
        <h2 className="card__title">
          <strong>{props.item.title}</strong>
        </h2>
        <p className="card__description">{props.item.description}</p>
        <hr className="card__line" />
        <CardIcons item={props.item} />
      </div>
      <div className={`card__completion-state ${props.item.completed ? 'completed' : 'in-progress'}`}>
        {props.item.completed ? 'Completed' : 'In Progress'}
      </div>
    </div>
  );
};

export default CardItem;
