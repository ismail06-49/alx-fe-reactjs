import { useState } from "react";

export default function RegistrationForm() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setUsername(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        }
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError('All fields are required.');
            return;
        }

        console.log(`Username: ${username} , Email: ${email} , Password: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                name="name"
                value={username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            /><input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}