import React from 'react';

import onlineIcon from '../../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Iman Xpress Realtime Chat Box<span role="img" aria-label="emoji">💬</span></h1>
      <h2> Chat with User,Rider,Merchent and An Iman xpress Owner. <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Don't miss any chance! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Online chatting users:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;