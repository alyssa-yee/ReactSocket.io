import React from 'react';

export default function PlayerList() {
    return (
        <div className = 'PlayerMenu-Div'>
            <div className = 'profile-div'>
                <a href = "http://google.com/"><button className = "duck-btn"><img src = {require ('../images/duck.png')} className = "duck-img" alt ="duck-btn"/></button></a>
            </div>
            <div className= 'name-div'>
                <p1 className = "name-text"> DebuggingDuck </p1>
            </div>
            <div className='awesomechat-div'>
                <div className='chats-div'> 
                </div>
                <div className='playerstatus-div'>
                </div>
            </div>
        </div>
    )
}