import React from 'react'
import ProfileImage from "./ProfileImage"
import User from "./User"
import TimeStamp from "./TimeStamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweetsArray.user.image} />        


      <div className="body">
        <div className="top">          
            <User userData = {props.tweetsArray.user} />
            <TimeStamp time={props.tweetsArray.timestamp} />        
        </div>

        <Message message={props.tweetsArray.message} />

        <Actions />


      </div>      
    </div>
  );
}

export default Tweet;
