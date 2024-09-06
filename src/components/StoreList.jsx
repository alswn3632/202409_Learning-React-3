import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Store from './Store';
import CreateStore from './CreateStore';

const StoreList = () => {

    // useRef()
    const indexId = useRef(2);
    const [stores, setStores] = useState([
        {
            id : 1,
            storeName : '월미당',
            storeItem : '쌀국수'
        }
    ]);

    const [inputs, setInputs] = useState({storeName:'',storeItem:''});
    const {storeName,storeItem} = inputs;

    const onChange = (e)=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const onCreate = ()=>{
        const store = {
            id : indexId.current,
            storeName : storeName,
            storeItem : storeItem
        };

        setStores(stores.concat(store));

        setInputs({storeName:'',storeItem:''});

        indexId.current += 1;

        console.log(stores);
    }

    const onRemove = (id)=>{
        setStores(stores.filter(store => store.id !== id));
    }


    return (
        <div className='storeList'>
            <CreateStore storeName={storeName} storeItem={storeItem} onChange={onChange} onCreate={onCreate}/>

            {
                stores.map(s=>(
                    <Store store={s} onRemove={onRemove} key={s.id}/>
                ))
            }
        </div>
    );
};

export default StoreList;