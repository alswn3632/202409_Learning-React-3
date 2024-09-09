import React from 'react';

const Store = ({store, onRemove, onToggle}) => {

    // const store = props.store;

    return (
        <div className='store'>
            <h3>
                <span style={{
                    cursor : 'pointer',
                    color : store.active? 'orange' : 'black'
                }} onClick={()=>onToggle(store.id)}>{store.storeName}</span>
                <span>({store.storeItem})</span>
                {/* function으로 매개변수를 전달할 경우 */}
                <button onClick={()=>onRemove(store.id)}>X</button>
            </h3>
        </div>
    );
};

export default Store;