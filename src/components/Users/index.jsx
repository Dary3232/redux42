import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, addUser } from "../../slices/users/usersSlice";


export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch(setUsers(data)); 
        };
        fetchUsers();
    }, []);

    const handleAddUser  = (e) => {
        e.preventDefault();
        const newUser  = { id: Date.now(), name, email }; 
        dispatch(addUser(newUser));
        setName(''); 
        setEmail(''); 
    };

    return (
        <div>
            <h2>Пользователи:</h2>
            {users.length === 0 ? (
                <p>Загрузка пользователей...</p>
            ) : (
                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <div>Name: {user.name}</div>
                            <div>Email: {user.email}</div>
                        </div>
                    ))}
                </div>
            )}
            <h2>Добавить нового пользователя</h2>
            <form onSubmit={handleAddUser}>
                <input 
                    type="text" 
                    placeholder="Имя" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit">Добавить пользователя</button>
            </form>
        </div>
    );
};
