import React from 'react';
import User from './User';
import { useRef } from 'react';
import CreateUser from './CreateUser';
import { useState } from 'react';

const UserList = () => {
    // array 랜더링 시 key의 존재 유무에 따라 업데이트,삭제,추가 시 효율적으로 랜더링 됨.
    // => key 값을 넣어주는 것을 권장

    // const users = [
    //     {
    //         id : 1,
    //         username: 'kim',
    //         email: 'ezen1234@naver.com'
    //     },{
    //         id : 2,
    //         username: 'lee',
    //         email: 'lee9852@gmail.com'
    //     },{
    //         id : 3,
    //         username: 'hong',
    //         email: 'honguu@naver.com'
    //     },{
    //         id : 4,
    //         username: 'choi',
    //         email: 'ccooii@naver.com'
    //     },{
    //         id : 5,
    //         username: 'cha',
    //         email: 'ecehea12@gmail.com'
    //     }
    // ]

    const nextId = useRef(6); // 초기값
    const [users, setUsers] = useState([
        {
            id : 1,
            username: 'kim',
            email: 'ezen1234@naver.com',
            active : true
        },{
            id : 2,
            username: 'lee',
            email: 'lee9852@gmail.com',
            active : true
        },{
            id : 3,
            username: 'hong',
            email: 'honguu@naver.com',
            active : false
        },{
            id : 4,
            username: 'choi',
            email: 'ccooii@naver.com',
            active : false
        },{
            id : 5,
            username: 'cha',
            email: 'ecehea12@gmail.com',
            active : false
        }
    ]);

    const [inputs, setInputs] = useState({
        username : '',
        email : ''
    }); // username, email 받는 객체


    // const username = inputs.username;
    // const email = inputs.email;

    // 구조 분해 할당 : 객체의 구조를 분해하여 변수에 할당하는 방법
    const {username,email} = inputs;

    const onChange = (e)=>{
        const {name, value} = e.target;
        // 변경되지 않은 대상값을 공백처리 => 기존값을 유지 -
        setInputs({
            ...inputs, // 기존 inputs 값을 가지고 복사 -
            [name] : value // 현재 변경된 값을 key : value 형태로 set
        });
    }

    const onCreate = ()=>{
        // 값이 추가되면 발생할 함수 나중에 여기서 구현
        const user = {
            id : nextId.current,
            username : username,
            email : email
        };

        // 현재 users에 user를 추가 => concat
        setUsers(users.concat(user)); // 스프레드 연산자도 사용할 수 있지만 concat을 많이 사용함

        // 기존 추가된 inputs 창 초기화
        setInputs({username:'',email:''});
        
        nextId.current += 1; // .current : 현재값을 의미함

        console.log(users); // 추가된 값이 한 텀씩 늦게 나타나는 이유 바로 위 nextId가 useRef여서 재랜더링하지 않기 때문에
    }

    const onRemove = (id)=>{
        // filter : 배열의 항목을 제거하기 위해서 사용
        // filter는 조건에 맞는 값만 배열로 리턴 (반대로 특정 번호가 아닌것을 조건으로 주면 그 요소만 제거해주겠지?)
        // => user.id가 일치하지 않는 요소만 추출하여 새로운 배열로 리턴
        setUsers(users.filter(user => user.id !== id));

    }

    const onToggle = (id)=>{        
        setUsers(
            users.map(user =>(
                user.id === id? 
                {
                    ...user,
                    active : !user.active
                }
                : user
            ))
        );
    }

    return (
        <div className='userList'>
            {/* 컴포넌트에서 데이터를 하위 컴포넌트에게 전달하는 방법 = props */}
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>

            {/* key값으로 객체 내 데이터를 쓸 때 */}
            {
                users.map(u=>(
                    <User user={u} onRemove={onRemove} onToggle={onToggle} key={u.id}/>
                ))
            }
            
            {/* key값으로 인덱스를 사용할 때 */}
            {/* {
                users.map((u,i)=>(
                    <User user={u} key={i}/>
                ))
            } */}
        </div>
    );
};

export default UserList;