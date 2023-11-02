import React from 'react';
import { BsGithub } from 'react-icons/bs'; // Import GitHub icon
import './CardItem.css';

const CardIcons = (props) => {
  const iconStyle = {
    width: '100px', // Set the width to your desired size
    height: '125%', // Set the height to 100% to maintain the icon's aspect ratio
  };

  return (
    <ul className="card__footer">
      {props.item.links.map((link) => (
        <li key={props.item.id + link.name} title={link.name}>
          <a
            className="card__btn"
            href={link.url}
            target={props.item.target}
            rel="noopener noreferrer"
          >
            {link.icon === <BsGithub /> ? (
              <BsGithub style={iconStyle} />
            ) : (
              link.icon
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CardIcons;
