import { useEffect } from 'react';
import { useState } from 'react'
import { user } from '../../assets/dataUser';
import { Search } from '../Search/Search';
import s from './UserPage.module.css'

export function UserPage() {


    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState([]);
    
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch( user, {
            method:'POST',
            body: formData
        });
        e.target.reset();
        setMessage('Форма отправлена!');
    }

    async function fetchUsers() {
        const response = await fetch(user);
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    const [queryUser, setQueryUser] = useState('');
    function handleChange(e){
        setQueryUser(e.target.value);
    }
    
    const filteredUsers= user.filter((use)=>{
        return use.name.toLowerCase().includes(queryUser.toLowerCase());
    })

    return (
        <section>
            <div className="container">
                <form onSubmit={handleSubmit} className={s.form} >
                    <input type="text" name='name' placeholder='Введите имя'/>
                    <button type="submit">Отправить</button>
                    <div className={s.message}>{message}</div>
                </form>

                <Search handleChange={handleChange}></Search>
                {
                    filteredUsers.length ? filteredUsers.map((use) => {
                        return (
                        <div className={s.user}>{use.name}</div>
                        )
                    }) : <p className='error'>Ничего не найдено по запросу "{queryUser}"</p>

                }
            </div>
        </section>
    )
}