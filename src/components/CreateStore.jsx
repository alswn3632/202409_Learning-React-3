import React from 'react';

const CreateStore = ({storeName, storeItem, onChange, onCreate}) => {
    return (
        <div className='createStore'>
            <input 
            type="text" 
            name='storeName'
            placeholder='이름'
            onChange={onChange}
            value={storeName}
            />
            <input 
            type="text" 
            name='storeItem'
            placeholder='메뉴'
            onChange={onChange}
            value={storeItem}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default CreateStore;