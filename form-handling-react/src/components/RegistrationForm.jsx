import { useState } from "react";

export default function RegistrationForm() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setUsername(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        }
        setErrors('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username) {
            setErrors('User field is required.');
            return;
        }

        if (!email) {
            setErrors('Email field is required.');
            return;
        }

        if (!password) {
            setErrors('Password field is required.');
            return;
        }

        console.log(`Username: ${username} , Email: ${email} , Password: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            {errors && <p style={{ color: 'red' }}>{errors}</p>}
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