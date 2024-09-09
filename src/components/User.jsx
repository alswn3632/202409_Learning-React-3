import React from 'react';
import './createUser.css';

const User = ({user, onRemove, onToggle}) => {

    return (
        <div className='user'>
            <h3>
                <div>
                <span style={{
                    cursor : 'pointer',
                    color : user.active? 'orange' : 'black'
                }} onClick={()=>onToggle(user.id)}>{user.username}</span>
                <span className='spanEmail'>({user.email})</span>
                </div>
                {/* function으로 매개변수를 전달할 경우 */}
                <button onClick={()=>onRemove(user.id)} className='btnDel'>X</button>
            </h3>
        </div>
    );
};

export default User;