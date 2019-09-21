import React from 'react'
import './User.css'
import PropTypes from 'prop-types';


const User = props => {
    return (
        <li id={props.unread}> 
            <div className="left img" > 
                <img src={props.user.profilePic} 
        alt="Profile Pic" /> </div>
            <div className="center"> 
                <div className="heading"> 
                <h3>{props.user.name}</h3>
                <p>{props.user.number}</p>
                </div>
                <div className="message"> 
                <p>{props.user.firstLine}</p>
                </div>
                <div className="time"> {props.user.time} </div>
            </div>
            <div id={props.unreadNumOfSms} class="right">
            <span class="numOfUnreadMessage">{props.user.numbUnread}</span> 
            </div>
        </li>
    ); 
}

User.propTypes = {
    unread: PropTypes.string.isRequired,
    unreadNumOfSms: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired

  };

export default User